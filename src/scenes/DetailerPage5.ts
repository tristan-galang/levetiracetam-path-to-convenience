// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DetailerPage5 extends Phaser.Scene {

	constructor() {
		super("DetailerPage5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(512, 384, 1024, 768);
		rectangle_1.isFilled = true;

		// detailerImage2
		const detailerImage2 = this.add.image(762, 355, "detailer_5_asset_1");

		// nextBtn
		const nextBtn = this.add.image(913, 690, "button_next");
		nextBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, 138, 100), Phaser.Geom.Rectangle.Contains);

		// detailerImage1
		const detailerImage1 = this.add.image(285, 355, "detailer_1_asset_2");

		this.detailerImage2 = detailerImage2;
		this.nextBtn = nextBtn;
		this.detailerImage1 = detailerImage1;

		this.events.emit("scene-awake");
	}

	private detailerImage2!: Phaser.GameObjects.Image;
	private nextBtn!: Phaser.GameObjects.Image;
	private detailerImage1!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.detailerImage1.alpha = 0;
		this.detailerImage1.setPosition(
			this.detailerImage1.x - 100,
			this.detailerImage1.y
		);

		this.detailerImage2.alpha = 0;
		this.detailerImage2.setPosition(
			this.detailerImage2.x + 100,
			this.detailerImage2.y
		);

		this.tweens.add({
			targets: this.detailerImage1,
			x: 285,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.tweens.add({
			targets: this.detailerImage2,
			x: 762,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.nextBtn.on("pointerdown", () => this.scene.start("DetailerPage6"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
