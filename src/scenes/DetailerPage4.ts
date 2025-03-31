// You can write more code here

/* START OF COMPILED CODE */

import DetailerHeader from "../../public/assets/DetailerHeader";
import HomeButton from "./HomeButton";
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

		// detailer_value
		const detailer_value = this.add.image(511, 384, "Asset 29");

		// detailerHeader
		const detailerHeader = new DetailerHeader(this, 409, 47);
		this.add.existing(detailerHeader);

		// homeButton
		const homeButton = new HomeButton(this, 69, 700);
		this.add.existing(homeButton);

		// prevBtn
		const prevBtn = this.add.image(914, 700, "detailer_previous_button");
		prevBtn.setInteractive(new Phaser.Geom.Rectangle(0, 0, 38, 48), Phaser.Geom.Rectangle.Contains);

		// homeButton (prefab fields)
		homeButton.isDark = true;

		this.detailer_value = detailer_value;
		this.homeButton = homeButton;
		this.prevBtn = prevBtn;

		this.events.emit("scene-awake");
	}

	private detailer_value!: Phaser.GameObjects.Image;
	private homeButton!: HomeButton;
	private prevBtn!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.homeButton.makeDark();

		this.detailer_value.alpha = 0;
		this.detailer_value.setPosition(
			this.detailer_value.x,
			this.detailer_value.y + 100
		);

		this.tweens.add({
			targets: this.detailer_value,
			y: 384,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
		});

		this.prevBtn.on("pointerdown", () => this.scene.start("DetailerPage3"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
