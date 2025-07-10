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

		// textContainer
		const textContainer = this.add.layer();

		// button_container_text
		const button_container_text = this.add.image(
			114,
			519,
			"button_container_text"
		);
		textContainer.add(button_container_text);

		// button_container_text_1
		const button_container_text_1 = this.add.image(
			247,
			519,
			"button_container_text"
		);
		textContainer.add(button_container_text_1);

		// button_container_text_2
		const button_container_text_2 = this.add.image(
			380,
			519,
			"button_container_text"
		);
		textContainer.add(button_container_text_2);

		// button_container_text_3
		const button_container_text_3 = this.add.image(
			513,
			519,
			"button_container_text"
		);
		textContainer.add(button_container_text_3);

		// button_container_text_4
		const button_container_text_4 = this.add.image(
			647,
			519,
			"button_container_text"
		);
		textContainer.add(button_container_text_4);

		// button_container_text_5
		const button_container_text_5 = this.add.image(
			781,
			519,
			"button_container_text"
		);
		textContainer.add(button_container_text_5);

		// button_container_text_6
		const button_container_text_6 = this.add.image(
			913,
			519,
			"button_container_text"
		);
		textContainer.add(button_container_text_6);

		// button_container_text_7
		const button_container_text_7 = this.add.image(
			114,
			655,
			"button_container_text"
		);
		textContainer.add(button_container_text_7);

		// button_container_text_8
		const button_container_text_8 = this.add.image(
			247,
			655,
			"button_container_text"
		);
		textContainer.add(button_container_text_8);

		// button_container_text_9
		const button_container_text_9 = this.add.image(
			380,
			655,
			"button_container_text"
		);
		textContainer.add(button_container_text_9);

		// button_container_text_10
		const button_container_text_10 = this.add.image(
			513,
			655,
			"button_container_text"
		);
		textContainer.add(button_container_text_10);

		// button_container_text_11
		const button_container_text_11 = this.add.image(
			647,
			655,
			"button_container_text"
		);
		textContainer.add(button_container_text_11);

		// button_container_text_12
		const button_container_text_12 = this.add.image(
			781,
			655,
			"button_container_text"
		);
		textContainer.add(button_container_text_12);

		// button_container_text_13
		const button_container_text_13 = this.add.image(
			913,
			655,
			"button_container_text"
		);
		textContainer.add(button_container_text_13);

		// letters
		const letters = this.add.layer();

		// letter
		const letter = new CustomText(this, 83, 473, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter);

		// letter_1
		const letter_1 = new CustomText(this, 214, 473, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});

		letters.add(letter_1);

		// letter_2
		const letter_2 = new CustomText(this, 350, 473, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_2);

		// letter_3
		const letter_3 = new CustomText(this, 481, 473, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_3);

		// letter_4
		const letter_4 = new CustomText(this, 615, 473, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_4);

		// letter_5
		const letter_5 = new CustomText(this, 753, 473, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_5);

		// letter_6
		const letter_6 = new CustomText(this, 884, 473, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_6);

		// letter_7
		const letter_7 = new CustomText(this, 81, 609, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_7);

		// letter_8
		const letter_8 = new CustomText(this, 214, 609, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_8);

		// letter_9
		const letter_9 = new CustomText(this, 347, 609, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_9);

		// letter_10
		const letter_10 = new CustomText(this, 484, 609, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_10);

		// letter_11
		const letter_11 = new CustomText(this, 615, 609, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_11);

		// letter_12
		const letter_12 = new CustomText(this, 748, 609, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_12);

		// letter_13
		const letter_13 = new CustomText(this, 880, 609, "T", {
			color: "#000000ff",
			fontFamily: "funny",
			fontSize: "100px",
		});
		letters.add(letter_13);

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

		// lists
		const letterList = [
			letter_13,
			letter_12,
			letter_11,
			letter_10,
			letter_9,
			letter_8,
			letter_7,
			letter_6,
			letter_5,
			letter_4,
			letter_3,
			letter_2,
			letter_1,
			letter,
		];

		// timer (prefab fields)
		timer.duration = 30;
		timer.onComplete = this.showLevelClear.bind(this);

		// levelClearPrefab (prefab fields)
		levelClearPrefab.onNext = this.onNext.bind(this);

		// this.containerInput = containerInput;
		this.timer = timer;
		this.levelClearPrefab = levelClearPrefab;
		this.letterList = letterList;

		this.events.emit("scene-awake");
	}

	// private containerInput!: Phaser.GameObjects.Image;
	private timer!: TimerPrefab;
	private levelClearPrefab!: LevelClearPrefab;
	private letterList!: CustomText[];

	/* START-USER-CODE */

	// Write your code here
	private wordToGuess!: string;
	private nextScene!: string;
	private allLetters!: string;
	private correctSound!: Phaser.Sound.BaseSound;
	private completeSound!: Phaser.Sound.BaseSound;
	private centerLetters: CustomText[] = [];

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

		this.letterList.forEach((letter, index) => {
			letter.setInteractive({ draggable: true });
			letter.text = matchLetters[index];
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

		return chars;
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
