# Using Lab with npm

Components built in Lab can be published to npm and imported into other Lab or npm projects.

## Publishing as an npm package

First, change directory to your Lab project and run `npm init -y` if you don't have a `pacakge.json`. Then install `@compositor/lab`, which is the command line version of the Lab application.

```
npm install --save-dev @compositor/lab
```

Now add the two following scripts to your `package.json`.

```js
{
  "name": "new-lab-project",
  "scripts": {
    "prepublish": "lab --pkg -d dist",
    "start": "lab --pkg -wd dist"
  }
}
```

Next, add a `lab.json` field in your `package.json` that points to your Lab config file (often located in your project's root directory).

```js
{
  "name": "new-lab-project",
  "lab": "lab.json",
  "scripts": {
    "prepublish": "lab --pkg -d dist",
    "start": "lab --pkg -wd dist"
  }
}
```

There's one final configuration step, but you don't need to add it until you've created and exported some of your own components.
Use the "main" field in your `package.json` to point towards your project's `index.js` file so that npm will correctly reference your `import` statements.
```js
"main": "dist/index.js"
```

Here is a finished `package.json`:

```js
{
  "name": "new-lab-project",
  "main": "dist/index.js"
  "lab": "lab.json",
  "scripts": {
    "prepublish": "lab --pkg -d dist",
    "start": "lab --pkg -wd dist"
  }
}
```

##### Prepublish

This script uses the Lab CLI to transform `lab.json` into importable components.
It will run _before_ you publish via npm, ensuring that the components are always up to date before uploading.

##### Start

While this script isn't required, it makes developing your project locally much easier by adding a watch flag to automatically keep your components up to date whenever `lab.json` changes.

##### Publishing

Once you're happy with your library you can publish it to npm with the following commands:

```
npm version patch
npm publish
```

#### Installing another Lab project

Use this command to install another lab project:

```
npm install --save project-name
```

See a full repo example [here](https://github.com/c8r/lab/tree/master/examples/npm).

## Importing an npm package

The Lab app also allows you to import components you've installed from npm.

In order to install a package, enter your project's root directory and run `npm install`.
For this example, we'll use [`@compositor/mono`](https://www.npmjs.com/package/@compositor/mono). Install it with `npm install --save @compositor/mono`.

Next, open up the Lab app, navigate to _File > Import npm Package_ and select `@compositor/mono`. The components will now automatically appear in your library!

_Note:_ For now, the Lab app can only import npm packages with a correctly configured `lab` field in their `package.json`.

![Using Compositor Lab to import a component from npm](https://user-images.githubusercontent.com/1424573/32017387-cade2d8a-b983-11e7-900a-90bda586905a.png)

---

- [Installation](installation.md)
- [Getting Started](getting-started.md)
- [Extending components](extending.md)
- [Composite components](composite-components.md)
- [Importing components](importing.md)
- [Exporting components](exporting.md)
