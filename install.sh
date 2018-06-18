#! /usr/bin/env bash

#####
# Dumb script to package the extension and then to install it into VSCode.
#####

if ! type npm code &> /dev/null
then
    echo "$(basename "$0"): Please make sure “npm” and “code” are installed." >&2
    exit 1
fi

npm run package || exit

f=$(
    find client/ -type f -name 'vscode-yseopml-*.vsix' -print0 | sort -zV | tail -zn 1
)

if [ -z "$f" ]
then
    echo "$(basename "$0"): Could not find extension file." >&2
    exit 2
fi

if ! [ -r "$f" ]
then
    echo "$(basename "$0"): Could not read “$f”. Note: Maybe your versions of “sort” or “tail” are too old." >&2
    exit 3
fi

echo "Installing “$f”..."

if code --install-extension "$f"
then
    echo "$(basename "$0"): Launching VS Code…"
    code &
fi
