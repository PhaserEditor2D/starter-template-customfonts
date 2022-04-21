# Project template with custom web fonts

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/PhaserEditor2D/starter-template-webpack)

A project template for loading web fonts into a Phaser game and the Phaser Editor 2D's Scene Editor.

## First steps

This project requires [Node.js](https://nodejs.org) and [NPM.js](https://www.npmjs.com). It is recommended that you learn the basics of [Webpack.js](https://www/webpack.js.org).

* Install dependencies:

    ```
    npm install
    ```

* Run the development server:

    ```
    npm start
    ```

    Open the browser at `http://127.0.0.1:8080`.

* Make a production build:

    ```
    npm run build
    ```

    It is generated in the `/dist` folder.

## Run the editor

* You can run the editor using the `editor` NPM script, defined in the `package.json` file:

    ```bash
    $ npm install
    $ npm run editor
    ```

* If you are in a remote environment (like the Gitpod.io IDE), then run the editor like this:

    ```bash
    $ npm run editor-remote
    ```

* If you want to see all the editor options, run:

    ```bash
    $ npx phasereditor2d-launcher -help
    ```

* If Phaser Editor 2D Core is globally installed, you can run:

    ```bash
    $ PhaserEditor2D -project .
    ```

## WebFont loading

This project uses the [WebFontLoader](https://github.com/typekit/webfontloader) library for loading web fonts.

There are two parts in this project:

1- A plugin for loading the fonts into the editor.
2- The code for loading the fonts into the game.

### Loading the fonts into the editor

It is important to load the same fonts into the editor so you can see the texts as they are rendered in the game.

For doing this, I created the `fontsloader` plugin, in the `phasereditor2d-plugins` folder. Look in the `phasereditor2d.config.json` file I configured the plugins path to `phasereditor2d-plugins`.

Here I'm not going to explain how the Phaser Editor 2D plugins work. But you can take a look at the files in the plugin. What it does is: 

* Load the styles with the font definitions (`phasereditor2d-plugins/fontsloader/`). It `@import` the same `fonts.css` file of the game.

* Load the WebFontLoader library (`phasereditor2d-plugins/fontsloader/lib/webfontloader-1.6.28.js`).

* Uses the WebFontLoader library for loading the font.

For loading new fonts, you should add them in the `phasereditor2d-plugins/fontsloader/main.js` file.

### Loading the fonts in the game

I load the fonts in the game using a standard method, that is compatible with any Phaser game.

For loading new fonts, you have to:

* Copy the fonts to the `src/fonts` folder (in case you are loading it from the project and not from the Internet).
* Update the `fonts/fonts.css` file, with the new `@font-face`.
* Finally, use the Phaser Loader for loading the fonts:

    ```javascript
    this.load.webfont("myNewFont", {
        custom: {
            families: ["NewFont"]
        }
    });
    ```

    The `webfont(key, config)` method receives a `key` and a `config` parameter. The `config` parameter is the same of the [WebFontLoader](https://github.com/typekit/webfontloader) library.

    This method is added to the Phaser Loader in the `index.ts` file.


## General Phaser Editor 2D considerations

### Excluding files from the project

There are a lot of files present in the project that are not relevant to Phaser Editor 2D. For example, the whole `node_modules` folder should be excluded from the editor's project.

The `/.skip` file lists the folders and files to exclude from the editor's project. 

[Learn more about resource filtering in Phaser Editor 2D](https://help.phasereditor2d.com/v3/misc/resources-filtering.html)

### Setting the root folder for the game's assets

The `/static` folder contains the assets (images, audio, atlases) used by the game. Webpack copies it to the distribution folder and makes it available as a root path. For example, `http://127.0.0.1:8080/assets` points to the `/static/assets` folder.

By default, Phaser Editor 2D uses the project's root as the start path for the assets. You can change it by creating an empty `publicroot` file. That is the case of the `/static/publicroot` file, which allows adding files to the Asset Pack file (`/static/assets/asset-pack.json`) using correct URLs.

### Asset Pack content hash

Webpack is configured to include the content hash of a file defined in an asset pack editor:

* For loading a pack file in code, import it as a resource:
    ```javascript
    import assetPackUrl from "../static/assets/asset-pack.json";
    ...
    this.load.pack("pack1", assetPackUrl);
    ```
    Webpack will add the `asset-pack.json` file into the distribution files, in the folder `dist/asset-packs/`.

* Because Webpack automatically imports the pack files, those are excluded in the **CopyPlugin** configuration. By convention, name the pack files like this `[any name]-pack.json`.

* The NPM `build` script calls the `phaser-asset-pack-hashing` tool. It parses all pack files in the `dist/` folder and transforms the internal URL, adding the content-hash to the query string. It also parses files referenced by the pack. For example, a multi-atlas file is parsed and the name of the image's file will be changed to use a content-hash.

Learn more about the [phaser-asset-pack-hashing](https://www.npmjs.com/package/phaser-asset-pack-hashing) tool.

### Coding

The `/src` folder contains all the TypeScript code, including the scene and user component files, in addition to the Phaser Editor 2D compilers output.

We recommend using Visual Studio Code for editing the code files.

In many tutorials about Phaser Editor 2D, the JavaScript files are loaded using the Asset Pack editor. When using Webpack this is not needed. Just use the Asset Pack editor for loading the art assets.

### Scene and User Components configuration

The Scenes and User Components are configured to compile to TypeScript ES modules. Also, the compilers auto-import the classes used in the generated code.

## Author

Created and maintained by the Phaser Editor 2D team.

