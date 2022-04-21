class FontsLoaderPlugin extends colibri.Plugin {

    constructor() {
        super("fontsloader");
    }

    registerExtensions(reg) {

        reg.addExtension(new colibri.ui.ide.PluginResourceLoaderExtension(async () => {

            console.log("FontsLoader: start loading...");

            await new Promise((resolver, reject) => {

                // Here you configure the fonts loading.
                // Please, take a look to the WebFont documentation here:
                // https://github.com/typekit/webfontloader

                WebFont.load({
                    custom: {
                        families: ["troika", "Caroni"]
                    },
                    active: () => {

                        console.log("FontsLoader: done!");

                        resolver(undefined);
                    }
                });
            });
        }));
    }
}

colibri.Platform.addPlugin(new FontsLoaderPlugin());