# Importing Components

You can import React components created elsewhere into Lab. This is helpful for viewing your Lab components in a different context and for using Lab as an isolated development environment.

To import a component, select the _File > Import Component_ menu item and select a component in your project directory.

![external component](images/detail-external.png)

Once you've successfully imported the component, any changes you make to the imported component's with an external editor will automatically appear in Lab.

*Troubleshooting*

- If a component fails to load, the preview should display an error to help with debugging.
- Make sure components are located within the same root folder as your Lab project or in a subdirectory.
- Make sure any npm dependencies have been installed in your project by running `npm install` in your terminal.
- Make sure your component *DOES NOT* make use of any webpack loaders or other build-specific tools.
- Lab currently only supports standard ECMAScript (ES). Components written in other formats such as TypeScript will need to be converted to ES before importing.

- Next: [Exporting Components](exporting.md)
