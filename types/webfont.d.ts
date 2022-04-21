 declare namespace Phaser.Loader {

    export interface LoaderPlugin {

        /**
         * Loads a webfont file.
         * 
         * If the `config` parameter is not set, then it uses the `key` parameter as the name of the family of a custom font:
         * 
         * ```javascript
         * {
         *  custom: {
         *      families: [ key ]
         *  }
         * }
         * ```
         * 
         * For more documentation about the configuration of the loader, check [github.com/typekit/webfontloader](https://github.com/typekit/webfontloader).
         * 
         * @param key The key of the file.
         * @param config The webfont configuration. If not set, the `key` argument is used as family of a custom font.
         */
        webfont(key: string, config?: WebFont.Config): void;
    }
}