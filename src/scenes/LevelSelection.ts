// You can write more code here

/* START OF COMPILED CODE */

import HomeButton from "./HomeButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelSelection extends Phaser.Scene {
	constructor() {
		super("LevelSelection");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {
		// background_level_selection
		this.add.image(512, 384, "background_level_selection");

		// mechanics
		const mechanics = this.add.image(512, 349, "mechanics_container");

		// footer
		this.add.image(512, 701, "footer");

		// homeButton
		const homeButton = new HomeButton(this, 70, 700);
		this.add.existing(homeButton);

		// header
		this.add.image(512, 78, "header");

		// level1Button
		const level1Button = this.add.image(261, 630, "level_1_button");
		level1Button.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);

		// level2Button
		const level2Button = this.add.image(508, 630, "level_2_button");
		level2Button.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);

		// level3Button
		const level3Button = this.add.image(748, 630, "level_3_button");
		level3Button.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);

		// homeButton (prefab fields)
		homeButton.isDark = true;

		this.mechanics = mechanics;
		this.level1Button = level1Button;
		this.level2Button = level2Button;
		this.level3Button = level3Button;

		this.events.emit("scene-awake");
	}

	private mechanics!: Phaser.GameObjects.Image;
	private level1Button!: Phaser.GameObjects.Image;
	private level2Button!: Phaser.GameObjects.Image;
	private level3Button!: Phaser.GameObjects.Image;

	/* START-USER-CODE */
	private levelOneSound!: Phaser.Sound.BaseSound;
	private levelTwoSound!: Phaser.Sound.BaseSound;
	private levelThreeSound!: Phaser.Sound.BaseSound;

	// Write your code here

	create() {
		this.editorCreate();

		this.levelOneSound = this.sound.add("sfx-level-1", { volume: 0.8 });
		this.levelTwoSound = this.sound.add("sfx-level-2", { volume: 0.8 });
		this.levelThreeSound = this.sound.add("sfx-level-3", { volume: 0.8 });

		this.level1Button.on("pointerdown", () => {
			this.levelOneSound.play();
			this.scene.start("LevelOne");
		});
		this.level2Button.on("pointerdown", () => {
			this.levelTwoSound.play();
			this.scene.start("LevelTwo");
		});
		this.level3Button.on("pointerdown", () => {
			this.levelThreeSound.play();
			this.scene.start("LevelThree");
		});

		this.mechanics.setScale(0.4, 0.4);
		this.mechanics.alpha = 0;

		this.level1Button.setPosition(this.level1Button.x, 1000);
		this.level2Button.setPosition(this.level2Button.x, 1000);
		this.level3Button.setPosition(this.level3Button.x, 1000);

		this.tweens.add({
			targets: this.mechanics,
			scale: 1,
			alpha: 1,
			duration: 700,
			ease: "Ease.easeOut",
		});

		this.tweens.add({
			targets: this.level1Button,
			y: 630,
			duration: 700,
			ease: "Back.easeOut",
			delay: 500,
		});

		this.tweens.add({
			targets: this.level2Button,
			y: 630,
			duration: 700,
			ease: "Back.easeOut",
			delay: 700,
		});

		this.tweens.add({
			targets: this.level3Button,
			y: 630,
			duration: 700,
			ease: "Back.easeOut",
			delay: 1000,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
