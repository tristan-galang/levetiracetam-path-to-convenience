// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DetailerPage1 extends Phaser.Scene {
	constructor() {
		super("DetailerPage1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {
		// rectangle_1
		const rectangle_1 = this.add.rectangle(512, 384, 1024, 768);
		rectangle_1.isFilled = true;

		// detailer_value
		const detailer_value = this.add.image(512, 472, "detailer_1_asset_1");

		// detailerHeader
		const detailerHeader = this.add.image(512, 148, "detailer_1_asset_2");

		// nextBtn
		const nextBtn = this.add.image(913, 690, "button_next");
		nextBtn.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 138, 100),
			Phaser.Geom.Rectangle.Contains
		);

		this.detailer_value = detailer_value;
		this.detailerHeader = detailerHeader;
		this.nextBtn = nextBtn;

		this.events.emit("scene-awake");
	}

	private detailer_value!: Phaser.GameObjects.Image;
	private detailerHeader!: Phaser.GameObjects.Image;
	private nextBtn!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.detailer_value.alpha = 0;
		this.detailer_value.setPosition(
			this.detailer_value.x,
			this.detailer_value.y + 100
		);

		this.detailerHeader.alpha = 0;
		this.detailerHeader.setPosition(
			this.detailerHeader.x,
			this.detailer_value.y - 100
		);

		this.tweens.add({
			targets: this.detailer_value,
			y: 472,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 700,
		});

		this.tweens.add({
			targets: this.detailerHeader,
			y: 148,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.nextBtn.on("pointerdown", () => {
			this.scene.start("MainGame", {
				wordToGuess: "COMPLIANCE",
				allLetters: "COMPLIANCEKSDW",
				nextScene: "DetailerPage2",
			});
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
