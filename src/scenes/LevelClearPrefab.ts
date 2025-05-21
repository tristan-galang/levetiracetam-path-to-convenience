// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelClearPrefab extends Phaser.GameObjects.Container {
	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// background
		const background = scene.add.image(512, 384, "background_menu");
		this.add(background);

		// title
		const title = scene.add.image(512, 344, "label_thank_you");
		this.add(title);

		// nextButton
		const nextButton = scene.add.image(911, 690, "button_next");
		nextButton.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);
		this.add(nextButton);

		this.background = background;
		this.title = title;
		this.nextButton = nextButton;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.startAction();
		/* END-USER-CTR-CODE */
	}

	private background: Phaser.GameObjects.Image;
	private title: Phaser.GameObjects.Image;
	private nextButton: Phaser.GameObjects.Image;
	public onNext!: () => void;

	/* START-USER-CODE */

	private startAction() {
		this.nextButton.on("pointerdown", () => this.onNext());
	}

	public show() {
		this.title.setPosition(512, 900);
		this.nextButton.setPosition(911, 900);
		this.background.alpha = 0;

		this.scene.tweens.add({
			targets: this.background,
			alpha: 1,
			duration: 500,
			ease: "Sine.easeInOut",
		});

		this.scene.tweens.add({
			targets: this.title,
			y: 280,
			duration: 500,
			ease: "Back.Out",
			delay: 300,
		});

		this.scene.tweens.add({
			targets: this.nextButton,
			y: 690,
			duration: 500,
			ease: "Back.Out",
			delay: 800,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
