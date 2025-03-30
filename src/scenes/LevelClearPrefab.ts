// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelClearPrefab extends Phaser.GameObjects.Container {
	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// background
		const background = scene.add.rectangle(0, 0, 1024, 768);
		background.setOrigin(0, 0);
		background.isFilled = true;
		background.fillColor = 0;
		background.fillAlpha = 0.8;
		this.add(background);

		// title
		const title = scene.add.image(512, 344, "game_level_clear");
		this.add(title);

		// nextButton
		const nextButton = scene.add.image(660, 502, "game_next_button");
		nextButton.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 204, 75),
			Phaser.Geom.Rectangle.Contains
		);
		this.add(nextButton);

		// retryButton
		const retryButton = scene.add.image(354, 502, "game_retry_button");
		retryButton.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 203, 75),
			Phaser.Geom.Rectangle.Contains
		);
		this.add(retryButton);

		this.background = background;
		this.title = title;
		this.nextButton = nextButton;
		this.retryButton = retryButton;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.startAction();
		/* END-USER-CTR-CODE */
	}

	private background: Phaser.GameObjects.Rectangle;
	private title: Phaser.GameObjects.Image;
	private nextButton: Phaser.GameObjects.Image;
	private retryButton: Phaser.GameObjects.Image;
	public onRetry!: () => void;
	public onNext!: () => void;

	/* START-USER-CODE */

	private startAction() {
		this.nextButton.on("pointerdown", () => this.onNext());
		this.retryButton.on("pointerdown", () => this.onRetry());
	}

	public show() {
		this.title.setPosition(512, 900);
		this.retryButton.setPosition(354, 900);
		this.nextButton.setPosition(660, 900);
		this.background.alpha = 0;

		this.scene.tweens.add({
			targets: this.background,
			alpha: 0.75,
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
			targets: this.retryButton,
			y: 502,
			duration: 500,
			ease: "Back.Out",
			delay: 500,
		});

		this.scene.tweens.add({
			targets: this.nextButton,
			y: 502,
			duration: 500,
			ease: "Back.Out",
			delay: 800,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
