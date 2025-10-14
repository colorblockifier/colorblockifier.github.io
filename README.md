# colorblockifier
Sort Minecraft blocks by color

[**colorblockifier.github.io**](https://colorblockifier.github.io)
> All processing is done locally in your browser without uploading to a server, and no programs need to be installed on your computer!
> 
> This web app extracts the textures from a Minecraft version JAR you choose from your computer, to stay compliant with Minecraft's TOS by not redistributing the textures.

### Credits:
- Made by: [comfysquirrel](https://github.com/comfysquirrel)
- Colorscheme: [Solarized Dark](https://ethanschoonover.com/solarized/) by Ethan Schoonover
- Library for handling ZIP files: [zip.js](https://gildas-lormeau.github.io/zip.js/)

<sub>This project is not affiliated with Minecraft or Mojang.</sub>

## Developing

- Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Install dependencies with `npm install` (or `pnpm install` or `yarn`)
- Start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
