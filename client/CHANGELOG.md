# Release Notes

## 1.3.0 (YYYY-MM-DD)

- The parser used by the extension was greatly improved.
- [BETA] When a parsing issue is detected, it is now displayed as a warning in the “Problems” view of VS Code and in the text editor.
  - The new parameter `yseopml.activateParsingProblemsReporting` allows to disable this feature
- [BETA] New feature `Go To Definition` and `Peek Definition`.
  - Only for class attributes and methods
  - Needs to have the defining class opened once first.
  - This feature is not context sensitive yet.

## 1.2.3 (2019-01-03)

- When using autocompletion for class attributes, methods or text methods, the documentation for these symbols is displayed, if any was written.
- Types of elements are visible during autocompletion.

## 1.2.2 (2018-11-27)

- Fix security issue with `event-stream` version 3.3.6. Old version `3.3.4` set instead.
- Add new snippets.

## 1.2.1 (2018-10-31)

- Improve user experience when using CLI commands.

## 1.2.0 (2018-10-31)

- Basic Yseop CLI commands such as `compile`, `batch`, `package`, `test`… can now be used directly as VSCode commands.
  - Uses the new parameter `yseopml.pathToYseopCli`.

## 1.1.1 (2018-10-08)

- Fix settings title.
- Fix syntax highlighting for comments standing within a function's argument list.

## 1.1.0 (2018-06-18)

- Basic type names completion, based on Yseop Engine's model.
  - Uses the new parameter `yseopml.pathToPredefinedObjectsXml`.
- New code snippets: loops, functions, verbs and more. See the “read me” file for list and usage information.

## 1.0.1 (2018-05-31)

- Cleaner code snippets.

## 1.0.0 (2018-05-24)

- Fix KB class attribute completion.
  - Server-side was missing some modules.

## 0.0.3 (2018-05-24)

- Add KB class attributes completion.
  - For this to work, you need to open the class file at least once.

## 0.0.2 (2018-05-14)

- Better class attributes coloring support.
- Better inner Text Granule coloring.

## 0.0.1 (2018-05-02)

- Initial release.
