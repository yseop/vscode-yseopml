# Yseop Markup Language for VS Code

This extension provides a Yseop Markup Language (YML) basic support for VS Code.

## Features

- Syntax coloring for classic code
- Syntax coloring for text granules and inside text granules
- Snippets (`prefix`: Description):
    * `\amount`: Display amount
    * `\beginList`: Static List
    * `\beginQuote`: Text placed between quotes
    * `\beginStyle`: Styled text
      ***or*** Text using a custom style
    * `\beginSynonym`: List of alternatives
    * `bold`: Bold text
    * `\case`: A case in a “switch” statement
    * `\choice`: An alternative in a list of synonyms
    * `complete`: Complete an instance with values
    * `\endOfLine`: Force end of line
    * `field`: Yml class attribute
    * `\foreach`: “For each” loop
      ***or*** “For each” loop with assembly ID
    * `function`: Function
      ***or*** Function with direct return
    * `granule`: Text granule
    * `instance`: Object instance
    * `interface`: Interface
    * `italic`: Italic text
    * `\nextItem`: An item in a static list
    * `\noContraction`: Prevent contraction
    * `\notEmptyString`: Make sure a string is not considered empty
    * `\nounPhrase`: Noun phrase
    * `numeralStyle`: Display style for numbers
    * `\recipientAction`: Recipient verb
      ***or*** Recipient verb with adjective
    * `round`: Number rounding
    * `\senderAction`: Sender verb
      ***or*** Sender verb with adjective
    * `\switch`: Handle values differently
    * `synonyms`: List of alternatives
    * `TextFunction`: Text function
    * `textu`: Textualization attribute
    * `\thirdAction`: Third person verb
    * `\value`: Display a value
    * `\verb`: Verb

![Snippet for textualization Gif.](images/textualization.gif "Snippet for textualization.")

- Code folding
- KB class attributes completion (needs class to be opened at least once)
- Basic type names completion, based on Yseop Engine's model
    * This feature uses the parameter `yseopml.pathToPredefinedObjectsXml` to get the **absolute** path to the `predefinedObjects.xml` file provided with one of the user's Yseop Engine version's.
    * To edit the parameters, use the shortcut `ctrl + ,`.

[comment]: # (The snippet list can be updated using list-snippets.sh.)
