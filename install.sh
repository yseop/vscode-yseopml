#! /usr/bin/env bash

#####
# Dumb script to package the extension and then to install it into VSCode.
#####

npm run package || exit

f=$(
    find client/ -type f -name 'vscode-yseopml-*.vsix' -print0 | sort -zV | tail -zn 1
)

if [ -z "$f" ]
then
    echo "Could not find extension file." >&2
    exit 1
fi

if ! [ -r "$f" ]
then
    echo "Could not read “$f”. Note: Maybe your versions of “sort” or “tail” are too old." >&2
    exit 2
fi

echo "Installing “$f”..."

code --install-extension "$f"
