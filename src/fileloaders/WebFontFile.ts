import WebFont from "webfontloader";

// Inspired by the Ourcade demo:
// https://blog.ourcade.co/posts/2020/phaser-3-google-fonts-webfontloader/

export class WebFontFile extends Phaser.Loader.File {

    private _families: string[];

    constructor(loader: Phaser.Loader.LoaderPlugin, families: string[]) {
        super(loader, {
            type: "webfont",
            key: "webfont__" + families.join("-")
        });

        this._families = families;
    }

    load(): void {

        WebFont.load({
            custom: {
                families: this._families
            },
            active: () => {

                this.loader.nextFile(this, true);
            }
        });
    }
}
WebFont.load({});