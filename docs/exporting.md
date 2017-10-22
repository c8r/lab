
# Exporting Lab Components

Components created in Lab can be exported as static React components for use in a React application.

Click the `File > Export Library` menu item and select a folder to export your components to. Note that any files that are named the same as a component in your library will be overwritten.

## ThemeProviders

Because Lab components make use of a ThemeProvider component, you will also need to use a ThemeProvider in your own application to use Lab components.

Depending on the CSS-in-JS library you export to, importing a ThemeProvider will look like one of the examples below:

[*styled-components*][sc-theme]

```js
import { ThemeProvider } from 'styled-components'
```

[*glamorous*][g-theme]

```js
import { ThemeProvider } from 'glamorous'
```

[*cxs*][cxs-theme]

```js
import ThemeProvider from 'cxs/ThemeProvider'
```

[*fela*][fela-theme]

```js
import { ThemeProvider } from 'react-fela'
```

[*emotion* & *theming*][emotion-theme]

```js
import { ThemeProvider } from 'theming'
```

The theme created in a Lab project is automatically saved as a JSON file named `theme.json`.
Because it‘s a static JSON file, it can be imported in projects using webpack 2 or higher.

```js
import theme from '../theme.json'
```

At the root of your React application, wrap the entire component tree with the ThemeProvider.

```jsx
const App = props => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
)
```

[sc-theme]: https://www.styled-components.com/docs/advanced#theming
[g-theme]: https://glamorous.rocks/advanced/#theming
[cxs-theme]: https://github.com/jxnblk/cxs#theming
[fela-theme]: http://fela.js.org/docs/guides/UsageWithReact.html#component-theming
[emotion-theme]: https://github.com/emotion-js/emotion/blob/master/docs/theming.md


## styled-system

Lab components use [styled-system][system] for thematically controlled style props.
Styled-system allows you to control font-size, margin, padding, color, and more via React props. [Read more][system]

[system]: https://github.com/jxnblk/styled-system

- Next: [Extending components](extending.md)
