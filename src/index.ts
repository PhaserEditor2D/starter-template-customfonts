import "./fonts/fonts.css";
import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import { WebFontFile } from "./fileloaders/WebFontFile";
import WebFont from "webfontloader";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

       this.scene.start("Preload");
    }
}

// register "webfont" to the loader plugin: `this.load.webfont(key, config)`
Phaser.Loader.LoaderPlugin.prototype.webfont = function (key: string, config?: WebFont.Config) {

	this.addFile(new WebFontFile(this, key, config));
};

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		width: 800,
		height: 600,
		backgroundColor: "#2f2f2f",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, Level]
	});

	game.scene.start("Boot");

});