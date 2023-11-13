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

### Adding Classes to Components
In React, classes are added to components using the `className` prop. This has been added to all components in the `react-component-library`.

```javascript
<Heading className="font-bold heading-example">Label</Heading>
```

This will render as a `class` attribute:

```html
<h1 class="font-bold heading-example">Label</h1>
```

### Adding ID attributes to Components
As with classes, we can apply `id` attributes to components using the `id` prop.

```javascript
<Heading id="labelOne">Label</Heading>
```

### Adding the Style attribute to Components
Although classes are the preferred method to style components, we can also pass values into the `style` prop.

```javascript
<Heading style={{ border: `1px solid #000`, background: `#fff` }}>Label</Heading>
```

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

### Image
Images can be added to our application using the `<Image />` component. It is recommended that all images have the `alt` attribute and use the `height` and `width` props.

```javascript
import { Image } from '@dan-jackson/react-component-library'

const Foo = () => {
  return (
    <Image src="images/example.jpg" height={100} width={100} alt="This is an example of how to add the alt text." />
  )
}
```

As with the other components, the `className`, `style`, and `id` props can be used. The `<Image />` component also allows the `srcset` prop/attribute to be used.

To `lazy load` and image, which is recommended for those images that are below the fold, use the `isLazyLoading` prop.

```javascript
<Image src="images/example.jpg" height={100} width={100} alt="This is an example of how to add the alt text." isLazyLoading />
```

Should the image need to open a link/URL when clicked, the `to` prop can be used allowing a link to be rendered around the image. The `openAsTab` prop is optionally applied to open the link in a new browser window/tab.

```javascript
<Image to="https://www.example.com" src="images/example.jpg" height={100} width={100} alt="This is an example of how to add the alt text." isLazyLoading openAsTab />
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

#### Adding Styles to the Button
Styling is provided by the `styled-components` library. We can add the following styling to the `Button` component:

```javascript
{/* Set the text and/or hover color */}
<Button color="#eee">Click here</Button>
<Button colorHover="#000">Click here</Button>
{/* Set the background and/or hover color */}
<Button backgroundColor="#000">Click here</Button>
<Button backgroundColorHover="#eee">Click here</Button>

{/* Set the padding, this will default to 1rem if no value is passed */}
<Button padding="2rem">Click here</Button>
```

### Link
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