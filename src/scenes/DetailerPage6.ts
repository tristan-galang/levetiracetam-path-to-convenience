// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DetailerPage6 extends Phaser.Scene {

	constructor() {
		super("DetailerPage6");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(512, 384, 1024, 768);
		rectangle_1.isFilled = true;

		// detailerImage2
		const detailerImage2 = this.add.image(512, 469, "detailer_6_asset_1");

		// detailerImage1
		const detailerImage1 = this.add.image(512, 159, "detailer_1_asset_2");

		// btnHome
		const btnHome = this.add.image(99, 690, "button_home");
		btnHome.setInteractive(new Phaser.Geom.Rectangle(0, 0, 138, 100), Phaser.Geom.Rectangle.Contains);

		this.detailerImage2 = detailerImage2;
		this.detailerImage1 = detailerImage1;
		this.btnHome = btnHome;

		this.events.emit("scene-awake");
	}

	private detailerImage2!: Phaser.GameObjects.Image;
	private detailerImage1!: Phaser.GameObjects.Image;
	private btnHome!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.detailerImage1.alpha = 0;
		this.detailerImage1.setPosition(
			this.detailerImage1.x,
			this.detailerImage1.y + 100
		);

		this.detailerImage2.alpha = 0;
		this.detailerImage2.setPosition(
			this.detailerImage2.x,
			this.detailerImage2.y + 100
		);

		this.tweens.add({
			targets: this.detailerImage1,
			y: 159,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.tweens.add({
			targets: this.detailerImage2,
			y: 469,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 500,
		});

		this.btnHome.on("pointerdown", () => this.scene.start("MainMenu"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
