// You can write more code here
import Phaser from "phaser";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameOverPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 102, y ?? 109);

		// background
		const background = scene.add.rectangle(0, 0, 1024, 768);
		background.setOrigin(0, 0);
		background.isFilled = true;
		background.fillColor = 0;
		background.fillAlpha = 0.8;
		this.add(background);

		// title
		const title = scene.add.image(512, 280, "game_over");
		this.add(title);

		// game_retry_button
		const game_retry_button = scene.add.image(354, 502, "game_retry_button");
		game_retry_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 203, 75), Phaser.Geom.Rectangle.Contains);
		this.add(game_retry_button);

		// game_skip_button
		const game_skip_button = scene.add.image(660, 502, "game_skip_button");
		game_skip_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 204, 75), Phaser.Geom.Rectangle.Contains);
		this.add(game_skip_button);

		this.background = background;
		this.title = title;
		this.game_retry_button = game_retry_button;
		this.game_skip_button = game_skip_button;

		/* START-USER-CTR-CODE */
		this.game_retry_button.on("pointerdown", () => this.onRetry());
		this.game_skip_button.on("pointerdown", () => this.onSkip());
		/* END-USER-CTR-CODE */
	}

	private background: Phaser.GameObjects.Rectangle;
	private title: Phaser.GameObjects.Image;
	private game_retry_button: Phaser.GameObjects.Image;
	private game_skip_button: Phaser.GameObjects.Image;
	public onRetry!: () => void;
	public onSkip!: () => void;

	/* START-USER-CODE */
	public show() {
		this.title.setPosition(512, 900);
		this.game_retry_button.setPosition(354, 900);
		this.game_skip_button.setPosition(660, 900);
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
			targets: this.game_retry_button,
			y: 502,
			duration: 500,
			ease: "Back.Out",
			delay: 500,
		});

		this.scene.tweens.add({
			targets: this.game_skip_button,
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
