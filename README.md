# Viewer 3d Lit Loader

This is a simple loading component to show an amazing cube. It is a simple example to show how to use the `LitElement` to create a web component. The 3d model is created using the `three.js` library.

## How to use

To use this component, you need to import the `viewer-3d-lit-loader` with `npm`:
    
```bash
npm install viewer-3d-lit-loader
```

Then, you can use the component in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Viewer 3d Lit Loader</title>
        <script type="module" src="node_modules/viewer-3d-lit-loader/viewer-3d-lit-loader.js"></script>
    </head>
    <body>
        <viewer-3d-lit-loader
            width="400"
            height="400"
            color="0xffffff"    
        ></viewer-3d-lit-loader>
    </body>
</html>
```

## Properties

The component has the following properties:

- `width`: The width of the component. Default is `400`.
- `height`: The height of the component. Default is `400`.
- `color`: The hex color of the cube. Default is `0xffffff`.

## Reference

- [LitElement](https://lit.dev/docs/components/)
- [Three.js](https://threejs.org/)