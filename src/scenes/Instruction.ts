// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Instruction extends Phaser.Scene {
	constructor() {
		super("Instruction");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {
		// background_menu
		this.add.image(512, 384, "background_menu");

		// mechanicsContainer
		const mechanicsContainer = this.add.image(512, 384, "container_mechanics");
		mechanicsContainer.alpha = 0.5;
		mechanicsContainer.alphaTopLeft = 0.5;
		mechanicsContainer.alphaTopRight = 0.5;
		mechanicsContainer.alphaBottomLeft = 0.5;
		mechanicsContainer.alphaBottomRight = 0.5;

		// mechanicsLabel
		const mechanicsLabel = this.add.image(512, 384, this.instructionName);

		// playBtn
		const playBtn = this.add.image(512, 662, "menu_play");
		playBtn.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 260, 101),
			Phaser.Geom.Rectangle.Contains
		);

		this.mechanicsContainer = mechanicsContainer;
		this.mechanicsLabel = mechanicsLabel;
		this.playBtn = playBtn;

		this.events.emit("scene-awake");
	}

	private mechanicsContainer!: Phaser.GameObjects.Image;
	private mechanicsLabel!: Phaser.GameObjects.Image;
	private playBtn!: Phaser.GameObjects.Image;
	private instructionName: string;

	/* START-USER-CODE */

	// Write your code here

	init(data: { instructionName: string }) {
		this.instructionName = data.instructionName;
	}

	create() {
		this.editorCreate();

		this.playBtn.setPosition(512, 800);
		this.mechanicsContainer.setScale(0.4, 0.4);
		this.mechanicsLabel.setAlpha(0);

		this.playBtn.on("pointerdown", () => {
			switch (this.instructionName) {
				case "mechanicsLevel1":
					this.scene.start("MainGame", {
						wordToGuess: "CONVENIENCE",
						allLetters: "CONVENIENCEGDR",
						nextScene: "DetailerPage1",
					});
					break;
				case "mechanicsLevel2":
					this.scene.start("MainGame", {
						wordToGuess: "COMPLIANCE",
						allLetters: "COMPLIANCEKSDW",
						nextScene: "DetailerPage2",
					});
					break;
				case "mechanicsLevel3":
					this.scene.start("MainGame", {
						wordToGuess: "COST-EFFECTIVE",
						allLetters: "COST-EFFECTIVE",
						nextScene: "DetailerPage3",
					});
					break;
				default:
					this.scene.start("MainGame", {
						wordToGuess: "CONVENIENCE",
						allLetters: "CONVENIENCEGDR",
						nextScene: "DetailerPage1",
					});
			}
		});

		this.tweens.add({
			targets: this.mechanicsContainer,
			scale: 1,
			duration: 900,
			ease: "Back.easeOut",
		});

		this.tweens.add({
			targets: this.mechanicsLabel,
			alpha: 1,
			duration: 1500,
			ease: "Sine.easeOut",
			delay: 300,
		});

		this.tweens.add({
			targets: this.playBtn,
			y: 649,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 600,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
