// You can write more code here

/* START OF COMPILED CODE */

import TimerPrefab from "./TimerPrefab";
import LevelClearPrefab from "./LevelClearPrefab";
/* START-USER-IMPORTS */

class CustomText extends Phaser.GameObjects.Text {
	public isCentered = false;
	public originalPosition = { x: 0, y: 0 };

	constructor(
		scene: Phaser.Scene,
		x: number,
		y: number,
		text: string,
		style: Phaser.Types.GameObjects.Text.TextStyle
	) {
		const fixX = x + 40;
		super(scene, fixX, y, text, {
			...style,
			fixedWidth: 80,
			align: "center",
		});
		this.setOrigin(0.5, 0);
		this.originalPosition = { x: fixX, y };
		scene.add.existing(this); // add to scene manually
	}
}

/* END-USER-IMPORTS */

export default class MainGame extends Phaser.Scene {
	// private containerInput!: Phaser.GameObjects.Image;
	private timer!: TimerPrefab;
	private levelClearPrefab!: LevelClearPrefab;
	// private letterList!: CustomText[];
	// private horizontalSpacing = 133;

	/* START-USER-CODE */

	// Write your code here
	private wordToGuess!: string;
	private nextScene!: string;
	private allLetters!: string;
	private correctSound!: Phaser.Sound.BaseSound;
	private completeSound!: Phaser.Sound.BaseSound;
	private centerLetters: CustomText[] = [];

	constructor() {
		super("MainGame");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {
		// background_game
		this.add.image(512, 384, "background_game");

		// containerInput
		const containerInput = this.add.image(512, 300, "container_game_input");
		containerInput.alpha = 0.7;
		containerInput.alphaTopLeft = 0.7;
		containerInput.alphaTopRight = 0.7;
		containerInput.alphaBottomLeft = 0.7;
		containerInput.alphaBottomRight = 0.7;

		switch (this.wordToGuess) {
			case "CONVENIENCE":
				this.add.image(150, 50, "level1Btn").setScale(0.7);
				this.add.image(512, 120, "clueLevel1");
				break;
			case "COMPLIANCE":
				this.add.image(150, 50, "level2Btn").setScale(0.7);
				break;
			case "COST-EFFECTIVE":
				this.add.image(150, 50, "level3Btn").setScale(0.7);
				break;
			default:
				this.add.image(150, 50, "level1Btn").setScale(0.7);
				break;
		}

		// container_timer
		const container_timer = this.add.image(915, 55, "container_timer");
		container_timer.scaleX = 0.7;
		container_timer.scaleY = 0.7;

		// timer
		const timer = new TimerPrefab(this, 918, 48);
		this.add.existing(timer);
		timer.text = "19";
		timer.setStyle({ align: "center" });
		timer.setPadding({ left: 0, top: 0, right: 15, bottom: 0 });

		// levelClearPrefab
		const levelClearPrefab = new LevelClearPrefab(this, 0, 768);
		this.add.existing(levelClearPrefab);
		levelClearPrefab.setDepth(999);

		// timer (prefab fields)
		timer.duration = 30;
		timer.onComplete = this.showLevelClear.bind(this);

		// levelClearPrefab (prefab fields)
		levelClearPrefab.onNext = this.onNext.bind(this);

		// this.containerInput = containerInput;
		this.timer = timer;
		this.levelClearPrefab = levelClearPrefab;
		// this.letterList = letterList;

		this.events.emit("scene-awake");
	}

	init(data: { wordToGuess: string; nextScene: string; allLetters: string }) {
		this.wordToGuess = data.wordToGuess;
		this.nextScene = data.nextScene;
		this.allLetters = data.allLetters;
	}

	create() {
		this.editorCreate();

		this.centerLetters = [];

		this.correctSound = this.sound.add("sfx-correct", { volume: 0.8 });
		this.completeSound = this.sound.add("sfx-complete", { volume: 0.8 });

		const matchLetters = this.shuffleWords(this.allLetters);

		const maxPerRow = 7;
		const spacing = 133;
		const firstLineY = 519;
		const secondLineY = 650;
		const centerX = this.cameras.main.centerX;

		matchLetters.forEach((text, index) => {
			// Determine which row
			const row = Math.floor(index / maxPerRow);
			const col = index % maxPerRow;

			// Determine how many letters are in this row
			const rowLetters =
				row === 0
					? Math.min(matchLetters.length, maxPerRow)
					: matchLetters.length - maxPerRow;

			// Compute total width occupied by this row
			const totalWidth = (rowLetters - 1) * spacing;

			// Compute x starting so that it’s centered
			const startX = centerX - totalWidth / 2;

			// Compute actual position
			const x = startX + col * spacing;
			const y = row === 0 ? firstLineY : secondLineY;

			// Add your letter sprite or text
			this.add.image(x, y, "button_container_text");
			const letter = new CustomText(this, x - 40, y - 45, text, {
				color: "#000000ff",
				fontFamily: "funny",
				fontSize: "100px",
			});

			letter.text = matchLetters[index];
			letter.setInteractive();
			letter.on("pointerdown", () => {
				if (!letter.isCentered) {
					letter.isCentered = true;
					this.centerLetters.push(letter);
					this.moveLettersCenter();
				} else {
					letter.isCentered = false;
					this.centerLetters = this.centerLetters.filter((l) => l !== letter);

					this.tweens.add({
						targets: letter,
						x: letter.originalPosition.x,
						y: letter.originalPosition.y,
						duration: 300,
						ease: "Power2",
					});

					this.moveLettersCenter();
				}
			});
		});

		// this.input.on(
		// 	"drag",
		// 	(
		// 		_pointer: Phaser.Input.Pointer,
		// 		gameObject: Phaser.GameObjects.Text,
		// 		dragX: number,
		// 		dragY: number
		// 	) => {
		// 		gameObject.x = dragX;
		// 		gameObject.y = dragY;
		// 	}
		// );

		// this.input.on("dragend", () => {
		// 	this.checkWord();
		// });
	}

	moveLettersCenter() {
		const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 3;
		const spacing = 60;
		const totalWidth = spacing * (this.centerLetters.length - 1);
		const startX = centerX - totalWidth / 2;

		this.centerLetters.forEach((letter, index) => {
			this.tweens.add({
				targets: letter,
				x: startX + index * spacing,
				y: centerY,
				duration: 300,
				ease: "Power2",
			});
		});

		setTimeout(() => {
			this.checkWord();
		}, 600);
	}

	createGame(word: string) {
		const MAX_LENGTH = 14;
		const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		// Step 1: Trim word and ensure it's max 14 characters
		let sanitized = word.slice(0, MAX_LENGTH).toUpperCase();

		// Step 2: Pad with random letters if needed
		while (sanitized.length < MAX_LENGTH) {
			const randomChar = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
			sanitized += randomChar;
		}

		// Step 3: Convert to array and shuffle using Fisher-Yates
		const charArray = sanitized.split("");
		for (let i = charArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[charArray[i], charArray[j]] = [charArray[j], charArray[i]];
		}

		return charArray;
	}

	checkWord() {
		this.correctSound.play();

		const centeredLettersText = this.centerLetters
			.map((eachLetter) => eachLetter.text)
			.join("");

		if (centeredLettersText.toLowerCase() === this.wordToGuess.toLowerCase()) {
			this.timer.stopTimer();
			this.centerLetters.forEach((letter) => this.glowLetters(letter));
			setTimeout(() => {
				this.completeSound.play();
			}, 500);
			setTimeout(() => {
				this.showLevelClear();
			}, 2000);
		}
	}

	shuffleWords(word: string) {
		const chars = word.toUpperCase().split("");

		for (let i = chars.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[chars[i], chars[j]] = [chars[j], chars[i]];
		}

		return chars.filter((value) => value !== "_");
	}

	onCompleteTimer() {
		alert("Timer Completed");
	}

	showLevelClear() {
		this.levelClearPrefab.setPosition(0, 0);
		this.levelClearPrefab.show();
	}

	glowLetters(letter: Phaser.GameObjects.Text) {
		const color = { r: 0, g: 0, b: 0 }; // Start with black

		this.tweens.add({
			targets: color,
			r: 92,
			g: 191,
			b: 111,
			duration: 800,
			ease: "Back.easOut",
			onUpdate: () => {
				const hex = Phaser.Display.Color.GetColor(color.r, color.g, color.b);
				const css = Phaser.Display.Color.IntegerToColor(hex).rgba;
				letter.setColor(css);
			},
		});
	}

	onNext() {
		this.scene.start(this.nextScene);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
