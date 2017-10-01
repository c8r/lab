
# Importing Components

A React component created outside of Lab can be imported to Lab.
This is helpful for viewing your Lab components in the context
of others, and for using Lab as an isolated development environment.

To import a component, select the `File > Import Component` menu item.
Navigate to a component within the same folder as your project to select a component for importing.

![external component](images/detail-external.png)

Once a component is loaded into your project, you can make changes to the source file in your own text editor,
and changes will be automatically reloaded in Lab.

*Troubleshooting*

- If a component fails to load, the preview should display an error to help with debugging.
- Make sure components are located within the same root folder as your Lab project or in a subdirectory.
- Make sure any npm dependencies have been installed in your project by running `npm install` in your terminal.
- Make sure your component *DOES NOT* make use of any webpack loaders or other build-specific tools.
- Lab currently only supports standard ECMAScript (ES). Components written in other formats such as TypeScript will need to be converted to ES before importing.

- Next: [Exporting Components](exporting.md)
