import Boot from "./scenes/Boot";
import MainGame from "./scenes/Game";
import GameOver from "./scenes/GameOver";
import MainMenu from "./scenes/MainMenu";
import Preloader from "./scenes/Preloader";
import Levelone from "./scenes/LevelOne";
import LevelTwo from "./scenes/LevelTwo";
import LevelThree from "./scenes/LevelThree";

import { Game, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	parent: "game-container",
	backgroundColor: "#028af8",
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	scene: [
		Boot,
		Preloader,
		Levelone,
		LevelTwo,
		LevelThree,
		MainMenu,
		MainGame,
		GameOver,
	],
	physics: {
		default: "arcade",
		arcade: {
			debug: true,
			gravity: {
				x: 0,
				y: 0,
			},
		},
	},
};

export default new Game(config);
