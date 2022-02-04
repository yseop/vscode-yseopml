# Release Notes

## 1.16.0 (2022-02-04)

-   Parser improvements. The following expressions are now correctly parsed:
    -   attributes at the end of `Condition` instances;
    -   attributes of `Rule` instances;
    -   order one conditions of `whatever` expressions.
-   yseopml files now have an icon for both dark and light themes (requires VSCode ≥ 1.64)
-   [BREAKING CHANGE] Files with `.yml` extension are not considered as being yseopml files for syntax coloring anymore to avoid collision with YAML files.
    -   They can be set as being yseopml files by [selecting the appropriate language mode](https://code.visualstudio.com/docs/languages/overview#_changing-the-language-for-the-selected-file).

## 1.15.0 (2021-09-17)

-   Greatly improved the performances of current parser, as well as the kind of expressions it can parse such as
    -   `modify`
    -   `whatever`
    -   `exists`
    -   `noExists`
    -   static instances of `Condition`
    -   `as`
    -   etc.
-   [BREAKING CHANGE] Semicolons are now mandatory where they were just optional before.

## 1.14.1 (2021-06-30)

-   [FIXED] _Format Document_ now works correctly.

## 1.14.0 (2021-06-04)

-   _Go To Definition_ now works for class names too.
-   _Go To Definition_ is now able to go in the `predefinedObject.xml` file set by the user with the option `yseopml.pathToPredefinedObjectsXml`.
-   Display a warning when a local variable or a function argument is unused.

## 1.13.0 (2021-02-12)

-   Replaced command Yseop Info with Yseop Config.
-   New “Yseop Libs” command which installs the YML library required by your project.
-   New contextual menu entry on `*.yma` files allowing to launch `yseop manager deploy` using Yseop&nbsp;CLI.
-   Fixed a minor syntax highlighting issue with the `mod` operator.
-   Replaced the `debug` snippet with a new one, named `logAttr`, which is more explicit and whose output is easier to read.

## 1.12.1 (2021-01-21)

-   Improved syntax highlighting for:
    -   text granules
    -   tags in text granules
    -   function calls nested in another function’s call
    -   flow control keywords vs. function calls

## 1.12.0 (2020-12-10)

-   Functions and object instances are now foldable.
-   Functions now display their cognitive complexity.
    A high score means that the function is probably hard to understand and may be hard to maintain.
    A developer should consider refactoring such functions if possible.

## 1.11.0 (2020-09-03)

-   [BETA] New document-formatting feature able to perform basic cleanup on your YML files.
    This feature can be deactivated using the Visual Studio Code settings.

## 1.10.0 (2020-07-17)

-   Named inline object instances now appear (like “normal” instances already do) in lists provided for autocompletion, via hover, etc.

## 1.9.1 (2020-06-02)

-   Fix a blocking issue with suggest lists causing the extension to freeze.

## 1.9.0 (2020-05-07)

-   New outline feature. This allows to see at a glance elements such as enums, classes, methods or object instances and easily navigate to them.
-   Improve hover display. It now displays element's signature instead of not displaying at all or displaying “Not Documented”.
-   Improve parsing for:
    -   `switch` expressions;
    -   attribute's value when the value is a list of HashMap entries;
    -   attribute's value when the value is a `ConstList`.

## 1.8.0 (2020-03-23)

-   New option `kaoFiles` allowing to set a list of kao files that will be used when initializing workspace's project parsing. This option is recommended for workspaces containing multiple related sub-projects, such as a library and a test project for this library.
-   Improve parsing for:
    -   multi type argument or local variable declaration;
    -   enums with attributes
-   Enum members are now available in suggest lists, hover and go to declaration.

## 1.7.0 (2020-01-06)

-   Fix a parsing issue that occurs when editing the value of attributes named `domains`, `domainsLevel2` and `documentation`;
-   Fix `*.kao` files parsing at startup (“F” and “M” types differentiation);
-   Improved parsing performance;
-   Improved parsing for:
    -   arithmetic expressions;
    -   text granules;
    -   rulesets and Rule objects;
    -   expressions using the `mod` operator;
    -   expressions with the `noDefault` keyword.

## 1.6.5 (2019-12-19)

-   Remove unused option `maxNumberOfProblems`;
-   New option `ymlParsingIssueSeverityLevel` allowing to set the way parsing problems are displayed;
-   Improved parsing for:
    -   `forall` instructions;
    -   `(condition).check()`-like expressions;
    -   `rename` instructions.
-   Improved location provider. `Go To Implementation` using `ctrl+F12` on a method name gives the list of the locations where the method is implemented. See [this link](https://code.visualstudio.com/docs/editor/editingevolved#_go-to-implementation) for more information.
-   Improved project files parsing. Fewer irrelevant files are parsed. The new behavior is as follows:
    -   parse the files mentioned in the `project.kao` file;
    -   parse `*.yclass`, `*.yobject` and `*.ycomplete` files;
    -   avoid parsing the files in `.generated-yml/` directory, wherever this directory stands.

_Note that parsing a whole project may take some time, depending on the project’s size. During the project parsing, suggestion lists won't be available._

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
