class FontsLoaderPlugin extends colibri.Plugin {

    constructor() {
        super("fontsloader");
    }

    registerExtensions(reg) {

        reg.addExtension(new colibri.ui.ide.PluginResourceLoaderExtension(async () => {

            console.log("FontsLoader: start loading...");

            await new Promise((resolver, reject) => {

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