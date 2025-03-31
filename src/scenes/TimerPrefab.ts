// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TimerPrefab extends Phaser.GameObjects.Text {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? -3, y ?? -6, "", {});

		this.setOrigin(0.5, 0.5);
		this.text = "60";
		this.setStyle({ "align": "center", "fontFamily": "digitalFont", "fontSize": "71px" });

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.startTimer();

		/* END-USER-CTR-CODE */
	}

	public duration: number = 10;
	public onComplete!: () => void;

	/* START-USER-CODE */
	// Write your code here.
	private timerEvent?: Phaser.Time.TimerEvent;

	private startTimer() {
		this.timerEvent = this.scene.time.addEvent({
			delay: 1000, // 1 second
			callback: this.updateTimer,
			callbackScope: this,
			loop: true,
		});
	}

	private updateTimer() {
		this.duration--;
		this.setText(this.formatTime(this.duration));

		if (this.duration <= 0) {
			this.timerEvent?.remove(); // Stop the timer
			if (this.onComplete) this.onComplete(); // Trigger callback if provided
		}
	}

	private formatTime(time: number): string {
		return time < 10 ? `0${time}` : `${time}`;
	}

	public stopTimer() {
		this.timerEvent?.remove();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
