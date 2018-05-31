# Yseop Markup Language for VS Code

This extension provides a Yseop Markup Language (YML) basic support for VS Code.

## Features

- Syntax coloring for classic code
- Syntax coloring for text granules and inside text granules
- Snippets:
    * `field`: Yml class attribute
    * `granule`: Text granule
    * `instance`: Object instance
    * `textu`: Textualization attribute
- Code folding
- KB class attributes completion (needs class to be opened at least once)

[comment]: # (The snippet list can be updated using:)
[comment]: # ( jq -c '.[] | {prefix, description}' client/snippets/snippets.json | sort -V | jq -r '.[]' | xargs -d '\n' -n 2 printf '* `%s`: %s\n' )
