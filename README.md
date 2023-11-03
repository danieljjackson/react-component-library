# React Component Library

## Install

```shell
$ npm install @dan-jackson/react-component-library
```

## Import Components
Once the `npm` package has been installed, a component can be imported into the React project from the `react-component-library`.

```javascript
import { Button } from '@dan-jackson/react-component-library'
```

To import multiple components, the import statement can be updated with additional components:

```javascript
import { Button, Link, Heading } from '@dan-jackson/react-component-library'
```

## Components
Here is a list of components available within the `react-component-library` package and their `props`.

### Heading

```javascript
import { Heading } from '@dan-jackson/react-component-library'

const Foo = () => {
  return (
    <Heading>Label</Heading>
  )
}
```

The Heading component is used to render `<h1>` to `<h6>` headings within your application. By default, the Heading will render a `<h1>` unless we pass a value into the `level` prop.

```javascript
<Heading level={1}>H1</Heading>
<Heading level={2}>H1</Heading>
<Heading level={3}>H1</Heading>
<Heading level={4}>H1</Heading>
<Heading level={5}>H1</Heading>
<Heading level={6}>H1</Heading>
```

### Button

```javascript
import { Button } from '@dan-jackson/react-component-library'

const Foo = () => {
  return (
    <Button>Label</Button>
  )
}
```

This will render as a HTML Button element:

```html
<button type="button">Label</button>
```

The `type` attribute will default to `button` but we can override this. If the Button requires a `submit` type, use the `type` prop:

```javascript
<Button type="submit">Label</Button>
```

#### Calling Methods
The Button component has an `onClick` prop we can use to call methods/functions within our components.

```javascript
import { Button } from '@dan-jackson/react-component-library'

const Foo = () => {

  // Function we want to call on the Button click
  const sayHello = () => {
    alert("Hello, World")
  }

  return (
    <Button onClick={sayHello}>Label</Button>
  )
}
```

#### Render Button as a Link
Buttons can open link `URLs` for internal and external pages. The Button component uses a `to` prop to pass the URL required. If the component has a value passed within the `to` prop, the Button will render as a link.

It is worth noting that this will use the `Link` component within the `react-component-library`.

```javascript
import { Button } from '@dan-jackson/react-component-library'

const Foo = () => {

  return (
    <>
      <Button to="https://www.example.com">External Link</Button>
      <Button to="/internal/">Internal Link</Button>
    </>
  )
}
```

This will render as:

```html
<a href="https://www.example.com" role="button" rel="noopener noreferrer">External Link</a>
<a href="/internal/" role="button">Internal Link</a>
```

### Link

```javascript
import { Link } from '@dan-jackson/react-component-library'

const Foo = () => {
  return (
    <>
      <Link to="https://www.example.com">External Link</Link>
      <Link to="/internal/">Internal Link</Link>
    </>
  )
}
```

As with the Button component, we can use the Link component itself to render a simple hyperlink within the application. URLs should be passed into the `to` prop and this can either be as an external or internal link.

```html
<a href="https://www.example.com" rel="noopener noreferrer">External Link</a>
<a href="/internal/">Internal Link</a>
```

Should the link need to open a new browser tab/window when clicked, the `openAsTab` prop can be used. This is a `boolean` so will set the value to `true` and the `target` attribute will then be set on the link.

```javascript
import { Link } from '@dan-jackson/react-component-library'

const Foo = () => {
  return (
    <>
      <Link to="https://www.example.com" openAsTab>External Link</Link>
      <Link to="/internal/" openAsTab>Internal Link</Link>
    </>
  )
}
```

This will render:


```html
<a href="https://www.example.com" rel="noopener noreferrer" target="blank">External Link</a>
<a href="/internal/" target="blank">Internal Link</a>
```