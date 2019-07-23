# Yseop Markup Language for VS Code

This extension provides support for Yseop Markup Language (YML).

## Features

### Syntax highlighting

-   For common YML code
-   For text granules and inside them

### Parsing error warnings

![Example image for parsing warning](https://raw.githubusercontent.com/yseop/vscode-yseopml/master/images/parsingProblem.png 'Parsing warnings in the “Problems” and editor views.')

### Snippets

#### List (`prefix`: Description)

-   `\amount`: Display amount
-   `\beginList`: Static List
-   `\beginQuote`: Text placed between quotes
-   `\beginStyle`: Styled text
    **_or_** Text using a custom style
-   `\beginSynonym`: List of alternatives
-   `bold`: Bold text
-   `\case`: A case in a “switch” statement
-   `\choice`: An alternative in a list of synonyms
-   `complete`: Complete an instance with values
-   `\endOfLine`: Force end of line
-   `field`: Yml class attribute
-   `\foreach`: “For each” loop
    **_or_** “For each” loop with assembly ID
-   `function`: Function
    **_or_** Function with custom args
    **_or_** Function with direct return
-   `granule`: Text granule
-   `\if`: “If” condition
-   `\if \else`: “If/else” condition
-   `instance`: Object instance
-   `interface`: Interface
-   `italic`: Italic text
-   `\nextItem`: An item in a static list
-   `\noContraction`: Prevent contraction
-   `\notEmptyString`: Make sure a string is not considered empty
-   `\nounPhrase`: Noun phrase
-   `numeralStyle`: Display style for numbers
-   `\recipientAction`: Verb using a second person subject
    **_or_** Verb using a second person subject, with adjective
-   `round`: Number rounding
-   `\senderAction`: Verb using a first person subject
    **_or_** Verb using a first person subject, with adjective
-   `\switch`: Handle values differently
-   `synonyms`: List of alternatives
-   `TextFunction`: Text function
    **_or_** Text function with custom arguments
-   `textu`: Textualization attribute
-   `\thirdAction`: Verb using a third person subject
-   `\value`: Display a value
-   `\verb`: Verb

[comment]: # 'The snippet list can be updated using list-snippets.sh.'

#### Usage

When you start typing a snippet's prefix, the editor should suggest corresponding snippets.

Visual Studio Code uses “tabstops” within snippets in places where code must be written to fill in the blanks. As their name suggest, you can use the tab key to go to the next tabstop.

Some tabstops are associated with a list of predefined values. To use one of them, you can select it using the arrow keys and press `Enter` before using the tab key to proceed as usual if need be.

![Example GIF for snippets](https://raw.githubusercontent.com/yseop/vscode-yseopml/master/images/textualization.gif 'Snippet for textualization.')

### Code folding

### KB class attributes completion

(Needs the class to be opened at least once.)

### Basic type names completion, based on Yseop Engine's model

-   This feature uses the parameter `yseopml.pathToPredefinedObjectsXml` to get the **absolute** path to the `predefinedObjects.xml` file provided with one of the user's Yseop Engine version's.
-   To edit VS Code's settings, use the shortcut `Ctrl + ,` or look for `Preferences: Open Settings` in the command palette.
-   Here, you must add a key / value pair in the [JSON file](https://en.wikipedia.org/wiki/JSON#Example) that holds your custom settings and save: `"yseopml.pathToPredefinedObjectsXml": "/home/USER/…/yseop-engine-X.X.X/predefinedObjects.xml"`
-   You should then see suggestions like `IntegerInterval` or `StringBuffer` when you edit YML code.
