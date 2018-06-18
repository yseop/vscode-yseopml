#! /usr/bin/env bash

FILE='client/snippets/snippets.json'

if ! type 'jq' &> /dev/null
then
    echo "$(basename "$0"): Error: Please make sure “jq” is installed. It is a JSON parser that can be obtained through most Linux package repositories or on https://stedolan.github.io/jq/." >&2
    exit 1
fi

if ! type 'awk' &> /dev/null
then
    echo "$(basename "$0"): Error: Please make sure an implementation of AWK is installed." >&2
    exit 2
fi

# Go to where the script is.
cd "$(
    dirname "$(readlink -f -- "$0")"
)" || exit

# Find prefixes and descriptions,
# sort that by prefixes,
# get the values,
# print that in Markdown,
# replace duplicated prefixes with “or”.
jq -c '.[] | {prefix, description}' "$FILE" | sort -dfV \
        | jq -r '.[]' | xargs -d '\n' -n 2 printf '* `%s`: %s\n' \
        | awk -F ' *: *' '
    {
        if(p && $1 == p) {
            $1 = "  ***or***"
            print
            $1 = p
        } else {
            print
        }
    }

    {
        p = $1
    }
'
