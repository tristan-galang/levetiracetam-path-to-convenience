// You can write more code here
import Phaser from "phaser";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DetailerHeader extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? -102, y ?? 0);

		// asset_10
		const asset_10 = scene.add.image(102, 0, "Asset 10");
		this.add(asset_10);

		// title
		const title = scene.add.image(98, 2, "detailer_page_1_title");
		this.add(title);

		/* START-USER-CTR-CODE */
		title.setPosition(0, 2);
		title.alpha = 0;
		this.scene.tweens.add({
			targets: title,
			x: 98,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
