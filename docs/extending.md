# Extending Components

Primitive style components can be extended when you want to take a component's existing styles and change them slightly. One example would be creating a variation of a `Button` component called `BigButton`.

To extend a component, first click on the base component and then click the _Extend Component_ button in the lower part of the edit panel.

![extend component button](images/extend-button.png)

Give your new extended component a unique name and click _Create Component_.

![extend component form](images/extend-name.png)

The new extended component will inherit any styles (such as font size and padding) set on its base component, but you can also override any these inherited styles.

![extended component detail](images/extend-detail.png)

![extended component library view](images/extend-library.png)

Extended components are **linked** to their base component, which means any changes made to the `Button` will be inherited by the extended component. This example shows how the `BigButton` component has inherited adjustments to the `Button` component's `border radius`.

![extended component library view](images/extend-base-edits.png)


- Next: [Composite Components](composite-components.md)
