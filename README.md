# Viewer 3d Lit Loader

[DEMO](https://salvatorelaspata.github.io/viewer-3d-lit-loader/)
[NPM](https://www.npmjs.com/package/viewer-3d-lit-loader)

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
        <script type="module" src="./node_modules/viewer-3d-lit-loader/dist/viewer-3d-lit-loader.js"></script>
    </head>
    <body>
        <viewer-3d-lit-loader
            width="400"
            height="400"
            lightColor="0xffffff"
            cubeColor="0x000000"
            bgColor="0x000000"
        ></viewer-3d-lit-loader>
    </body>
</html>
```

## Properties

The component has the following properties:

- `width`: The width of the component. Default is `400`.
- `height`: The height of the component. Default is `400`.
- `lightColor`: (optional) The hex color of the light. Default is `#ffffff`.
- `cubeColor`: (optional) The hex color of the cube. Default is `#000000`.
- `bgColor`: (optional) The hex color of the background. Default is `#000000`. (1)
- `noAnimation`: (optional) The cube does not rotate. Default is `false`.
- `bgTransparent`: (optional) The background is transparent. Default is `false`. (1)
- `fullContent`: (optional) The component takes the full width and height of the parent. Default is `false`. (2)

>  Note(1): If you want to use the `bgTransparent` the `bgColor` properties are ignored.

> Note(2): If you want to use the `fullContent` the `width` and `height` properties are ignored.

## Reference

- [LitElement](https://lit.dev/docs/components/)
- [Three.js](https://threejs.org/)