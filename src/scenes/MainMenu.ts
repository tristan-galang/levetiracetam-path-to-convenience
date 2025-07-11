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
		// const startButton = this.add.image(512, 649, "menu_start");
		// startButton.setInteractive(
		// 	new Phaser.Geom.Rectangle(0, 0, 204, 75),
		// 	Phaser.Geom.Rectangle.Contains
		// );

		// level1Btn
		const level1Btn = this.add.image(241, 649, "level1Btn");
		level1Btn.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);

		const level2Btn = this.add.image(512, 649, "level2Btn");
		level2Btn.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);

		const level3Btn = this.add.image(780, 649, "level3Btn");
		level3Btn.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);

		const level2BtnLock = this.add.image(512, 649, "lockIcon");
		const level3BtnLock = this.add.image(780, 649, "lockIcon");

		this.title = title;
		this.level1Btn = level1Btn;
		this.level2Btn = level2Btn;
		this.level3Btn = level3Btn;
		this.level2BtnLock = level2BtnLock;
		this.level3BtnLock = level3BtnLock;
		// this.startButton = startButton;

		this.events.emit("scene-awake");
	}

	private title!: Phaser.GameObjects.Image;
	// private startButton!: Phaser.GameObjects.Image;
	private level1Btn!: Phaser.GameObjects.Image;
	private level2Btn!: Phaser.GameObjects.Image;
	private level3Btn!: Phaser.GameObjects.Image;
	private level2BtnLock!: Phaser.GameObjects.Image;
	private level3BtnLock!: Phaser.GameObjects.Image;

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

		// this.startButton.on("pointerdown", () => {
		// 	this.startSound.play();
		// 	this.scene.start("Instruction");
		// });

		this.level1Btn.on("pointerdown", () => {
			this.startSound.play();
			this.scene.start("Instruction", { instructionName: "mechanicsLevel1" });
		});

		// this.level2Btn.on("pointerdown", () => {
		// 	this.startSound.play();
		// 	// this.scene.start("Instruction", { instructionName: "mechanicsLevel2" });
		// });

		// this.level3Btn.on("pointerdown", () => {
		// 	this.startSound.play();
		// 	// this.scene.start("Instruction", { instructionName: "mechanicsLevel3" });
		// });

		this.level1Btn.setPosition(241, 900);
		this.level2Btn.setPosition(512, 900);
		this.level3Btn.setPosition(780, 900);
		this.level2BtnLock.setAlpha(0);
		this.level3BtnLock.setAlpha(0);

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
			targets: this.level1Btn,
			y: 649,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 500,
		});

		this.tweens.add({
			targets: this.level2Btn,
			y: 649,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 700,
		});

		this.tweens.add({
			targets: this.level2BtnLock,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 1500,
		});

		this.tweens.add({
			targets: this.level3Btn,
			y: 649,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 800,
		});

		this.tweens.add({
			targets: this.level3BtnLock,
			alpha: 1,
			duration: 1000,
			ease: "Sine.easeOut",
			delay: 1700,
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
