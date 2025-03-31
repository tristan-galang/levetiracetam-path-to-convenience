// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HomeButton extends Phaser.GameObjects.Container {
	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -13);

		// buttonDark
		const buttonDark = scene.add.image(0, 0, "home_button_dark");
		this.add(buttonDark);

		// buttonLight
		const buttonLight = scene.add.image(0, 0, "home_button_light");
		buttonLight.setInteractive(
			new Phaser.Geom.Rectangle(0, 0, 66, 61),
			Phaser.Geom.Rectangle.Contains
		);
		this.add(buttonLight);

		this.buttonLight = buttonLight;

		/* START-USER-CTR-CODE */
		this.buttonLight.alpha = this.isDark ? 0 : 1;

		this.create();
		/* END-USER-CTR-CODE */
	}

	private buttonLight: Phaser.GameObjects.Image;
	public isDark: boolean = false;

	/* START-USER-CODE */
	create() {
		this.buttonLight.on("pointerdown", () => this.goHome());
	}

	update() {
		console.log("TG>>> ", this.isDark);
	}

	private goHome() {
		this.scene.scene.start("MainMenu");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
