// You can write more code here

/* START OF COMPILED CODE */

import RoadPrefab from "./RoadPrefab";
import Hero from "./Hero";
import TimerPrefab from "./TimerPrefab";
import GameOverPrefab from "./GameOverPrefab";
import LevelClearPrefab from "./LevelClearPrefab";
import HomeButton from "./HomeButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelTwo extends Phaser.Scene {

	constructor() {
		super("LevelTwo");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background_game
		this.add.image(513, 384, "background_game");

		// rectangle_1
		const rectangle_1 = this.add.rectangle(513, 383, 912, 420);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 11714166;

		// roads_layer
		const roads_layer = this.add.layer();

		// road_198
		const road_198 = new RoadPrefab(this, 83, 198);
		road_198.scaleX = 0.9;
		road_198.scaleY = 0.9;
		road_198.body.setOffset(10, 11);
		roads_layer.add(road_198);

		// road
		const road = new RoadPrefab(this, 120, 198);
		road.scaleX = 0.9;
		road.scaleY = 0.9;
		road.body.setOffset(10, 11);
		roads_layer.add(road);

		// road_1
		const road_1 = new RoadPrefab(this, 157, 198);
		road_1.scaleX = 0.9;
		road_1.scaleY = 0.9;
		road_1.body.setOffset(10, 11);
		roads_layer.add(road_1);

		// road_2
		const road_2 = new RoadPrefab(this, 195, 198);
		road_2.scaleX = 0.9;
		road_2.scaleY = 0.9;
		road_2.body.setOffset(10, 11);
		roads_layer.add(road_2);

		// road_3
		const road_3 = new RoadPrefab(this, 233, 198);
		road_3.scaleX = 0.9;
		road_3.scaleY = 0.9;
		road_3.body.setOffset(10, 11);
		roads_layer.add(road_3);

		// road_4
		const road_4 = new RoadPrefab(this, 270, 198);
		road_4.scaleX = 0.9;
		road_4.scaleY = 0.9;
		road_4.body.setOffset(10, 11);
		roads_layer.add(road_4);

		// road_5
		const road_5 = new RoadPrefab(this, 307, 198);
		road_5.scaleX = 0.9;
		road_5.scaleY = 0.9;
		road_5.body.setOffset(10, 11);
		roads_layer.add(road_5);

		// road_6
		const road_6 = new RoadPrefab(this, 345, 198);
		road_6.scaleX = 0.9;
		road_6.scaleY = 0.9;
		road_6.body.setOffset(10, 11);
		roads_layer.add(road_6);

		// road_7
		const road_7 = new RoadPrefab(this, 382, 198);
		road_7.scaleX = 0.9;
		road_7.scaleY = 0.9;
		road_7.body.setOffset(10, 11);
		roads_layer.add(road_7);

		// road_8
		const road_8 = new RoadPrefab(this, 420, 198);
		road_8.scaleX = 0.9;
		road_8.scaleY = 0.9;
		road_8.body.setOffset(10, 11);
		roads_layer.add(road_8);

		// road_9
		const road_9 = new RoadPrefab(this, 457, 198);
		road_9.scaleX = 0.9;
		road_9.scaleY = 0.9;
		road_9.body.setOffset(10, 11);
		roads_layer.add(road_9);

		// road_10
		const road_10 = new RoadPrefab(this, 494, 198);
		road_10.scaleX = 0.9;
		road_10.scaleY = 0.9;
		road_10.body.setOffset(10, 11);
		roads_layer.add(road_10);

		// road_11
		const road_11 = new RoadPrefab(this, 532, 198);
		road_11.scaleX = 0.9;
		road_11.scaleY = 0.9;
		road_11.body.setOffset(10, 11);
		roads_layer.add(road_11);

		// road_12
		const road_12 = new RoadPrefab(this, 570, 198);
		road_12.scaleX = 0.9;
		road_12.scaleY = 0.9;
		road_12.body.setOffset(10, 11);
		roads_layer.add(road_12);

		// road_13
		const road_13 = new RoadPrefab(this, 607, 198);
		road_13.scaleX = 0.9;
		road_13.scaleY = 0.9;
		road_13.body.setOffset(10, 11);
		roads_layer.add(road_13);

		// road_14
		const road_14 = new RoadPrefab(this, 644, 198);
		road_14.scaleX = 0.9;
		road_14.scaleY = 0.9;
		road_14.body.setOffset(10, 11);
		roads_layer.add(road_14);

		// road_15
		const road_15 = new RoadPrefab(this, 682, 198);
		road_15.scaleX = 0.9;
		road_15.scaleY = 0.9;
		road_15.body.setOffset(10, 11);
		roads_layer.add(road_15);

		// road_16
		const road_16 = new RoadPrefab(this, 719, 198);
		road_16.scaleX = 0.9;
		road_16.scaleY = 0.9;
		road_16.body.setOffset(10, 11);
		roads_layer.add(road_16);

		// road_17
		const road_17 = new RoadPrefab(this, 757, 198);
		road_17.scaleX = 0.9;
		road_17.scaleY = 0.9;
		road_17.body.setOffset(10, 11);
		roads_layer.add(road_17);

		// road_18
		const road_18 = new RoadPrefab(this, 795, 198);
		road_18.scaleX = 0.9;
		road_18.scaleY = 0.9;
		road_18.body.setOffset(10, 11);
		roads_layer.add(road_18);

		// road_19
		const road_19 = new RoadPrefab(this, 832, 198);
		road_19.scaleX = 0.9;
		road_19.scaleY = 0.9;
		road_19.body.setOffset(10, 11);
		roads_layer.add(road_19);

		// road_20
		const road_20 = new RoadPrefab(this, 869, 198);
		road_20.scaleX = 0.9;
		road_20.scaleY = 0.9;
		road_20.body.setOffset(10, 11);
		roads_layer.add(road_20);

		// road_21
		const road_21 = new RoadPrefab(this, 907, 198);
		road_21.scaleX = 0.9;
		road_21.scaleY = 0.9;
		road_21.body.setOffset(10, 11);
		roads_layer.add(road_21);

		// road_22
		const road_22 = new RoadPrefab(this, 944, 198);
		road_22.scaleX = 0.9;
		road_22.scaleY = 0.9;
		road_22.body.setOffset(10, 11);
		roads_layer.add(road_22);

		// road_23
		const road_23 = new RoadPrefab(this, 81, 236);
		road_23.scaleX = 0.9;
		road_23.scaleY = 0.9;
		road_23.body.setOffset(10, 11);
		roads_layer.add(road_23);

		// road_24
		const road_24 = new RoadPrefab(this, 118, 236);
		road_24.scaleX = 0.9;
		road_24.scaleY = 0.9;
		road_24.body.setOffset(10, 11);
		roads_layer.add(road_24);

		// road_25
		const road_25 = new RoadPrefab(this, 155, 236);
		road_25.scaleX = 0.9;
		road_25.scaleY = 0.9;
		road_25.body.setOffset(10, 11);
		roads_layer.add(road_25);

		// road_26
		const road_26 = new RoadPrefab(this, 193, 236);
		road_26.scaleX = 0.9;
		road_26.scaleY = 0.9;
		road_26.body.setOffset(10, 11);
		roads_layer.add(road_26);

		// road_27
		const road_27 = new RoadPrefab(this, 231, 236);
		road_27.scaleX = 0.9;
		road_27.scaleY = 0.9;
		road_27.body.setOffset(10, 11);
		roads_layer.add(road_27);

		// road_28
		const road_28 = new RoadPrefab(this, 268, 236);
		road_28.scaleX = 0.9;
		road_28.scaleY = 0.9;
		road_28.body.setOffset(10, 11);
		roads_layer.add(road_28);

		// road_29
		const road_29 = new RoadPrefab(this, 305, 236);
		road_29.scaleX = 0.9;
		road_29.scaleY = 0.9;
		road_29.body.setOffset(10, 11);
		roads_layer.add(road_29);

		// road_30
		const road_30 = new RoadPrefab(this, 343, 236);
		road_30.scaleX = 0.9;
		road_30.scaleY = 0.9;
		road_30.body.setOffset(10, 11);
		roads_layer.add(road_30);

		// road_31
		const road_31 = new RoadPrefab(this, 380, 236);
		road_31.scaleX = 0.9;
		road_31.scaleY = 0.9;
		road_31.body.setOffset(10, 11);
		roads_layer.add(road_31);

		// road_32
		const road_32 = new RoadPrefab(this, 418, 236);
		road_32.scaleX = 0.9;
		road_32.scaleY = 0.9;
		road_32.body.setOffset(10, 11);
		roads_layer.add(road_32);

		// road_33
		const road_33 = new RoadPrefab(this, 455, 236);
		road_33.scaleX = 0.9;
		road_33.scaleY = 0.9;
		road_33.body.setOffset(10, 11);
		roads_layer.add(road_33);

		// road_34
		const road_34 = new RoadPrefab(this, 492, 236);
		road_34.scaleX = 0.9;
		road_34.scaleY = 0.9;
		road_34.body.setOffset(10, 11);
		roads_layer.add(road_34);

		// road_35
		const road_35 = new RoadPrefab(this, 530, 236);
		road_35.scaleX = 0.9;
		road_35.scaleY = 0.9;
		road_35.body.setOffset(10, 11);
		roads_layer.add(road_35);

		// road_36
		const road_36 = new RoadPrefab(this, 568, 236);
		road_36.scaleX = 0.9;
		road_36.scaleY = 0.9;
		road_36.body.setOffset(10, 11);
		roads_layer.add(road_36);

		// road_37
		const road_37 = new RoadPrefab(this, 605, 236);
		road_37.scaleX = 0.9;
		road_37.scaleY = 0.9;
		road_37.body.setOffset(10, 11);
		roads_layer.add(road_37);

		// road_38
		const road_38 = new RoadPrefab(this, 642, 236);
		road_38.scaleX = 0.9;
		road_38.scaleY = 0.9;
		road_38.body.setOffset(10, 11);
		roads_layer.add(road_38);

		// road_39
		const road_39 = new RoadPrefab(this, 680, 236);
		road_39.scaleX = 0.9;
		road_39.scaleY = 0.9;
		road_39.body.setOffset(10, 11);
		roads_layer.add(road_39);

		// road_40
		const road_40 = new RoadPrefab(this, 717, 236);
		road_40.scaleX = 0.9;
		road_40.scaleY = 0.9;
		road_40.body.setOffset(10, 11);
		roads_layer.add(road_40);

		// road_41
		const road_41 = new RoadPrefab(this, 755, 236);
		road_41.scaleX = 0.9;
		road_41.scaleY = 0.9;
		road_41.body.setOffset(10, 11);
		roads_layer.add(road_41);

		// road_42
		const road_42 = new RoadPrefab(this, 793, 236);
		road_42.scaleX = 0.9;
		road_42.scaleY = 0.9;
		road_42.body.setOffset(10, 11);
		roads_layer.add(road_42);

		// road_43
		const road_43 = new RoadPrefab(this, 830, 236);
		road_43.scaleX = 0.9;
		road_43.scaleY = 0.9;
		road_43.body.setOffset(10, 11);
		roads_layer.add(road_43);

		// road_44
		const road_44 = new RoadPrefab(this, 867, 236);
		road_44.scaleX = 0.9;
		road_44.scaleY = 0.9;
		road_44.body.setOffset(10, 11);
		roads_layer.add(road_44);

		// road_45
		const road_45 = new RoadPrefab(this, 905, 236);
		road_45.scaleX = 0.9;
		road_45.scaleY = 0.9;
		road_45.body.setOffset(10, 11);
		roads_layer.add(road_45);

		// road_46
		const road_46 = new RoadPrefab(this, 942, 236);
		road_46.scaleX = 0.9;
		road_46.scaleY = 0.9;
		road_46.body.setOffset(10, 11);
		roads_layer.add(road_46);

		// road_47
		const road_47 = new RoadPrefab(this, 82, 272);
		road_47.scaleX = 0.9;
		road_47.scaleY = 0.9;
		road_47.body.setOffset(10, 11);
		roads_layer.add(road_47);

		// road_48
		const road_48 = new RoadPrefab(this, 119, 272);
		road_48.scaleX = 0.9;
		road_48.scaleY = 0.9;
		road_48.body.setOffset(10, 11);
		roads_layer.add(road_48);

		// road_49
		const road_49 = new RoadPrefab(this, 156, 272);
		road_49.scaleX = 0.9;
		road_49.scaleY = 0.9;
		road_49.body.setOffset(10, 11);
		roads_layer.add(road_49);

		// road_50
		const road_50 = new RoadPrefab(this, 194, 272);
		road_50.scaleX = 0.9;
		road_50.scaleY = 0.9;
		road_50.body.setOffset(10, 11);
		roads_layer.add(road_50);

		// road_51
		const road_51 = new RoadPrefab(this, 232, 272);
		road_51.scaleX = 0.9;
		road_51.scaleY = 0.9;
		road_51.body.setOffset(10, 11);
		roads_layer.add(road_51);

		// road_52
		const road_52 = new RoadPrefab(this, 269, 272);
		road_52.scaleX = 0.9;
		road_52.scaleY = 0.9;
		road_52.body.setOffset(10, 11);
		roads_layer.add(road_52);

		// road_53
		const road_53 = new RoadPrefab(this, 306, 272);
		road_53.scaleX = 0.9;
		road_53.scaleY = 0.9;
		road_53.body.setOffset(10, 11);
		roads_layer.add(road_53);

		// road_54
		const road_54 = new RoadPrefab(this, 344, 272);
		road_54.scaleX = 0.9;
		road_54.scaleY = 0.9;
		road_54.body.setOffset(10, 11);
		roads_layer.add(road_54);

		// road_55
		const road_55 = new RoadPrefab(this, 381, 272);
		road_55.scaleX = 0.9;
		road_55.scaleY = 0.9;
		road_55.body.setOffset(10, 11);
		roads_layer.add(road_55);

		// road_56
		const road_56 = new RoadPrefab(this, 419, 272);
		road_56.scaleX = 0.9;
		road_56.scaleY = 0.9;
		road_56.body.setOffset(10, 11);
		roads_layer.add(road_56);

		// road_57
		const road_57 = new RoadPrefab(this, 456, 272);
		road_57.scaleX = 0.9;
		road_57.scaleY = 0.9;
		road_57.body.setOffset(10, 11);
		roads_layer.add(road_57);

		// road_58
		const road_58 = new RoadPrefab(this, 493, 272);
		road_58.scaleX = 0.9;
		road_58.scaleY = 0.9;
		road_58.body.setOffset(10, 11);
		roads_layer.add(road_58);

		// road_59
		const road_59 = new RoadPrefab(this, 531, 272);
		road_59.scaleX = 0.9;
		road_59.scaleY = 0.9;
		road_59.body.setOffset(10, 11);
		roads_layer.add(road_59);

		// road_60
		const road_60 = new RoadPrefab(this, 569, 272);
		road_60.scaleX = 0.9;
		road_60.scaleY = 0.9;
		road_60.body.setOffset(10, 11);
		roads_layer.add(road_60);

		// road_61
		const road_61 = new RoadPrefab(this, 606, 272);
		road_61.scaleX = 0.9;
		road_61.scaleY = 0.9;
		road_61.body.setOffset(10, 11);
		roads_layer.add(road_61);

		// road_62
		const road_62 = new RoadPrefab(this, 643, 272);
		road_62.scaleX = 0.9;
		road_62.scaleY = 0.9;
		road_62.body.setOffset(10, 11);
		roads_layer.add(road_62);

		// road_63
		const road_63 = new RoadPrefab(this, 681, 272);
		road_63.scaleX = 0.9;
		road_63.scaleY = 0.9;
		road_63.body.setOffset(10, 11);
		roads_layer.add(road_63);

		// road_64
		const road_64 = new RoadPrefab(this, 718, 272);
		road_64.scaleX = 0.9;
		road_64.scaleY = 0.9;
		road_64.body.setOffset(10, 11);
		roads_layer.add(road_64);

		// road_65
		const road_65 = new RoadPrefab(this, 756, 272);
		road_65.scaleX = 0.9;
		road_65.scaleY = 0.9;
		road_65.body.setOffset(10, 11);
		roads_layer.add(road_65);

		// road_66
		const road_66 = new RoadPrefab(this, 794, 272);
		road_66.scaleX = 0.9;
		road_66.scaleY = 0.9;
		road_66.body.setOffset(10, 11);
		roads_layer.add(road_66);

		// road_67
		const road_67 = new RoadPrefab(this, 831, 272);
		road_67.scaleX = 0.9;
		road_67.scaleY = 0.9;
		road_67.body.setOffset(10, 11);
		roads_layer.add(road_67);

		// road_68
		const road_68 = new RoadPrefab(this, 868, 272);
		road_68.scaleX = 0.9;
		road_68.scaleY = 0.9;
		road_68.body.setOffset(10, 11);
		roads_layer.add(road_68);

		// road_69
		const road_69 = new RoadPrefab(this, 906, 272);
		road_69.scaleX = 0.9;
		road_69.scaleY = 0.9;
		road_69.body.setOffset(10, 11);
		roads_layer.add(road_69);

		// road_70
		const road_70 = new RoadPrefab(this, 943, 272);
		road_70.scaleX = 0.9;
		road_70.scaleY = 0.9;
		road_70.body.setOffset(10, 11);
		roads_layer.add(road_70);

		// road_71
		const road_71 = new RoadPrefab(this, 82, 311);
		road_71.scaleX = 0.9;
		road_71.scaleY = 0.9;
		road_71.body.setOffset(10, 11);
		roads_layer.add(road_71);

		// road_72
		const road_72 = new RoadPrefab(this, 119, 311);
		road_72.scaleX = 0.9;
		road_72.scaleY = 0.9;
		road_72.body.setOffset(10, 11);
		roads_layer.add(road_72);

		// road_73
		const road_73 = new RoadPrefab(this, 156, 311);
		road_73.scaleX = 0.9;
		road_73.scaleY = 0.9;
		road_73.body.setOffset(10, 11);
		roads_layer.add(road_73);

		// road_74
		const road_74 = new RoadPrefab(this, 194, 311);
		road_74.scaleX = 0.9;
		road_74.scaleY = 0.9;
		road_74.body.setOffset(10, 11);
		roads_layer.add(road_74);

		// road_75
		const road_75 = new RoadPrefab(this, 232, 311);
		road_75.scaleX = 0.9;
		road_75.scaleY = 0.9;
		road_75.body.setOffset(10, 11);
		roads_layer.add(road_75);

		// road_76
		const road_76 = new RoadPrefab(this, 269, 311);
		road_76.scaleX = 0.9;
		road_76.scaleY = 0.9;
		road_76.body.setOffset(10, 11);
		roads_layer.add(road_76);

		// road_77
		const road_77 = new RoadPrefab(this, 306, 311);
		road_77.scaleX = 0.9;
		road_77.scaleY = 0.9;
		road_77.body.setOffset(10, 11);
		roads_layer.add(road_77);

		// road_78
		const road_78 = new RoadPrefab(this, 344, 311);
		road_78.scaleX = 0.9;
		road_78.scaleY = 0.9;
		road_78.body.setOffset(10, 11);
		roads_layer.add(road_78);

		// road_79
		const road_79 = new RoadPrefab(this, 381, 311);
		road_79.scaleX = 0.9;
		road_79.scaleY = 0.9;
		road_79.body.setOffset(10, 11);
		roads_layer.add(road_79);

		// road_80
		const road_80 = new RoadPrefab(this, 419, 311);
		road_80.scaleX = 0.9;
		road_80.scaleY = 0.9;
		road_80.body.setOffset(10, 11);
		roads_layer.add(road_80);

		// road_81
		const road_81 = new RoadPrefab(this, 456, 311);
		road_81.scaleX = 0.9;
		road_81.scaleY = 0.9;
		road_81.body.setOffset(10, 11);
		roads_layer.add(road_81);

		// road_82
		const road_82 = new RoadPrefab(this, 493, 311);
		road_82.scaleX = 0.9;
		road_82.scaleY = 0.9;
		road_82.body.setOffset(10, 11);
		roads_layer.add(road_82);

		// road_83
		const road_83 = new RoadPrefab(this, 531, 311);
		road_83.scaleX = 0.9;
		road_83.scaleY = 0.9;
		road_83.body.setOffset(10, 11);
		roads_layer.add(road_83);

		// road_84
		const road_84 = new RoadPrefab(this, 569, 311);
		road_84.scaleX = 0.9;
		road_84.scaleY = 0.9;
		road_84.body.setOffset(10, 11);
		roads_layer.add(road_84);

		// road_85
		const road_85 = new RoadPrefab(this, 606, 311);
		road_85.scaleX = 0.9;
		road_85.scaleY = 0.9;
		road_85.body.setOffset(10, 11);
		roads_layer.add(road_85);

		// road_86
		const road_86 = new RoadPrefab(this, 643, 311);
		road_86.scaleX = 0.9;
		road_86.scaleY = 0.9;
		road_86.body.setOffset(10, 11);
		roads_layer.add(road_86);

		// road_87
		const road_87 = new RoadPrefab(this, 681, 311);
		road_87.scaleX = 0.9;
		road_87.scaleY = 0.9;
		road_87.body.setOffset(10, 11);
		roads_layer.add(road_87);

		// road_88
		const road_88 = new RoadPrefab(this, 718, 311);
		road_88.scaleX = 0.9;
		road_88.scaleY = 0.9;
		road_88.body.setOffset(10, 11);
		roads_layer.add(road_88);

		// road_89
		const road_89 = new RoadPrefab(this, 756, 311);
		road_89.scaleX = 0.9;
		road_89.scaleY = 0.9;
		road_89.body.setOffset(10, 11);
		roads_layer.add(road_89);

		// road_90
		const road_90 = new RoadPrefab(this, 794, 311);
		road_90.scaleX = 0.9;
		road_90.scaleY = 0.9;
		road_90.body.setOffset(10, 11);
		roads_layer.add(road_90);

		// road_91
		const road_91 = new RoadPrefab(this, 831, 311);
		road_91.scaleX = 0.9;
		road_91.scaleY = 0.9;
		road_91.body.setOffset(10, 11);
		roads_layer.add(road_91);

		// road_92
		const road_92 = new RoadPrefab(this, 868, 311);
		road_92.scaleX = 0.9;
		road_92.scaleY = 0.9;
		road_92.body.setOffset(10, 11);
		roads_layer.add(road_92);

		// road_93
		const road_93 = new RoadPrefab(this, 906, 311);
		road_93.scaleX = 0.9;
		road_93.scaleY = 0.9;
		road_93.body.setOffset(10, 11);
		roads_layer.add(road_93);

		// road_94
		const road_94 = new RoadPrefab(this, 943, 311);
		road_94.scaleX = 0.9;
		road_94.scaleY = 0.9;
		road_94.body.setOffset(10, 11);
		roads_layer.add(road_94);

		// road_95
		const road_95 = new RoadPrefab(this, 82, 348);
		road_95.scaleX = 0.9;
		road_95.scaleY = 0.9;
		road_95.body.setOffset(10, 11);
		roads_layer.add(road_95);

		// road_96
		const road_96 = new RoadPrefab(this, 119, 348);
		road_96.scaleX = 0.9;
		road_96.scaleY = 0.9;
		road_96.body.setOffset(10, 11);
		roads_layer.add(road_96);

		// road_97
		const road_97 = new RoadPrefab(this, 156, 348);
		road_97.scaleX = 0.9;
		road_97.scaleY = 0.9;
		road_97.body.setOffset(10, 11);
		roads_layer.add(road_97);

		// road_98
		const road_98 = new RoadPrefab(this, 194, 348);
		road_98.scaleX = 0.9;
		road_98.scaleY = 0.9;
		road_98.body.setOffset(10, 11);
		roads_layer.add(road_98);

		// road_99
		const road_99 = new RoadPrefab(this, 232, 348);
		road_99.scaleX = 0.9;
		road_99.scaleY = 0.9;
		road_99.body.setOffset(10, 11);
		roads_layer.add(road_99);

		// road_100
		const road_100 = new RoadPrefab(this, 269, 348);
		road_100.scaleX = 0.9;
		road_100.scaleY = 0.9;
		road_100.body.setOffset(10, 11);
		roads_layer.add(road_100);

		// road_101
		const road_101 = new RoadPrefab(this, 306, 348);
		road_101.scaleX = 0.9;
		road_101.scaleY = 0.9;
		road_101.body.setOffset(10, 11);
		roads_layer.add(road_101);

		// road_102
		const road_102 = new RoadPrefab(this, 344, 348);
		road_102.scaleX = 0.9;
		road_102.scaleY = 0.9;
		road_102.body.setOffset(10, 11);
		roads_layer.add(road_102);

		// road_103
		const road_103 = new RoadPrefab(this, 381, 348);
		road_103.scaleX = 0.9;
		road_103.scaleY = 0.9;
		road_103.body.setOffset(10, 11);
		roads_layer.add(road_103);

		// road_104
		const road_104 = new RoadPrefab(this, 419, 348);
		road_104.scaleX = 0.9;
		road_104.scaleY = 0.9;
		road_104.body.setOffset(10, 11);
		roads_layer.add(road_104);

		// road_105
		const road_105 = new RoadPrefab(this, 456, 348);
		road_105.scaleX = 0.9;
		road_105.scaleY = 0.9;
		road_105.body.setOffset(10, 11);
		roads_layer.add(road_105);

		// road_106
		const road_106 = new RoadPrefab(this, 493, 348);
		road_106.scaleX = 0.9;
		road_106.scaleY = 0.9;
		road_106.body.setOffset(10, 11);
		roads_layer.add(road_106);

		// road_107
		const road_107 = new RoadPrefab(this, 531, 348);
		road_107.scaleX = 0.9;
		road_107.scaleY = 0.9;
		road_107.body.setOffset(10, 11);
		roads_layer.add(road_107);

		// road_108
		const road_108 = new RoadPrefab(this, 569, 348);
		road_108.scaleX = 0.9;
		road_108.scaleY = 0.9;
		road_108.body.setOffset(10, 11);
		roads_layer.add(road_108);

		// road_109
		const road_109 = new RoadPrefab(this, 606, 348);
		road_109.scaleX = 0.9;
		road_109.scaleY = 0.9;
		road_109.body.setOffset(10, 11);
		roads_layer.add(road_109);

		// road_110
		const road_110 = new RoadPrefab(this, 643, 348);
		road_110.scaleX = 0.9;
		road_110.scaleY = 0.9;
		road_110.body.setOffset(10, 11);
		roads_layer.add(road_110);

		// road_111
		const road_111 = new RoadPrefab(this, 681, 348);
		road_111.scaleX = 0.9;
		road_111.scaleY = 0.9;
		road_111.body.setOffset(10, 11);
		roads_layer.add(road_111);

		// road_112
		const road_112 = new RoadPrefab(this, 718, 348);
		road_112.scaleX = 0.9;
		road_112.scaleY = 0.9;
		road_112.body.setOffset(10, 11);
		roads_layer.add(road_112);

		// road_113
		const road_113 = new RoadPrefab(this, 756, 348);
		road_113.scaleX = 0.9;
		road_113.scaleY = 0.9;
		road_113.body.setOffset(10, 11);
		roads_layer.add(road_113);

		// road_114
		const road_114 = new RoadPrefab(this, 794, 348);
		road_114.scaleX = 0.9;
		road_114.scaleY = 0.9;
		road_114.body.setOffset(10, 11);
		roads_layer.add(road_114);

		// road_115
		const road_115 = new RoadPrefab(this, 831, 348);
		road_115.scaleX = 0.9;
		road_115.scaleY = 0.9;
		road_115.body.setOffset(10, 11);
		roads_layer.add(road_115);

		// road_116
		const road_116 = new RoadPrefab(this, 868, 348);
		road_116.scaleX = 0.9;
		road_116.scaleY = 0.9;
		road_116.body.setOffset(10, 11);
		roads_layer.add(road_116);

		// road_117
		const road_117 = new RoadPrefab(this, 906, 348);
		road_117.scaleX = 0.9;
		road_117.scaleY = 0.9;
		road_117.body.setOffset(10, 11);
		roads_layer.add(road_117);

		// road_118
		const road_118 = new RoadPrefab(this, 943, 348);
		road_118.scaleX = 0.9;
		road_118.scaleY = 0.9;
		road_118.body.setOffset(10, 11);
		roads_layer.add(road_118);

		// road_119
		const road_119 = new RoadPrefab(this, 84, 380);
		road_119.scaleX = 0.9;
		road_119.scaleY = 0.9;
		road_119.body.setOffset(10, 11);
		roads_layer.add(road_119);

		// road_120
		const road_120 = new RoadPrefab(this, 121, 380);
		road_120.scaleX = 0.9;
		road_120.scaleY = 0.9;
		road_120.body.setOffset(10, 11);
		roads_layer.add(road_120);

		// road_121
		const road_121 = new RoadPrefab(this, 158, 380);
		road_121.scaleX = 0.9;
		road_121.scaleY = 0.9;
		road_121.body.setOffset(10, 11);
		roads_layer.add(road_121);

		// road_122
		const road_122 = new RoadPrefab(this, 196, 380);
		road_122.scaleX = 0.9;
		road_122.scaleY = 0.9;
		road_122.body.setOffset(10, 11);
		roads_layer.add(road_122);

		// road_123
		const road_123 = new RoadPrefab(this, 234, 380);
		road_123.scaleX = 0.9;
		road_123.scaleY = 0.9;
		road_123.body.setOffset(10, 11);
		roads_layer.add(road_123);

		// road_124
		const road_124 = new RoadPrefab(this, 271, 380);
		road_124.scaleX = 0.9;
		road_124.scaleY = 0.9;
		road_124.body.setOffset(10, 11);
		roads_layer.add(road_124);

		// road_125
		const road_125 = new RoadPrefab(this, 308, 380);
		road_125.scaleX = 0.9;
		road_125.scaleY = 0.9;
		road_125.body.setOffset(10, 11);
		roads_layer.add(road_125);

		// road_126
		const road_126 = new RoadPrefab(this, 346, 380);
		road_126.scaleX = 0.9;
		road_126.scaleY = 0.9;
		road_126.body.setOffset(10, 11);
		roads_layer.add(road_126);

		// road_127
		const road_127 = new RoadPrefab(this, 383, 380);
		road_127.scaleX = 0.9;
		road_127.scaleY = 0.9;
		road_127.body.setOffset(10, 11);
		roads_layer.add(road_127);

		// road_128
		const road_128 = new RoadPrefab(this, 421, 380);
		road_128.scaleX = 0.9;
		road_128.scaleY = 0.9;
		road_128.body.setOffset(10, 11);
		roads_layer.add(road_128);

		// road_129
		const road_129 = new RoadPrefab(this, 458, 380);
		road_129.scaleX = 0.9;
		road_129.scaleY = 0.9;
		road_129.body.setOffset(10, 11);
		roads_layer.add(road_129);

		// road_130
		const road_130 = new RoadPrefab(this, 495, 380);
		road_130.scaleX = 0.9;
		road_130.scaleY = 0.9;
		road_130.body.setOffset(10, 11);
		roads_layer.add(road_130);

		// road_131
		const road_131 = new RoadPrefab(this, 533, 380);
		road_131.scaleX = 0.9;
		road_131.scaleY = 0.9;
		road_131.body.setOffset(10, 11);
		roads_layer.add(road_131);

		// road_132
		const road_132 = new RoadPrefab(this, 571, 380);
		road_132.scaleX = 0.9;
		road_132.scaleY = 0.9;
		road_132.body.setOffset(10, 11);
		roads_layer.add(road_132);

		// road_133
		const road_133 = new RoadPrefab(this, 608, 380);
		road_133.scaleX = 0.9;
		road_133.scaleY = 0.9;
		road_133.body.setOffset(10, 11);
		roads_layer.add(road_133);

		// road_134
		const road_134 = new RoadPrefab(this, 645, 380);
		road_134.scaleX = 0.9;
		road_134.scaleY = 0.9;
		road_134.body.setOffset(10, 11);
		roads_layer.add(road_134);

		// road_135
		const road_135 = new RoadPrefab(this, 683, 380);
		road_135.scaleX = 0.9;
		road_135.scaleY = 0.9;
		road_135.body.setOffset(10, 11);
		roads_layer.add(road_135);

		// road_136
		const road_136 = new RoadPrefab(this, 720, 380);
		road_136.scaleX = 0.9;
		road_136.scaleY = 0.9;
		road_136.body.setOffset(10, 11);
		roads_layer.add(road_136);

		// road_137
		const road_137 = new RoadPrefab(this, 758, 380);
		road_137.scaleX = 0.9;
		road_137.scaleY = 0.9;
		road_137.body.setOffset(10, 11);
		roads_layer.add(road_137);

		// road_138
		const road_138 = new RoadPrefab(this, 796, 380);
		road_138.scaleX = 0.9;
		road_138.scaleY = 0.9;
		road_138.body.setOffset(10, 11);
		roads_layer.add(road_138);

		// road_139
		const road_139 = new RoadPrefab(this, 833, 380);
		road_139.scaleX = 0.9;
		road_139.scaleY = 0.9;
		road_139.body.setOffset(10, 11);
		roads_layer.add(road_139);

		// road_140
		const road_140 = new RoadPrefab(this, 870, 380);
		road_140.scaleX = 0.9;
		road_140.scaleY = 0.9;
		road_140.body.setOffset(10, 11);
		roads_layer.add(road_140);

		// road_141
		const road_141 = new RoadPrefab(this, 908, 380);
		road_141.scaleX = 0.9;
		road_141.scaleY = 0.9;
		road_141.body.setOffset(10, 11);
		roads_layer.add(road_141);

		// road_142
		const road_142 = new RoadPrefab(this, 945, 380);
		road_142.scaleX = 0.9;
		road_142.scaleY = 0.9;
		road_142.body.setOffset(10, 11);
		roads_layer.add(road_142);

		// road_143
		const road_143 = new RoadPrefab(this, 82, 417);
		road_143.scaleX = 0.9;
		road_143.scaleY = 0.9;
		road_143.body.setOffset(10, 11);
		roads_layer.add(road_143);

		// road_144
		const road_144 = new RoadPrefab(this, 119, 417);
		road_144.scaleX = 0.9;
		road_144.scaleY = 0.9;
		road_144.body.setOffset(10, 11);
		roads_layer.add(road_144);

		// road_145
		const road_145 = new RoadPrefab(this, 156, 417);
		road_145.scaleX = 0.9;
		road_145.scaleY = 0.9;
		road_145.body.setOffset(10, 11);
		roads_layer.add(road_145);

		// road_146
		const road_146 = new RoadPrefab(this, 194, 417);
		road_146.scaleX = 0.9;
		road_146.scaleY = 0.9;
		road_146.body.setOffset(10, 11);
		roads_layer.add(road_146);

		// road_147
		const road_147 = new RoadPrefab(this, 232, 417);
		road_147.scaleX = 0.9;
		road_147.scaleY = 0.9;
		road_147.body.setOffset(10, 11);
		roads_layer.add(road_147);

		// road_148
		const road_148 = new RoadPrefab(this, 269, 417);
		road_148.scaleX = 0.9;
		road_148.scaleY = 0.9;
		road_148.body.setOffset(10, 11);
		roads_layer.add(road_148);

		// road_149
		const road_149 = new RoadPrefab(this, 306, 417);
		road_149.scaleX = 0.9;
		road_149.scaleY = 0.9;
		road_149.body.setOffset(10, 11);
		roads_layer.add(road_149);

		// road_150
		const road_150 = new RoadPrefab(this, 344, 417);
		road_150.scaleX = 0.9;
		road_150.scaleY = 0.9;
		road_150.body.setOffset(10, 11);
		roads_layer.add(road_150);

		// road_151
		const road_151 = new RoadPrefab(this, 381, 417);
		road_151.scaleX = 0.9;
		road_151.scaleY = 0.9;
		road_151.body.setOffset(10, 11);
		roads_layer.add(road_151);

		// road_152
		const road_152 = new RoadPrefab(this, 419, 417);
		road_152.scaleX = 0.9;
		road_152.scaleY = 0.9;
		road_152.body.setOffset(10, 11);
		roads_layer.add(road_152);

		// road_153
		const road_153 = new RoadPrefab(this, 456, 417);
		road_153.scaleX = 0.9;
		road_153.scaleY = 0.9;
		road_153.body.setOffset(10, 11);
		roads_layer.add(road_153);

		// road_154
		const road_154 = new RoadPrefab(this, 493, 417);
		road_154.scaleX = 0.9;
		road_154.scaleY = 0.9;
		road_154.body.setOffset(10, 11);
		roads_layer.add(road_154);

		// road_155
		const road_155 = new RoadPrefab(this, 531, 417);
		road_155.scaleX = 0.9;
		road_155.scaleY = 0.9;
		road_155.body.setOffset(10, 11);
		roads_layer.add(road_155);

		// road_156
		const road_156 = new RoadPrefab(this, 569, 417);
		road_156.scaleX = 0.9;
		road_156.scaleY = 0.9;
		road_156.body.setOffset(10, 11);
		roads_layer.add(road_156);

		// road_157
		const road_157 = new RoadPrefab(this, 606, 417);
		road_157.scaleX = 0.9;
		road_157.scaleY = 0.9;
		road_157.body.setOffset(10, 11);
		roads_layer.add(road_157);

		// road_158
		const road_158 = new RoadPrefab(this, 643, 417);
		road_158.scaleX = 0.9;
		road_158.scaleY = 0.9;
		road_158.body.setOffset(10, 11);
		roads_layer.add(road_158);

		// road_159
		const road_159 = new RoadPrefab(this, 681, 417);
		road_159.scaleX = 0.9;
		road_159.scaleY = 0.9;
		road_159.body.setOffset(10, 11);
		roads_layer.add(road_159);

		// road_160
		const road_160 = new RoadPrefab(this, 718, 417);
		road_160.scaleX = 0.9;
		road_160.scaleY = 0.9;
		road_160.body.setOffset(10, 11);
		roads_layer.add(road_160);

		// road_161
		const road_161 = new RoadPrefab(this, 756, 417);
		road_161.scaleX = 0.9;
		road_161.scaleY = 0.9;
		road_161.body.setOffset(10, 11);
		roads_layer.add(road_161);

		// road_162
		const road_162 = new RoadPrefab(this, 794, 417);
		road_162.scaleX = 0.9;
		road_162.scaleY = 0.9;
		road_162.body.setOffset(10, 11);
		roads_layer.add(road_162);

		// road_163
		const road_163 = new RoadPrefab(this, 831, 417);
		road_163.scaleX = 0.9;
		road_163.scaleY = 0.9;
		road_163.body.setOffset(10, 11);
		roads_layer.add(road_163);

		// road_164
		const road_164 = new RoadPrefab(this, 868, 417);
		road_164.scaleX = 0.9;
		road_164.scaleY = 0.9;
		road_164.body.setOffset(10, 11);
		roads_layer.add(road_164);

		// road_165
		const road_165 = new RoadPrefab(this, 906, 417);
		road_165.scaleX = 0.9;
		road_165.scaleY = 0.9;
		road_165.body.setOffset(10, 11);
		roads_layer.add(road_165);

		// road_166
		const road_166 = new RoadPrefab(this, 943, 417);
		road_166.scaleX = 0.9;
		road_166.scaleY = 0.9;
		road_166.body.setOffset(10, 11);
		roads_layer.add(road_166);

		// road_167
		const road_167 = new RoadPrefab(this, 82, 455);
		road_167.scaleX = 0.9;
		road_167.scaleY = 0.9;
		road_167.body.setOffset(10, 11);
		roads_layer.add(road_167);

		// road_168
		const road_168 = new RoadPrefab(this, 119, 455);
		road_168.scaleX = 0.9;
		road_168.scaleY = 0.9;
		road_168.body.setOffset(10, 11);
		roads_layer.add(road_168);

		// road_169
		const road_169 = new RoadPrefab(this, 156, 455);
		road_169.scaleX = 0.9;
		road_169.scaleY = 0.9;
		road_169.body.setOffset(10, 11);
		roads_layer.add(road_169);

		// road_170
		const road_170 = new RoadPrefab(this, 194, 455);
		road_170.scaleX = 0.9;
		road_170.scaleY = 0.9;
		road_170.body.setOffset(10, 11);
		roads_layer.add(road_170);

		// road_171
		const road_171 = new RoadPrefab(this, 232, 455);
		road_171.scaleX = 0.9;
		road_171.scaleY = 0.9;
		road_171.body.setOffset(10, 11);
		roads_layer.add(road_171);

		// road_172
		const road_172 = new RoadPrefab(this, 269, 455);
		road_172.scaleX = 0.9;
		road_172.scaleY = 0.9;
		road_172.body.setOffset(10, 11);
		roads_layer.add(road_172);

		// road_173
		const road_173 = new RoadPrefab(this, 306, 455);
		road_173.scaleX = 0.9;
		road_173.scaleY = 0.9;
		road_173.body.setOffset(10, 11);
		roads_layer.add(road_173);

		// road_174
		const road_174 = new RoadPrefab(this, 344, 455);
		road_174.scaleX = 0.9;
		road_174.scaleY = 0.9;
		road_174.body.setOffset(10, 11);
		roads_layer.add(road_174);

		// road_175
		const road_175 = new RoadPrefab(this, 381, 455);
		road_175.scaleX = 0.9;
		road_175.scaleY = 0.9;
		road_175.body.setOffset(10, 11);
		roads_layer.add(road_175);

		// road_176
		const road_176 = new RoadPrefab(this, 419, 455);
		road_176.scaleX = 0.9;
		road_176.scaleY = 0.9;
		road_176.body.setOffset(10, 11);
		roads_layer.add(road_176);

		// road_177
		const road_177 = new RoadPrefab(this, 456, 455);
		road_177.scaleX = 0.9;
		road_177.scaleY = 0.9;
		road_177.body.setOffset(10, 11);
		roads_layer.add(road_177);

		// road_178
		const road_178 = new RoadPrefab(this, 493, 455);
		road_178.scaleX = 0.9;
		road_178.scaleY = 0.9;
		road_178.body.setOffset(10, 11);
		roads_layer.add(road_178);

		// road_179
		const road_179 = new RoadPrefab(this, 531, 455);
		road_179.scaleX = 0.9;
		road_179.scaleY = 0.9;
		road_179.body.setOffset(10, 11);
		roads_layer.add(road_179);

		// road_180
		const road_180 = new RoadPrefab(this, 569, 455);
		road_180.scaleX = 0.9;
		road_180.scaleY = 0.9;
		road_180.body.setOffset(10, 11);
		roads_layer.add(road_180);

		// road_181
		const road_181 = new RoadPrefab(this, 606, 455);
		road_181.scaleX = 0.9;
		road_181.scaleY = 0.9;
		road_181.body.setOffset(10, 11);
		roads_layer.add(road_181);

		// road_182
		const road_182 = new RoadPrefab(this, 643, 455);
		road_182.scaleX = 0.9;
		road_182.scaleY = 0.9;
		road_182.body.setOffset(10, 11);
		roads_layer.add(road_182);

		// road_183
		const road_183 = new RoadPrefab(this, 681, 455);
		road_183.scaleX = 0.9;
		road_183.scaleY = 0.9;
		road_183.body.setOffset(10, 11);
		roads_layer.add(road_183);

		// road_184
		const road_184 = new RoadPrefab(this, 718, 455);
		road_184.scaleX = 0.9;
		road_184.scaleY = 0.9;
		road_184.body.setOffset(10, 11);
		roads_layer.add(road_184);

		// road_185
		const road_185 = new RoadPrefab(this, 756, 455);
		road_185.scaleX = 0.9;
		road_185.scaleY = 0.9;
		road_185.body.setOffset(10, 11);
		roads_layer.add(road_185);

		// road_186
		const road_186 = new RoadPrefab(this, 794, 455);
		road_186.scaleX = 0.9;
		road_186.scaleY = 0.9;
		road_186.body.setOffset(10, 11);
		roads_layer.add(road_186);

		// road_187
		const road_187 = new RoadPrefab(this, 831, 455);
		road_187.scaleX = 0.9;
		road_187.scaleY = 0.9;
		road_187.body.setOffset(10, 11);
		roads_layer.add(road_187);

		// road_188
		const road_188 = new RoadPrefab(this, 868, 455);
		road_188.scaleX = 0.9;
		road_188.scaleY = 0.9;
		road_188.body.setOffset(10, 11);
		roads_layer.add(road_188);

		// road_189
		const road_189 = new RoadPrefab(this, 906, 455);
		road_189.scaleX = 0.9;
		road_189.scaleY = 0.9;
		road_189.body.setOffset(10, 11);
		roads_layer.add(road_189);

		// road_190
		const road_190 = new RoadPrefab(this, 943, 455);
		road_190.scaleX = 0.9;
		road_190.scaleY = 0.9;
		road_190.body.setOffset(10, 11);
		roads_layer.add(road_190);

		// road_191
		const road_191 = new RoadPrefab(this, 82, 493);
		road_191.scaleX = 0.9;
		road_191.scaleY = 0.9;
		road_191.body.setOffset(10, 11);
		roads_layer.add(road_191);

		// road_192
		const road_192 = new RoadPrefab(this, 119, 493);
		road_192.scaleX = 0.9;
		road_192.scaleY = 0.9;
		road_192.body.setOffset(10, 11);
		roads_layer.add(road_192);

		// road_193
		const road_193 = new RoadPrefab(this, 156, 493);
		road_193.scaleX = 0.9;
		road_193.scaleY = 0.9;
		road_193.body.setOffset(10, 11);
		roads_layer.add(road_193);

		// road_194
		const road_194 = new RoadPrefab(this, 194, 493);
		road_194.scaleX = 0.9;
		road_194.scaleY = 0.9;
		road_194.body.setOffset(10, 11);
		roads_layer.add(road_194);

		// road_195
		const road_195 = new RoadPrefab(this, 232, 493);
		road_195.scaleX = 0.9;
		road_195.scaleY = 0.9;
		road_195.body.setOffset(10, 11);
		roads_layer.add(road_195);

		// road_196
		const road_196 = new RoadPrefab(this, 269, 493);
		road_196.scaleX = 0.9;
		road_196.scaleY = 0.9;
		road_196.body.setOffset(10, 11);
		roads_layer.add(road_196);

		// road_197
		const road_197 = new RoadPrefab(this, 306, 493);
		road_197.scaleX = 0.9;
		road_197.scaleY = 0.9;
		road_197.body.setOffset(10, 11);
		roads_layer.add(road_197);

		// road_199
		const road_199 = new RoadPrefab(this, 344, 493);
		road_199.scaleX = 0.9;
		road_199.scaleY = 0.9;
		road_199.body.setOffset(10, 11);
		roads_layer.add(road_199);

		// road_200
		const road_200 = new RoadPrefab(this, 381, 493);
		road_200.scaleX = 0.9;
		road_200.scaleY = 0.9;
		road_200.body.setOffset(10, 11);
		roads_layer.add(road_200);

		// road_201
		const road_201 = new RoadPrefab(this, 419, 493);
		road_201.scaleX = 0.9;
		road_201.scaleY = 0.9;
		road_201.body.setOffset(10, 11);
		roads_layer.add(road_201);

		// road_202
		const road_202 = new RoadPrefab(this, 456, 493);
		road_202.scaleX = 0.9;
		road_202.scaleY = 0.9;
		road_202.body.setOffset(10, 11);
		roads_layer.add(road_202);

		// road_203
		const road_203 = new RoadPrefab(this, 493, 493);
		road_203.scaleX = 0.9;
		road_203.scaleY = 0.9;
		road_203.body.setOffset(10, 11);
		roads_layer.add(road_203);

		// road_204
		const road_204 = new RoadPrefab(this, 531, 493);
		road_204.scaleX = 0.9;
		road_204.scaleY = 0.9;
		road_204.body.setOffset(10, 11);
		roads_layer.add(road_204);

		// road_205
		const road_205 = new RoadPrefab(this, 569, 493);
		road_205.scaleX = 0.9;
		road_205.scaleY = 0.9;
		road_205.body.setOffset(10, 11);
		roads_layer.add(road_205);

		// road_206
		const road_206 = new RoadPrefab(this, 606, 493);
		road_206.scaleX = 0.9;
		road_206.scaleY = 0.9;
		road_206.body.setOffset(10, 11);
		roads_layer.add(road_206);

		// road_207
		const road_207 = new RoadPrefab(this, 643, 493);
		road_207.scaleX = 0.9;
		road_207.scaleY = 0.9;
		road_207.body.setOffset(10, 11);
		roads_layer.add(road_207);

		// road_208
		const road_208 = new RoadPrefab(this, 681, 493);
		road_208.scaleX = 0.9;
		road_208.scaleY = 0.9;
		road_208.body.setOffset(10, 11);
		roads_layer.add(road_208);

		// road_209
		const road_209 = new RoadPrefab(this, 718, 493);
		road_209.scaleX = 0.9;
		road_209.scaleY = 0.9;
		road_209.body.setOffset(10, 11);
		roads_layer.add(road_209);

		// road_210
		const road_210 = new RoadPrefab(this, 756, 493);
		road_210.scaleX = 0.9;
		road_210.scaleY = 0.9;
		road_210.body.setOffset(10, 11);
		roads_layer.add(road_210);

		// road_211
		const road_211 = new RoadPrefab(this, 794, 493);
		road_211.scaleX = 0.9;
		road_211.scaleY = 0.9;
		road_211.body.setOffset(10, 11);
		roads_layer.add(road_211);

		// road_212
		const road_212 = new RoadPrefab(this, 831, 493);
		road_212.scaleX = 0.9;
		road_212.scaleY = 0.9;
		road_212.body.setOffset(10, 11);
		roads_layer.add(road_212);

		// road_213
		const road_213 = new RoadPrefab(this, 868, 493);
		road_213.scaleX = 0.9;
		road_213.scaleY = 0.9;
		road_213.body.setOffset(10, 11);
		roads_layer.add(road_213);

		// road_214
		const road_214 = new RoadPrefab(this, 906, 493);
		road_214.scaleX = 0.9;
		road_214.scaleY = 0.9;
		road_214.body.setOffset(10, 11);
		roads_layer.add(road_214);

		// road_215
		const road_215 = new RoadPrefab(this, 943, 493);
		road_215.scaleX = 0.9;
		road_215.scaleY = 0.9;
		road_215.body.setOffset(10, 11);
		roads_layer.add(road_215);

		// road_216
		const road_216 = new RoadPrefab(this, 81, 530);
		road_216.scaleX = 0.9;
		road_216.scaleY = 0.9;
		road_216.body.setOffset(10, 11);
		roads_layer.add(road_216);

		// road_217
		const road_217 = new RoadPrefab(this, 118, 530);
		road_217.scaleX = 0.9;
		road_217.scaleY = 0.9;
		road_217.body.setOffset(10, 11);
		roads_layer.add(road_217);

		// road_218
		const road_218 = new RoadPrefab(this, 155, 530);
		road_218.scaleX = 0.9;
		road_218.scaleY = 0.9;
		road_218.body.setOffset(10, 11);
		roads_layer.add(road_218);

		// road_219
		const road_219 = new RoadPrefab(this, 193, 530);
		road_219.scaleX = 0.9;
		road_219.scaleY = 0.9;
		road_219.body.setOffset(10, 11);
		roads_layer.add(road_219);

		// road_220
		const road_220 = new RoadPrefab(this, 231, 530);
		road_220.scaleX = 0.9;
		road_220.scaleY = 0.9;
		road_220.body.setOffset(10, 11);
		roads_layer.add(road_220);

		// road_221
		const road_221 = new RoadPrefab(this, 268, 530);
		road_221.scaleX = 0.9;
		road_221.scaleY = 0.9;
		road_221.body.setOffset(10, 11);
		roads_layer.add(road_221);

		// road_222
		const road_222 = new RoadPrefab(this, 305, 530);
		road_222.scaleX = 0.9;
		road_222.scaleY = 0.9;
		road_222.body.setOffset(10, 11);
		roads_layer.add(road_222);

		// road_223
		const road_223 = new RoadPrefab(this, 343, 530);
		road_223.scaleX = 0.9;
		road_223.scaleY = 0.9;
		road_223.body.setOffset(10, 11);
		roads_layer.add(road_223);

		// road_224
		const road_224 = new RoadPrefab(this, 380, 530);
		road_224.scaleX = 0.9;
		road_224.scaleY = 0.9;
		road_224.body.setOffset(10, 11);
		roads_layer.add(road_224);

		// road_225
		const road_225 = new RoadPrefab(this, 418, 530);
		road_225.scaleX = 0.9;
		road_225.scaleY = 0.9;
		road_225.body.setOffset(10, 11);
		roads_layer.add(road_225);

		// road_226
		const road_226 = new RoadPrefab(this, 455, 530);
		road_226.scaleX = 0.9;
		road_226.scaleY = 0.9;
		road_226.body.setOffset(10, 11);
		roads_layer.add(road_226);

		// road_227
		const road_227 = new RoadPrefab(this, 492, 530);
		road_227.scaleX = 0.9;
		road_227.scaleY = 0.9;
		road_227.body.setOffset(10, 11);
		roads_layer.add(road_227);

		// road_228
		const road_228 = new RoadPrefab(this, 530, 530);
		road_228.scaleX = 0.9;
		road_228.scaleY = 0.9;
		road_228.body.setOffset(10, 11);
		roads_layer.add(road_228);

		// road_229
		const road_229 = new RoadPrefab(this, 568, 530);
		road_229.scaleX = 0.9;
		road_229.scaleY = 0.9;
		road_229.body.setOffset(10, 11);
		roads_layer.add(road_229);

		// road_230
		const road_230 = new RoadPrefab(this, 605, 530);
		road_230.scaleX = 0.9;
		road_230.scaleY = 0.9;
		road_230.body.setOffset(10, 11);
		roads_layer.add(road_230);

		// road_231
		const road_231 = new RoadPrefab(this, 642, 530);
		road_231.scaleX = 0.9;
		road_231.scaleY = 0.9;
		road_231.body.setOffset(10, 11);
		roads_layer.add(road_231);

		// road_232
		const road_232 = new RoadPrefab(this, 680, 530);
		road_232.scaleX = 0.9;
		road_232.scaleY = 0.9;
		road_232.body.setOffset(10, 11);
		roads_layer.add(road_232);

		// road_233
		const road_233 = new RoadPrefab(this, 717, 530);
		road_233.scaleX = 0.9;
		road_233.scaleY = 0.9;
		road_233.body.setOffset(10, 11);
		roads_layer.add(road_233);

		// road_234
		const road_234 = new RoadPrefab(this, 755, 530);
		road_234.scaleX = 0.9;
		road_234.scaleY = 0.9;
		road_234.body.setOffset(10, 11);
		roads_layer.add(road_234);

		// road_235
		const road_235 = new RoadPrefab(this, 793, 530);
		road_235.scaleX = 0.9;
		road_235.scaleY = 0.9;
		road_235.body.setOffset(10, 11);
		roads_layer.add(road_235);

		// road_236
		const road_236 = new RoadPrefab(this, 830, 530);
		road_236.scaleX = 0.9;
		road_236.scaleY = 0.9;
		road_236.body.setOffset(10, 11);
		roads_layer.add(road_236);

		// road_237
		const road_237 = new RoadPrefab(this, 867, 530);
		road_237.scaleX = 0.9;
		road_237.scaleY = 0.9;
		road_237.body.setOffset(10, 11);
		roads_layer.add(road_237);

		// road_238
		const road_238 = new RoadPrefab(this, 905, 530);
		road_238.scaleX = 0.9;
		road_238.scaleY = 0.9;
		road_238.body.setOffset(10, 11);
		roads_layer.add(road_238);

		// road_239
		const road_239 = new RoadPrefab(this, 942, 530);
		road_239.scaleX = 0.9;
		road_239.scaleY = 0.9;
		road_239.body.setOffset(10, 11);
		roads_layer.add(road_239);

		// road_240
		const road_240 = new RoadPrefab(this, 83, 569);
		road_240.scaleX = 0.9;
		road_240.scaleY = 0.9;
		road_240.body.setOffset(10, 11);
		roads_layer.add(road_240);

		// road_241
		const road_241 = new RoadPrefab(this, 120, 569);
		road_241.scaleX = 0.9;
		road_241.scaleY = 0.9;
		road_241.body.setOffset(10, 11);
		roads_layer.add(road_241);

		// road_242
		const road_242 = new RoadPrefab(this, 157, 569);
		road_242.scaleX = 0.9;
		road_242.scaleY = 0.9;
		road_242.body.setOffset(10, 11);
		roads_layer.add(road_242);

		// road_243
		const road_243 = new RoadPrefab(this, 195, 569);
		road_243.scaleX = 0.9;
		road_243.scaleY = 0.9;
		road_243.body.setOffset(10, 11);
		roads_layer.add(road_243);

		// road_244
		const road_244 = new RoadPrefab(this, 233, 569);
		road_244.scaleX = 0.9;
		road_244.scaleY = 0.9;
		road_244.body.setOffset(10, 11);
		roads_layer.add(road_244);

		// road_245
		const road_245 = new RoadPrefab(this, 270, 569);
		road_245.scaleX = 0.9;
		road_245.scaleY = 0.9;
		road_245.body.setOffset(10, 11);
		roads_layer.add(road_245);

		// road_246
		const road_246 = new RoadPrefab(this, 307, 569);
		road_246.scaleX = 0.9;
		road_246.scaleY = 0.9;
		road_246.body.setOffset(10, 11);
		roads_layer.add(road_246);

		// road_247
		const road_247 = new RoadPrefab(this, 345, 569);
		road_247.scaleX = 0.9;
		road_247.scaleY = 0.9;
		road_247.body.setOffset(10, 11);
		roads_layer.add(road_247);

		// road_248
		const road_248 = new RoadPrefab(this, 382, 569);
		road_248.scaleX = 0.9;
		road_248.scaleY = 0.9;
		road_248.body.setOffset(10, 11);
		roads_layer.add(road_248);

		// road_249
		const road_249 = new RoadPrefab(this, 420, 569);
		road_249.scaleX = 0.9;
		road_249.scaleY = 0.9;
		road_249.body.setOffset(10, 11);
		roads_layer.add(road_249);

		// road_250
		const road_250 = new RoadPrefab(this, 457, 569);
		road_250.scaleX = 0.9;
		road_250.scaleY = 0.9;
		road_250.body.setOffset(10, 11);
		roads_layer.add(road_250);

		// road_251
		const road_251 = new RoadPrefab(this, 494, 569);
		road_251.scaleX = 0.9;
		road_251.scaleY = 0.9;
		road_251.body.setOffset(10, 11);
		roads_layer.add(road_251);

		// road_252
		const road_252 = new RoadPrefab(this, 532, 569);
		road_252.scaleX = 0.9;
		road_252.scaleY = 0.9;
		road_252.body.setOffset(10, 11);
		roads_layer.add(road_252);

		// road_253
		const road_253 = new RoadPrefab(this, 570, 569);
		road_253.scaleX = 0.9;
		road_253.scaleY = 0.9;
		road_253.body.setOffset(10, 11);
		roads_layer.add(road_253);

		// road_254
		const road_254 = new RoadPrefab(this, 607, 569);
		road_254.scaleX = 0.9;
		road_254.scaleY = 0.9;
		road_254.body.setOffset(10, 11);
		roads_layer.add(road_254);

		// road_255
		const road_255 = new RoadPrefab(this, 644, 569);
		road_255.scaleX = 0.9;
		road_255.scaleY = 0.9;
		road_255.body.setOffset(10, 11);
		roads_layer.add(road_255);

		// road_256
		const road_256 = new RoadPrefab(this, 682, 569);
		road_256.scaleX = 0.9;
		road_256.scaleY = 0.9;
		road_256.body.setOffset(10, 11);
		roads_layer.add(road_256);

		// road_257
		const road_257 = new RoadPrefab(this, 719, 569);
		road_257.scaleX = 0.9;
		road_257.scaleY = 0.9;
		road_257.body.setOffset(10, 11);
		roads_layer.add(road_257);

		// road_258
		const road_258 = new RoadPrefab(this, 757, 569);
		road_258.scaleX = 0.9;
		road_258.scaleY = 0.9;
		road_258.body.setOffset(10, 11);
		roads_layer.add(road_258);

		// road_259
		const road_259 = new RoadPrefab(this, 795, 569);
		road_259.scaleX = 0.9;
		road_259.scaleY = 0.9;
		road_259.body.setOffset(10, 11);
		roads_layer.add(road_259);

		// road_260
		const road_260 = new RoadPrefab(this, 832, 569);
		road_260.scaleX = 0.9;
		road_260.scaleY = 0.9;
		road_260.body.setOffset(10, 11);
		roads_layer.add(road_260);

		// road_261
		const road_261 = new RoadPrefab(this, 869, 569);
		road_261.scaleX = 0.9;
		road_261.scaleY = 0.9;
		road_261.body.setOffset(10, 11);
		roads_layer.add(road_261);

		// road_262
		const road_262 = new RoadPrefab(this, 907, 569);
		road_262.scaleX = 0.9;
		road_262.scaleY = 0.9;
		road_262.body.setOffset(10, 11);
		roads_layer.add(road_262);

		// road_263
		const road_263 = new RoadPrefab(this, 944, 569);
		road_263.scaleX = 0.9;
		road_263.scaleY = 0.9;
		road_263.body.setOffset(10, 11);
		roads_layer.add(road_263);

		// footer
		this.add.image(513, 701, "footer");

		// header
		this.add.image(513, 78, "header");

		// level_1
		this.add.image(512, 384, "Level 2");

		// player
		const player = new Hero(this, 82, 234);
		this.add.existing(player);
		player.scaleX = 0.5;
		player.scaleY = 0.5;

		// walls_layer
		const walls_layer = this.add.layer();

		// walls_level_3_0000_Layer_1
		const walls_level_3_0000_Layer_1 = this.physics.add.image(513, 179, "walls_level_3_0000_Layer-1");
		walls_level_3_0000_Layer_1.alpha = 0;
		walls_level_3_0000_Layer_1.alphaTopLeft = 0;
		walls_level_3_0000_Layer_1.alphaTopRight = 0;
		walls_level_3_0000_Layer_1.alphaBottomLeft = 0;
		walls_level_3_0000_Layer_1.alphaBottomRight = 0;
		walls_level_3_0000_Layer_1.body.immovable = true;
		walls_level_3_0000_Layer_1.body.setSize(903, 8, false);
		walls_layer.add(walls_level_3_0000_Layer_1);

		// walls_level_3_0001_Layer_2
		const walls_level_3_0001_Layer_2 = this.physics.add.image(63, 383, "walls_level_3_0001_Layer-2");
		walls_level_3_0001_Layer_2.alpha = 0;
		walls_level_3_0001_Layer_2.alphaTopLeft = 0;
		walls_level_3_0001_Layer_2.alphaTopRight = 0;
		walls_level_3_0001_Layer_2.alphaBottomLeft = 0;
		walls_level_3_0001_Layer_2.alphaBottomRight = 0;
		walls_level_3_0001_Layer_2.body.immovable = true;
		walls_level_3_0001_Layer_2.body.setSize(8, 411, false);
		walls_layer.add(walls_level_3_0001_Layer_2);

		// walls_level_3_0001_Layer
		const walls_level_3_0001_Layer = this.physics.add.image(962, 383, "walls_level_3_0001_Layer-2");
		walls_level_3_0001_Layer.alpha = 0;
		walls_level_3_0001_Layer.alphaTopLeft = 0;
		walls_level_3_0001_Layer.alphaTopRight = 0;
		walls_level_3_0001_Layer.alphaBottomLeft = 0;
		walls_level_3_0001_Layer.alphaBottomRight = 0;
		walls_level_3_0001_Layer.body.immovable = true;
		walls_level_3_0001_Layer.body.setSize(8, 411, false);
		walls_layer.add(walls_level_3_0001_Layer);

		// walls_level_3_0000_Layer
		const walls_level_3_0000_Layer = this.physics.add.image(516, 590, "walls_level_3_0000_Layer-1");
		walls_level_3_0000_Layer.alpha = 0;
		walls_level_3_0000_Layer.alphaTopLeft = 0;
		walls_level_3_0000_Layer.alphaTopRight = 0;
		walls_level_3_0000_Layer.alphaBottomLeft = 0;
		walls_level_3_0000_Layer.alphaBottomRight = 0;
		walls_level_3_0000_Layer.body.immovable = true;
		walls_level_3_0000_Layer.body.setSize(903, 8, false);
		walls_layer.add(walls_level_3_0000_Layer);

		// walls_level_3_0002_Layer_3
		const walls_level_3_0002_Layer_3 = this.physics.add.image(102, 236, "walls_level_3_0002_Layer-3");
		walls_level_3_0002_Layer_3.alpha = 0;
		walls_level_3_0002_Layer_3.alphaTopLeft = 0;
		walls_level_3_0002_Layer_3.alphaTopRight = 0;
		walls_level_3_0002_Layer_3.alphaBottomLeft = 0;
		walls_level_3_0002_Layer_3.alphaBottomRight = 0;
		walls_level_3_0002_Layer_3.body.immovable = true;
		walls_level_3_0002_Layer_3.body.setSize(6, 41, false);
		walls_layer.add(walls_level_3_0002_Layer_3);

		// walls_level_3_0004_Layer_5
		const walls_level_3_0004_Layer_5 = this.physics.add.image(177, 217, "walls_level_3_0004_Layer-5");
		walls_level_3_0004_Layer_5.alpha = 0;
		walls_level_3_0004_Layer_5.alphaTopLeft = 0;
		walls_level_3_0004_Layer_5.alphaTopRight = 0;
		walls_level_3_0004_Layer_5.alphaBottomLeft = 0;
		walls_level_3_0004_Layer_5.alphaBottomRight = 0;
		walls_level_3_0004_Layer_5.body.immovable = true;
		walls_level_3_0004_Layer_5.body.setSize(8, 78, false);
		walls_layer.add(walls_level_3_0004_Layer_5);

		// walls_level_3_0005_Layer_6
		const walls_level_3_0005_Layer_6 = this.physics.add.image(194, 253, "walls_level_3_0005_Layer-6");
		walls_level_3_0005_Layer_6.alpha = 0;
		walls_level_3_0005_Layer_6.alphaTopLeft = 0;
		walls_level_3_0005_Layer_6.alphaTopRight = 0;
		walls_level_3_0005_Layer_6.alphaBottomLeft = 0;
		walls_level_3_0005_Layer_6.alphaBottomRight = 0;
		walls_level_3_0005_Layer_6.body.immovable = true;
		walls_level_3_0005_Layer_6.body.setSize(29, 6, false);
		walls_layer.add(walls_level_3_0005_Layer_6);

		// walls_level_3_0006_Layer_7
		const walls_level_3_0006_Layer_7 = this.physics.add.image(102, 493, "walls_level_3_0006_Layer-7");
		walls_level_3_0006_Layer_7.alpha = 0;
		walls_level_3_0006_Layer_7.alphaTopLeft = 0;
		walls_level_3_0006_Layer_7.alphaTopRight = 0;
		walls_level_3_0006_Layer_7.alphaBottomLeft = 0;
		walls_level_3_0006_Layer_7.alphaBottomRight = 0;
		walls_level_3_0006_Layer_7.body.immovable = true;
		walls_level_3_0006_Layer_7.body.setSize(67, 188, false);
		walls_layer.add(walls_level_3_0006_Layer_7);

		// walls_level_3_0007_Layer_8
		const walls_level_3_0007_Layer_8 = this.physics.add.image(139, 401, "walls_level_3_0007_Layer-8");
		walls_level_3_0007_Layer_8.alpha = 0;
		walls_level_3_0007_Layer_8.alphaTopLeft = 0;
		walls_level_3_0007_Layer_8.alphaTopRight = 0;
		walls_level_3_0007_Layer_8.alphaBottomLeft = 0;
		walls_level_3_0007_Layer_8.alphaBottomRight = 0;
		walls_level_3_0007_Layer_8.body.immovable = true;
		walls_level_3_0007_Layer_8.body.setSize(7, 372, false);
		walls_layer.add(walls_level_3_0007_Layer_8);

		// walls_level_3_0008_Layer_9
		const walls_level_3_0008_Layer_9 = this.physics.add.image(284, 217, "walls_level_3_0008_Layer-9");
		walls_level_3_0008_Layer_9.alpha = 0;
		walls_level_3_0008_Layer_9.alphaTopLeft = 0;
		walls_level_3_0008_Layer_9.alphaTopRight = 0;
		walls_level_3_0008_Layer_9.alphaBottomLeft = 0;
		walls_level_3_0008_Layer_9.alphaBottomRight = 0;
		walls_level_3_0008_Layer_9.body.immovable = true;
		walls_level_3_0008_Layer_9.body.setSize(149, 7, false);
		walls_layer.add(walls_level_3_0008_Layer_9);

		// walls_level_3_0009_Layer_10
		const walls_level_3_0009_Layer_10 = this.physics.add.image(212, 239, "walls_level_3_0009_Layer-10");
		walls_level_3_0009_Layer_10.alpha = 0;
		walls_level_3_0009_Layer_10.alphaTopLeft = 0;
		walls_level_3_0009_Layer_10.alphaTopRight = 0;
		walls_level_3_0009_Layer_10.alphaBottomLeft = 0;
		walls_level_3_0009_Layer_10.alphaBottomRight = 0;
		walls_level_3_0009_Layer_10.body.immovable = true;
		walls_level_3_0009_Layer_10.body.setSize(6, 34, false);
		walls_layer.add(walls_level_3_0009_Layer_10);

		// walls_level_3_0010_Layer_11
		const walls_level_3_0010_Layer_11 = this.physics.add.image(101, 325, "walls_level_3_0010_Layer-11");
		walls_level_3_0010_Layer_11.alpha = 0;
		walls_level_3_0010_Layer_11.alphaTopLeft = 0;
		walls_level_3_0010_Layer_11.alphaTopRight = 0;
		walls_level_3_0010_Layer_11.alphaBottomLeft = 0;
		walls_level_3_0010_Layer_11.alphaBottomRight = 0;
		walls_level_3_0010_Layer_11.body.immovable = true;
		walls_level_3_0010_Layer_11.body.setSize(7, 74, false);
		walls_layer.add(walls_level_3_0010_Layer_11);

		// walls_level_3_0011_Layer_12
		const walls_level_3_0011_Layer_12 = this.physics.add.image(120, 292, "walls_level_3_0011_Layer-12");
		walls_level_3_0011_Layer_12.alpha = 0;
		walls_level_3_0011_Layer_12.alphaTopLeft = 0;
		walls_level_3_0011_Layer_12.alphaTopRight = 0;
		walls_level_3_0011_Layer_12.alphaBottomLeft = 0;
		walls_level_3_0011_Layer_12.alphaBottomRight = 0;
		walls_level_3_0011_Layer_12.body.immovable = true;
		walls_level_3_0011_Layer_12.body.setSize(36, 8, false);
		walls_layer.add(walls_level_3_0011_Layer_12);

		// walls_level_3_0012_Layer_13
		const walls_level_3_0012_Layer_13 = this.physics.add.image(176, 343, "walls_level_3_0012_Layer-13");
		walls_level_3_0012_Layer_13.alpha = 0;
		walls_level_3_0012_Layer_13.alphaTopLeft = 0;
		walls_level_3_0012_Layer_13.alphaTopRight = 0;
		walls_level_3_0012_Layer_13.alphaBottomLeft = 0;
		walls_level_3_0012_Layer_13.alphaBottomRight = 0;
		walls_level_3_0012_Layer_13.body.immovable = true;
		walls_level_3_0012_Layer_13.body.setSize(6, 36, false);
		walls_layer.add(walls_level_3_0012_Layer_13);

		// walls_level_3_0013_Layer_14
		const walls_level_3_0013_Layer_14 = this.physics.add.image(217, 291, "walls_level_3_0013_Layer-14");
		walls_level_3_0013_Layer_14.alpha = 0;
		walls_level_3_0013_Layer_14.alphaTopLeft = 0;
		walls_level_3_0013_Layer_14.alphaTopRight = 0;
		walls_level_3_0013_Layer_14.alphaBottomLeft = 0;
		walls_level_3_0013_Layer_14.alphaBottomRight = 0;
		walls_level_3_0013_Layer_14.body.immovable = true;
		walls_level_3_0013_Layer_14.body.setSize(148, 6, false);
		walls_layer.add(walls_level_3_0013_Layer_14);

		// walls_level_3_0014_Layer_15
		const walls_level_3_0014_Layer_15 = this.physics.add.image(249, 361, "walls_level_3_0014_Layer-15");
		walls_level_3_0014_Layer_15.alpha = 0;
		walls_level_3_0014_Layer_15.alphaTopLeft = 0;
		walls_level_3_0014_Layer_15.alphaTopRight = 0;
		walls_level_3_0014_Layer_15.alphaBottomLeft = 0;
		walls_level_3_0014_Layer_15.alphaBottomRight = 0;
		walls_level_3_0014_Layer_15.body.immovable = true;
		walls_level_3_0014_Layer_15.body.setSize(6, 71, false);
		walls_layer.add(walls_level_3_0014_Layer_15);

		// walls_level_3_0015_Layer_16
		const walls_level_3_0015_Layer_16 = this.physics.add.image(233, 515, "walls_level_3_0015_Layer-16");
		walls_level_3_0015_Layer_16.alpha = 0;
		walls_level_3_0015_Layer_16.alphaTopLeft = 0;
		walls_level_3_0015_Layer_16.alphaTopRight = 0;
		walls_level_3_0015_Layer_16.alphaBottomLeft = 0;
		walls_level_3_0015_Layer_16.alphaBottomRight = 0;
		walls_level_3_0015_Layer_16.body.immovable = true;
		walls_level_3_0015_Layer_16.body.setSize(187, 7, false);
		walls_layer.add(walls_level_3_0015_Layer_16);

		// walls_level_3_0016_Layer_17
		const walls_level_3_0016_Layer_17 = this.physics.add.image(287, 309, "walls_level_3_0016_Layer-17");
		walls_level_3_0016_Layer_17.alpha = 0;
		walls_level_3_0016_Layer_17.alphaTopLeft = 0;
		walls_level_3_0016_Layer_17.alphaTopRight = 0;
		walls_level_3_0016_Layer_17.alphaBottomLeft = 0;
		walls_level_3_0016_Layer_17.alphaBottomRight = 0;
		walls_level_3_0016_Layer_17.body.immovable = true;
		walls_level_3_0016_Layer_17.body.setSize(26, 35, false);
		walls_layer.add(walls_level_3_0016_Layer_17);

		// walls_level_3_0017_Layer_18
		const walls_level_3_0017_Layer_18 = this.physics.add.image(439, 216, "walls_level_3_0017_Layer-18");
		walls_level_3_0017_Layer_18.alpha = 0;
		walls_level_3_0017_Layer_18.alphaTopLeft = 0;
		walls_level_3_0017_Layer_18.alphaTopRight = 0;
		walls_level_3_0017_Layer_18.alphaBottomLeft = 0;
		walls_level_3_0017_Layer_18.alphaBottomRight = 0;
		walls_level_3_0017_Layer_18.body.immovable = true;
		walls_level_3_0017_Layer_18.body.setSize(72, 7, false);
		walls_layer.add(walls_level_3_0017_Layer_18);

		// walls_level_3_0009_Layer
		const walls_level_3_0009_Layer = this.physics.add.image(399, 202, "walls_level_3_0009_Layer-10");
		walls_level_3_0009_Layer.alpha = 0;
		walls_level_3_0009_Layer.alphaTopLeft = 0;
		walls_level_3_0009_Layer.alphaTopRight = 0;
		walls_level_3_0009_Layer.alphaBottomLeft = 0;
		walls_level_3_0009_Layer.alphaBottomRight = 0;
		walls_level_3_0009_Layer.body.immovable = true;
		walls_level_3_0009_Layer.body.setSize(6, 34, false);
		walls_layer.add(walls_level_3_0009_Layer);

		// walls_level_3_0017_Layer
		const walls_level_3_0017_Layer = this.physics.add.image(284, 253, "walls_level_3_0017_Layer-18");
		walls_level_3_0017_Layer.alpha = 0;
		walls_level_3_0017_Layer.alphaTopLeft = 0;
		walls_level_3_0017_Layer.alphaTopRight = 0;
		walls_level_3_0017_Layer.alphaBottomLeft = 0;
		walls_level_3_0017_Layer.alphaBottomRight = 0;
		walls_level_3_0017_Layer.body.immovable = true;
		walls_level_3_0017_Layer.body.setSize(72, 7, false);
		walls_layer.add(walls_level_3_0017_Layer);

		// walls_level_3_0018_Layer_19
		const walls_level_3_0018_Layer_19 = this.physics.add.image(323, 309, "walls_level_3_0018_Layer-19");
		walls_level_3_0018_Layer_19.alpha = 0;
		walls_level_3_0018_Layer_19.alphaTopLeft = 0;
		walls_level_3_0018_Layer_19.alphaTopRight = 0;
		walls_level_3_0018_Layer_19.alphaBottomLeft = 0;
		walls_level_3_0018_Layer_19.alphaBottomRight = 0;
		walls_level_3_0018_Layer_19.body.immovable = true;
		walls_level_3_0018_Layer_19.body.setSize(7, 119, false);
		walls_layer.add(walls_level_3_0018_Layer_19);

		// walls_level_3_0019_Layer_20
		const walls_level_3_0019_Layer_20 = this.physics.add.image(287, 365, "walls_level_3_0019_Layer-20");
		walls_level_3_0019_Layer_20.alpha = 0;
		walls_level_3_0019_Layer_20.alphaTopLeft = 0;
		walls_level_3_0019_Layer_20.alphaTopRight = 0;
		walls_level_3_0019_Layer_20.alphaBottomLeft = 0;
		walls_level_3_0019_Layer_20.alphaBottomRight = 0;
		walls_level_3_0019_Layer_20.body.immovable = true;
		walls_level_3_0019_Layer_20.body.setSize(68, 6, false);
		walls_layer.add(walls_level_3_0019_Layer_20);

		// walls_level_3_0020_Layer_21
		const walls_level_3_0020_Layer_21 = this.physics.add.image(193, 364, "walls_level_3_0020_Layer-21");
		walls_level_3_0020_Layer_21.alpha = 0;
		walls_level_3_0020_Layer_21.alphaTopLeft = 0;
		walls_level_3_0020_Layer_21.alphaTopRight = 0;
		walls_level_3_0020_Layer_21.alphaBottomLeft = 0;
		walls_level_3_0020_Layer_21.alphaBottomRight = 0;
		walls_level_3_0020_Layer_21.body.immovable = true;
		walls_level_3_0020_Layer_21.body.setSize(41, 6, false);
		walls_layer.add(walls_level_3_0020_Layer_21);

		// walls_level_3_0019_Layer
		const walls_level_3_0019_Layer = this.physics.add.image(212, 328, "walls_level_3_0019_Layer-20");
		walls_level_3_0019_Layer.alpha = 0;
		walls_level_3_0019_Layer.alphaTopLeft = 0;
		walls_level_3_0019_Layer.alphaTopRight = 0;
		walls_level_3_0019_Layer.alphaBottomLeft = 0;
		walls_level_3_0019_Layer.alphaBottomRight = 0;
		walls_level_3_0019_Layer.body.immovable = true;
		walls_level_3_0019_Layer.body.setSize(68, 6, false);
		walls_layer.add(walls_level_3_0019_Layer);

		// walls_level_3_0022_Layer_23
		const walls_level_3_0022_Layer_23 = this.physics.add.image(548, 514, "walls_level_3_0022_Layer-23");
		walls_level_3_0022_Layer_23.alpha = 0;
		walls_level_3_0022_Layer_23.alphaTopLeft = 0;
		walls_level_3_0022_Layer_23.alphaTopRight = 0;
		walls_level_3_0022_Layer_23.alphaBottomLeft = 0;
		walls_level_3_0022_Layer_23.alphaBottomRight = 0;
		walls_level_3_0022_Layer_23.body.immovable = true;
		walls_level_3_0022_Layer_23.body.setSize(67, 7, false);
		walls_layer.add(walls_level_3_0022_Layer_23);

		// walls_level_3_0023_Layer_24
		const walls_level_3_0023_Layer_24 = this.physics.add.image(175, 477, "walls_level_3_0023_Layer-24");
		walls_level_3_0023_Layer_24.alpha = 0;
		walls_level_3_0023_Layer_24.alphaTopLeft = 0;
		walls_level_3_0023_Layer_24.alphaTopRight = 0;
		walls_level_3_0023_Layer_24.alphaBottomLeft = 0;
		walls_level_3_0023_Layer_24.alphaBottomRight = 0;
		walls_level_3_0023_Layer_24.body.immovable = true;
		walls_level_3_0023_Layer_24.body.setSize(6, 72, false);
		walls_layer.add(walls_level_3_0023_Layer_24);

		// walls_level_3_0024_Layer_25
		const walls_level_3_0024_Layer_25 = this.physics.add.image(196, 402, "walls_level_3_0024_Layer-25");
		walls_level_3_0024_Layer_25.alpha = 0;
		walls_level_3_0024_Layer_25.alphaTopLeft = 0;
		walls_level_3_0024_Layer_25.alphaTopRight = 0;
		walls_level_3_0024_Layer_25.alphaBottomLeft = 0;
		walls_level_3_0024_Layer_25.alphaBottomRight = 0;
		walls_level_3_0024_Layer_25.body.immovable = true;
		walls_level_3_0024_Layer_25.body.setSize(105, 7, false);
		walls_layer.add(walls_level_3_0024_Layer_25);

		// walls_level_3_0025_Layer_26
		const walls_level_3_0025_Layer_26 = this.physics.add.image(363, 327, "walls_level_3_0025_Layer-26");
		walls_level_3_0025_Layer_26.alpha = 0;
		walls_level_3_0025_Layer_26.alphaTopLeft = 0;
		walls_level_3_0025_Layer_26.alphaTopRight = 0;
		walls_level_3_0025_Layer_26.alphaBottomLeft = 0;
		walls_level_3_0025_Layer_26.alphaBottomRight = 0;
		walls_level_3_0025_Layer_26.body.immovable = true;
		walls_level_3_0025_Layer_26.body.setSize(8, 157, false);
		walls_layer.add(walls_level_3_0025_Layer_26);

		// walls_level_3_0026_Layer_27
		const walls_level_3_0026_Layer_27 = this.physics.add.image(341, 440, "walls_level_3_0026_Layer-27");
		walls_level_3_0026_Layer_27.alpha = 0;
		walls_level_3_0026_Layer_27.alphaTopLeft = 0;
		walls_level_3_0026_Layer_27.alphaTopRight = 0;
		walls_level_3_0026_Layer_27.alphaBottomLeft = 0;
		walls_level_3_0026_Layer_27.alphaBottomRight = 0;
		walls_level_3_0026_Layer_27.body.immovable = true;
		walls_level_3_0026_Layer_27.body.setSize(111, 7, false);
		walls_layer.add(walls_level_3_0026_Layer_27);

		// walls_level_3_0027_Layer_28
		const walls_level_3_0027_Layer_28 = this.physics.add.image(308, 477, "walls_level_3_0027_Layer-28");
		walls_level_3_0027_Layer_28.alpha = 0;
		walls_level_3_0027_Layer_28.alphaTopLeft = 0;
		walls_level_3_0027_Layer_28.alphaTopRight = 0;
		walls_level_3_0027_Layer_28.alphaBottomLeft = 0;
		walls_level_3_0027_Layer_28.alphaBottomRight = 0;
		walls_level_3_0027_Layer_28.body.immovable = true;
		walls_level_3_0027_Layer_28.body.setSize(116, 7, false);
		walls_layer.add(walls_level_3_0027_Layer_28);

		// walls_level_3_0028_Layer_29
		const walls_level_3_0028_Layer_29 = this.physics.add.image(362, 494, "walls_level_3_0028_Layer-29");
		walls_level_3_0028_Layer_29.alpha = 0;
		walls_level_3_0028_Layer_29.alphaTopLeft = 0;
		walls_level_3_0028_Layer_29.alphaTopRight = 0;
		walls_level_3_0028_Layer_29.alphaBottomLeft = 0;
		walls_level_3_0028_Layer_29.alphaBottomRight = 0;
		walls_level_3_0028_Layer_29.body.immovable = true;
		walls_level_3_0028_Layer_29.body.setSize(7, 30, false);
		walls_layer.add(walls_level_3_0028_Layer_29);

		// walls_level_3_0029_Layer_30
		const walls_level_3_0029_Layer_30 = this.physics.add.image(289, 421, "walls_level_3_0029_Layer-30");
		walls_level_3_0029_Layer_30.alpha = 0;
		walls_level_3_0029_Layer_30.alphaTopLeft = 0;
		walls_level_3_0029_Layer_30.alphaTopRight = 0;
		walls_level_3_0029_Layer_30.alphaBottomLeft = 0;
		walls_level_3_0029_Layer_30.alphaBottomRight = 0;
		walls_level_3_0029_Layer_30.body.immovable = true;
		walls_level_3_0029_Layer_30.body.setSize(7, 30, false);
		walls_layer.add(walls_level_3_0029_Layer_30);

		// walls_level_3_0030_Layer_31
		const walls_level_3_0030_Layer_31 = this.physics.add.image(325, 403, "walls_level_3_0030_Layer-31");
		walls_level_3_0030_Layer_31.alpha = 0;
		walls_level_3_0030_Layer_31.alphaTopLeft = 0;
		walls_level_3_0030_Layer_31.alphaTopRight = 0;
		walls_level_3_0030_Layer_31.alphaBottomLeft = 0;
		walls_level_3_0030_Layer_31.alphaBottomRight = 0;
		walls_level_3_0030_Layer_31.body.immovable = true;
		walls_level_3_0030_Layer_31.body.setSize(79, 6, false);
		walls_layer.add(walls_level_3_0030_Layer_31);

		// walls_level_3_0031_Layer_32
		const walls_level_3_0031_Layer_32 = this.physics.add.image(324, 533, "walls_level_3_0031_Layer-32");
		walls_level_3_0031_Layer_32.alpha = 0;
		walls_level_3_0031_Layer_32.alphaTopLeft = 0;
		walls_level_3_0031_Layer_32.alphaTopRight = 0;
		walls_level_3_0031_Layer_32.alphaBottomLeft = 0;
		walls_level_3_0031_Layer_32.alphaBottomRight = 0;
		walls_level_3_0031_Layer_32.body.immovable = true;
		walls_level_3_0031_Layer_32.body.setSize(7, 44, false);
		walls_layer.add(walls_level_3_0031_Layer_32);

		// walls_level_3_0033_Layer_34
		const walls_level_3_0033_Layer_34 = this.physics.add.image(268, 552, "walls_level_3_0033_Layer-34");
		walls_level_3_0033_Layer_34.alpha = 0;
		walls_level_3_0033_Layer_34.alphaTopLeft = 0;
		walls_level_3_0033_Layer_34.alphaTopRight = 0;
		walls_level_3_0033_Layer_34.alphaBottomLeft = 0;
		walls_level_3_0033_Layer_34.alphaBottomRight = 0;
		walls_level_3_0033_Layer_34.body.immovable = true;
		walls_level_3_0033_Layer_34.body.setSize(105, 6, false);
		walls_layer.add(walls_level_3_0033_Layer_34);

		// walls_level_3_0034_Layer_36
		const walls_level_3_0034_Layer_36 = this.physics.add.image(175, 570, "walls_level_3_0034_Layer-36");
		walls_level_3_0034_Layer_36.alpha = 0;
		walls_level_3_0034_Layer_36.alphaTopLeft = 0;
		walls_level_3_0034_Layer_36.alphaTopRight = 0;
		walls_level_3_0034_Layer_36.alphaBottomLeft = 0;
		walls_level_3_0034_Layer_36.alphaBottomRight = 0;
		walls_level_3_0034_Layer_36.body.immovable = true;
		walls_level_3_0034_Layer_36.body.setSize(6, 37, false);
		walls_layer.add(walls_level_3_0034_Layer_36);

		// walls_level_3_0036_Layer_38
		const walls_level_3_0036_Layer_38 = this.physics.add.image(417, 513, "walls_level_3_0036_Layer-38");
		walls_level_3_0036_Layer_38.alpha = 0;
		walls_level_3_0036_Layer_38.alphaTopLeft = 0;
		walls_level_3_0036_Layer_38.alphaTopRight = 0;
		walls_level_3_0036_Layer_38.alphaBottomLeft = 0;
		walls_level_3_0036_Layer_38.alphaBottomRight = 0;
		walls_level_3_0036_Layer_38.body.immovable = true;
		walls_level_3_0036_Layer_38.body.setSize(116, 6, false);
		walls_layer.add(walls_level_3_0036_Layer_38);

		// walls_level_3_0037_Layer_39
		const walls_level_3_0037_Layer_39 = this.physics.add.image(425, 552, "walls_level_3_0037_Layer-39");
		walls_level_3_0037_Layer_39.alpha = 0;
		walls_level_3_0037_Layer_39.alphaTopLeft = 0;
		walls_level_3_0037_Layer_39.alphaTopRight = 0;
		walls_level_3_0037_Layer_39.alphaBottomLeft = 0;
		walls_level_3_0037_Layer_39.alphaBottomRight = 0;
		walls_level_3_0037_Layer_39.body.immovable = true;
		walls_level_3_0037_Layer_39.body.setSize(103, 7, false);
		walls_layer.add(walls_level_3_0037_Layer_39);

		// walls_level_3_0038_Layer_40
		const walls_level_3_0038_Layer_40 = this.physics.add.image(586, 514, "walls_level_3_0038_Layer-40");
		walls_level_3_0038_Layer_40.alpha = 0;
		walls_level_3_0038_Layer_40.alphaTopLeft = 0;
		walls_level_3_0038_Layer_40.alphaTopRight = 0;
		walls_level_3_0038_Layer_40.alphaBottomLeft = 0;
		walls_level_3_0038_Layer_40.alphaBottomRight = 0;
		walls_level_3_0038_Layer_40.body.immovable = true;
		walls_level_3_0038_Layer_40.body.setSize(7, 157, false);
		walls_layer.add(walls_level_3_0038_Layer_40);

		// walls_level_3_0039_Layer_41
		const walls_level_3_0039_Layer_41 = this.physics.add.image(437, 252, "walls_level_3_0039_Layer-41");
		walls_level_3_0039_Layer_41.alpha = 0;
		walls_level_3_0039_Layer_41.alphaTopLeft = 0;
		walls_level_3_0039_Layer_41.alphaTopRight = 0;
		walls_level_3_0039_Layer_41.alphaBottomLeft = 0;
		walls_level_3_0039_Layer_41.alphaBottomRight = 0;
		walls_level_3_0039_Layer_41.body.immovable = true;
		walls_level_3_0039_Layer_41.body.setSize(143, 7, false);
		walls_layer.add(walls_level_3_0039_Layer_41);

		// walls_level_3_0040_Layer_42
		const walls_level_3_0040_Layer_42 = this.physics.add.image(400, 385, "walls_level_3_0040_Layer-42");
		walls_level_3_0040_Layer_42.alpha = 0;
		walls_level_3_0040_Layer_42.alphaTopLeft = 0;
		walls_level_3_0040_Layer_42.alphaTopRight = 0;
		walls_level_3_0040_Layer_42.alphaBottomLeft = 0;
		walls_level_3_0040_Layer_42.alphaBottomRight = 0;
		walls_level_3_0040_Layer_42.body.immovable = true;
		walls_level_3_0040_Layer_42.body.setSize(7, 192, false);
		walls_layer.add(walls_level_3_0040_Layer_42);

		// walls_level_3_0041_Layer_43
		const walls_level_3_0041_Layer_43 = this.physics.add.image(440, 477, "walls_level_3_0041_Layer-43");
		walls_level_3_0041_Layer_43.alpha = 0;
		walls_level_3_0041_Layer_43.alphaTopLeft = 0;
		walls_level_3_0041_Layer_43.alphaTopRight = 0;
		walls_level_3_0041_Layer_43.alphaBottomLeft = 0;
		walls_level_3_0041_Layer_43.alphaBottomRight = 0;
		walls_level_3_0041_Layer_43.body.immovable = true;
		walls_level_3_0041_Layer_43.body.setSize(75, 7, false);
		walls_layer.add(walls_level_3_0041_Layer_43);

		// walls_level_3_0042_Layer_44
		const walls_level_3_0042_Layer_44 = this.physics.add.image(474, 404, "walls_level_3_0042_Layer-44");
		walls_level_3_0042_Layer_44.alpha = 0;
		walls_level_3_0042_Layer_44.alphaTopLeft = 0;
		walls_level_3_0042_Layer_44.alphaTopRight = 0;
		walls_level_3_0042_Layer_44.alphaBottomLeft = 0;
		walls_level_3_0042_Layer_44.alphaBottomRight = 0;
		walls_level_3_0042_Layer_44.body.immovable = true;
		walls_level_3_0042_Layer_44.body.setSize(6, 153, false);
		walls_layer.add(walls_level_3_0042_Layer_44);

		// walls_level_3_0043_Layer_45
		const walls_level_3_0043_Layer_45 = this.physics.add.image(546, 440, "walls_level_3_0043_Layer-45");
		walls_level_3_0043_Layer_45.alpha = 0;
		walls_level_3_0043_Layer_45.alphaTopLeft = 0;
		walls_level_3_0043_Layer_45.alphaTopRight = 0;
		walls_level_3_0043_Layer_45.alphaBottomLeft = 0;
		walls_level_3_0043_Layer_45.alphaBottomRight = 0;
		walls_level_3_0043_Layer_45.body.immovable = true;
		walls_level_3_0043_Layer_45.body.setSize(70, 7, false);
		walls_layer.add(walls_level_3_0043_Layer_45);

		// walls_level_3_0044_Layer_46
		const walls_level_3_0044_Layer_46 = this.physics.add.image(438, 360, "walls_level_3_0044_Layer-46");
		walls_level_3_0044_Layer_46.alpha = 0;
		walls_level_3_0044_Layer_46.alphaTopLeft = 0;
		walls_level_3_0044_Layer_46.alphaTopRight = 0;
		walls_level_3_0044_Layer_46.alphaBottomLeft = 0;
		walls_level_3_0044_Layer_46.alphaBottomRight = 0;
		walls_level_3_0044_Layer_46.body.immovable = true;
		walls_level_3_0044_Layer_46.body.setSize(7, 147, false);
		walls_layer.add(walls_level_3_0044_Layer_46);

		// walls_level_3_0045_Layer_47
		const walls_level_3_0045_Layer_47 = this.physics.add.image(512, 387, "walls_level_3_0045_Layer-47");
		walls_level_3_0045_Layer_47.alpha = 0;
		walls_level_3_0045_Layer_47.alphaTopLeft = 0;
		walls_level_3_0045_Layer_47.alphaTopRight = 0;
		walls_level_3_0045_Layer_47.alphaBottomLeft = 0;
		walls_level_3_0045_Layer_47.alphaBottomRight = 0;
		walls_level_3_0045_Layer_47.body.immovable = true;
		walls_level_3_0045_Layer_47.body.setSize(6, 111, false);
		walls_layer.add(walls_level_3_0045_Layer_47);

		// walls_level_3_0046_Layer_48
		const walls_level_3_0046_Layer_48 = this.physics.add.image(512, 235, "walls_level_3_0046_Layer-48");
		walls_level_3_0046_Layer_48.alpha = 0;
		walls_level_3_0046_Layer_48.alphaTopLeft = 0;
		walls_level_3_0046_Layer_48.alphaTopRight = 0;
		walls_level_3_0046_Layer_48.alphaBottomLeft = 0;
		walls_level_3_0046_Layer_48.alphaBottomRight = 0;
		walls_level_3_0046_Layer_48.body.immovable = true;
		walls_level_3_0046_Layer_48.body.setSize(7, 116, false);
		walls_layer.add(walls_level_3_0046_Layer_48);

		// walls_level_3_0047_Layer_49
		const walls_level_3_0047_Layer_49 = this.physics.add.image(475, 290, "walls_level_3_0047_Layer-49");
		walls_level_3_0047_Layer_49.alpha = 0;
		walls_level_3_0047_Layer_49.alphaTopLeft = 0;
		walls_level_3_0047_Layer_49.alphaTopRight = 0;
		walls_level_3_0047_Layer_49.alphaBottomLeft = 0;
		walls_level_3_0047_Layer_49.alphaBottomRight = 0;
		walls_level_3_0047_Layer_49.body.immovable = true;
		walls_level_3_0047_Layer_49.body.setSize(68, 6, false);
		walls_layer.add(walls_level_3_0047_Layer_49);

		// walls_level_3_0048_Layer_50
		const walls_level_3_0048_Layer_50 = this.physics.add.image(570, 253, "walls_level_3_0048_Layer-50");
		walls_level_3_0048_Layer_50.alpha = 0;
		walls_level_3_0048_Layer_50.alphaTopLeft = 0;
		walls_level_3_0048_Layer_50.alphaTopRight = 0;
		walls_level_3_0048_Layer_50.alphaBottomLeft = 0;
		walls_level_3_0048_Layer_50.alphaBottomRight = 0;
		walls_level_3_0048_Layer_50.body.immovable = true;
		walls_level_3_0048_Layer_50.body.setSize(41, 7, false);
		walls_layer.add(walls_level_3_0048_Layer_50);

		// walls_level_3_0048_Layer
		const walls_level_3_0048_Layer = this.physics.add.image(529, 478, "walls_level_3_0048_Layer-50");
		walls_level_3_0048_Layer.alpha = 0;
		walls_level_3_0048_Layer.alphaTopLeft = 0;
		walls_level_3_0048_Layer.alphaTopRight = 0;
		walls_level_3_0048_Layer.alphaBottomLeft = 0;
		walls_level_3_0048_Layer.alphaBottomRight = 0;
		walls_level_3_0048_Layer.body.immovable = true;
		walls_level_3_0048_Layer.body.setSize(41, 7, false);
		walls_layer.add(walls_level_3_0048_Layer);

		// walls_level_3_0049_Layer_51
		const walls_level_3_0049_Layer_51 = this.physics.add.image(512, 500, "walls_level_3_0049_Layer-51");
		walls_level_3_0049_Layer_51.alpha = 0;
		walls_level_3_0049_Layer_51.alphaTopLeft = 0;
		walls_level_3_0049_Layer_51.alphaTopRight = 0;
		walls_level_3_0049_Layer_51.alphaBottomLeft = 0;
		walls_level_3_0049_Layer_51.alphaBottomRight = 0;
		walls_level_3_0049_Layer_51.body.immovable = true;
		walls_level_3_0049_Layer_51.body.setSize(7, 37, false);
		walls_layer.add(walls_level_3_0049_Layer_51);

		// walls_level_3_0050_Layer_52
		const walls_level_3_0050_Layer_52 = this.physics.add.image(529, 552, "walls_level_3_0050_Layer-52");
		walls_level_3_0050_Layer_52.alpha = 0;
		walls_level_3_0050_Layer_52.alphaTopLeft = 0;
		walls_level_3_0050_Layer_52.alphaTopRight = 0;
		walls_level_3_0050_Layer_52.alphaBottomLeft = 0;
		walls_level_3_0050_Layer_52.alphaBottomRight = 0;
		walls_level_3_0050_Layer_52.body.immovable = true;
		walls_level_3_0050_Layer_52.body.setSize(35, 6, false);
		walls_layer.add(walls_level_3_0050_Layer_52);

		// walls_level_3_0051_Layer_53
		const walls_level_3_0051_Layer_53 = this.physics.add.image(571, 216, "walls_level_3_0051_Layer-53");
		walls_level_3_0051_Layer_53.alpha = 0;
		walls_level_3_0051_Layer_53.alphaTopLeft = 0;
		walls_level_3_0051_Layer_53.alphaTopRight = 0;
		walls_level_3_0051_Layer_53.alphaBottomLeft = 0;
		walls_level_3_0051_Layer_53.alphaBottomRight = 0;
		walls_level_3_0051_Layer_53.body.immovable = true;
		walls_level_3_0051_Layer_53.body.setSize(113, 7, false);
		walls_layer.add(walls_level_3_0051_Layer_53);

		// walls_level_3_0052_Layer_54
		const walls_level_3_0052_Layer_54 = this.physics.add.image(550, 328, "walls_level_3_0052_Layer-54");
		walls_level_3_0052_Layer_54.alpha = 0;
		walls_level_3_0052_Layer_54.alphaTopLeft = 0;
		walls_level_3_0052_Layer_54.alphaTopRight = 0;
		walls_level_3_0052_Layer_54.alphaBottomLeft = 0;
		walls_level_3_0052_Layer_54.alphaBottomRight = 0;
		walls_level_3_0052_Layer_54.body.immovable = true;
		walls_level_3_0052_Layer_54.body.setSize(7, 157, false);
		walls_layer.add(walls_level_3_0052_Layer_54);

		// walls_level_3_0053_Layer_55
		const walls_level_3_0053_Layer_55 = this.physics.add.image(605, 328, "walls_level_3_0053_Layer-55");
		walls_level_3_0053_Layer_55.alpha = 0;
		walls_level_3_0053_Layer_55.alphaTopLeft = 0;
		walls_level_3_0053_Layer_55.alphaTopRight = 0;
		walls_level_3_0053_Layer_55.alphaBottomLeft = 0;
		walls_level_3_0053_Layer_55.alphaBottomRight = 0;
		walls_level_3_0053_Layer_55.body.immovable = true;
		walls_level_3_0053_Layer_55.body.setSize(37, 8, false);
		walls_layer.add(walls_level_3_0053_Layer_55);

		// walls_level_3_0054_Layer_56
		const walls_level_3_0054_Layer_56 = this.physics.add.image(588, 343, "walls_level_3_0054_Layer-56");
		walls_level_3_0054_Layer_56.alpha = 0;
		walls_level_3_0054_Layer_56.alphaTopLeft = 0;
		walls_level_3_0054_Layer_56.alphaTopRight = 0;
		walls_level_3_0054_Layer_56.alphaBottomLeft = 0;
		walls_level_3_0054_Layer_56.alphaBottomRight = 0;
		walls_level_3_0054_Layer_56.body.immovable = true;
		walls_level_3_0054_Layer_56.body.setSize(6, 36, false);
		walls_layer.add(walls_level_3_0054_Layer_56);

		// walls_level_3_0054_Layer
		const walls_level_3_0054_Layer = this.physics.add.image(549, 567, "walls_level_3_0054_Layer-56");
		walls_level_3_0054_Layer.alpha = 0;
		walls_level_3_0054_Layer.alphaTopLeft = 0;
		walls_level_3_0054_Layer.alphaTopRight = 0;
		walls_level_3_0054_Layer.alphaBottomLeft = 0;
		walls_level_3_0054_Layer.alphaBottomRight = 0;
		walls_level_3_0054_Layer.body.immovable = true;
		walls_level_3_0054_Layer.body.setSize(6, 36, false);
		walls_layer.add(walls_level_3_0054_Layer);

		// walls_level_3_0055_Layer_57
		const walls_level_3_0055_Layer_57 = this.physics.add.image(587, 402, "walls_level_3_0055_Layer-57");
		walls_level_3_0055_Layer_57.alpha = 0;
		walls_level_3_0055_Layer_57.alphaTopLeft = 0;
		walls_level_3_0055_Layer_57.alphaTopRight = 0;
		walls_level_3_0055_Layer_57.alphaBottomLeft = 0;
		walls_level_3_0055_Layer_57.alphaBottomRight = 0;
		walls_level_3_0055_Layer_57.body.immovable = true;
		walls_level_3_0055_Layer_57.body.setSize(68, 7, false);
		walls_layer.add(walls_level_3_0055_Layer_57);

		// walls_level_3_0056_Layer_58
		const walls_level_3_0056_Layer_58 = this.physics.add.image(474, 531, "walls_level_3_0056_Layer-58");
		walls_level_3_0056_Layer_58.alpha = 0;
		walls_level_3_0056_Layer_58.alphaTopLeft = 0;
		walls_level_3_0056_Layer_58.alphaTopRight = 0;
		walls_level_3_0056_Layer_58.alphaBottomLeft = 0;
		walls_level_3_0056_Layer_58.alphaBottomRight = 0;
		walls_level_3_0056_Layer_58.body.immovable = true;
		walls_level_3_0056_Layer_58.body.setSize(6, 41, false);
		walls_layer.add(walls_level_3_0056_Layer_58);

		// walls_level_3_0058_Layer_60
		const walls_level_3_0058_Layer_60 = this.physics.add.image(624, 290, "walls_level_3_0058_Layer-60");
		walls_level_3_0058_Layer_60.alpha = 0;
		walls_level_3_0058_Layer_60.alphaTopLeft = 0;
		walls_level_3_0058_Layer_60.alphaTopRight = 0;
		walls_level_3_0058_Layer_60.alphaBottomLeft = 0;
		walls_level_3_0058_Layer_60.alphaBottomRight = 0;
		walls_level_3_0058_Layer_60.body.immovable = true;
		walls_level_3_0058_Layer_60.body.setSize(68, 7, false);
		walls_layer.add(walls_level_3_0058_Layer_60);

		// walls_level_3_0061_Layer_63
		const walls_level_3_0061_Layer_63 = this.physics.add.image(632, 455, "walls_level_3_0061_Layer-63");
		walls_level_3_0061_Layer_63.alpha = 0;
		walls_level_3_0061_Layer_63.alphaTopLeft = 0;
		walls_level_3_0061_Layer_63.alphaTopRight = 0;
		walls_level_3_0061_Layer_63.alphaBottomLeft = 0;
		walls_level_3_0061_Layer_63.alphaBottomRight = 0;
		walls_level_3_0061_Layer_63.body.immovable = true;
		walls_level_3_0061_Layer_63.body.setOffset(7, 0);
		walls_level_3_0061_Layer_63.body.setSize(9, 263, false);
		walls_layer.add(walls_level_3_0061_Layer_63);

		// walls_level_3_0062_Layer_64
		const walls_level_3_0062_Layer_64 = this.physics.add.image(732, 440, "walls_level_3_0062_Layer-64");
		walls_level_3_0062_Layer_64.alpha = 0;
		walls_level_3_0062_Layer_64.alphaTopLeft = 0;
		walls_level_3_0062_Layer_64.alphaTopRight = 0;
		walls_level_3_0062_Layer_64.alphaBottomLeft = 0;
		walls_level_3_0062_Layer_64.alphaBottomRight = 0;
		walls_level_3_0062_Layer_64.body.immovable = true;
		walls_level_3_0062_Layer_64.body.setSize(69, 6, false);
		walls_layer.add(walls_level_3_0062_Layer_64);

		// walls_level_3_0063_Layer_65
		const walls_level_3_0063_Layer_65 = this.physics.add.image(700, 364, "walls_level_3_0063_Layer-65");
		walls_level_3_0063_Layer_65.alpha = 0;
		walls_level_3_0063_Layer_65.alphaTopLeft = 0;
		walls_level_3_0063_Layer_65.alphaTopRight = 0;
		walls_level_3_0063_Layer_65.alphaBottomLeft = 0;
		walls_level_3_0063_Layer_65.alphaBottomRight = 0;
		walls_level_3_0063_Layer_65.body.immovable = true;
		walls_level_3_0063_Layer_65.body.setSize(6, 153, false);
		walls_layer.add(walls_level_3_0063_Layer_65);

		// walls_level_3_0064_Layer_66
		const walls_level_3_0064_Layer_66 = this.physics.add.image(587, 273, "walls_level_3_0064_Layer-66");
		walls_level_3_0064_Layer_66.alpha = 0;
		walls_level_3_0064_Layer_66.alphaTopLeft = 0;
		walls_level_3_0064_Layer_66.alphaTopRight = 0;
		walls_level_3_0064_Layer_66.alphaBottomLeft = 0;
		walls_level_3_0064_Layer_66.alphaBottomRight = 0;
		walls_level_3_0064_Layer_66.body.immovable = true;
		walls_level_3_0064_Layer_66.body.setSize(6, 41, false);
		walls_layer.add(walls_level_3_0064_Layer_66);

		// walls_level_3_0065_Layer_67
		const walls_level_3_0065_Layer_67 = this.physics.add.image(829, 365, "walls_level_3_0065_Layer-67");
		walls_level_3_0065_Layer_67.alpha = 0;
		walls_level_3_0065_Layer_67.alphaTopLeft = 0;
		walls_level_3_0065_Layer_67.alphaTopRight = 0;
		walls_level_3_0065_Layer_67.alphaBottomLeft = 0;
		walls_level_3_0065_Layer_67.alphaBottomRight = 0;
		walls_level_3_0065_Layer_67.body.immovable = true;
		walls_level_3_0065_Layer_67.body.setSize(191, 7, false);
		walls_layer.add(walls_level_3_0065_Layer_67);

		// walls_level_3_0066_Layer_68
		const walls_level_3_0066_Layer_68 = this.physics.add.image(738, 386, "walls_level_3_0066_Layer-68");
		walls_level_3_0066_Layer_68.alpha = 0;
		walls_level_3_0066_Layer_68.alphaTopLeft = 0;
		walls_level_3_0066_Layer_68.alphaTopRight = 0;
		walls_level_3_0066_Layer_68.alphaBottomLeft = 0;
		walls_level_3_0066_Layer_68.alphaBottomRight = 0;
		walls_level_3_0066_Layer_68.body.immovable = true;
		walls_level_3_0066_Layer_68.body.setSize(8, 37, false);
		walls_layer.add(walls_level_3_0066_Layer_68);

		// walls_level_3_0066_Layer
		const walls_level_3_0066_Layer = this.physics.add.image(924, 571, "walls_level_3_0066_Layer-68");
		walls_level_3_0066_Layer.alpha = 0;
		walls_level_3_0066_Layer.alphaTopLeft = 0;
		walls_level_3_0066_Layer.alphaTopRight = 0;
		walls_level_3_0066_Layer.alphaBottomLeft = 0;
		walls_level_3_0066_Layer.alphaBottomRight = 0;
		walls_level_3_0066_Layer.body.immovable = true;
		walls_level_3_0066_Layer.body.setSize(8, 37, false);
		walls_layer.add(walls_level_3_0066_Layer);

		// walls_level_3_0067_Layer_69
		const walls_level_3_0067_Layer_69 = this.physics.add.image(733, 253, "walls_level_3_0067_Layer-69");
		walls_level_3_0067_Layer_69.alpha = 0;
		walls_level_3_0067_Layer_69.alphaTopLeft = 0;
		walls_level_3_0067_Layer_69.alphaTopRight = 0;
		walls_level_3_0067_Layer_69.alphaBottomLeft = 0;
		walls_level_3_0067_Layer_69.alphaBottomRight = 0;
		walls_level_3_0067_Layer_69.body.immovable = true;
		walls_level_3_0067_Layer_69.body.setSize(223, 7, false);
		walls_layer.add(walls_level_3_0067_Layer_69);

		// walls_level_3_0068_Layer_70
		const walls_level_3_0068_Layer_70 = this.physics.add.image(774, 219, "walls_level_3_0068_Layer-70");
		walls_level_3_0068_Layer_70.alpha = 0;
		walls_level_3_0068_Layer_70.alphaTopLeft = 0;
		walls_level_3_0068_Layer_70.alphaTopRight = 0;
		walls_level_3_0068_Layer_70.alphaBottomLeft = 0;
		walls_level_3_0068_Layer_70.alphaBottomRight = 0;
		walls_level_3_0068_Layer_70.body.immovable = true;
		walls_level_3_0068_Layer_70.body.setSize(223, 16, false);
		walls_layer.add(walls_level_3_0068_Layer_70);

		// walls_level_3_0069_Layer_71
		const walls_level_3_0069_Layer_71 = this.physics.add.image(924, 347, "walls_level_3_0069_Layer-71");
		walls_level_3_0069_Layer_71.alpha = 0;
		walls_level_3_0069_Layer_71.alphaTopLeft = 0;
		walls_level_3_0069_Layer_71.alphaTopRight = 0;
		walls_level_3_0069_Layer_71.alphaBottomLeft = 0;
		walls_level_3_0069_Layer_71.alphaBottomRight = 0;
		walls_level_3_0069_Layer_71.body.immovable = true;
		walls_level_3_0069_Layer_71.body.setSize(7, 263, false);
		walls_layer.add(walls_level_3_0069_Layer_71);

		// walls_level_3_0072_Layer_74
		const walls_level_3_0072_Layer_74 = this.physics.add.image(887, 272, "walls_level_3_0072_Layer-74");
		walls_level_3_0072_Layer_74.alpha = 0;
		walls_level_3_0072_Layer_74.alphaTopLeft = 0;
		walls_level_3_0072_Layer_74.alphaTopRight = 0;
		walls_level_3_0072_Layer_74.alphaBottomLeft = 0;
		walls_level_3_0072_Layer_74.alphaBottomRight = 0;
		walls_level_3_0072_Layer_74.body.immovable = true;
		walls_level_3_0072_Layer_74.body.setSize(7, 119, false);
		walls_layer.add(walls_level_3_0072_Layer_74);

		// walls_level_3_0073_Layer_75
		const walls_level_3_0073_Layer_75 = this.physics.add.image(811, 327, "walls_level_3_0073_Layer-75");
		walls_level_3_0073_Layer_75.alpha = 0;
		walls_level_3_0073_Layer_75.alphaTopLeft = 0;
		walls_level_3_0073_Layer_75.alphaTopRight = 0;
		walls_level_3_0073_Layer_75.alphaBottomLeft = 0;
		walls_level_3_0073_Layer_75.alphaBottomRight = 0;
		walls_level_3_0073_Layer_75.body.immovable = true;
		walls_level_3_0073_Layer_75.body.setSize(147, 7, false);
		walls_layer.add(walls_level_3_0073_Layer_75);

		// walls_level_3_0074_Layer_76
		const walls_level_3_0074_Layer_76 = this.physics.add.image(849, 269, "walls_level_3_0074_Layer-76");
		walls_level_3_0074_Layer_76.alpha = 0;
		walls_level_3_0074_Layer_76.alphaTopLeft = 0;
		walls_level_3_0074_Layer_76.alphaTopRight = 0;
		walls_level_3_0074_Layer_76.alphaBottomLeft = 0;
		walls_level_3_0074_Layer_76.alphaBottomRight = 0;
		walls_level_3_0074_Layer_76.body.immovable = true;
		walls_level_3_0074_Layer_76.body.setSize(7, 37, false);
		walls_layer.add(walls_level_3_0074_Layer_76);

		// walls_level_3_0075_Layer_77
		const walls_level_3_0075_Layer_77 = this.physics.add.image(777, 290, "walls_level_3_0075_Layer-77");
		walls_level_3_0075_Layer_77.alpha = 0;
		walls_level_3_0075_Layer_77.alphaTopLeft = 0;
		walls_level_3_0075_Layer_77.alphaTopRight = 0;
		walls_level_3_0075_Layer_77.alphaBottomLeft = 0;
		walls_level_3_0075_Layer_77.alphaBottomRight = 0;
		walls_level_3_0075_Layer_77.body.immovable = true;
		walls_level_3_0075_Layer_77.body.setSize(149, 6, false);
		walls_layer.add(walls_level_3_0075_Layer_77);

		// walls_level_3_0076_Layer_78
		const walls_level_3_0076_Layer_78 = this.physics.add.image(662, 362, "walls_level_3_0076_Layer-78");
		walls_level_3_0076_Layer_78.alpha = 0;
		walls_level_3_0076_Layer_78.alphaTopLeft = 0;
		walls_level_3_0076_Layer_78.alphaTopRight = 0;
		walls_level_3_0076_Layer_78.alphaBottomLeft = 0;
		walls_level_3_0076_Layer_78.alphaBottomRight = 0;
		walls_level_3_0076_Layer_78.body.immovable = true;
		walls_level_3_0076_Layer_78.body.setSize(7, 150, false);
		walls_layer.add(walls_level_3_0076_Layer_78);

		// walls_level_3_0077_Layer_79
		const walls_level_3_0077_Layer_79 = this.physics.add.image(886, 439, "walls_level_3_0077_Layer-79");
		walls_level_3_0077_Layer_79.alpha = 0;
		walls_level_3_0077_Layer_79.alphaTopLeft = 0;
		walls_level_3_0077_Layer_79.alphaTopRight = 0;
		walls_level_3_0077_Layer_79.alphaBottomLeft = 0;
		walls_level_3_0077_Layer_79.alphaBottomRight = 0;
		walls_level_3_0077_Layer_79.body.immovable = true;
		walls_level_3_0077_Layer_79.body.setSize(72, 6, false);
		walls_layer.add(walls_level_3_0077_Layer_79);

		// walls_level_3_0078_Layer_80
		const walls_level_3_0078_Layer_80 = this.physics.add.image(758, 553, "walls_level_3_0078_Layer-80");
		walls_level_3_0078_Layer_80.alpha = 0;
		walls_level_3_0078_Layer_80.alphaTopLeft = 0;
		walls_level_3_0078_Layer_80.alphaTopRight = 0;
		walls_level_3_0078_Layer_80.alphaBottomLeft = 0;
		walls_level_3_0078_Layer_80.alphaBottomRight = 0;
		walls_level_3_0078_Layer_80.body.immovable = true;
		walls_level_3_0078_Layer_80.body.setSize(187, 7, false);
		walls_layer.add(walls_level_3_0078_Layer_80);

		// walls_level_3_0079_Layer_81
		const walls_level_3_0079_Layer_81 = this.physics.add.image(848, 569, "walls_level_3_0079_Layer-81");
		walls_level_3_0079_Layer_81.alpha = 0;
		walls_level_3_0079_Layer_81.alphaTopLeft = 0;
		walls_level_3_0079_Layer_81.alphaTopRight = 0;
		walls_level_3_0079_Layer_81.alphaBottomLeft = 0;
		walls_level_3_0079_Layer_81.alphaBottomRight = 0;
		walls_level_3_0079_Layer_81.body.immovable = true;
		walls_level_3_0079_Layer_81.body.setSize(7, 37, false);
		walls_layer.add(walls_level_3_0079_Layer_81);

		// walls_level_3_0080_Layer_82
		const walls_level_3_0080_Layer_82 = this.physics.add.image(790, 403, "walls_level_3_0080_Layer-82");
		walls_level_3_0080_Layer_82.alpha = 0;
		walls_level_3_0080_Layer_82.alphaTopLeft = 0;
		walls_level_3_0080_Layer_82.alphaTopRight = 0;
		walls_level_3_0080_Layer_82.alphaBottomLeft = 0;
		walls_level_3_0080_Layer_82.alphaBottomRight = 0;
		walls_level_3_0080_Layer_82.body.immovable = true;
		walls_level_3_0080_Layer_82.body.setSize(110, 7, false);
		walls_layer.add(walls_level_3_0080_Layer_82);

		// walls_level_3_0081_Layer_83
		const walls_level_3_0081_Layer_83 = this.physics.add.image(213, 443, "walls_level_3_0081_Layer-83");
		walls_level_3_0081_Layer_83.alpha = 0;
		walls_level_3_0081_Layer_83.alphaTopLeft = 0;
		walls_level_3_0081_Layer_83.alphaTopRight = 0;
		walls_level_3_0081_Layer_83.alphaBottomLeft = 0;
		walls_level_3_0081_Layer_83.alphaBottomRight = 0;
		walls_level_3_0081_Layer_83.body.immovable = true;
		walls_level_3_0081_Layer_83.body.setSize(7, 68, false);
		walls_layer.add(walls_level_3_0081_Layer_83);

		// walls_level_3_0083_Layer_85
		const walls_level_3_0083_Layer_85 = this.physics.add.image(885, 440, "walls_level_3_0083_Layer-85");
		walls_level_3_0083_Layer_85.alpha = 0;
		walls_level_3_0083_Layer_85.alphaTopLeft = 0;
		walls_level_3_0083_Layer_85.alphaTopRight = 0;
		walls_level_3_0083_Layer_85.alphaBottomLeft = 0;
		walls_level_3_0083_Layer_85.alphaBottomRight = 0;
		walls_level_3_0083_Layer_85.body.immovable = true;
		walls_level_3_0083_Layer_85.body.setSize(7, 76, false);
		walls_layer.add(walls_level_3_0083_Layer_85);

		// walls_level_3_0084_Layer_86
		const walls_level_3_0084_Layer_86 = this.physics.add.image(778, 479, "walls_level_3_0084_Layer-86");
		walls_level_3_0084_Layer_86.alpha = 0;
		walls_level_3_0084_Layer_86.alphaTopLeft = 0;
		walls_level_3_0084_Layer_86.alphaTopRight = 0;
		walls_level_3_0084_Layer_86.alphaBottomLeft = 0;
		walls_level_3_0084_Layer_86.alphaBottomRight = 0;
		walls_level_3_0084_Layer_86.body.immovable = true;
		walls_level_3_0084_Layer_86.body.setSize(147, 7, false);
		walls_layer.add(walls_level_3_0084_Layer_86);

		// walls_level_3_0086_Layer_88
		const walls_level_3_0086_Layer_88 = this.physics.add.image(793, 515, "walls_level_3_0086_Layer-88");
		walls_level_3_0086_Layer_88.alpha = 0;
		walls_level_3_0086_Layer_88.alphaTopLeft = 0;
		walls_level_3_0086_Layer_88.alphaTopRight = 0;
		walls_level_3_0086_Layer_88.alphaBottomLeft = 0;
		walls_level_3_0086_Layer_88.alphaBottomRight = 0;
		walls_level_3_0086_Layer_88.body.immovable = true;
		walls_level_3_0086_Layer_88.body.setSize(259, 8, false);
		walls_layer.add(walls_level_3_0086_Layer_88);

		// walls_level_3_0054_Layer_1
		const walls_level_3_0054_Layer_1 = this.physics.add.image(663, 500, "walls_level_3_0054_Layer-56");
		walls_level_3_0054_Layer_1.alpha = 0;
		walls_level_3_0054_Layer_1.alphaTopLeft = 0;
		walls_level_3_0054_Layer_1.alphaTopRight = 0;
		walls_level_3_0054_Layer_1.alphaBottomLeft = 0;
		walls_level_3_0054_Layer_1.alphaBottomRight = 0;
		walls_level_3_0054_Layer_1.body.immovable = true;
		walls_level_3_0054_Layer_1.body.setSize(6, 36, false);
		walls_layer.add(walls_level_3_0054_Layer_1);

		// walls_level_3_0054_Layer_2
		const walls_level_3_0054_Layer_2 = this.physics.add.image(850, 493, "walls_level_3_0054_Layer-56");
		walls_level_3_0054_Layer_2.alpha = 0;
		walls_level_3_0054_Layer_2.alphaTopLeft = 0;
		walls_level_3_0054_Layer_2.alphaTopRight = 0;
		walls_level_3_0054_Layer_2.alphaBottomLeft = 0;
		walls_level_3_0054_Layer_2.alphaBottomRight = 0;
		walls_level_3_0054_Layer_2.body.immovable = true;
		walls_level_3_0054_Layer_2.body.setSize(6, 36, false);
		walls_layer.add(walls_level_3_0054_Layer_2);

		// walls_level_3_0083_Layer
		const walls_level_3_0083_Layer = this.physics.add.image(811, 441, "walls_level_3_0083_Layer-85");
		walls_level_3_0083_Layer.alpha = 0;
		walls_level_3_0083_Layer.alphaTopLeft = 0;
		walls_level_3_0083_Layer.alphaTopRight = 0;
		walls_level_3_0083_Layer.alphaBottomLeft = 0;
		walls_level_3_0083_Layer.alphaBottomRight = 0;
		walls_level_3_0083_Layer.body.immovable = true;
		walls_level_3_0083_Layer.body.setSize(7, 76, false);
		walls_layer.add(walls_level_3_0083_Layer);

		// walls_level_3_0083_Layer_1
		const walls_level_3_0083_Layer_1 = this.physics.add.image(887, 551, "walls_level_3_0083_Layer-85");
		walls_level_3_0083_Layer_1.alpha = 0;
		walls_level_3_0083_Layer_1.alphaTopLeft = 0;
		walls_level_3_0083_Layer_1.alphaTopRight = 0;
		walls_level_3_0083_Layer_1.alphaBottomLeft = 0;
		walls_level_3_0083_Layer_1.alphaBottomRight = 0;
		walls_level_3_0083_Layer_1.body.immovable = true;
		walls_level_3_0083_Layer_1.body.setSize(7, 76, false);
		walls_layer.add(walls_level_3_0083_Layer_1);

		// walls_level_3_0054_Layer_3
		const walls_level_3_0054_Layer_3 = this.physics.add.image(624, 238, "walls_level_3_0054_Layer-56");
		walls_level_3_0054_Layer_3.alpha = 0;
		walls_level_3_0054_Layer_3.alphaTopLeft = 0;
		walls_level_3_0054_Layer_3.alphaTopRight = 0;
		walls_level_3_0054_Layer_3.alphaBottomLeft = 0;
		walls_level_3_0054_Layer_3.alphaBottomRight = 0;
		walls_level_3_0054_Layer_3.body.immovable = true;
		walls_level_3_0054_Layer_3.body.setSize(6, 36, false);
		walls_layer.add(walls_level_3_0054_Layer_3);

		// walls_level_3_0045_Layer
		const walls_level_3_0045_Layer = this.physics.add.image(250, 423, "walls_level_3_0045_Layer-47");
		walls_level_3_0045_Layer.alpha = 0;
		walls_level_3_0045_Layer.alphaTopLeft = 0;
		walls_level_3_0045_Layer.alphaTopRight = 0;
		walls_level_3_0045_Layer.alphaBottomLeft = 0;
		walls_level_3_0045_Layer.alphaBottomRight = 0;
		walls_level_3_0045_Layer.body.immovable = true;
		walls_level_3_0045_Layer.body.setSize(6, 111, false);
		walls_layer.add(walls_level_3_0045_Layer);

		// walls_level_3_0005_Layer
		const walls_level_3_0005_Layer = this.physics.add.image(82, 253, "walls_level_3_0005_Layer-6");
		walls_level_3_0005_Layer.alpha = 0;
		walls_level_3_0005_Layer.alphaTopLeft = 0;
		walls_level_3_0005_Layer.alphaTopRight = 0;
		walls_level_3_0005_Layer.alphaBottomLeft = 0;
		walls_level_3_0005_Layer.alphaBottomRight = 0;
		walls_level_3_0005_Layer.body.immovable = true;
		walls_level_3_0005_Layer.body.setSize(29, 6, false);
		walls_layer.add(walls_level_3_0005_Layer);

		// timer_container
		this.add.image(886, 112, "timer_container");

		// timer
		const timer = new TimerPrefab(this, 887, 106);
		this.add.existing(timer);
		timer.setStyle({  });

		// gameOverPrefab
		const gameOverPrefab = new GameOverPrefab(this, 0, 768);
		this.add.existing(gameOverPrefab);

		// levelClearPrefab
		const levelClearPrefab = new LevelClearPrefab(this, 0, 768);
		this.add.existing(levelClearPrefab);

		// score_once
		const score_once = this.physics.add.image(292, 239, "score_once");
		score_once.body.immovable = true;
		score_once.body.setSize(85, 39, false);

		// score_a
		const score_a = this.physics.add.image(343, 292, "score_a");
		score_a.body.immovable = true;
		score_a.body.setSize(21, 40, false);

		// score_day
		const score_day = this.physics.add.image(329, 377, "score_day");
		score_day.body.immovable = true;
		score_day.body.setSize(59, 40, false);

		// homeButton
		const homeButton = new HomeButton(this, 70, 700);
		this.add.existing(homeButton);

		// level_2_button
		this.add.image(512, 680, "level_2_button");

		// lists
		const walls = [walls_level_3_0045_Layer, walls_level_3_0054_Layer_3, walls_level_3_0083_Layer_1, walls_level_3_0083_Layer, walls_level_3_0054_Layer_2, walls_level_3_0054_Layer_1, walls_level_3_0086_Layer_88, walls_level_3_0084_Layer_86, walls_level_3_0083_Layer_85, walls_level_3_0081_Layer_83, walls_level_3_0080_Layer_82, walls_level_3_0079_Layer_81, walls_level_3_0078_Layer_80, walls_level_3_0077_Layer_79, walls_level_3_0076_Layer_78, walls_level_3_0075_Layer_77, walls_level_3_0074_Layer_76, walls_level_3_0073_Layer_75, walls_level_3_0072_Layer_74, walls_level_3_0069_Layer_71, walls_level_3_0068_Layer_70, walls_level_3_0067_Layer_69, walls_level_3_0066_Layer, walls_level_3_0066_Layer_68, walls_level_3_0065_Layer_67, walls_level_3_0064_Layer_66, walls_level_3_0063_Layer_65, walls_level_3_0062_Layer_64, walls_level_3_0061_Layer_63, walls_level_3_0058_Layer_60, walls_level_3_0056_Layer_58, walls_level_3_0055_Layer_57, walls_level_3_0054_Layer, walls_level_3_0054_Layer_56, walls_level_3_0053_Layer_55, walls_level_3_0052_Layer_54, walls_level_3_0051_Layer_53, walls_level_3_0050_Layer_52, walls_level_3_0049_Layer_51, walls_level_3_0048_Layer, walls_level_3_0048_Layer_50, walls_level_3_0047_Layer_49, walls_level_3_0046_Layer_48, walls_level_3_0045_Layer_47, walls_level_3_0044_Layer_46, walls_level_3_0043_Layer_45, walls_level_3_0042_Layer_44, walls_level_3_0041_Layer_43, walls_level_3_0040_Layer_42, walls_level_3_0039_Layer_41, walls_level_3_0038_Layer_40, walls_level_3_0037_Layer_39, walls_level_3_0036_Layer_38, walls_level_3_0034_Layer_36, walls_level_3_0033_Layer_34, walls_level_3_0031_Layer_32, walls_level_3_0030_Layer_31, walls_level_3_0029_Layer_30, walls_level_3_0028_Layer_29, walls_level_3_0027_Layer_28, walls_level_3_0026_Layer_27, walls_level_3_0025_Layer_26, walls_level_3_0024_Layer_25, walls_level_3_0023_Layer_24, walls_level_3_0022_Layer_23, walls_level_3_0019_Layer, walls_level_3_0020_Layer_21, walls_level_3_0019_Layer_20, walls_level_3_0018_Layer_19, walls_level_3_0017_Layer, walls_level_3_0009_Layer, walls_level_3_0017_Layer_18, walls_level_3_0016_Layer_17, walls_level_3_0015_Layer_16, walls_level_3_0014_Layer_15, walls_level_3_0013_Layer_14, walls_level_3_0012_Layer_13, walls_level_3_0011_Layer_12, walls_level_3_0010_Layer_11, walls_level_3_0009_Layer_10, walls_level_3_0008_Layer_9, walls_level_3_0007_Layer_8, walls_level_3_0006_Layer_7, walls_level_3_0005_Layer_6, walls_level_3_0004_Layer_5, walls_level_3_0002_Layer_3, walls_level_3_0000_Layer, walls_level_3_0001_Layer, walls_level_3_0001_Layer_2, walls_level_3_0000_Layer_1];
		const scores = [score_day, score_a, score_once];
		const roads = [road_198, road_263, road_262, road_261, road_260, road_259, road_258, road_257, road_256, road_255, road_254, road_253, road_252, road_251, road_250, road_249, road_248, road_247, road_246, road_245, road_244, road_243, road_242, road_241, road_240, road_239, road_238, road_237, road_236, road_235, road_234, road_233, road_232, road_231, road_230, road_229, road_228, road_227, road_226, road_225, road_224, road_223, road_222, road_221, road_220, road_219, road_218, road_217, road_216, road_215, road_214, road_213, road_212, road_211, road_210, road_209, road_208, road_207, road_206, road_205, road_204, road_203, road_202, road_201, road_200, road_199, road_197, road_196, road_195, road_194, road_193, road_192, road_191, road_190, road_189, road_188, road_187, road_186, road_185, road_184, road_183, road_182, road_181, road_180, road_179, road_178, road_177, road_176, road_175, road_174, road_173, road_172, road_171, road_170, road_169, road_168, road_167, road_166, road_165, road_164, road_163, road_162, road_161, road_160, road_159, road_158, road_157, road_156, road_155, road_154, road_153, road_152, road_151, road_150, road_149, road_148, road_147, road_146, road_145, road_144, road_143, road_142, road_141, road_140, road_139, road_138, road_137, road_136, road_135, road_134, road_133, road_132, road_131, road_130, road_129, road_128, road_127, road_126, road_125, road_124, road_123, road_122, road_121, road_120, road_119, road_118, road_117, road_116, road_115, road_114, road_113, road_112, road_111, road_110, road_109, road_108, road_107, road_106, road_105, road_104, road_103, road_102, road_101, road_100, road_99, road_98, road_97, road_96, road_95, road_94, road_93, road_92, road_91, road_90, road_89, road_88, road_87, road_86, road_85, road_84, road_83, road_82, road_81, road_80, road_79, road_78, road_77, road_76, road_75, road_74, road_73, road_72, road_71, road_70, road_69, road_68, road_67, road_66, road_65, road_64, road_63, road_62, road_61, road_60, road_59, road_58, road_57, road_56, road_55, road_54, road_53, road_52, road_51, road_50, road_49, road_48, road_47, road_46, road_45, road_44, road_43, road_42, road_41, road_40, road_39, road_38, road_37, road_36, road_35, road_34, road_33, road_32, road_31, road_30, road_29, road_28, road_27, road_26, road_25, road_24, road_23, road_22, road_21, road_20, road_19, road_18, road_17, road_16, road_15, road_14, road_13, road_12, road_11, road_10, road_9, road_8, road_7, road_6, road_5, road_4, road_3, road_2, road_1, road];

		// collider
		this.physics.add.collider(player, walls, this.colliderCallBack);

		// scoreCollider
		this.physics.add.collider(player, scores, this.onScore, undefined, this);

		// roadUnlockCollider
		this.physics.add.collider(player, roads, this.unlockRoad);

		// timer (prefab fields)
		timer.duration = 59;
		timer.onComplete = this.onGameOver.bind(this);

		// gameOverPrefab (prefab fields)
		gameOverPrefab.onRetry = this.retry.bind(this);
		gameOverPrefab.onSkip = this.onNext.bind(this);

		// levelClearPrefab (prefab fields)
		levelClearPrefab.onRetry = this.retry.bind(this);
		levelClearPrefab.onNext = this.onNext.bind(this);

		this.player = player;
		this.timer = timer;
		this.gameOverPrefab = gameOverPrefab;
		this.levelClearPrefab = levelClearPrefab;

		this.events.emit("scene-awake");
	}

	private player!: Hero;
	private timer!: TimerPrefab;
	private gameOverPrefab!: GameOverPrefab;
	private levelClearPrefab!: LevelClearPrefab;

	/* START-USER-CODE */
	// Write your code here
	private lastPointerX: number = 0;
	private lastPointerY: number = 0;
	private isDragging: boolean = false;
	private isBlocked: boolean = false; // Track if blocked
	private playerScore: number = 0;

	create() {
		this.editorCreate();

		this.player.setInteractive();
		this.input.setDraggable(this.player);

		this.input.on("dragstart", (pointer: any) => {
			this.isDragging = true;
			this.lastPointerX = pointer.x;
			this.lastPointerY = pointer.y;
			this.isBlocked = false; // Reset when dragging starts
		});

		// Handle drag movement
		this.input.on("drag", (pointer: any, gameObject: any) => {
			if (gameObject === this.player) {
				if (!this.isBlocked && this.isPointerInside(pointer)) {
					// this.player.setVelocity(
					// 	(pointer.x - this.player.x) * 10,
					// 	(pointer.y - this.player.y) * 10
					// );

					this.player.setVelocity(
						(pointer.x - this.player.x) * 50,
						(pointer.y - this.player.y) * 50
					);

					this.lastPointerX = pointer.x;
					this.lastPointerY = pointer.y;
					this.isBlocked = false; // Allow movement again
				}
			}
		});

		// Handle drag end
		this.input.on("dragend", () => {
			this.isDragging = false;
			this.player.setVelocity(0, 0);
		});
	}

	update() {
		// Stop movement if pointer is held but not moved
		if (this.isDragging) {
			const pointer = this.input.activePointer;
			if (pointer.x === this.lastPointerX && pointer.y === this.lastPointerY) {
				this.player.setVelocity(0, 0);
			}
		}
	}

	private isPointerInside(pointer: Phaser.Input.Pointer): boolean {
		const bounds = this.player.getBounds();
		return bounds.contains(pointer.x, pointer.y);
	}

	private colliderCallBack(mainCollider: any, _toHit: any) {
		mainCollider.setVelocity(0, 0);
		this.isBlocked = true; // Hero is blocked by a wall
	}

	// private unlockRoad(_player: any, road: any) {
	// 	road.disableBody();
	// 	road.destroy();
	// }

	private onScore(_player: any, score: any) {
		score.disableBody();
		this.playerScore = Number(this.playerScore) + 1;

		if (this.playerScore >= 3) {
			this.showLevelClear();
		}
	}

	private retry() {
		this.playerScore = 0;
		this.scene.restart();
	}

	private showLevelClear() {
		this.timer.stopTimer();
		this.levelClearPrefab.setPosition(0, 0);
		this.levelClearPrefab.show();
	}

	private onGameOver() {
		this.gameOverPrefab.setPosition(0, 0);
		this.gameOverPrefab.show();
	}

	private unlockRoad(_player: any, road: any) {
		road.disableBody();
		road.destroy();
	}

	private onNext() {
		this.scene.start("LevelThree");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
