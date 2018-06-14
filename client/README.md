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
![Snippet for textualization Gif.](images/textualization.gif "Snippet for textualization.")

- Code folding
- KB class attributes completion (needs class to be opened at least once)
- Basic type names completion, based on Yseop Engine's model
    * This feature uses the parameter `yseopml.pathToPredefinedObjectsXml` to get the **absolute** path to the `predefinedObjects.xml` file provided with one of the user's Yseop Engine version's.
    * To edit the parameters, use the shortcut `ctrl + ,`.

[comment]: # (The snippet list can be updated using:)
[comment]: # ( jq -c '.[] | {prefix, description}' client/snippets/snippets.json | sort -V | jq -r '.[]' | xargs -d '\n' -n 2 printf '* `%s`: %s\n' )
[comment]: # (jq is a JSON parser that can be obtained through most Linux package repositories or on https://stedolan.github.io/jq/.)
