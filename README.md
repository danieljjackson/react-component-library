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