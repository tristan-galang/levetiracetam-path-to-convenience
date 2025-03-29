
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Hero {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Hero extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame);

		this.blendMode = Phaser.BlendModes.SCREEN;
		this.scaleX = 0.8;
		this.scaleY = 0.8;
		scene.physics.add.existing(this, false);
		this.body.drag.x = 1000;
		this.body.drag.y = 1000;
		this.body.useDamping = true;
		this.body.collideWorldBounds = true;
		this.body.setOffset(6.5, 6.5);
		this.body.setSize(30, 30, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
