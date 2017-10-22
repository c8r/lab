
# Using Lab with npm

Components built in Lab can be published to npm and imported into other Lab or npm projects.

## Publishing as an npm package

First, change directory to your Lab project.
Then install the `@compositor/lab` which is the command line version of the Lab app.

```
npm install --save-dev @compositor/lab
```

Next add the two following scripts to your `package.json` (or run `npm init -y` if you don't yet have that file).

```js
"scripts": {
  "prepublish": "lab --pkg -d dist",
  "start": "lab --pkg -wd dist"
}
```

Lastly for configuring the `package.json`, you will need to add a reference to `lab.json`.
This points to the location of the Lab config file in your project.
It's often found at the root of your project.

```
"lab": "lab.json"
```

##### Prepublish

This script uses the Lab cli to transform `lab.json` into importable components.
It will also run _before_ you publish via npm, ensuring that the components are always up to date before uploading.

##### Start

This script isn't required, but uses a watch flag to automatically keep the components up to date when `lab.json` changes.
It's nice for development if you're referencing this project locally.

##### Reference modules

Lastly, we need to reference the built version of the components so that npm knows to reference those on import:

```js
"main": "dist/index.js"
```

### Publishing

Once you're happy with your library you can publish to npm with the following steps:

```
npm version patch
npm publish
```

And install another project with:

```
npm install --save project-name
```

See a full repo example [here](https://github.com/c8r/lab/tree/master/examples/npm).

## Importing an npm package

The Lab app also allows you to import components that you've installed from npm.

In order to install a package, change directory to your project's root and run `npm install`.
For this example, we'll use [`lab-with-npm`](https://github.com/c8r/lab/tree/master/examples/npm) `npm install --save lab-with-npm`.

Next, open up the Lab app and navigate to `File > Import npm Package` and select `lab-with-npm`.
You will then see the components automatically added to your library.
For this example, you will see a `Button` component show up.

_Note:_ For now, only projects that specify a `lab.json` file can be imported.

![Using Compositor Lab to import a component from npm](https://user-images.githubusercontent.com/1424573/31863762-90251f3a-b70f-11e7-90e6-5bb667598828.png)

---

- [Installation](installation.md)
- [Getting Started](getting-started.md)
- [Extending components](extending.md)
- [Composite components](composite-components.md)
- [Importing components](importing.md)
- [Exporting components](exporting.md)
