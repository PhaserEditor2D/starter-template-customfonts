
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnPointerDownScript } from "@phasereditor2d/scripts-core";
import { PushActionScript } from "@phasereditor2d/scripts-simple-animations";
import { OnAwakeScript } from "@phasereditor2d/scripts-core";
import { FadeActionScript } from "@phasereditor2d/scripts-simple-animations";
import { DurationConfigComp } from "@phasereditor2d/scripts-simple-animations";
import { MoveInSceneActionScript } from "@phasereditor2d/scripts-simple-animations";
import { DelayConfigComp } from "@phasereditor2d/scripts-simple-animations";
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
		const fufuSuperDino = this.add.image(496, 336, "FufuSuperDino");

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(fufuSuperDino);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(fufuSuperDino);

		// fadeActionScript
		const fadeActionScript = new FadeActionScript(onAwakeScript);

		// text
		const text = this.add.text(729, 331, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser Editor 2D\nWebpack + TypeScript";
		text.setStyle({ "align": "center", "color": "#8ee391ff", "fontFamily": "caroni", "fontSize": "3em" });

		// onAwakeScript_3
		const onAwakeScript_3 = new OnAwakeScript(text);

		// moveInSceneActionScript_2
		const moveInSceneActionScript_2 = new MoveInSceneActionScript(onAwakeScript_3);

		// text_1
		const text_1 = this.add.text(666, 244, "", {});
		text_1.text = "Phaser 3";
		text_1.setStyle({ "color": "#48ece3ff", "fontFamily": "troika", "fontSize": "32px" });

		// onAwakeScript_2
		const onAwakeScript_2 = new OnAwakeScript(text_1);

		// moveInSceneActionScript_1
		const moveInSceneActionScript_1 = new MoveInSceneActionScript(onAwakeScript_2);

		// text_2
		const text_2 = this.add.text(636, 385, "", {});
		text_2.tintTopLeft = 9342974;
		text_2.tintBottomLeft = 5216507;
		text_2.tintBottomRight = 11170801;
		text_2.text = "FontsLoader";
		text_2.setStyle({ "color": "#a6a5f4ff", "fontFamily": "troika", "fontSize": "32px" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(text_2);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript_1);

		// fadeActionScript (prefab fields)
		fadeActionScript.fadeDirection = "FadeIn";

		// fadeActionScript (components)
		const fadeActionScriptDurationConfigComp = new DurationConfigComp(fadeActionScript);
		fadeActionScriptDurationConfigComp.duration = 10000;

		// moveInSceneActionScript_2 (prefab fields)
		moveInSceneActionScript_2.from = "RIGHT";

		// moveInSceneActionScript_2 (components)
		const moveInSceneActionScript_2DelayConfigComp = new DelayConfigComp(moveInSceneActionScript_2);
		moveInSceneActionScript_2DelayConfigComp.delay = 1300;
		const moveInSceneActionScript_2DurationConfigComp = new DurationConfigComp(moveInSceneActionScript_2);
		moveInSceneActionScript_2DurationConfigComp.duration = 450;

		// moveInSceneActionScript_1 (prefab fields)
		moveInSceneActionScript_1.from = "RIGHT";

		// moveInSceneActionScript_1 (components)
		const moveInSceneActionScript_1DelayConfigComp = new DelayConfigComp(moveInSceneActionScript_1);
		moveInSceneActionScript_1DelayConfigComp.delay = 1000;
		const moveInSceneActionScript_1DurationConfigComp = new DurationConfigComp(moveInSceneActionScript_1);
		moveInSceneActionScript_1DurationConfigComp.duration = 450;

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "RIGHT";

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDelayConfigComp = new DelayConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDelayConfigComp.delay = 1600;
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 450;

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
