# Release Log

**0.3.0 - 13th November 2023**
+ Image component added allowing images to also be rendered within a link using the Link component.
+ Card component added.
+ `styled-components` package version `6.1.1` installed as a `devDependency`.
+ Default CSS styling added to the `Button` component with the option to pass `backgroundColor` and `color` options as props. Hover state styling props also added with `backgroundColorHover` and `colorHover`.

**0.2.6 - 6th November 2023**
+ [Fix] - prevent the `rel` attribute from being rendered in a link if no external URL is used.
+ Added the `style` and `id` props to the `Button`, `Link` and `Heading` components.
+ classNames prop syntax updated to use the spread operator.

**0.2.5 - 3rd November 2023**
+ `@babel/preset-react` devDependency npm package bumped from `7.18.6` to `7.22.15`
+ `rollup-plugin-css-only` devDependency npm package bumped from `4.3.0` to `4.5.0` 

**0.2.4 - 3rd November 2023**
+ README file updated with references to adding classes to components.
+ [Fix] - the class attribute does not render in the component if no class value(s) is/are passed to the component.

**0.2.3 - 3rd November 2023**
+ README file updates with guides to using the components and props.
+ Release log Markdown file added.
+ [Fix] - classes not being rendered correctly in all components and only rendering the expression.