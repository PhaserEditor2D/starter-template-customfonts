import WebFont from "webfontloader";

export class WebFontFile extends Phaser.Loader.File {

    private _config?: WebFont.Config;

    constructor(loader: Phaser.Loader.LoaderPlugin, key: string, config?: WebFont.Config) {
        super(loader, {
            type: "webfont",
            key: key
        });

        this._config = config;
    }

    load(): void {

        const config: WebFont.Config = {};

        if (this._config) {

            Object.assign(config, this._config);

        } else {

            config.custom = {
                families: [this.key]
            };
        }

        config.active = () => this.loader.nextFile(this, true);
        config.inactive = () => this.loader.nextFile(this, false);

        WebFont.load(config);
    }
}