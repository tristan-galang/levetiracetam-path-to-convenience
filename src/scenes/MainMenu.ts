// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {
	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {
		// background_home
		const background_home = this.add.image(0, 0, "background_home");
		background_home.setOrigin(0, 0);

		// title
		const title = this.add.image(512, 362, "label_title");

		// startButton
		const startButton = this.add.image(512, 649, "menu_start");
		startButton.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);

		this.title = title;
		this.startButton = startButton;

		this.events.emit("scene-awake");
	}

	private title!: Phaser.GameObjects.Image;
	private startButton!: Phaser.GameObjects.Image;

	/* START-USER-CODE */
	private bgm!: Phaser.Sound.BaseSound;
	private startSound!: Phaser.Sound.BaseSound;

	// Write your code here

	create() {
		this.editorCreate();
		this.sound.stopAll();

		this.bgm = this.sound.add("bgm-levi", { volume: 0.5, loop: true });
		this.startSound = this.sound.add("sfx-btn-start", { volume: 0.8 });
		this.bgm.play();

		this.startButton.on("pointerdown", () => {
			this.startSound.play();
			this.scene.start("Instruction");
		});

		this.startButton.setPosition(512, 800);
		this.title.setScale(0.4, 0.4);
		this.title.alpha = 0;

		this.tweens.add({
			targets: this.title,
			scale: 1,
			alpha: 1,
			duration: 900,
			ease: "Sine.easeOut",
			delay: 300,
		});

		this.tweens.add({
			targets: this.startButton,
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
