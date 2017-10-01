
# Extending Components

Primitive style components can be extended when you want to take a component's existing styles and change them slightly, for example, making a BigButton variation of a Button component.

To extend a component, click on the base component and click the *Extend Component* button in the lower part of the edit panel.

![extend component button](images/extend-button.png)

Give your new extended component a unique name and click *Create Component*.

![extend component form](images/extend-name.png)

The new extended component will inherit any styles set on its base component.
Edit any styles you'd like to override such as font size and padding.

![extended component detail](images/extend-detail.png)

![extended component library view](images/extend-library.png)

Extended components are linked to their base component, which means
that any changes made to the Button component in this example
will also be inherited by the extended component.

In this example, the border radius was adjusted on the Button component,
and the BigButton component inherited the new border radius.

![extended component library view](images/extend-base-edits.png)


- Next: [Composite Components](composite-components.md)
