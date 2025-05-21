// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DetailerPage4 extends Phaser.Scene {

	constructor() {
		super("DetailerPage4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(512, 384, 1024, 768);
		rectangle_1.isFilled = true;

		// nextBtn
		const nextBtn = this.add.image(913, 690, "button_next");
		nextBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, 138, 100), Phaser.Geom.Rectangle.Contains);

		// detailerImage1
		const detailerImage1 = this.add.image(512, 55, "detailer_4_asset_1");

		// detailerImage2
		const detailerImage2 = this.add.image(285, 384, "detailer_4_asset_2");

		// detailerImage3
		const detailerImage3 = this.add.image(734, 384, "detailer_4_asset_3");

		this.nextBtn = nextBtn;
		this.detailerImage1 = detailerImage1;
		this.detailerImage2 = detailerImage2;
		this.detailerImage3 = detailerImage3;

		this.events.emit("scene-awake");
	}

	private nextBtn!: Phaser.GameObjects.Image;
	private detailerImage1!: Phaser.GameObjects.Image;
	private detailerImage2!: Phaser.GameObjects.Image;
	private detailerImage3!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.detailerImage1.alpha = 0;
		this.detailerImage1.setPosition(
			this.detailerImage1.x,
			this.detailerImage1.y - 100
		);

		this.detailerImage2.alpha = 0;
		this.detailerImage2.setPosition(
			this.detailerImage2.x - 100,
			this.detailerImage2.y
		);

		this.detailerImage3.alpha = 0;
		this.detailerImage3.setPosition(
			this.detailerImage3.x + 100,
			this.detailerImage3.y
		);

		this.tweens.add({
			targets: this.detailerImage1,
			y: 55,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.tweens.add({
			targets: this.detailerImage2,
			x: 285,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.tweens.add({
			targets: this.detailerImage3,
			x: 762,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.nextBtn.on("pointerdown", () => this.scene.start("DetailerPage5"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
