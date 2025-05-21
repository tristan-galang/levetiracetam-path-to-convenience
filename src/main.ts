import Boot from "./scenes/Boot";
import GameOver from "./scenes/GameOver";
import MainMenu from "./scenes/MainMenu";
import Instruction from "./scenes/Instruction";
import Preloader from "./scenes/Preloader";
import DetailerPage1 from "./scenes/DetailerPage1";
import DetailerPage2 from "./scenes/DetailerPage2";
import DetailerPage3 from "./scenes/DetailerPage3";
import DetailerPage4 from "./scenes/DetailerPage4";
import DetailerPage5 from "./scenes/DetailerPage5";
import DetailerPage6 from "./scenes/DetailerPage6";
import MainGame from "./scenes/MainGame";

import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	parent: "game-container",
	backgroundColor: "#028af8",
	pixelArt: true,
	// @ts-expect-error: 'resolution' exists at runtime but not in typings
	resolution: window.devicePixelRatio, // <- this is valid at runtime, but TS doesn't know it
	scale: {
		mode: Phaser.AUTO,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	scene: [
		Boot,
		Preloader,
		MainMenu,
		MainGame,
		GameOver,
		Instruction,
		DetailerPage1,
		DetailerPage2,
		DetailerPage3,
		DetailerPage4,
		DetailerPage5,
		DetailerPage6,
	],
	physics: {
		default: "arcade",
		arcade: {
			debug: false,
			gravity: {
				x: 0,
				y: 0,
			},
		},
	},
};

export default new Game(config);
