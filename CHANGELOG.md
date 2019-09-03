# Release Notes

## 1.6.5 (YYYY-MM-DD)

-   Remove unused option `maxNumberOfProblems`;
-   New option `ymlParsingIssueSeverityLevel` allowing to set the way parsing problems are displayed;
-   Improved project files parsing. Fewer irrelevant files are parsed. The new behavior is as follows:
    -   parse the files mentioned in the `project.kao` file;
    -   parse `*.yclass`, `*.yobject` and `*.ycomplete` files;
    -   avoid parsing the files in `.generated-yml/` directory, wherever this directory stands.
-   Improved parsing for:
    -   `forall` instructions;
    -   `(condition).check()`-like expressions;
    -   `rename` instructions.

## 1.6.4 (2019-07-31)

-   Improved parsing for:
    -   Hashmap keys;
    -   `switchExpr` and `switchExprExclusive` instructions;
    -   `applyCollection` and `applyCollectionOn` instructions;
    -   YML identifiers;
    -   `foreach`, `for` and `while` instructions can be used with only one instruction without using parenthesis.

## 1.6.3 (2019-07-23)

-   Improved parsing for:
    -   function or method optional argument list ending with a comma;
    -   function or method argument with alternative types, like `TypeA || TypeB myArg`;
    -   function or method having a `Function` object as an argument;
    -   `*.kao` files containing file name declarations;
    -   `as` instruction;
    -   `applyCollection` using the `__operation` operator;
    -   YML identifiers.

## 1.6.2 (2019-07-15)

-   Fix security issue with `lodash` version 4.17.11. New version `4.17.14` set instead.
-   Display a method’s documentation when hovering over its name.

## 1.6.1 (2019-07-02)

-   Fix build and dependencies issues.

## 1.6.0 (2019-06-26)

-   Fix security issue with `js-yaml` version 3.13.0. New version `3.13.1` set instead.
-   Parse all the YML files in the whole workspace at startup.
    -   The new parameter `yseopml.parseAllProjectFilesAtStartup` allows to disable this feature.

## 1.5.0 (2019-03-20)

-   Fix syntax highlighting for keywords `local`, `args`, `Function` and `break`.
-   Improved completion from Yseop Engine's model. More elements are available such as:
    -   functions' names;
    -   text tags;
    -   methods;
    -   attributes.
-   Hovering over an element displays its documentation if possible.
-   Object identifers having subparts − like `Namespace:Type::methodName` − have all of their subparts proposed in the completions list.
-   Parsing problems are now displayed as `Error` instead of `Warning`.
-   Parsing supports `try / catch` instruction and `forAll` loops.

## 1.4.0 (2019-03-05)

-   [BETA] Local variables and arguments are suggested when using autocompletion in functions.
    -   Variables declared within “for” loops, as well as those declared using the arrow operator (`--> local …`), are not handled yet.

## 1.3.0 (2019-02-25)

-   Turned `if` statements into a snippet, providing better indentation and syntax. (thanks to @agueguen-yseop)
-   The parser used by the extension was greatly improved.
-   [BETA] When a parsing issue is detected, it is now displayed as a warning in the “Problems” view of VS Code and in the text editor.
    -   The new parameter `yseopml.activateParsingProblemsReporting` allows to disable this feature
-   [BETA] New feature `Go To Definition` and `Peek Definition`.
    -   Only for class attributes and methods.
    -   Needs to have the defining class opened once first.

## 1.2.3 (2019-01-03)

-   When using autocompletion for class attributes, methods or text methods, the documentation for these symbols is displayed, if any was written.
-   Types of elements are visible during autocompletion.

## 1.2.2 (2018-11-27)

-   Fix security issue with `event-stream` version 3.3.6. Old version `3.3.4` set instead.
-   Add new snippets.

## 1.2.1 (2018-10-31)

-   Improve user experience when using CLI commands.

## 1.2.0 (2018-10-31)

-   Basic Yseop CLI commands such as `compile`, `batch`, `package`, `test`… can now be used directly as VSCode commands.
    -   Uses the new parameter `yseopml.pathToYseopCli`.

## 1.1.1 (2018-10-08)

-   Fix settings title.
-   Fix syntax highlighting for comments standing within a function's argument list.

## 1.1.0 (2018-06-18)

-   Basic type names completion, based on Yseop Engine's model.
    -   Uses the new parameter `yseopml.pathToPredefinedObjectsXml`.
-   New code snippets: loops, functions, verbs and more. See the “read me” file for list and usage information.

## 1.0.1 (2018-05-31)

-   Cleaner code snippets.

## 1.0.0 (2018-05-24)

-   Fix KB class attribute completion.
    -   Server-side was missing some modules.

## 0.0.3 (2018-05-24)

-   Add KB class attributes completion.
    -   For this to work, you need to open the class file at least once.

## 0.0.2 (2018-05-14)

-   Better class attributes coloring support.
-   Better inner Text Granule coloring.

## 0.0.1 (2018-05-02)

-   Initial release.
