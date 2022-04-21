
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PushOnClick from "../components/PushOnClick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fufuSuperDino
		const fufuSuperDino = this.add.image(309, 300, "FufuSuperDino");

		// text
		const text = this.add.text(541.8333333333334, 295, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser Editor 2D\nWebpack + TypeScript";
		text.setStyle({ "align": "center", "color": "#8ee391ff", "fontFamily": "caroni", "fontSize": "3em" });

		// text_1
		const text_1 = this.add.text(479.33333333333337, 208, "", {});
		text_1.text = "Phaser 3";
		text_1.setStyle({ "color": "#48ece3ff", "fontFamily": "troika", "fontSize": "32px" });

		// text_2
		const text_2 = this.add.text(448.83333333333337, 349, "", {});
		text_2.tintTopLeft = 9342974;
		text_2.tintBottomLeft = 5216507;
		text_2.tintBottomRight = 11170801;
		text_2.text = "FontsLoader";
		text_2.setStyle({ "color": "#a6a5f4ff", "fontFamily": "troika", "fontSize": "32px" });

		// fufuSuperDino (components)
		new PushOnClick(fufuSuperDino);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
