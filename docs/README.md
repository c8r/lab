
# Compositor Lab

Lab is a new type of design tool that allows you to create production ready React components and better integrate with developer tooling to speed up design and development workflows, reduce the effort involved in handoff, reduce the amount of QA cycles needed, and move your design closer to the metal.

## Getting Started

To get started choose a folder for a new project, where Lab will save a `lab.json` and `theme.json` file.
We recommend you keep this folder under source control, such as git.
Lab will automatically save changes made in the app, and by making use of source control, you'll keep a history of changes and make collaborating with others easier.

Once you've got a new project open,
click the *Theme* tab at the top to set global styles for typography, color, and layout.

Lab helps keep your UI visually consistent by following front end development best practices and adhering to constraint-based scales.
This helps keep elements properly aligned and creates a visual rhythm throughout your user interface.


## Components

Next, click on the *Components* tab to view the library of UI components.

    >> You'll see an blank slate

Click the Add button in the upper right to create a new component.
Choose one of the built-in templates to start creating a component.
Give your new component a unique name. We recommend keeping it simple to start with, e.g. Button instead of PrimaryActionButton.

Once you've created the component, you should see a minimally styled version, along with the style panel on the right.

Try adjusting the styles on the right and creating a component that fits in with your visual style.

Once you've got some basic styles set, you'll want to test the component out with different states to make sure it works.

React uses *props* to pass values into a component from the parent.
At the bottom of the right panel, you'll see a section called *Example Props*.
In the first code editor, try adding the following:

```
{
  children: 'Hello'
}
```

The syntax here is a plain JavaScript object. This object is passed into the component, similar to adding attributes to an HTML element.

If this we're using JSX syntax, it would look like the following:

```
<Button children='hello' />
```

The `children` prop is Reacts way of handling composition.
By passing a string as children into the component, you've set the text inside the component.

Next, below the code editor, click the Add Example button.
In the new editor box, add another child prop, but this time add a longer string of text.

```
Well howdy there partner
```

You can now switch between these two examples to see how your component responds in different situations.

<!--
- customizing style (object)
- importing
- exporting - ThemeProvider
- Using theme.json in custom components
- Using styled system
-->
