# Icons

## Guidance and suggestions for using icons

Icons are supported in three ways:

1. Icons exported as React components (SVG icons).
2. With the `SvgIcon` component, a React wrapper for custom SVG icons.

## Basic Usage

### Icon (direct use)

Import using one of these two options:

    ```js
    // Good
    import Caret from 'components/icons/Caret';

    // Bad
    import { Caret } from 'components/icons';
    ```

#### Also Provided

The direct icon component will also provide additional properties accessible via the imported component. For example;

-   `Component.displayName` => is delivered in the `${displayName}SvgIcon` format
-   `Component.ckName` => The direct name of the component (`A`, `Bullet`, `Caret`, etc)
-   `Component.Svg` => The source SVG code for the icon

_The safest is Option 1 but Option 2 can yield the best developer experience._

## SvgIcon

If you need a custom SVG icon you can use the SvgIcon wrapper. The component allows for children to start with the first SVG child or to be an SVG itself. This component extends the native `<svg>` element:

-   It comes with built-in accessibility.
-   SVG elements should be scaled for a 24x24px viewport, so the resulting icon can be used as is, or included as a child for other components that use icons. (This can be customized with the viewBox attribute).
-   By default, the component inherits the current color. Optionally, you can apply a custom fill color using the `fill` prop.

Either of these implementations is valid.

_When an `svg` is provided as the first child the props will be inherited into the rendered icon._

```jsx
function BulletIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="4" />
            </svg>
        </SvgIcon>
    );
}
```

```jsx
function BulletIcon(props) {
    return (
        <SvgIcon {...props}>
            <circle cx="4" cy="4" r="4" />
        </SvgIcon>
    );
}
```

## Props

| Prop name   | Type             | Default                      | Description                                                                                |
| ----------- | ---------------- | ---------------------------- | ------------------------------------------------------------------------------------------ |
| `children`  | node             | null                         | Node passed into the SVG element.                                                          |
| `component` | elementType      | 'svg'                        | The component used for the root node. Either a string to use a DOM element or a component. |
| `fill`      | string           | 'inherit'                    | Applies a fill to the SVG element.                                                         |
| `size`      | string or number | undefined                    | Sets the height and width of the SVG.                                                      |
| `title`     | string           | ''                           | Provides a human-readable title for the element that contains it.                          |
| `viewBox`   | string           | '0 0 24 24'                  | Allows you to redefine what the coordinates without units mean inside an SVG element.      |
| `xmlns`     | string           | 'http://www.w3.org/2000/svg' | The declared namespace for the SVG.                                                        |
