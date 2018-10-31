#! /usr/bin/env bash

set -e

cd "$(dirname "$(readlink -f -- "$0")")"

declare -r deps=(
    git
    jq
    npm
)
for one_dep in "${deps[@]}"
do
    if ! type -f "$one_dep" &> /dev/null
    then
        printf 'Error: Make sure %s is installed.\n' "$one_dep" >&2
        exit 1
    fi
done

CHANGELOG='client/CHANGELOG.md'

cat << _MSG_

  Note that the local Git repository will be cleaned.
  Make sure you do not have important uncommitted changes.

_MSG_

read -p $'Version number?\n> ' version
version=$(tr -cd 'a-zA-Z0-9.' <<< "$version")
: ${version:?Invalid or empty version number.}
declare -r version

printf 'Starting release process with version = %s.\n' "$version"

declare -r RELEASE_BRANCH=release/"${version:?}"

git clean -fdx
git reset --hard
git checkout -b "$RELEASE_BRANCH" origin/develop

today=$(date '+%Y-%m-%d')
changes=$(
    sed -i "s/YYYY-MM-DD/${today:?}/gw /dev/stdout" "$CHANGELOG"
)

if [ -z "$changes" ]
then
    printf 'Could not set the date in %s. Make sure you have the “YYYY-MM-DD” pattern there.\n' "$CHANGELOG" >&2
    exit 2
fi

printf 'Edited %s: %s\n' "$CHANGELOG" "$changes"

for file in {client,server,.}/package.json
do
    tmp=$(
        jq ".version = \"${version:?}\"" < "$file"
    )
    printf '%s\n' "${tmp:?}" > "$file"
done

printf 'Version numbers OK.\n'

npm run package

git add .
git commit -m "chore(release): version ${version:?}"
git push origin "$RELEASE_BRANCH"

cat << _MSG_

========================================================================

  The branch ${RELEASE_BRANCH} has been pushed to origin.
  Open, review and validate a pull request to merge it into master.
  
  Once this is done, run the following commands to tag the new release:
  
    git tag "v${version}" origin/master
    git push origin "refs/tags/v${version:?}"

  Finally, go to the VSCode marketplace to update the “.vsix” file.

_MSG_
