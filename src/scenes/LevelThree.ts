// You can write more code here

/* START OF COMPILED CODE */

import RoadPrefab from "./RoadPrefab";
import Hero from "./Hero";
import GameOverPrefab from "./GameOverPrefab";
import LevelClearPrefab from "./LevelClearPrefab";
import TimerPrefab from "./TimerPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelThree extends Phaser.Scene {

	constructor() {
		super("LevelThree");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background_game
		this.add.image(512, 384, "background_game");

		// rectangle_1
		const rectangle_1 = this.add.rectangle(512, 383, 883, 411);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 11714166;

		// rods_layer
		const rods_layer = this.add.layer();

		// road_263
		const road_263 = new RoadPrefab(this, 89, 200);
		road_263.scaleX = 0.8;
		road_263.scaleY = 0.8;
		road_263.body.setOffset(10, 11);
		rods_layer.add(road_263);

		// road
		const road = new RoadPrefab(this, 122, 200);
		road.scaleX = 0.8;
		road.scaleY = 0.8;
		road.body.setOffset(10, 11);
		rods_layer.add(road);

		// road_1
		const road_1 = new RoadPrefab(this, 155, 200);
		road_1.scaleX = 0.8;
		road_1.scaleY = 0.8;
		road_1.body.setOffset(10, 11);
		rods_layer.add(road_1);

		// road_2
		const road_2 = new RoadPrefab(this, 188, 200);
		road_2.scaleX = 0.8;
		road_2.scaleY = 0.8;
		road_2.body.setOffset(10, 11);
		rods_layer.add(road_2);

		// road_3
		const road_3 = new RoadPrefab(this, 221, 200);
		road_3.scaleX = 0.8;
		road_3.scaleY = 0.8;
		road_3.body.setOffset(10, 11);
		rods_layer.add(road_3);

		// road_4
		const road_4 = new RoadPrefab(this, 254, 200);
		road_4.scaleX = 0.8;
		road_4.scaleY = 0.8;
		road_4.body.setOffset(10, 11);
		rods_layer.add(road_4);

		// road_5
		const road_5 = new RoadPrefab(this, 287, 200);
		road_5.scaleX = 0.8;
		road_5.scaleY = 0.8;
		road_5.body.setOffset(10, 11);
		rods_layer.add(road_5);

		// road_6
		const road_6 = new RoadPrefab(this, 320, 200);
		road_6.scaleX = 0.8;
		road_6.scaleY = 0.8;
		road_6.body.setOffset(10, 11);
		rods_layer.add(road_6);

		// road_7
		const road_7 = new RoadPrefab(this, 353, 200);
		road_7.scaleX = 0.8;
		road_7.scaleY = 0.8;
		road_7.body.setOffset(10, 11);
		rods_layer.add(road_7);

		// road_8
		const road_8 = new RoadPrefab(this, 386, 200);
		road_8.scaleX = 0.8;
		road_8.scaleY = 0.8;
		road_8.body.setOffset(10, 11);
		rods_layer.add(road_8);

		// road_9
		const road_9 = new RoadPrefab(this, 419, 200);
		road_9.scaleX = 0.8;
		road_9.scaleY = 0.8;
		road_9.body.setOffset(10, 11);
		rods_layer.add(road_9);

		// road_10
		const road_10 = new RoadPrefab(this, 452, 200);
		road_10.scaleX = 0.8;
		road_10.scaleY = 0.8;
		road_10.body.setOffset(10, 11);
		rods_layer.add(road_10);

		// road_11
		const road_11 = new RoadPrefab(this, 486, 200);
		road_11.scaleX = 0.8;
		road_11.scaleY = 0.8;
		road_11.body.setOffset(10, 11);
		rods_layer.add(road_11);

		// road_12
		const road_12 = new RoadPrefab(this, 519, 200);
		road_12.scaleX = 0.8;
		road_12.scaleY = 0.8;
		road_12.body.setOffset(10, 11);
		rods_layer.add(road_12);

		// road_13
		const road_13 = new RoadPrefab(this, 552, 200);
		road_13.scaleX = 0.8;
		road_13.scaleY = 0.8;
		road_13.body.setOffset(10, 11);
		rods_layer.add(road_13);

		// road_14
		const road_14 = new RoadPrefab(this, 585, 200);
		road_14.scaleX = 0.8;
		road_14.scaleY = 0.8;
		road_14.body.setOffset(10, 11);
		rods_layer.add(road_14);

		// road_15
		const road_15 = new RoadPrefab(this, 618, 200);
		road_15.scaleX = 0.8;
		road_15.scaleY = 0.8;
		road_15.body.setOffset(10, 11);
		rods_layer.add(road_15);

		// road_16
		const road_16 = new RoadPrefab(this, 651, 200);
		road_16.scaleX = 0.8;
		road_16.scaleY = 0.8;
		road_16.body.setOffset(10, 11);
		rods_layer.add(road_16);

		// road_17
		const road_17 = new RoadPrefab(this, 684, 200);
		road_17.scaleX = 0.8;
		road_17.scaleY = 0.8;
		road_17.body.setOffset(10, 11);
		rods_layer.add(road_17);

		// road_18
		const road_18 = new RoadPrefab(this, 717, 200);
		road_18.scaleX = 0.8;
		road_18.scaleY = 0.8;
		road_18.body.setOffset(10, 11);
		rods_layer.add(road_18);

		// road_19
		const road_19 = new RoadPrefab(this, 750, 200);
		road_19.scaleX = 0.8;
		road_19.scaleY = 0.8;
		road_19.body.setOffset(10, 11);
		rods_layer.add(road_19);

		// road_20
		const road_20 = new RoadPrefab(this, 783, 200);
		road_20.scaleX = 0.8;
		road_20.scaleY = 0.8;
		road_20.body.setOffset(10, 11);
		rods_layer.add(road_20);

		// road_21
		const road_21 = new RoadPrefab(this, 816, 200);
		road_21.scaleX = 0.8;
		road_21.scaleY = 0.8;
		road_21.body.setOffset(10, 11);
		rods_layer.add(road_21);

		// road_22
		const road_22 = new RoadPrefab(this, 849, 200);
		road_22.scaleX = 0.8;
		road_22.scaleY = 0.8;
		road_22.body.setOffset(10, 11);
		rods_layer.add(road_22);

		// road_23
		const road_23 = new RoadPrefab(this, 870, 200);
		road_23.scaleX = 0.8;
		road_23.scaleY = 0.8;
		road_23.body.setOffset(10, 11);
		rods_layer.add(road_23);

		// road_24
		const road_24 = new RoadPrefab(this, 903, 200);
		road_24.scaleX = 0.8;
		road_24.scaleY = 0.8;
		road_24.body.setOffset(10, 11);
		rods_layer.add(road_24);

		// road_25
		const road_25 = new RoadPrefab(this, 936, 200);
		road_25.scaleX = 0.8;
		road_25.scaleY = 0.8;
		road_25.body.setOffset(10, 11);
		rods_layer.add(road_25);

		// road_26
		const road_26 = new RoadPrefab(this, 88, 233);
		road_26.scaleX = 0.8;
		road_26.scaleY = 0.8;
		road_26.body.setOffset(10, 11);
		rods_layer.add(road_26);

		// road_27
		const road_27 = new RoadPrefab(this, 121, 233);
		road_27.scaleX = 0.8;
		road_27.scaleY = 0.8;
		road_27.body.setOffset(10, 11);
		rods_layer.add(road_27);

		// road_28
		const road_28 = new RoadPrefab(this, 154, 233);
		road_28.scaleX = 0.8;
		road_28.scaleY = 0.8;
		road_28.body.setOffset(10, 11);
		rods_layer.add(road_28);

		// road_29
		const road_29 = new RoadPrefab(this, 187, 233);
		road_29.scaleX = 0.8;
		road_29.scaleY = 0.8;
		road_29.body.setOffset(10, 11);
		rods_layer.add(road_29);

		// road_30
		const road_30 = new RoadPrefab(this, 220, 233);
		road_30.scaleX = 0.8;
		road_30.scaleY = 0.8;
		road_30.body.setOffset(10, 11);
		rods_layer.add(road_30);

		// road_31
		const road_31 = new RoadPrefab(this, 253, 233);
		road_31.scaleX = 0.8;
		road_31.scaleY = 0.8;
		road_31.body.setOffset(10, 11);
		rods_layer.add(road_31);

		// road_32
		const road_32 = new RoadPrefab(this, 286, 233);
		road_32.scaleX = 0.8;
		road_32.scaleY = 0.8;
		road_32.body.setOffset(10, 11);
		rods_layer.add(road_32);

		// road_33
		const road_33 = new RoadPrefab(this, 319, 233);
		road_33.scaleX = 0.8;
		road_33.scaleY = 0.8;
		road_33.body.setOffset(10, 11);
		rods_layer.add(road_33);

		// road_34
		const road_34 = new RoadPrefab(this, 352, 233);
		road_34.scaleX = 0.8;
		road_34.scaleY = 0.8;
		road_34.body.setOffset(10, 11);
		rods_layer.add(road_34);

		// road_35
		const road_35 = new RoadPrefab(this, 385, 233);
		road_35.scaleX = 0.8;
		road_35.scaleY = 0.8;
		road_35.body.setOffset(10, 11);
		rods_layer.add(road_35);

		// road_36
		const road_36 = new RoadPrefab(this, 418, 233);
		road_36.scaleX = 0.8;
		road_36.scaleY = 0.8;
		road_36.body.setOffset(10, 11);
		rods_layer.add(road_36);

		// road_37
		const road_37 = new RoadPrefab(this, 451, 233);
		road_37.scaleX = 0.8;
		road_37.scaleY = 0.8;
		road_37.body.setOffset(10, 11);
		rods_layer.add(road_37);

		// road_38
		const road_38 = new RoadPrefab(this, 485, 233);
		road_38.scaleX = 0.8;
		road_38.scaleY = 0.8;
		road_38.body.setOffset(10, 11);
		rods_layer.add(road_38);

		// road_39
		const road_39 = new RoadPrefab(this, 518, 233);
		road_39.scaleX = 0.8;
		road_39.scaleY = 0.8;
		road_39.body.setOffset(10, 11);
		rods_layer.add(road_39);

		// road_40
		const road_40 = new RoadPrefab(this, 551, 233);
		road_40.scaleX = 0.8;
		road_40.scaleY = 0.8;
		road_40.body.setOffset(10, 11);
		rods_layer.add(road_40);

		// road_41
		const road_41 = new RoadPrefab(this, 584, 233);
		road_41.scaleX = 0.8;
		road_41.scaleY = 0.8;
		road_41.body.setOffset(10, 11);
		rods_layer.add(road_41);

		// road_42
		const road_42 = new RoadPrefab(this, 617, 233);
		road_42.scaleX = 0.8;
		road_42.scaleY = 0.8;
		road_42.body.setOffset(10, 11);
		rods_layer.add(road_42);

		// road_43
		const road_43 = new RoadPrefab(this, 650, 233);
		road_43.scaleX = 0.8;
		road_43.scaleY = 0.8;
		road_43.body.setOffset(10, 11);
		rods_layer.add(road_43);

		// road_44
		const road_44 = new RoadPrefab(this, 683, 233);
		road_44.scaleX = 0.8;
		road_44.scaleY = 0.8;
		road_44.body.setOffset(10, 11);
		rods_layer.add(road_44);

		// road_45
		const road_45 = new RoadPrefab(this, 716, 233);
		road_45.scaleX = 0.8;
		road_45.scaleY = 0.8;
		road_45.body.setOffset(10, 11);
		rods_layer.add(road_45);

		// road_46
		const road_46 = new RoadPrefab(this, 749, 233);
		road_46.scaleX = 0.8;
		road_46.scaleY = 0.8;
		road_46.body.setOffset(10, 11);
		rods_layer.add(road_46);

		// road_47
		const road_47 = new RoadPrefab(this, 782, 233);
		road_47.scaleX = 0.8;
		road_47.scaleY = 0.8;
		road_47.body.setOffset(10, 11);
		rods_layer.add(road_47);

		// road_48
		const road_48 = new RoadPrefab(this, 815, 233);
		road_48.scaleX = 0.8;
		road_48.scaleY = 0.8;
		road_48.body.setOffset(10, 11);
		rods_layer.add(road_48);

		// road_49
		const road_49 = new RoadPrefab(this, 848, 233);
		road_49.scaleX = 0.8;
		road_49.scaleY = 0.8;
		road_49.body.setOffset(10, 11);
		rods_layer.add(road_49);

		// road_50
		const road_50 = new RoadPrefab(this, 869, 233);
		road_50.scaleX = 0.8;
		road_50.scaleY = 0.8;
		road_50.body.setOffset(10, 11);
		rods_layer.add(road_50);

		// road_51
		const road_51 = new RoadPrefab(this, 902, 233);
		road_51.scaleX = 0.8;
		road_51.scaleY = 0.8;
		road_51.body.setOffset(10, 11);
		rods_layer.add(road_51);

		// road_52
		const road_52 = new RoadPrefab(this, 935, 233);
		road_52.scaleX = 0.8;
		road_52.scaleY = 0.8;
		road_52.body.setOffset(10, 11);
		rods_layer.add(road_52);

		// road_53
		const road_53 = new RoadPrefab(this, 87, 265);
		road_53.scaleX = 0.8;
		road_53.scaleY = 0.8;
		road_53.body.setOffset(10, 11);
		rods_layer.add(road_53);

		// road_54
		const road_54 = new RoadPrefab(this, 120, 265);
		road_54.scaleX = 0.8;
		road_54.scaleY = 0.8;
		road_54.body.setOffset(10, 11);
		rods_layer.add(road_54);

		// road_55
		const road_55 = new RoadPrefab(this, 153, 265);
		road_55.scaleX = 0.8;
		road_55.scaleY = 0.8;
		road_55.body.setOffset(10, 11);
		rods_layer.add(road_55);

		// road_56
		const road_56 = new RoadPrefab(this, 186, 265);
		road_56.scaleX = 0.8;
		road_56.scaleY = 0.8;
		road_56.body.setOffset(10, 11);
		rods_layer.add(road_56);

		// road_57
		const road_57 = new RoadPrefab(this, 219, 265);
		road_57.scaleX = 0.8;
		road_57.scaleY = 0.8;
		road_57.body.setOffset(10, 11);
		rods_layer.add(road_57);

		// road_58
		const road_58 = new RoadPrefab(this, 252, 265);
		road_58.scaleX = 0.8;
		road_58.scaleY = 0.8;
		road_58.body.setOffset(10, 11);
		rods_layer.add(road_58);

		// road_59
		const road_59 = new RoadPrefab(this, 285, 265);
		road_59.scaleX = 0.8;
		road_59.scaleY = 0.8;
		road_59.body.setOffset(10, 11);
		rods_layer.add(road_59);

		// road_60
		const road_60 = new RoadPrefab(this, 318, 265);
		road_60.scaleX = 0.8;
		road_60.scaleY = 0.8;
		road_60.body.setOffset(10, 11);
		rods_layer.add(road_60);

		// road_61
		const road_61 = new RoadPrefab(this, 351, 265);
		road_61.scaleX = 0.8;
		road_61.scaleY = 0.8;
		road_61.body.setOffset(10, 11);
		rods_layer.add(road_61);

		// road_62
		const road_62 = new RoadPrefab(this, 384, 265);
		road_62.scaleX = 0.8;
		road_62.scaleY = 0.8;
		road_62.body.setOffset(10, 11);
		rods_layer.add(road_62);

		// road_63
		const road_63 = new RoadPrefab(this, 417, 265);
		road_63.scaleX = 0.8;
		road_63.scaleY = 0.8;
		road_63.body.setOffset(10, 11);
		rods_layer.add(road_63);

		// road_64
		const road_64 = new RoadPrefab(this, 450, 265);
		road_64.scaleX = 0.8;
		road_64.scaleY = 0.8;
		road_64.body.setOffset(10, 11);
		rods_layer.add(road_64);

		// road_65
		const road_65 = new RoadPrefab(this, 484, 265);
		road_65.scaleX = 0.8;
		road_65.scaleY = 0.8;
		road_65.body.setOffset(10, 11);
		rods_layer.add(road_65);

		// road_66
		const road_66 = new RoadPrefab(this, 517, 265);
		road_66.scaleX = 0.8;
		road_66.scaleY = 0.8;
		road_66.body.setOffset(10, 11);
		rods_layer.add(road_66);

		// road_67
		const road_67 = new RoadPrefab(this, 550, 265);
		road_67.scaleX = 0.8;
		road_67.scaleY = 0.8;
		road_67.body.setOffset(10, 11);
		rods_layer.add(road_67);

		// road_68
		const road_68 = new RoadPrefab(this, 583, 265);
		road_68.scaleX = 0.8;
		road_68.scaleY = 0.8;
		road_68.body.setOffset(10, 11);
		rods_layer.add(road_68);

		// road_69
		const road_69 = new RoadPrefab(this, 616, 265);
		road_69.scaleX = 0.8;
		road_69.scaleY = 0.8;
		road_69.body.setOffset(10, 11);
		rods_layer.add(road_69);

		// road_70
		const road_70 = new RoadPrefab(this, 649, 265);
		road_70.scaleX = 0.8;
		road_70.scaleY = 0.8;
		road_70.body.setOffset(10, 11);
		rods_layer.add(road_70);

		// road_71
		const road_71 = new RoadPrefab(this, 682, 265);
		road_71.scaleX = 0.8;
		road_71.scaleY = 0.8;
		road_71.body.setOffset(10, 11);
		rods_layer.add(road_71);

		// road_72
		const road_72 = new RoadPrefab(this, 715, 265);
		road_72.scaleX = 0.8;
		road_72.scaleY = 0.8;
		road_72.body.setOffset(10, 11);
		rods_layer.add(road_72);

		// road_73
		const road_73 = new RoadPrefab(this, 748, 265);
		road_73.scaleX = 0.8;
		road_73.scaleY = 0.8;
		road_73.body.setOffset(10, 11);
		rods_layer.add(road_73);

		// road_74
		const road_74 = new RoadPrefab(this, 781, 265);
		road_74.scaleX = 0.8;
		road_74.scaleY = 0.8;
		road_74.body.setOffset(10, 11);
		rods_layer.add(road_74);

		// road_75
		const road_75 = new RoadPrefab(this, 814, 265);
		road_75.scaleX = 0.8;
		road_75.scaleY = 0.8;
		road_75.body.setOffset(10, 11);
		rods_layer.add(road_75);

		// road_76
		const road_76 = new RoadPrefab(this, 847, 265);
		road_76.scaleX = 0.8;
		road_76.scaleY = 0.8;
		road_76.body.setOffset(10, 11);
		rods_layer.add(road_76);

		// road_77
		const road_77 = new RoadPrefab(this, 868, 265);
		road_77.scaleX = 0.8;
		road_77.scaleY = 0.8;
		road_77.body.setOffset(10, 11);
		rods_layer.add(road_77);

		// road_78
		const road_78 = new RoadPrefab(this, 901, 265);
		road_78.scaleX = 0.8;
		road_78.scaleY = 0.8;
		road_78.body.setOffset(10, 11);
		rods_layer.add(road_78);

		// road_79
		const road_79 = new RoadPrefab(this, 934, 265);
		road_79.scaleX = 0.8;
		road_79.scaleY = 0.8;
		road_79.body.setOffset(10, 11);
		rods_layer.add(road_79);

		// road_80
		const road_80 = new RoadPrefab(this, 89, 298);
		road_80.scaleX = 0.8;
		road_80.scaleY = 0.8;
		road_80.body.setOffset(10, 11);
		rods_layer.add(road_80);

		// road_81
		const road_81 = new RoadPrefab(this, 122, 298);
		road_81.scaleX = 0.8;
		road_81.scaleY = 0.8;
		road_81.body.setOffset(10, 11);
		rods_layer.add(road_81);

		// road_82
		const road_82 = new RoadPrefab(this, 155, 298);
		road_82.scaleX = 0.8;
		road_82.scaleY = 0.8;
		road_82.body.setOffset(10, 11);
		rods_layer.add(road_82);

		// road_83
		const road_83 = new RoadPrefab(this, 188, 298);
		road_83.scaleX = 0.8;
		road_83.scaleY = 0.8;
		road_83.body.setOffset(10, 11);
		rods_layer.add(road_83);

		// road_84
		const road_84 = new RoadPrefab(this, 221, 298);
		road_84.scaleX = 0.8;
		road_84.scaleY = 0.8;
		road_84.body.setOffset(10, 11);
		rods_layer.add(road_84);

		// road_85
		const road_85 = new RoadPrefab(this, 254, 298);
		road_85.scaleX = 0.8;
		road_85.scaleY = 0.8;
		road_85.body.setOffset(10, 11);
		rods_layer.add(road_85);

		// road_86
		const road_86 = new RoadPrefab(this, 287, 298);
		road_86.scaleX = 0.8;
		road_86.scaleY = 0.8;
		road_86.body.setOffset(10, 11);
		rods_layer.add(road_86);

		// road_87
		const road_87 = new RoadPrefab(this, 320, 298);
		road_87.scaleX = 0.8;
		road_87.scaleY = 0.8;
		road_87.body.setOffset(10, 11);
		rods_layer.add(road_87);

		// road_88
		const road_88 = new RoadPrefab(this, 353, 298);
		road_88.scaleX = 0.8;
		road_88.scaleY = 0.8;
		road_88.body.setOffset(10, 11);
		rods_layer.add(road_88);

		// road_89
		const road_89 = new RoadPrefab(this, 386, 298);
		road_89.scaleX = 0.8;
		road_89.scaleY = 0.8;
		road_89.body.setOffset(10, 11);
		rods_layer.add(road_89);

		// road_90
		const road_90 = new RoadPrefab(this, 419, 298);
		road_90.scaleX = 0.8;
		road_90.scaleY = 0.8;
		road_90.body.setOffset(10, 11);
		rods_layer.add(road_90);

		// road_91
		const road_91 = new RoadPrefab(this, 452, 298);
		road_91.scaleX = 0.8;
		road_91.scaleY = 0.8;
		road_91.body.setOffset(10, 11);
		rods_layer.add(road_91);

		// road_92
		const road_92 = new RoadPrefab(this, 486, 298);
		road_92.scaleX = 0.8;
		road_92.scaleY = 0.8;
		road_92.body.setOffset(10, 11);
		rods_layer.add(road_92);

		// road_93
		const road_93 = new RoadPrefab(this, 519, 298);
		road_93.scaleX = 0.8;
		road_93.scaleY = 0.8;
		road_93.body.setOffset(10, 11);
		rods_layer.add(road_93);

		// road_94
		const road_94 = new RoadPrefab(this, 552, 298);
		road_94.scaleX = 0.8;
		road_94.scaleY = 0.8;
		road_94.body.setOffset(10, 11);
		rods_layer.add(road_94);

		// road_95
		const road_95 = new RoadPrefab(this, 585, 298);
		road_95.scaleX = 0.8;
		road_95.scaleY = 0.8;
		road_95.body.setOffset(10, 11);
		rods_layer.add(road_95);

		// road_96
		const road_96 = new RoadPrefab(this, 618, 298);
		road_96.scaleX = 0.8;
		road_96.scaleY = 0.8;
		road_96.body.setOffset(10, 11);
		rods_layer.add(road_96);

		// road_97
		const road_97 = new RoadPrefab(this, 651, 298);
		road_97.scaleX = 0.8;
		road_97.scaleY = 0.8;
		road_97.body.setOffset(10, 11);
		rods_layer.add(road_97);

		// road_98
		const road_98 = new RoadPrefab(this, 684, 298);
		road_98.scaleX = 0.8;
		road_98.scaleY = 0.8;
		road_98.body.setOffset(10, 11);
		rods_layer.add(road_98);

		// road_99
		const road_99 = new RoadPrefab(this, 717, 298);
		road_99.scaleX = 0.8;
		road_99.scaleY = 0.8;
		road_99.body.setOffset(10, 11);
		rods_layer.add(road_99);

		// road_100
		const road_100 = new RoadPrefab(this, 750, 298);
		road_100.scaleX = 0.8;
		road_100.scaleY = 0.8;
		road_100.body.setOffset(10, 11);
		rods_layer.add(road_100);

		// road_101
		const road_101 = new RoadPrefab(this, 783, 298);
		road_101.scaleX = 0.8;
		road_101.scaleY = 0.8;
		road_101.body.setOffset(10, 11);
		rods_layer.add(road_101);

		// road_102
		const road_102 = new RoadPrefab(this, 816, 298);
		road_102.scaleX = 0.8;
		road_102.scaleY = 0.8;
		road_102.body.setOffset(10, 11);
		rods_layer.add(road_102);

		// road_103
		const road_103 = new RoadPrefab(this, 849, 298);
		road_103.scaleX = 0.8;
		road_103.scaleY = 0.8;
		road_103.body.setOffset(10, 11);
		rods_layer.add(road_103);

		// road_104
		const road_104 = new RoadPrefab(this, 870, 298);
		road_104.scaleX = 0.8;
		road_104.scaleY = 0.8;
		road_104.body.setOffset(10, 11);
		rods_layer.add(road_104);

		// road_105
		const road_105 = new RoadPrefab(this, 903, 298);
		road_105.scaleX = 0.8;
		road_105.scaleY = 0.8;
		road_105.body.setOffset(10, 11);
		rods_layer.add(road_105);

		// road_106
		const road_106 = new RoadPrefab(this, 936, 298);
		road_106.scaleX = 0.8;
		road_106.scaleY = 0.8;
		road_106.body.setOffset(10, 11);
		rods_layer.add(road_106);

		// road_107
		const road_107 = new RoadPrefab(this, 87, 328);
		road_107.scaleX = 0.8;
		road_107.scaleY = 0.8;
		road_107.body.setOffset(10, 11);
		rods_layer.add(road_107);

		// road_108
		const road_108 = new RoadPrefab(this, 120, 328);
		road_108.scaleX = 0.8;
		road_108.scaleY = 0.8;
		road_108.body.setOffset(10, 11);
		rods_layer.add(road_108);

		// road_109
		const road_109 = new RoadPrefab(this, 153, 328);
		road_109.scaleX = 0.8;
		road_109.scaleY = 0.8;
		road_109.body.setOffset(10, 11);
		rods_layer.add(road_109);

		// road_110
		const road_110 = new RoadPrefab(this, 186, 328);
		road_110.scaleX = 0.8;
		road_110.scaleY = 0.8;
		road_110.body.setOffset(10, 11);
		rods_layer.add(road_110);

		// road_111
		const road_111 = new RoadPrefab(this, 219, 328);
		road_111.scaleX = 0.8;
		road_111.scaleY = 0.8;
		road_111.body.setOffset(10, 11);
		rods_layer.add(road_111);

		// road_112
		const road_112 = new RoadPrefab(this, 252, 328);
		road_112.scaleX = 0.8;
		road_112.scaleY = 0.8;
		road_112.body.setOffset(10, 11);
		rods_layer.add(road_112);

		// road_113
		const road_113 = new RoadPrefab(this, 285, 328);
		road_113.scaleX = 0.8;
		road_113.scaleY = 0.8;
		road_113.body.setOffset(10, 11);
		rods_layer.add(road_113);

		// road_114
		const road_114 = new RoadPrefab(this, 318, 328);
		road_114.scaleX = 0.8;
		road_114.scaleY = 0.8;
		road_114.body.setOffset(10, 11);
		rods_layer.add(road_114);

		// road_115
		const road_115 = new RoadPrefab(this, 351, 328);
		road_115.scaleX = 0.8;
		road_115.scaleY = 0.8;
		road_115.body.setOffset(10, 11);
		rods_layer.add(road_115);

		// road_116
		const road_116 = new RoadPrefab(this, 384, 328);
		road_116.scaleX = 0.8;
		road_116.scaleY = 0.8;
		road_116.body.setOffset(10, 11);
		rods_layer.add(road_116);

		// road_117
		const road_117 = new RoadPrefab(this, 417, 328);
		road_117.scaleX = 0.8;
		road_117.scaleY = 0.8;
		road_117.body.setOffset(10, 11);
		rods_layer.add(road_117);

		// road_118
		const road_118 = new RoadPrefab(this, 450, 328);
		road_118.scaleX = 0.8;
		road_118.scaleY = 0.8;
		road_118.body.setOffset(10, 11);
		rods_layer.add(road_118);

		// road_119
		const road_119 = new RoadPrefab(this, 484, 328);
		road_119.scaleX = 0.8;
		road_119.scaleY = 0.8;
		road_119.body.setOffset(10, 11);
		rods_layer.add(road_119);

		// road_120
		const road_120 = new RoadPrefab(this, 517, 328);
		road_120.scaleX = 0.8;
		road_120.scaleY = 0.8;
		road_120.body.setOffset(10, 11);
		rods_layer.add(road_120);

		// road_121
		const road_121 = new RoadPrefab(this, 550, 328);
		road_121.scaleX = 0.8;
		road_121.scaleY = 0.8;
		road_121.body.setOffset(10, 11);
		rods_layer.add(road_121);

		// road_122
		const road_122 = new RoadPrefab(this, 583, 328);
		road_122.scaleX = 0.8;
		road_122.scaleY = 0.8;
		road_122.body.setOffset(10, 11);
		rods_layer.add(road_122);

		// road_123
		const road_123 = new RoadPrefab(this, 616, 328);
		road_123.scaleX = 0.8;
		road_123.scaleY = 0.8;
		road_123.body.setOffset(10, 11);
		rods_layer.add(road_123);

		// road_124
		const road_124 = new RoadPrefab(this, 649, 328);
		road_124.scaleX = 0.8;
		road_124.scaleY = 0.8;
		road_124.body.setOffset(10, 11);
		rods_layer.add(road_124);

		// road_125
		const road_125 = new RoadPrefab(this, 682, 328);
		road_125.scaleX = 0.8;
		road_125.scaleY = 0.8;
		road_125.body.setOffset(10, 11);
		rods_layer.add(road_125);

		// road_126
		const road_126 = new RoadPrefab(this, 715, 328);
		road_126.scaleX = 0.8;
		road_126.scaleY = 0.8;
		road_126.body.setOffset(10, 11);
		rods_layer.add(road_126);

		// road_127
		const road_127 = new RoadPrefab(this, 748, 328);
		road_127.scaleX = 0.8;
		road_127.scaleY = 0.8;
		road_127.body.setOffset(10, 11);
		rods_layer.add(road_127);

		// road_128
		const road_128 = new RoadPrefab(this, 781, 328);
		road_128.scaleX = 0.8;
		road_128.scaleY = 0.8;
		road_128.body.setOffset(10, 11);
		rods_layer.add(road_128);

		// road_129
		const road_129 = new RoadPrefab(this, 814, 328);
		road_129.scaleX = 0.8;
		road_129.scaleY = 0.8;
		road_129.body.setOffset(10, 11);
		rods_layer.add(road_129);

		// road_130
		const road_130 = new RoadPrefab(this, 847, 328);
		road_130.scaleX = 0.8;
		road_130.scaleY = 0.8;
		road_130.body.setOffset(10, 11);
		rods_layer.add(road_130);

		// road_131
		const road_131 = new RoadPrefab(this, 868, 328);
		road_131.scaleX = 0.8;
		road_131.scaleY = 0.8;
		road_131.body.setOffset(10, 11);
		rods_layer.add(road_131);

		// road_132
		const road_132 = new RoadPrefab(this, 901, 328);
		road_132.scaleX = 0.8;
		road_132.scaleY = 0.8;
		road_132.body.setOffset(10, 11);
		rods_layer.add(road_132);

		// road_133
		const road_133 = new RoadPrefab(this, 934, 328);
		road_133.scaleX = 0.8;
		road_133.scaleY = 0.8;
		road_133.body.setOffset(10, 11);
		rods_layer.add(road_133);

		// road_134
		const road_134 = new RoadPrefab(this, 88, 362);
		road_134.scaleX = 0.8;
		road_134.scaleY = 0.8;
		road_134.body.setOffset(10, 11);
		rods_layer.add(road_134);

		// road_135
		const road_135 = new RoadPrefab(this, 121, 362);
		road_135.scaleX = 0.8;
		road_135.scaleY = 0.8;
		road_135.body.setOffset(10, 11);
		rods_layer.add(road_135);

		// road_136
		const road_136 = new RoadPrefab(this, 154, 362);
		road_136.scaleX = 0.8;
		road_136.scaleY = 0.8;
		road_136.body.setOffset(10, 11);
		rods_layer.add(road_136);

		// road_137
		const road_137 = new RoadPrefab(this, 187, 362);
		road_137.scaleX = 0.8;
		road_137.scaleY = 0.8;
		road_137.body.setOffset(10, 11);
		rods_layer.add(road_137);

		// road_138
		const road_138 = new RoadPrefab(this, 220, 362);
		road_138.scaleX = 0.8;
		road_138.scaleY = 0.8;
		road_138.body.setOffset(10, 11);
		rods_layer.add(road_138);

		// road_139
		const road_139 = new RoadPrefab(this, 253, 362);
		road_139.scaleX = 0.8;
		road_139.scaleY = 0.8;
		road_139.body.setOffset(10, 11);
		rods_layer.add(road_139);

		// road_140
		const road_140 = new RoadPrefab(this, 286, 362);
		road_140.scaleX = 0.8;
		road_140.scaleY = 0.8;
		road_140.body.setOffset(10, 11);
		rods_layer.add(road_140);

		// road_141
		const road_141 = new RoadPrefab(this, 319, 362);
		road_141.scaleX = 0.8;
		road_141.scaleY = 0.8;
		road_141.body.setOffset(10, 11);
		rods_layer.add(road_141);

		// road_142
		const road_142 = new RoadPrefab(this, 352, 362);
		road_142.scaleX = 0.8;
		road_142.scaleY = 0.8;
		road_142.body.setOffset(10, 11);
		rods_layer.add(road_142);

		// road_143
		const road_143 = new RoadPrefab(this, 385, 362);
		road_143.scaleX = 0.8;
		road_143.scaleY = 0.8;
		road_143.body.setOffset(10, 11);
		rods_layer.add(road_143);

		// road_144
		const road_144 = new RoadPrefab(this, 418, 362);
		road_144.scaleX = 0.8;
		road_144.scaleY = 0.8;
		road_144.body.setOffset(10, 11);
		rods_layer.add(road_144);

		// road_145
		const road_145 = new RoadPrefab(this, 451, 362);
		road_145.scaleX = 0.8;
		road_145.scaleY = 0.8;
		road_145.body.setOffset(10, 11);
		rods_layer.add(road_145);

		// road_146
		const road_146 = new RoadPrefab(this, 485, 362);
		road_146.scaleX = 0.8;
		road_146.scaleY = 0.8;
		road_146.body.setOffset(10, 11);
		rods_layer.add(road_146);

		// road_147
		const road_147 = new RoadPrefab(this, 518, 362);
		road_147.scaleX = 0.8;
		road_147.scaleY = 0.8;
		road_147.body.setOffset(10, 11);
		rods_layer.add(road_147);

		// road_148
		const road_148 = new RoadPrefab(this, 551, 362);
		road_148.scaleX = 0.8;
		road_148.scaleY = 0.8;
		road_148.body.setOffset(10, 11);
		rods_layer.add(road_148);

		// road_149
		const road_149 = new RoadPrefab(this, 584, 362);
		road_149.scaleX = 0.8;
		road_149.scaleY = 0.8;
		road_149.body.setOffset(10, 11);
		rods_layer.add(road_149);

		// road_150
		const road_150 = new RoadPrefab(this, 617, 362);
		road_150.scaleX = 0.8;
		road_150.scaleY = 0.8;
		road_150.body.setOffset(10, 11);
		rods_layer.add(road_150);

		// road_151
		const road_151 = new RoadPrefab(this, 650, 362);
		road_151.scaleX = 0.8;
		road_151.scaleY = 0.8;
		road_151.body.setOffset(10, 11);
		rods_layer.add(road_151);

		// road_152
		const road_152 = new RoadPrefab(this, 683, 362);
		road_152.scaleX = 0.8;
		road_152.scaleY = 0.8;
		road_152.body.setOffset(10, 11);
		rods_layer.add(road_152);

		// road_153
		const road_153 = new RoadPrefab(this, 716, 362);
		road_153.scaleX = 0.8;
		road_153.scaleY = 0.8;
		road_153.body.setOffset(10, 11);
		rods_layer.add(road_153);

		// road_154
		const road_154 = new RoadPrefab(this, 749, 362);
		road_154.scaleX = 0.8;
		road_154.scaleY = 0.8;
		road_154.body.setOffset(10, 11);
		rods_layer.add(road_154);

		// road_155
		const road_155 = new RoadPrefab(this, 782, 362);
		road_155.scaleX = 0.8;
		road_155.scaleY = 0.8;
		road_155.body.setOffset(10, 11);
		rods_layer.add(road_155);

		// road_156
		const road_156 = new RoadPrefab(this, 815, 362);
		road_156.scaleX = 0.8;
		road_156.scaleY = 0.8;
		road_156.body.setOffset(10, 11);
		rods_layer.add(road_156);

		// road_157
		const road_157 = new RoadPrefab(this, 848, 362);
		road_157.scaleX = 0.8;
		road_157.scaleY = 0.8;
		road_157.body.setOffset(10, 11);
		rods_layer.add(road_157);

		// road_158
		const road_158 = new RoadPrefab(this, 869, 362);
		road_158.scaleX = 0.8;
		road_158.scaleY = 0.8;
		road_158.body.setOffset(10, 11);
		rods_layer.add(road_158);

		// road_159
		const road_159 = new RoadPrefab(this, 902, 362);
		road_159.scaleX = 0.8;
		road_159.scaleY = 0.8;
		road_159.body.setOffset(10, 11);
		rods_layer.add(road_159);

		// road_160
		const road_160 = new RoadPrefab(this, 935, 362);
		road_160.scaleX = 0.8;
		road_160.scaleY = 0.8;
		road_160.body.setOffset(10, 11);
		rods_layer.add(road_160);

		// road_161
		const road_161 = new RoadPrefab(this, 89, 397);
		road_161.scaleX = 0.8;
		road_161.scaleY = 0.8;
		road_161.body.setOffset(10, 11);
		rods_layer.add(road_161);

		// road_162
		const road_162 = new RoadPrefab(this, 122, 397);
		road_162.scaleX = 0.8;
		road_162.scaleY = 0.8;
		road_162.body.setOffset(10, 11);
		rods_layer.add(road_162);

		// road_163
		const road_163 = new RoadPrefab(this, 155, 397);
		road_163.scaleX = 0.8;
		road_163.scaleY = 0.8;
		road_163.body.setOffset(10, 11);
		rods_layer.add(road_163);

		// road_164
		const road_164 = new RoadPrefab(this, 188, 397);
		road_164.scaleX = 0.8;
		road_164.scaleY = 0.8;
		road_164.body.setOffset(10, 11);
		rods_layer.add(road_164);

		// road_165
		const road_165 = new RoadPrefab(this, 221, 397);
		road_165.scaleX = 0.8;
		road_165.scaleY = 0.8;
		road_165.body.setOffset(10, 11);
		rods_layer.add(road_165);

		// road_166
		const road_166 = new RoadPrefab(this, 254, 397);
		road_166.scaleX = 0.8;
		road_166.scaleY = 0.8;
		road_166.body.setOffset(10, 11);
		rods_layer.add(road_166);

		// road_167
		const road_167 = new RoadPrefab(this, 287, 397);
		road_167.scaleX = 0.8;
		road_167.scaleY = 0.8;
		road_167.body.setOffset(10, 11);
		rods_layer.add(road_167);

		// road_168
		const road_168 = new RoadPrefab(this, 320, 397);
		road_168.scaleX = 0.8;
		road_168.scaleY = 0.8;
		road_168.body.setOffset(10, 11);
		rods_layer.add(road_168);

		// road_169
		const road_169 = new RoadPrefab(this, 353, 397);
		road_169.scaleX = 0.8;
		road_169.scaleY = 0.8;
		road_169.body.setOffset(10, 11);
		rods_layer.add(road_169);

		// road_170
		const road_170 = new RoadPrefab(this, 386, 397);
		road_170.scaleX = 0.8;
		road_170.scaleY = 0.8;
		road_170.body.setOffset(10, 11);
		rods_layer.add(road_170);

		// road_171
		const road_171 = new RoadPrefab(this, 419, 397);
		road_171.scaleX = 0.8;
		road_171.scaleY = 0.8;
		road_171.body.setOffset(10, 11);
		rods_layer.add(road_171);

		// road_172
		const road_172 = new RoadPrefab(this, 452, 397);
		road_172.scaleX = 0.8;
		road_172.scaleY = 0.8;
		road_172.body.setOffset(10, 11);
		rods_layer.add(road_172);

		// road_173
		const road_173 = new RoadPrefab(this, 486, 397);
		road_173.scaleX = 0.8;
		road_173.scaleY = 0.8;
		road_173.body.setOffset(10, 11);
		rods_layer.add(road_173);

		// road_174
		const road_174 = new RoadPrefab(this, 519, 397);
		road_174.scaleX = 0.8;
		road_174.scaleY = 0.8;
		road_174.body.setOffset(10, 11);
		rods_layer.add(road_174);

		// road_175
		const road_175 = new RoadPrefab(this, 552, 397);
		road_175.scaleX = 0.8;
		road_175.scaleY = 0.8;
		road_175.body.setOffset(10, 11);
		rods_layer.add(road_175);

		// road_176
		const road_176 = new RoadPrefab(this, 585, 397);
		road_176.scaleX = 0.8;
		road_176.scaleY = 0.8;
		road_176.body.setOffset(10, 11);
		rods_layer.add(road_176);

		// road_177
		const road_177 = new RoadPrefab(this, 618, 397);
		road_177.scaleX = 0.8;
		road_177.scaleY = 0.8;
		road_177.body.setOffset(10, 11);
		rods_layer.add(road_177);

		// road_178
		const road_178 = new RoadPrefab(this, 651, 397);
		road_178.scaleX = 0.8;
		road_178.scaleY = 0.8;
		road_178.body.setOffset(10, 11);
		rods_layer.add(road_178);

		// road_179
		const road_179 = new RoadPrefab(this, 684, 397);
		road_179.scaleX = 0.8;
		road_179.scaleY = 0.8;
		road_179.body.setOffset(10, 11);
		rods_layer.add(road_179);

		// road_180
		const road_180 = new RoadPrefab(this, 717, 397);
		road_180.scaleX = 0.8;
		road_180.scaleY = 0.8;
		road_180.body.setOffset(10, 11);
		rods_layer.add(road_180);

		// road_181
		const road_181 = new RoadPrefab(this, 750, 397);
		road_181.scaleX = 0.8;
		road_181.scaleY = 0.8;
		road_181.body.setOffset(10, 11);
		rods_layer.add(road_181);

		// road_182
		const road_182 = new RoadPrefab(this, 783, 397);
		road_182.scaleX = 0.8;
		road_182.scaleY = 0.8;
		road_182.body.setOffset(10, 11);
		rods_layer.add(road_182);

		// road_183
		const road_183 = new RoadPrefab(this, 816, 397);
		road_183.scaleX = 0.8;
		road_183.scaleY = 0.8;
		road_183.body.setOffset(10, 11);
		rods_layer.add(road_183);

		// road_184
		const road_184 = new RoadPrefab(this, 849, 397);
		road_184.scaleX = 0.8;
		road_184.scaleY = 0.8;
		road_184.body.setOffset(10, 11);
		rods_layer.add(road_184);

		// road_185
		const road_185 = new RoadPrefab(this, 870, 397);
		road_185.scaleX = 0.8;
		road_185.scaleY = 0.8;
		road_185.body.setOffset(10, 11);
		rods_layer.add(road_185);

		// road_186
		const road_186 = new RoadPrefab(this, 903, 397);
		road_186.scaleX = 0.8;
		road_186.scaleY = 0.8;
		road_186.body.setOffset(10, 11);
		rods_layer.add(road_186);

		// road_187
		const road_187 = new RoadPrefab(this, 936, 397);
		road_187.scaleX = 0.8;
		road_187.scaleY = 0.8;
		road_187.body.setOffset(10, 11);
		rods_layer.add(road_187);

		// road_188
		const road_188 = new RoadPrefab(this, 88, 430);
		road_188.scaleX = 0.8;
		road_188.scaleY = 0.8;
		road_188.body.setOffset(10, 11);
		rods_layer.add(road_188);

		// road_189
		const road_189 = new RoadPrefab(this, 121, 430);
		road_189.scaleX = 0.8;
		road_189.scaleY = 0.8;
		road_189.body.setOffset(10, 11);
		rods_layer.add(road_189);

		// road_190
		const road_190 = new RoadPrefab(this, 154, 430);
		road_190.scaleX = 0.8;
		road_190.scaleY = 0.8;
		road_190.body.setOffset(10, 11);
		rods_layer.add(road_190);

		// road_191
		const road_191 = new RoadPrefab(this, 187, 430);
		road_191.scaleX = 0.8;
		road_191.scaleY = 0.8;
		road_191.body.setOffset(10, 11);
		rods_layer.add(road_191);

		// road_192
		const road_192 = new RoadPrefab(this, 220, 430);
		road_192.scaleX = 0.8;
		road_192.scaleY = 0.8;
		road_192.body.setOffset(10, 11);
		rods_layer.add(road_192);

		// road_193
		const road_193 = new RoadPrefab(this, 253, 430);
		road_193.scaleX = 0.8;
		road_193.scaleY = 0.8;
		road_193.body.setOffset(10, 11);
		rods_layer.add(road_193);

		// road_194
		const road_194 = new RoadPrefab(this, 286, 430);
		road_194.scaleX = 0.8;
		road_194.scaleY = 0.8;
		road_194.body.setOffset(10, 11);
		rods_layer.add(road_194);

		// road_195
		const road_195 = new RoadPrefab(this, 319, 430);
		road_195.scaleX = 0.8;
		road_195.scaleY = 0.8;
		road_195.body.setOffset(10, 11);
		rods_layer.add(road_195);

		// road_196
		const road_196 = new RoadPrefab(this, 352, 430);
		road_196.scaleX = 0.8;
		road_196.scaleY = 0.8;
		road_196.body.setOffset(10, 11);
		rods_layer.add(road_196);

		// road_197
		const road_197 = new RoadPrefab(this, 385, 430);
		road_197.scaleX = 0.8;
		road_197.scaleY = 0.8;
		road_197.body.setOffset(10, 11);
		rods_layer.add(road_197);

		// road_198
		const road_198 = new RoadPrefab(this, 418, 430);
		road_198.scaleX = 0.8;
		road_198.scaleY = 0.8;
		road_198.body.setOffset(10, 11);
		rods_layer.add(road_198);

		// road_199
		const road_199 = new RoadPrefab(this, 451, 430);
		road_199.scaleX = 0.8;
		road_199.scaleY = 0.8;
		road_199.body.setOffset(10, 11);
		rods_layer.add(road_199);

		// road_200
		const road_200 = new RoadPrefab(this, 485, 430);
		road_200.scaleX = 0.8;
		road_200.scaleY = 0.8;
		road_200.body.setOffset(10, 11);
		rods_layer.add(road_200);

		// road_201
		const road_201 = new RoadPrefab(this, 518, 430);
		road_201.scaleX = 0.8;
		road_201.scaleY = 0.8;
		road_201.body.setOffset(10, 11);
		rods_layer.add(road_201);

		// road_202
		const road_202 = new RoadPrefab(this, 551, 430);
		road_202.scaleX = 0.8;
		road_202.scaleY = 0.8;
		road_202.body.setOffset(10, 11);
		rods_layer.add(road_202);

		// road_203
		const road_203 = new RoadPrefab(this, 584, 430);
		road_203.scaleX = 0.8;
		road_203.scaleY = 0.8;
		road_203.body.setOffset(10, 11);
		rods_layer.add(road_203);

		// road_204
		const road_204 = new RoadPrefab(this, 617, 430);
		road_204.scaleX = 0.8;
		road_204.scaleY = 0.8;
		road_204.body.setOffset(10, 11);
		rods_layer.add(road_204);

		// road_205
		const road_205 = new RoadPrefab(this, 650, 430);
		road_205.scaleX = 0.8;
		road_205.scaleY = 0.8;
		road_205.body.setOffset(10, 11);
		rods_layer.add(road_205);

		// road_206
		const road_206 = new RoadPrefab(this, 683, 430);
		road_206.scaleX = 0.8;
		road_206.scaleY = 0.8;
		road_206.body.setOffset(10, 11);
		rods_layer.add(road_206);

		// road_207
		const road_207 = new RoadPrefab(this, 716, 430);
		road_207.scaleX = 0.8;
		road_207.scaleY = 0.8;
		road_207.body.setOffset(10, 11);
		rods_layer.add(road_207);

		// road_208
		const road_208 = new RoadPrefab(this, 749, 430);
		road_208.scaleX = 0.8;
		road_208.scaleY = 0.8;
		road_208.body.setOffset(10, 11);
		rods_layer.add(road_208);

		// road_209
		const road_209 = new RoadPrefab(this, 782, 430);
		road_209.scaleX = 0.8;
		road_209.scaleY = 0.8;
		road_209.body.setOffset(10, 11);
		rods_layer.add(road_209);

		// road_210
		const road_210 = new RoadPrefab(this, 815, 430);
		road_210.scaleX = 0.8;
		road_210.scaleY = 0.8;
		road_210.body.setOffset(10, 11);
		rods_layer.add(road_210);

		// road_211
		const road_211 = new RoadPrefab(this, 848, 430);
		road_211.scaleX = 0.8;
		road_211.scaleY = 0.8;
		road_211.body.setOffset(10, 11);
		rods_layer.add(road_211);

		// road_212
		const road_212 = new RoadPrefab(this, 869, 430);
		road_212.scaleX = 0.8;
		road_212.scaleY = 0.8;
		road_212.body.setOffset(10, 11);
		rods_layer.add(road_212);

		// road_213
		const road_213 = new RoadPrefab(this, 902, 430);
		road_213.scaleX = 0.8;
		road_213.scaleY = 0.8;
		road_213.body.setOffset(10, 11);
		rods_layer.add(road_213);

		// road_214
		const road_214 = new RoadPrefab(this, 935, 430);
		road_214.scaleX = 0.8;
		road_214.scaleY = 0.8;
		road_214.body.setOffset(10, 11);
		rods_layer.add(road_214);

		// road_215
		const road_215 = new RoadPrefab(this, 88, 463);
		road_215.scaleX = 0.8;
		road_215.scaleY = 0.8;
		road_215.body.setOffset(10, 11);
		rods_layer.add(road_215);

		// road_216
		const road_216 = new RoadPrefab(this, 121, 463);
		road_216.scaleX = 0.8;
		road_216.scaleY = 0.8;
		road_216.body.setOffset(10, 11);
		rods_layer.add(road_216);

		// road_217
		const road_217 = new RoadPrefab(this, 154, 463);
		road_217.scaleX = 0.8;
		road_217.scaleY = 0.8;
		road_217.body.setOffset(10, 11);
		rods_layer.add(road_217);

		// road_218
		const road_218 = new RoadPrefab(this, 187, 463);
		road_218.scaleX = 0.8;
		road_218.scaleY = 0.8;
		road_218.body.setOffset(10, 11);
		rods_layer.add(road_218);

		// road_219
		const road_219 = new RoadPrefab(this, 220, 463);
		road_219.scaleX = 0.8;
		road_219.scaleY = 0.8;
		road_219.body.setOffset(10, 11);
		rods_layer.add(road_219);

		// road_220
		const road_220 = new RoadPrefab(this, 253, 463);
		road_220.scaleX = 0.8;
		road_220.scaleY = 0.8;
		road_220.body.setOffset(10, 11);
		rods_layer.add(road_220);

		// road_221
		const road_221 = new RoadPrefab(this, 286, 463);
		road_221.scaleX = 0.8;
		road_221.scaleY = 0.8;
		road_221.body.setOffset(10, 11);
		rods_layer.add(road_221);

		// road_222
		const road_222 = new RoadPrefab(this, 319, 463);
		road_222.scaleX = 0.8;
		road_222.scaleY = 0.8;
		road_222.body.setOffset(10, 11);
		rods_layer.add(road_222);

		// road_223
		const road_223 = new RoadPrefab(this, 352, 463);
		road_223.scaleX = 0.8;
		road_223.scaleY = 0.8;
		road_223.body.setOffset(10, 11);
		rods_layer.add(road_223);

		// road_224
		const road_224 = new RoadPrefab(this, 385, 463);
		road_224.scaleX = 0.8;
		road_224.scaleY = 0.8;
		road_224.body.setOffset(10, 11);
		rods_layer.add(road_224);

		// road_225
		const road_225 = new RoadPrefab(this, 418, 463);
		road_225.scaleX = 0.8;
		road_225.scaleY = 0.8;
		road_225.body.setOffset(10, 11);
		rods_layer.add(road_225);

		// road_226
		const road_226 = new RoadPrefab(this, 451, 463);
		road_226.scaleX = 0.8;
		road_226.scaleY = 0.8;
		road_226.body.setOffset(10, 11);
		rods_layer.add(road_226);

		// road_227
		const road_227 = new RoadPrefab(this, 485, 463);
		road_227.scaleX = 0.8;
		road_227.scaleY = 0.8;
		road_227.body.setOffset(10, 11);
		rods_layer.add(road_227);

		// road_228
		const road_228 = new RoadPrefab(this, 518, 463);
		road_228.scaleX = 0.8;
		road_228.scaleY = 0.8;
		road_228.body.setOffset(10, 11);
		rods_layer.add(road_228);

		// road_229
		const road_229 = new RoadPrefab(this, 551, 463);
		road_229.scaleX = 0.8;
		road_229.scaleY = 0.8;
		road_229.body.setOffset(10, 11);
		rods_layer.add(road_229);

		// road_230
		const road_230 = new RoadPrefab(this, 584, 463);
		road_230.scaleX = 0.8;
		road_230.scaleY = 0.8;
		road_230.body.setOffset(10, 11);
		rods_layer.add(road_230);

		// road_231
		const road_231 = new RoadPrefab(this, 617, 463);
		road_231.scaleX = 0.8;
		road_231.scaleY = 0.8;
		road_231.body.setOffset(10, 11);
		rods_layer.add(road_231);

		// road_232
		const road_232 = new RoadPrefab(this, 650, 463);
		road_232.scaleX = 0.8;
		road_232.scaleY = 0.8;
		road_232.body.setOffset(10, 11);
		rods_layer.add(road_232);

		// road_233
		const road_233 = new RoadPrefab(this, 683, 463);
		road_233.scaleX = 0.8;
		road_233.scaleY = 0.8;
		road_233.body.setOffset(10, 11);
		rods_layer.add(road_233);

		// road_234
		const road_234 = new RoadPrefab(this, 716, 463);
		road_234.scaleX = 0.8;
		road_234.scaleY = 0.8;
		road_234.body.setOffset(10, 11);
		rods_layer.add(road_234);

		// road_235
		const road_235 = new RoadPrefab(this, 749, 463);
		road_235.scaleX = 0.8;
		road_235.scaleY = 0.8;
		road_235.body.setOffset(10, 11);
		rods_layer.add(road_235);

		// road_236
		const road_236 = new RoadPrefab(this, 782, 463);
		road_236.scaleX = 0.8;
		road_236.scaleY = 0.8;
		road_236.body.setOffset(10, 11);
		rods_layer.add(road_236);

		// road_237
		const road_237 = new RoadPrefab(this, 815, 463);
		road_237.scaleX = 0.8;
		road_237.scaleY = 0.8;
		road_237.body.setOffset(10, 11);
		rods_layer.add(road_237);

		// road_238
		const road_238 = new RoadPrefab(this, 848, 463);
		road_238.scaleX = 0.8;
		road_238.scaleY = 0.8;
		road_238.body.setOffset(10, 11);
		rods_layer.add(road_238);

		// road_239
		const road_239 = new RoadPrefab(this, 869, 463);
		road_239.scaleX = 0.8;
		road_239.scaleY = 0.8;
		road_239.body.setOffset(10, 11);
		rods_layer.add(road_239);

		// road_240
		const road_240 = new RoadPrefab(this, 902, 463);
		road_240.scaleX = 0.8;
		road_240.scaleY = 0.8;
		road_240.body.setOffset(10, 11);
		rods_layer.add(road_240);

		// road_241
		const road_241 = new RoadPrefab(this, 935, 463);
		road_241.scaleX = 0.8;
		road_241.scaleY = 0.8;
		road_241.body.setOffset(10, 11);
		rods_layer.add(road_241);

		// road_242
		const road_242 = new RoadPrefab(this, 89, 496);
		road_242.scaleX = 0.8;
		road_242.scaleY = 0.8;
		road_242.body.setOffset(10, 11);
		rods_layer.add(road_242);

		// road_243
		const road_243 = new RoadPrefab(this, 122, 496);
		road_243.scaleX = 0.8;
		road_243.scaleY = 0.8;
		road_243.body.setOffset(10, 11);
		rods_layer.add(road_243);

		// road_244
		const road_244 = new RoadPrefab(this, 155, 496);
		road_244.scaleX = 0.8;
		road_244.scaleY = 0.8;
		road_244.body.setOffset(10, 11);
		rods_layer.add(road_244);

		// road_245
		const road_245 = new RoadPrefab(this, 188, 496);
		road_245.scaleX = 0.8;
		road_245.scaleY = 0.8;
		road_245.body.setOffset(10, 11);
		rods_layer.add(road_245);

		// road_246
		const road_246 = new RoadPrefab(this, 221, 496);
		road_246.scaleX = 0.8;
		road_246.scaleY = 0.8;
		road_246.body.setOffset(10, 11);
		rods_layer.add(road_246);

		// road_247
		const road_247 = new RoadPrefab(this, 254, 496);
		road_247.scaleX = 0.8;
		road_247.scaleY = 0.8;
		road_247.body.setOffset(10, 11);
		rods_layer.add(road_247);

		// road_248
		const road_248 = new RoadPrefab(this, 287, 496);
		road_248.scaleX = 0.8;
		road_248.scaleY = 0.8;
		road_248.body.setOffset(10, 11);
		rods_layer.add(road_248);

		// road_249
		const road_249 = new RoadPrefab(this, 320, 496);
		road_249.scaleX = 0.8;
		road_249.scaleY = 0.8;
		road_249.body.setOffset(10, 11);
		rods_layer.add(road_249);

		// road_250
		const road_250 = new RoadPrefab(this, 353, 496);
		road_250.scaleX = 0.8;
		road_250.scaleY = 0.8;
		road_250.body.setOffset(10, 11);
		rods_layer.add(road_250);

		// road_251
		const road_251 = new RoadPrefab(this, 386, 496);
		road_251.scaleX = 0.8;
		road_251.scaleY = 0.8;
		road_251.body.setOffset(10, 11);
		rods_layer.add(road_251);

		// road_252
		const road_252 = new RoadPrefab(this, 419, 496);
		road_252.scaleX = 0.8;
		road_252.scaleY = 0.8;
		road_252.body.setOffset(10, 11);
		rods_layer.add(road_252);

		// road_253
		const road_253 = new RoadPrefab(this, 452, 496);
		road_253.scaleX = 0.8;
		road_253.scaleY = 0.8;
		road_253.body.setOffset(10, 11);
		rods_layer.add(road_253);

		// road_254
		const road_254 = new RoadPrefab(this, 486, 496);
		road_254.scaleX = 0.8;
		road_254.scaleY = 0.8;
		road_254.body.setOffset(10, 11);
		rods_layer.add(road_254);

		// road_255
		const road_255 = new RoadPrefab(this, 519, 496);
		road_255.scaleX = 0.8;
		road_255.scaleY = 0.8;
		road_255.body.setOffset(10, 11);
		rods_layer.add(road_255);

		// road_256
		const road_256 = new RoadPrefab(this, 552, 496);
		road_256.scaleX = 0.8;
		road_256.scaleY = 0.8;
		road_256.body.setOffset(10, 11);
		rods_layer.add(road_256);

		// road_257
		const road_257 = new RoadPrefab(this, 585, 496);
		road_257.scaleX = 0.8;
		road_257.scaleY = 0.8;
		road_257.body.setOffset(10, 11);
		rods_layer.add(road_257);

		// road_258
		const road_258 = new RoadPrefab(this, 618, 496);
		road_258.scaleX = 0.8;
		road_258.scaleY = 0.8;
		road_258.body.setOffset(10, 11);
		rods_layer.add(road_258);

		// road_259
		const road_259 = new RoadPrefab(this, 651, 496);
		road_259.scaleX = 0.8;
		road_259.scaleY = 0.8;
		road_259.body.setOffset(10, 11);
		rods_layer.add(road_259);

		// road_260
		const road_260 = new RoadPrefab(this, 684, 496);
		road_260.scaleX = 0.8;
		road_260.scaleY = 0.8;
		road_260.body.setOffset(10, 11);
		rods_layer.add(road_260);

		// road_261
		const road_261 = new RoadPrefab(this, 717, 496);
		road_261.scaleX = 0.8;
		road_261.scaleY = 0.8;
		road_261.body.setOffset(10, 11);
		rods_layer.add(road_261);

		// road_262
		const road_262 = new RoadPrefab(this, 750, 496);
		road_262.scaleX = 0.8;
		road_262.scaleY = 0.8;
		road_262.body.setOffset(10, 11);
		rods_layer.add(road_262);

		// road_264
		const road_264 = new RoadPrefab(this, 783, 496);
		road_264.scaleX = 0.8;
		road_264.scaleY = 0.8;
		road_264.body.setOffset(10, 11);
		rods_layer.add(road_264);

		// road_265
		const road_265 = new RoadPrefab(this, 816, 496);
		road_265.scaleX = 0.8;
		road_265.scaleY = 0.8;
		road_265.body.setOffset(10, 11);
		rods_layer.add(road_265);

		// road_266
		const road_266 = new RoadPrefab(this, 849, 496);
		road_266.scaleX = 0.8;
		road_266.scaleY = 0.8;
		road_266.body.setOffset(10, 11);
		rods_layer.add(road_266);

		// road_267
		const road_267 = new RoadPrefab(this, 870, 496);
		road_267.scaleX = 0.8;
		road_267.scaleY = 0.8;
		road_267.body.setOffset(10, 11);
		rods_layer.add(road_267);

		// road_268
		const road_268 = new RoadPrefab(this, 903, 496);
		road_268.scaleX = 0.8;
		road_268.scaleY = 0.8;
		road_268.body.setOffset(10, 11);
		rods_layer.add(road_268);

		// road_269
		const road_269 = new RoadPrefab(this, 936, 496);
		road_269.scaleX = 0.8;
		road_269.scaleY = 0.8;
		road_269.body.setOffset(10, 11);
		rods_layer.add(road_269);

		// road_270
		const road_270 = new RoadPrefab(this, 88, 530);
		road_270.scaleX = 0.8;
		road_270.scaleY = 0.8;
		road_270.body.setOffset(10, 11);
		rods_layer.add(road_270);

		// road_271
		const road_271 = new RoadPrefab(this, 121, 530);
		road_271.scaleX = 0.8;
		road_271.scaleY = 0.8;
		road_271.body.setOffset(10, 11);
		rods_layer.add(road_271);

		// road_272
		const road_272 = new RoadPrefab(this, 154, 530);
		road_272.scaleX = 0.8;
		road_272.scaleY = 0.8;
		road_272.body.setOffset(10, 11);
		rods_layer.add(road_272);

		// road_273
		const road_273 = new RoadPrefab(this, 187, 530);
		road_273.scaleX = 0.8;
		road_273.scaleY = 0.8;
		road_273.body.setOffset(10, 11);
		rods_layer.add(road_273);

		// road_274
		const road_274 = new RoadPrefab(this, 220, 530);
		road_274.scaleX = 0.8;
		road_274.scaleY = 0.8;
		road_274.body.setOffset(10, 11);
		rods_layer.add(road_274);

		// road_275
		const road_275 = new RoadPrefab(this, 253, 530);
		road_275.scaleX = 0.8;
		road_275.scaleY = 0.8;
		road_275.body.setOffset(10, 11);
		rods_layer.add(road_275);

		// road_276
		const road_276 = new RoadPrefab(this, 286, 530);
		road_276.scaleX = 0.8;
		road_276.scaleY = 0.8;
		road_276.body.setOffset(10, 11);
		rods_layer.add(road_276);

		// road_277
		const road_277 = new RoadPrefab(this, 319, 530);
		road_277.scaleX = 0.8;
		road_277.scaleY = 0.8;
		road_277.body.setOffset(10, 11);
		rods_layer.add(road_277);

		// road_278
		const road_278 = new RoadPrefab(this, 352, 530);
		road_278.scaleX = 0.8;
		road_278.scaleY = 0.8;
		road_278.body.setOffset(10, 11);
		rods_layer.add(road_278);

		// road_279
		const road_279 = new RoadPrefab(this, 385, 530);
		road_279.scaleX = 0.8;
		road_279.scaleY = 0.8;
		road_279.body.setOffset(10, 11);
		rods_layer.add(road_279);

		// road_280
		const road_280 = new RoadPrefab(this, 418, 530);
		road_280.scaleX = 0.8;
		road_280.scaleY = 0.8;
		road_280.body.setOffset(10, 11);
		rods_layer.add(road_280);

		// road_281
		const road_281 = new RoadPrefab(this, 451, 530);
		road_281.scaleX = 0.8;
		road_281.scaleY = 0.8;
		road_281.body.setOffset(10, 11);
		rods_layer.add(road_281);

		// road_282
		const road_282 = new RoadPrefab(this, 485, 530);
		road_282.scaleX = 0.8;
		road_282.scaleY = 0.8;
		road_282.body.setOffset(10, 11);
		rods_layer.add(road_282);

		// road_283
		const road_283 = new RoadPrefab(this, 518, 530);
		road_283.scaleX = 0.8;
		road_283.scaleY = 0.8;
		road_283.body.setOffset(10, 11);
		rods_layer.add(road_283);

		// road_284
		const road_284 = new RoadPrefab(this, 551, 530);
		road_284.scaleX = 0.8;
		road_284.scaleY = 0.8;
		road_284.body.setOffset(10, 11);
		rods_layer.add(road_284);

		// road_285
		const road_285 = new RoadPrefab(this, 584, 530);
		road_285.scaleX = 0.8;
		road_285.scaleY = 0.8;
		road_285.body.setOffset(10, 11);
		rods_layer.add(road_285);

		// road_286
		const road_286 = new RoadPrefab(this, 617, 530);
		road_286.scaleX = 0.8;
		road_286.scaleY = 0.8;
		road_286.body.setOffset(10, 11);
		rods_layer.add(road_286);

		// road_287
		const road_287 = new RoadPrefab(this, 650, 530);
		road_287.scaleX = 0.8;
		road_287.scaleY = 0.8;
		road_287.body.setOffset(10, 11);
		rods_layer.add(road_287);

		// road_288
		const road_288 = new RoadPrefab(this, 683, 530);
		road_288.scaleX = 0.8;
		road_288.scaleY = 0.8;
		road_288.body.setOffset(10, 11);
		rods_layer.add(road_288);

		// road_289
		const road_289 = new RoadPrefab(this, 716, 530);
		road_289.scaleX = 0.8;
		road_289.scaleY = 0.8;
		road_289.body.setOffset(10, 11);
		rods_layer.add(road_289);

		// road_290
		const road_290 = new RoadPrefab(this, 749, 530);
		road_290.scaleX = 0.8;
		road_290.scaleY = 0.8;
		road_290.body.setOffset(10, 11);
		rods_layer.add(road_290);

		// road_291
		const road_291 = new RoadPrefab(this, 782, 530);
		road_291.scaleX = 0.8;
		road_291.scaleY = 0.8;
		road_291.body.setOffset(10, 11);
		rods_layer.add(road_291);

		// road_292
		const road_292 = new RoadPrefab(this, 815, 530);
		road_292.scaleX = 0.8;
		road_292.scaleY = 0.8;
		road_292.body.setOffset(10, 11);
		rods_layer.add(road_292);

		// road_293
		const road_293 = new RoadPrefab(this, 848, 530);
		road_293.scaleX = 0.8;
		road_293.scaleY = 0.8;
		road_293.body.setOffset(10, 11);
		rods_layer.add(road_293);

		// road_294
		const road_294 = new RoadPrefab(this, 869, 530);
		road_294.scaleX = 0.8;
		road_294.scaleY = 0.8;
		road_294.body.setOffset(10, 11);
		rods_layer.add(road_294);

		// road_295
		const road_295 = new RoadPrefab(this, 902, 530);
		road_295.scaleX = 0.8;
		road_295.scaleY = 0.8;
		road_295.body.setOffset(10, 11);
		rods_layer.add(road_295);

		// road_296
		const road_296 = new RoadPrefab(this, 935, 530);
		road_296.scaleX = 0.8;
		road_296.scaleY = 0.8;
		road_296.body.setOffset(10, 11);
		rods_layer.add(road_296);

		// road_297
		const road_297 = new RoadPrefab(this, 88, 565);
		road_297.scaleX = 0.8;
		road_297.scaleY = 0.8;
		road_297.body.setOffset(10, 11);
		rods_layer.add(road_297);

		// road_298
		const road_298 = new RoadPrefab(this, 121, 565);
		road_298.scaleX = 0.8;
		road_298.scaleY = 0.8;
		road_298.body.setOffset(10, 11);
		rods_layer.add(road_298);

		// road_299
		const road_299 = new RoadPrefab(this, 154, 565);
		road_299.scaleX = 0.8;
		road_299.scaleY = 0.8;
		road_299.body.setOffset(10, 11);
		rods_layer.add(road_299);

		// road_300
		const road_300 = new RoadPrefab(this, 187, 565);
		road_300.scaleX = 0.8;
		road_300.scaleY = 0.8;
		road_300.body.setOffset(10, 11);
		rods_layer.add(road_300);

		// road_301
		const road_301 = new RoadPrefab(this, 220, 565);
		road_301.scaleX = 0.8;
		road_301.scaleY = 0.8;
		road_301.body.setOffset(10, 11);
		rods_layer.add(road_301);

		// road_302
		const road_302 = new RoadPrefab(this, 253, 565);
		road_302.scaleX = 0.8;
		road_302.scaleY = 0.8;
		road_302.body.setOffset(10, 11);
		rods_layer.add(road_302);

		// road_303
		const road_303 = new RoadPrefab(this, 286, 565);
		road_303.scaleX = 0.8;
		road_303.scaleY = 0.8;
		road_303.body.setOffset(10, 11);
		rods_layer.add(road_303);

		// road_304
		const road_304 = new RoadPrefab(this, 319, 565);
		road_304.scaleX = 0.8;
		road_304.scaleY = 0.8;
		road_304.body.setOffset(10, 11);
		rods_layer.add(road_304);

		// road_305
		const road_305 = new RoadPrefab(this, 352, 565);
		road_305.scaleX = 0.8;
		road_305.scaleY = 0.8;
		road_305.body.setOffset(10, 11);
		rods_layer.add(road_305);

		// road_306
		const road_306 = new RoadPrefab(this, 385, 565);
		road_306.scaleX = 0.8;
		road_306.scaleY = 0.8;
		road_306.body.setOffset(10, 11);
		rods_layer.add(road_306);

		// road_307
		const road_307 = new RoadPrefab(this, 418, 565);
		road_307.scaleX = 0.8;
		road_307.scaleY = 0.8;
		road_307.body.setOffset(10, 11);
		rods_layer.add(road_307);

		// road_308
		const road_308 = new RoadPrefab(this, 451, 565);
		road_308.scaleX = 0.8;
		road_308.scaleY = 0.8;
		road_308.body.setOffset(10, 11);
		rods_layer.add(road_308);

		// road_309
		const road_309 = new RoadPrefab(this, 485, 565);
		road_309.scaleX = 0.8;
		road_309.scaleY = 0.8;
		road_309.body.setOffset(10, 11);
		rods_layer.add(road_309);

		// road_310
		const road_310 = new RoadPrefab(this, 518, 565);
		road_310.scaleX = 0.8;
		road_310.scaleY = 0.8;
		road_310.body.setOffset(10, 11);
		rods_layer.add(road_310);

		// road_311
		const road_311 = new RoadPrefab(this, 551, 565);
		road_311.scaleX = 0.8;
		road_311.scaleY = 0.8;
		road_311.body.setOffset(10, 11);
		rods_layer.add(road_311);

		// road_312
		const road_312 = new RoadPrefab(this, 584, 565);
		road_312.scaleX = 0.8;
		road_312.scaleY = 0.8;
		road_312.body.setOffset(10, 11);
		rods_layer.add(road_312);

		// road_313
		const road_313 = new RoadPrefab(this, 617, 565);
		road_313.scaleX = 0.8;
		road_313.scaleY = 0.8;
		road_313.body.setOffset(10, 11);
		rods_layer.add(road_313);

		// road_314
		const road_314 = new RoadPrefab(this, 650, 565);
		road_314.scaleX = 0.8;
		road_314.scaleY = 0.8;
		road_314.body.setOffset(10, 11);
		rods_layer.add(road_314);

		// road_315
		const road_315 = new RoadPrefab(this, 683, 565);
		road_315.scaleX = 0.8;
		road_315.scaleY = 0.8;
		road_315.body.setOffset(10, 11);
		rods_layer.add(road_315);

		// road_316
		const road_316 = new RoadPrefab(this, 716, 565);
		road_316.scaleX = 0.8;
		road_316.scaleY = 0.8;
		road_316.body.setOffset(10, 11);
		rods_layer.add(road_316);

		// road_317
		const road_317 = new RoadPrefab(this, 749, 565);
		road_317.scaleX = 0.8;
		road_317.scaleY = 0.8;
		road_317.body.setOffset(10, 11);
		rods_layer.add(road_317);

		// road_318
		const road_318 = new RoadPrefab(this, 782, 565);
		road_318.scaleX = 0.8;
		road_318.scaleY = 0.8;
		road_318.body.setOffset(10, 11);
		rods_layer.add(road_318);

		// road_319
		const road_319 = new RoadPrefab(this, 815, 565);
		road_319.scaleX = 0.8;
		road_319.scaleY = 0.8;
		road_319.body.setOffset(10, 11);
		rods_layer.add(road_319);

		// road_320
		const road_320 = new RoadPrefab(this, 848, 565);
		road_320.scaleX = 0.8;
		road_320.scaleY = 0.8;
		road_320.body.setOffset(10, 11);
		rods_layer.add(road_320);

		// road_321
		const road_321 = new RoadPrefab(this, 869, 565);
		road_321.scaleX = 0.8;
		road_321.scaleY = 0.8;
		road_321.body.setOffset(10, 11);
		rods_layer.add(road_321);

		// road_322
		const road_322 = new RoadPrefab(this, 902, 565);
		road_322.scaleX = 0.8;
		road_322.scaleY = 0.8;
		road_322.body.setOffset(10, 11);
		rods_layer.add(road_322);

		// road_323
		const road_323 = new RoadPrefab(this, 935, 565);
		road_323.scaleX = 0.8;
		road_323.scaleY = 0.8;
		road_323.body.setOffset(10, 11);
		rods_layer.add(road_323);

		// footer
		this.add.image(512, 701, "footer");

		// header
		this.add.image(512, 78, "header");

		// level_1
		this.add.image(511, 384, "game_level_3_map");

		// player
		const player = new Hero(this, 90, 203);
		this.add.existing(player);
		player.scaleX = 0.5;
		player.scaleY = 0.5;

		// timer_container
		this.add.image(885, 112, "timer_container");

		// gameOverPrefab
		const gameOverPrefab = new GameOverPrefab(this, -1, 768);
		this.add.existing(gameOverPrefab);

		// levelClearPrefab
		const levelClearPrefab = new LevelClearPrefab(this, -1, 768);
		this.add.existing(levelClearPrefab);

		// walls_layer
		const walls_layer = this.add.layer();

		// wall_level_3_0000_Layer_2
		const wall_level_3_0000_Layer_2 = this.physics.add.image(513, 182, "wall_level_3_0000_Layer-2");
		wall_level_3_0000_Layer_2.alpha = 0;
		wall_level_3_0000_Layer_2.alphaTopLeft = 0;
		wall_level_3_0000_Layer_2.alphaTopRight = 0;
		wall_level_3_0000_Layer_2.alphaBottomLeft = 0;
		wall_level_3_0000_Layer_2.alphaBottomRight = 0;
		wall_level_3_0000_Layer_2.body.immovable = true;
		wall_level_3_0000_Layer_2.body.setSize(883, 7, false);
		walls_layer.add(wall_level_3_0000_Layer_2);

		// wall_level_3_0001_Layer_3
		const wall_level_3_0001_Layer_3 = this.physics.add.image(71, 385, "wall_level_3_0001_Layer-3");
		wall_level_3_0001_Layer_3.alpha = 0;
		wall_level_3_0001_Layer_3.alphaTopLeft = 0;
		wall_level_3_0001_Layer_3.alphaTopRight = 0;
		wall_level_3_0001_Layer_3.alphaBottomLeft = 0;
		wall_level_3_0001_Layer_3.alphaBottomRight = 0;
		wall_level_3_0001_Layer_3.body.immovable = true;
		wall_level_3_0001_Layer_3.body.setSize(6, 404, false);
		walls_layer.add(wall_level_3_0001_Layer_3);

		// wall_level_3_0001_Layer
		const wall_level_3_0001_Layer = this.physics.add.image(951, 385, "wall_level_3_0001_Layer-3");
		wall_level_3_0001_Layer.alpha = 0;
		wall_level_3_0001_Layer.alphaTopLeft = 0;
		wall_level_3_0001_Layer.alphaTopRight = 0;
		wall_level_3_0001_Layer.alphaBottomLeft = 0;
		wall_level_3_0001_Layer.alphaBottomRight = 0;
		wall_level_3_0001_Layer.body.immovable = true;
		wall_level_3_0001_Layer.body.setSize(6, 404, false);
		walls_layer.add(wall_level_3_0001_Layer);

		// wall_level_3_0000_Layer
		const wall_level_3_0000_Layer = this.physics.add.image(512, 588, "wall_level_3_0000_Layer-2");
		wall_level_3_0000_Layer.alpha = 0;
		wall_level_3_0000_Layer.alphaTopLeft = 0;
		wall_level_3_0000_Layer.alphaTopRight = 0;
		wall_level_3_0000_Layer.alphaBottomLeft = 0;
		wall_level_3_0000_Layer.alphaBottomRight = 0;
		wall_level_3_0000_Layer.body.immovable = true;
		wall_level_3_0000_Layer.body.setSize(883, 7, false);
		walls_layer.add(wall_level_3_0000_Layer);

		// wall_level_3_0002_Layer_4
		const wall_level_3_0002_Layer_4 = this.physics.add.image(106, 232, "wall_level_3_0002_Layer-4");
		wall_level_3_0002_Layer_4.alpha = 0;
		wall_level_3_0002_Layer_4.alphaTopLeft = 0;
		wall_level_3_0002_Layer_4.alphaTopRight = 0;
		wall_level_3_0002_Layer_4.alphaBottomLeft = 0;
		wall_level_3_0002_Layer_4.alphaBottomRight = 0;
		wall_level_3_0002_Layer_4.body.immovable = true;
		wall_level_3_0002_Layer_4.body.setSize(6, 35, false);
		walls_layer.add(wall_level_3_0002_Layer_4);

		// wall_level_3_0005_Layer_7
		const wall_level_3_0005_Layer_7 = this.physics.add.image(88, 283, "wall_level_3_0005_Layer-7");
		wall_level_3_0005_Layer_7.alpha = 0;
		wall_level_3_0005_Layer_7.alphaTopLeft = 0;
		wall_level_3_0005_Layer_7.alphaTopRight = 0;
		wall_level_3_0005_Layer_7.alphaBottomLeft = 0;
		wall_level_3_0005_Layer_7.alphaBottomRight = 0;
		wall_level_3_0005_Layer_7.body.immovable = true;
		wall_level_3_0005_Layer_7.body.setSize(31, 6, false);
		walls_layer.add(wall_level_3_0005_Layer_7);

		// wall_level_3_0006_Layer_8
		const wall_level_3_0006_Layer_8 = this.physics.add.image(140, 214, "wall_level_3_0006_Layer-8");
		wall_level_3_0006_Layer_8.alpha = 0;
		wall_level_3_0006_Layer_8.alphaTopLeft = 0;
		wall_level_3_0006_Layer_8.alphaTopRight = 0;
		wall_level_3_0006_Layer_8.alphaBottomLeft = 0;
		wall_level_3_0006_Layer_8.alphaBottomRight = 0;
		wall_level_3_0006_Layer_8.body.immovable = true;
		wall_level_3_0006_Layer_8.body.setSize(7, 71, false);
		walls_layer.add(wall_level_3_0006_Layer_8);

		// wall_level_3_0007_Layer_9
		const wall_level_3_0007_Layer_9 = this.physics.add.image(88, 386, "wall_level_3_0007_Layer-9");
		wall_level_3_0007_Layer_9.alpha = 0;
		wall_level_3_0007_Layer_9.alphaTopLeft = 0;
		wall_level_3_0007_Layer_9.alphaTopRight = 0;
		wall_level_3_0007_Layer_9.alphaBottomLeft = 0;
		wall_level_3_0007_Layer_9.alphaBottomRight = 0;
		wall_level_3_0007_Layer_9.body.immovable = true;
		wall_level_3_0007_Layer_9.body.setSize(27, 6, false);
		walls_layer.add(wall_level_3_0007_Layer_9);

		// wall_level_3_0008_Layer_10
		const wall_level_3_0008_Layer_10 = this.physics.add.image(107, 352, "wall_level_3_0008_Layer-10");
		wall_level_3_0008_Layer_10.alpha = 0;
		wall_level_3_0008_Layer_10.alphaTopLeft = 0;
		wall_level_3_0008_Layer_10.alphaTopRight = 0;
		wall_level_3_0008_Layer_10.alphaBottomLeft = 0;
		wall_level_3_0008_Layer_10.alphaBottomRight = 0;
		wall_level_3_0008_Layer_10.body.immovable = true;
		wall_level_3_0008_Layer_10.body.setSize(7, 71, false);
		walls_layer.add(wall_level_3_0008_Layer_10);

		// wall_level_3_0008_Layer
		const wall_level_3_0008_Layer = this.physics.add.image(207, 216, "wall_level_3_0008_Layer-10");
		wall_level_3_0008_Layer.alpha = 0;
		wall_level_3_0008_Layer.alphaTopLeft = 0;
		wall_level_3_0008_Layer.alphaTopRight = 0;
		wall_level_3_0008_Layer.alphaBottomLeft = 0;
		wall_level_3_0008_Layer.alphaBottomRight = 0;
		wall_level_3_0008_Layer.body.immovable = true;
		wall_level_3_0008_Layer.body.setSize(7, 71, false);
		walls_layer.add(wall_level_3_0008_Layer);

		// wall_level_3_0009_Layer_11
		const wall_level_3_0009_Layer_11 = this.physics.add.image(241, 233, "wall_level_3_0009_Layer-11");
		wall_level_3_0009_Layer_11.alpha = 0;
		wall_level_3_0009_Layer_11.alphaTopLeft = 0;
		wall_level_3_0009_Layer_11.alphaTopRight = 0;
		wall_level_3_0009_Layer_11.alphaBottomLeft = 0;
		wall_level_3_0009_Layer_11.alphaBottomRight = 0;
		wall_level_3_0009_Layer_11.body.immovable = true;
		wall_level_3_0009_Layer_11.body.setSize(7, 37, false);
		walls_layer.add(wall_level_3_0009_Layer_11);

		// wall_level_3_0010_Layer_12
		const wall_level_3_0010_Layer_12 = this.physics.add.image(224, 248, "wall_level_3_0010_Layer-12");
		wall_level_3_0010_Layer_12.alpha = 0;
		wall_level_3_0010_Layer_12.alphaTopLeft = 0;
		wall_level_3_0010_Layer_12.alphaTopRight = 0;
		wall_level_3_0010_Layer_12.alphaBottomLeft = 0;
		wall_level_3_0010_Layer_12.alphaBottomRight = 0;
		wall_level_3_0010_Layer_12.body.immovable = true;
		wall_level_3_0010_Layer_12.body.setSize(27, 6, false);
		walls_layer.add(wall_level_3_0010_Layer_12);

		// wall_level_3_0012_Layer_14
		const wall_level_3_0012_Layer_14 = this.physics.add.image(173, 248, "wall_level_3_0012_Layer-14");
		wall_level_3_0012_Layer_14.alpha = 0;
		wall_level_3_0012_Layer_14.alphaTopLeft = 0;
		wall_level_3_0012_Layer_14.alphaTopRight = 0;
		wall_level_3_0012_Layer_14.alphaBottomLeft = 0;
		wall_level_3_0012_Layer_14.alphaBottomRight = 0;
		wall_level_3_0012_Layer_14.body.immovable = true;
		wall_level_3_0012_Layer_14.body.setSize(5, 65, false);
		walls_layer.add(wall_level_3_0012_Layer_14);

		// wall_level_3_0013_Layer_15
		const wall_level_3_0013_Layer_15 = this.physics.add.image(142, 367, "wall_level_3_0013_Layer-15");
		wall_level_3_0013_Layer_15.alpha = 0;
		wall_level_3_0013_Layer_15.alphaTopLeft = 0;
		wall_level_3_0013_Layer_15.alphaTopRight = 0;
		wall_level_3_0013_Layer_15.alphaBottomLeft = 0;
		wall_level_3_0013_Layer_15.alphaBottomRight = 0;
		wall_level_3_0013_Layer_15.body.immovable = true;
		wall_level_3_0013_Layer_15.body.setSize(6, 172, false);
		walls_layer.add(wall_level_3_0013_Layer_15);

		// wall_level_3_0014_Layer_16
		const wall_level_3_0014_Layer_16 = this.physics.add.image(307, 299, "wall_level_3_0014_Layer-16");
		wall_level_3_0014_Layer_16.alpha = 0;
		wall_level_3_0014_Layer_16.alphaTopLeft = 0;
		wall_level_3_0014_Layer_16.alphaTopRight = 0;
		wall_level_3_0014_Layer_16.alphaBottomLeft = 0;
		wall_level_3_0014_Layer_16.alphaBottomRight = 0;
		wall_level_3_0014_Layer_16.body.immovable = true;
		wall_level_3_0014_Layer_16.body.setSize(5, 37, false);
		walls_layer.add(wall_level_3_0014_Layer_16);

		// wall_level_3_0015_Layer_17
		const wall_level_3_0015_Layer_17 = this.physics.add.image(242, 284, "wall_level_3_0015_Layer-17");
		wall_level_3_0015_Layer_17.alpha = 0;
		wall_level_3_0015_Layer_17.alphaTopLeft = 0;
		wall_level_3_0015_Layer_17.alphaTopRight = 0;
		wall_level_3_0015_Layer_17.alphaBottomLeft = 0;
		wall_level_3_0015_Layer_17.alphaBottomRight = 0;
		wall_level_3_0015_Layer_17.body.immovable = true;
		wall_level_3_0015_Layer_17.body.setSize(171, 5, false);
		walls_layer.add(wall_level_3_0015_Layer_17);

		// wall_level_3_0016_Layer_18
		const wall_level_3_0016_Layer_18 = this.physics.add.image(208, 386, "wall_level_3_0016_Layer-18");
		wall_level_3_0016_Layer_18.alpha = 0;
		wall_level_3_0016_Layer_18.alphaTopLeft = 0;
		wall_level_3_0016_Layer_18.alphaTopRight = 0;
		wall_level_3_0016_Layer_18.alphaBottomLeft = 0;
		wall_level_3_0016_Layer_18.alphaBottomRight = 0;
		wall_level_3_0016_Layer_18.body.immovable = true;
		wall_level_3_0016_Layer_18.body.setSize(130, 7, false);
		walls_layer.add(wall_level_3_0016_Layer_18);

		// wall_level_3_0017_Layer_19
		const wall_level_3_0017_Layer_19 = this.physics.add.image(240, 317, "wall_level_3_0017_Layer-19");
		wall_level_3_0017_Layer_19.alpha = 0;
		wall_level_3_0017_Layer_19.alphaTopLeft = 0;
		wall_level_3_0017_Layer_19.alphaTopRight = 0;
		wall_level_3_0017_Layer_19.alphaBottomLeft = 0;
		wall_level_3_0017_Layer_19.alphaBottomRight = 0;
		wall_level_3_0017_Layer_19.body.immovable = true;
		wall_level_3_0017_Layer_19.body.setSize(68, 5, false);
		walls_layer.add(wall_level_3_0017_Layer_19);

		// wall_level_3_0018_Layer_20
		const wall_level_3_0018_Layer_20 = this.physics.add.image(209, 332, "wall_level_3_0018_Layer-20");
		wall_level_3_0018_Layer_20.alpha = 0;
		wall_level_3_0018_Layer_20.alphaTopLeft = 0;
		wall_level_3_0018_Layer_20.alphaTopRight = 0;
		wall_level_3_0018_Layer_20.alphaBottomLeft = 0;
		wall_level_3_0018_Layer_20.alphaBottomRight = 0;
		wall_level_3_0018_Layer_20.body.immovable = true;
		wall_level_3_0018_Layer_20.body.setSize(6, 32, false);
		walls_layer.add(wall_level_3_0018_Layer_20);

		// wall_level_3_0019_Layer_21
		const wall_level_3_0019_Layer_21 = this.physics.add.image(174, 317, "wall_level_3_0019_Layer-21");
		wall_level_3_0019_Layer_21.alpha = 0;
		wall_level_3_0019_Layer_21.alphaTopLeft = 0;
		wall_level_3_0019_Layer_21.alphaTopRight = 0;
		wall_level_3_0019_Layer_21.alphaBottomLeft = 0;
		wall_level_3_0019_Layer_21.alphaBottomRight = 0;
		wall_level_3_0019_Layer_21.body.immovable = true;
		wall_level_3_0019_Layer_21.body.setSize(6, 65, false);
		walls_layer.add(wall_level_3_0019_Layer_21);

		// wall_level_3_0020_Layer_22
		const wall_level_3_0020_Layer_22 = this.physics.add.image(107, 455, "wall_level_3_0020_Layer-22");
		wall_level_3_0020_Layer_22.alpha = 0;
		wall_level_3_0020_Layer_22.alphaTopLeft = 0;
		wall_level_3_0020_Layer_22.alphaTopRight = 0;
		wall_level_3_0020_Layer_22.alphaBottomLeft = 0;
		wall_level_3_0020_Layer_22.alphaBottomRight = 0;
		wall_level_3_0020_Layer_22.body.immovable = true;
		wall_level_3_0020_Layer_22.body.setSize(6, 65, false);
		walls_layer.add(wall_level_3_0020_Layer_22);

		// wall_level_3_0021_Layer_23
		const wall_level_3_0021_Layer_23 = this.physics.add.image(174, 489, "wall_level_3_0021_Layer-23");
		wall_level_3_0021_Layer_23.alpha = 0;
		wall_level_3_0021_Layer_23.alphaTopLeft = 0;
		wall_level_3_0021_Layer_23.alphaTopRight = 0;
		wall_level_3_0021_Layer_23.alphaBottomLeft = 0;
		wall_level_3_0021_Layer_23.alphaBottomRight = 0;
		wall_level_3_0021_Layer_23.body.immovable = true;
		wall_level_3_0021_Layer_23.body.setSize(49, 202, false);
		walls_layer.add(wall_level_3_0021_Layer_23);

		// wall_level_3_0022_Layer_24
		const wall_level_3_0022_Layer_24 = this.physics.add.image(259, 486, "wall_level_3_0022_Layer-24");
		wall_level_3_0022_Layer_24.alpha = 0;
		wall_level_3_0022_Layer_24.alphaTopLeft = 0;
		wall_level_3_0022_Layer_24.alphaTopRight = 0;
		wall_level_3_0022_Layer_24.alphaBottomLeft = 0;
		wall_level_3_0022_Layer_24.alphaBottomRight = 0;
		wall_level_3_0022_Layer_24.body.immovable = true;
		wall_level_3_0022_Layer_24.body.setSize(168, 7, false);
		walls_layer.add(wall_level_3_0022_Layer_24);

		// wall_level_3_0023_Layer_25
		const wall_level_3_0023_Layer_25 = this.physics.add.image(275, 385, "wall_level_3_0023_Layer-25");
		wall_level_3_0023_Layer_25.alpha = 0;
		wall_level_3_0023_Layer_25.alphaTopLeft = 0;
		wall_level_3_0023_Layer_25.alphaTopRight = 0;
		wall_level_3_0023_Layer_25.alphaBottomLeft = 0;
		wall_level_3_0023_Layer_25.alphaBottomRight = 0;
		wall_level_3_0023_Layer_25.body.immovable = true;
		wall_level_3_0023_Layer_25.body.setSize(6, 136, false);
		walls_layer.add(wall_level_3_0023_Layer_25);

		// wall_level_3_0024_Layer_26
		const wall_level_3_0024_Layer_26 = this.physics.add.image(207, 451, "wall_level_3_0024_Layer-26");
		wall_level_3_0024_Layer_26.alpha = 0;
		wall_level_3_0024_Layer_26.alphaTopLeft = 0;
		wall_level_3_0024_Layer_26.alphaTopRight = 0;
		wall_level_3_0024_Layer_26.alphaBottomLeft = 0;
		wall_level_3_0024_Layer_26.alphaBottomRight = 0;
		wall_level_3_0024_Layer_26.body.immovable = true;
		wall_level_3_0024_Layer_26.body.setSize(7, 67, false);
		walls_layer.add(wall_level_3_0024_Layer_26);

		// wall_level_3_0025_Layer_27
		const wall_level_3_0025_Layer_27 = this.physics.add.image(157, 486, "wall_level_3_0025_Layer-27");
		wall_level_3_0025_Layer_27.alpha = 0;
		wall_level_3_0025_Layer_27.alphaTopLeft = 0;
		wall_level_3_0025_Layer_27.alphaTopRight = 0;
		wall_level_3_0025_Layer_27.alphaBottomLeft = 0;
		wall_level_3_0025_Layer_27.alphaBottomRight = 0;
		wall_level_3_0025_Layer_27.body.immovable = true;
		wall_level_3_0025_Layer_27.body.setSize(27, 6, false);
		walls_layer.add(wall_level_3_0025_Layer_27);

		// wall_level_3_0026_Layer_28
		const wall_level_3_0026_Layer_28 = this.physics.add.image(107, 536, "wall_level_3_0026_Layer-28");
		wall_level_3_0026_Layer_28.alpha = 0;
		wall_level_3_0026_Layer_28.alphaTopLeft = 0;
		wall_level_3_0026_Layer_28.alphaTopRight = 0;
		wall_level_3_0026_Layer_28.alphaBottomLeft = 0;
		wall_level_3_0026_Layer_28.alphaBottomRight = 0;
		wall_level_3_0026_Layer_28.body.immovable = true;
		wall_level_3_0026_Layer_28.body.setSize(6, 40, false);
		walls_layer.add(wall_level_3_0026_Layer_28);

		// wall_level_3_0026_Layer
		const wall_level_3_0026_Layer = this.physics.add.image(141, 536, "wall_level_3_0026_Layer-28");
		wall_level_3_0026_Layer.alpha = 0;
		wall_level_3_0026_Layer.alphaTopLeft = 0;
		wall_level_3_0026_Layer.alphaTopRight = 0;
		wall_level_3_0026_Layer.alphaBottomLeft = 0;
		wall_level_3_0026_Layer.alphaBottomRight = 0;
		wall_level_3_0026_Layer.body.immovable = true;
		wall_level_3_0026_Layer.body.setSize(6, 40, false);
		walls_layer.add(wall_level_3_0026_Layer);

		// wall_level_3_0026_Layer_1
		const wall_level_3_0026_Layer_1 = this.physics.add.image(207, 536, "wall_level_3_0026_Layer-28");
		wall_level_3_0026_Layer_1.alpha = 0;
		wall_level_3_0026_Layer_1.alphaTopLeft = 0;
		wall_level_3_0026_Layer_1.alphaTopRight = 0;
		wall_level_3_0026_Layer_1.alphaBottomLeft = 0;
		wall_level_3_0026_Layer_1.alphaBottomRight = 0;
		wall_level_3_0026_Layer_1.body.immovable = true;
		wall_level_3_0026_Layer_1.body.setSize(6, 40, false);
		walls_layer.add(wall_level_3_0026_Layer_1);

		// wall_level_3_0027_Layer_29
		const wall_level_3_0027_Layer_29 = this.physics.add.image(306, 217, "wall_level_3_0027_Layer-29");
		wall_level_3_0027_Layer_29.alpha = 0;
		wall_level_3_0027_Layer_29.alphaTopLeft = 0;
		wall_level_3_0027_Layer_29.alphaTopRight = 0;
		wall_level_3_0027_Layer_29.alphaBottomLeft = 0;
		wall_level_3_0027_Layer_29.alphaBottomRight = 0;
		wall_level_3_0027_Layer_29.body.immovable = true;
		wall_level_3_0027_Layer_29.body.setSize(132, 6, false);
		walls_layer.add(wall_level_3_0027_Layer_29);

		// wall_level_3_0028_Layer_30
		const wall_level_3_0028_Layer_30 = this.physics.add.image(412, 202, "wall_level_3_0028_Layer-30");
		wall_level_3_0028_Layer_30.alpha = 0;
		wall_level_3_0028_Layer_30.alphaTopLeft = 0;
		wall_level_3_0028_Layer_30.alphaTopRight = 0;
		wall_level_3_0028_Layer_30.alphaBottomLeft = 0;
		wall_level_3_0028_Layer_30.alphaBottomRight = 0;
		wall_level_3_0028_Layer_30.body.immovable = true;
		wall_level_3_0028_Layer_30.body.setSize(6, 30, false);
		walls_layer.add(wall_level_3_0028_Layer_30);

		// wall_level_3_0029_Layer_31
		const wall_level_3_0029_Layer_31 = this.physics.add.image(510, 571, "wall_level_3_0029_Layer-31");
		wall_level_3_0029_Layer_31.alpha = 0;
		wall_level_3_0029_Layer_31.alphaTopLeft = 0;
		wall_level_3_0029_Layer_31.alphaTopRight = 0;
		wall_level_3_0029_Layer_31.alphaBottomLeft = 0;
		wall_level_3_0029_Layer_31.alphaBottomRight = 0;
		wall_level_3_0029_Layer_31.body.immovable = true;
		wall_level_3_0029_Layer_31.body.setSize(7, 39, false);
		walls_layer.add(wall_level_3_0029_Layer_31);

		// wall_level_3_0030_Layer_32
		const wall_level_3_0030_Layer_32 = this.physics.add.image(447, 214, "wall_level_3_0030_Layer-32");
		wall_level_3_0030_Layer_32.alpha = 0;
		wall_level_3_0030_Layer_32.alphaTopLeft = 0;
		wall_level_3_0030_Layer_32.alphaTopRight = 0;
		wall_level_3_0030_Layer_32.alphaBottomLeft = 0;
		wall_level_3_0030_Layer_32.alphaBottomRight = 0;
		wall_level_3_0030_Layer_32.body.immovable = true;
		wall_level_3_0030_Layer_32.body.setSize(61, 5, false);
		walls_layer.add(wall_level_3_0030_Layer_32);

		// wall_level_3_0031_Layer_33
		const wall_level_3_0031_Layer_33 = this.physics.add.image(90, 485, "wall_level_3_0031_Layer-33");
		wall_level_3_0031_Layer_33.alpha = 0;
		wall_level_3_0031_Layer_33.alphaTopLeft = 0;
		wall_level_3_0031_Layer_33.alphaTopRight = 0;
		wall_level_3_0031_Layer_33.alphaBottomLeft = 0;
		wall_level_3_0031_Layer_33.alphaBottomRight = 0;
		wall_level_3_0031_Layer_33.body.immovable = true;
		wall_level_3_0031_Layer_33.body.setSize(30, 6, false);
		walls_layer.add(wall_level_3_0031_Layer_33);

		// wall_level_3_0031_Layer
		const wall_level_3_0031_Layer = this.physics.add.image(89, 553, "wall_level_3_0031_Layer-33");
		wall_level_3_0031_Layer.alpha = 0;
		wall_level_3_0031_Layer.alphaTopLeft = 0;
		wall_level_3_0031_Layer.alphaTopRight = 0;
		wall_level_3_0031_Layer.alphaBottomLeft = 0;
		wall_level_3_0031_Layer.alphaBottomRight = 0;
		wall_level_3_0031_Layer.body.immovable = true;
		wall_level_3_0031_Layer.body.setSize(30, 6, false);
		walls_layer.add(wall_level_3_0031_Layer);

		// wall_level_3_0032_Layer_34
		const wall_level_3_0032_Layer_34 = this.physics.add.image(376, 317, "wall_level_3_0032_Layer-34");
		wall_level_3_0032_Layer_34.alpha = 0;
		wall_level_3_0032_Layer_34.alphaTopLeft = 0;
		wall_level_3_0032_Layer_34.alphaTopRight = 0;
		wall_level_3_0032_Layer_34.alphaBottomLeft = 0;
		wall_level_3_0032_Layer_34.alphaBottomRight = 0;
		wall_level_3_0032_Layer_34.body.immovable = true;
		wall_level_3_0032_Layer_34.body.setSize(6, 140, false);
		walls_layer.add(wall_level_3_0032_Layer_34);

		// wall_level_3_0033_Layer_35
		const wall_level_3_0033_Layer_35 = this.physics.add.image(308, 248, "wall_level_3_0033_Layer-35");
		wall_level_3_0033_Layer_35.alpha = 0;
		wall_level_3_0033_Layer_35.alphaTopLeft = 0;
		wall_level_3_0033_Layer_35.alphaTopRight = 0;
		wall_level_3_0033_Layer_35.alphaBottomLeft = 0;
		wall_level_3_0033_Layer_35.alphaBottomRight = 0;
		wall_level_3_0033_Layer_35.body.immovable = true;
		wall_level_3_0033_Layer_35.body.setSize(65, 6, false);
		walls_layer.add(wall_level_3_0033_Layer_35);

		// wall_level_3_0035_Layer_37
		const wall_level_3_0035_Layer_37 = this.physics.add.image(342, 300, "wall_level_3_0035_Layer-37");
		wall_level_3_0035_Layer_37.alpha = 0;
		wall_level_3_0035_Layer_37.alphaTopLeft = 0;
		wall_level_3_0035_Layer_37.alphaTopRight = 0;
		wall_level_3_0035_Layer_37.alphaBottomLeft = 0;
		wall_level_3_0035_Layer_37.alphaBottomRight = 0;
		wall_level_3_0035_Layer_37.body.immovable = true;
		wall_level_3_0035_Layer_37.body.setSize(6, 107, false);
		walls_layer.add(wall_level_3_0035_Layer_37);

		// wall_level_3_0036_Layer_38
		const wall_level_3_0036_Layer_38 = this.physics.add.image(342, 500, "wall_level_3_0036_Layer-38");
		wall_level_3_0036_Layer_38.alpha = 0;
		wall_level_3_0036_Layer_38.alphaTopLeft = 0;
		wall_level_3_0036_Layer_38.alphaTopRight = 0;
		wall_level_3_0036_Layer_38.alphaBottomLeft = 0;
		wall_level_3_0036_Layer_38.alphaBottomRight = 0;
		wall_level_3_0036_Layer_38.body.immovable = true;
		wall_level_3_0036_Layer_38.body.setSize(6, 33, false);
		walls_layer.add(wall_level_3_0036_Layer_38);

		// wall_level_3_0036_Layer
		const wall_level_3_0036_Layer = this.physics.add.image(310, 401, "wall_level_3_0036_Layer-38");
		wall_level_3_0036_Layer.alpha = 0;
		wall_level_3_0036_Layer.alphaTopLeft = 0;
		wall_level_3_0036_Layer.alphaTopRight = 0;
		wall_level_3_0036_Layer.alphaBottomLeft = 0;
		wall_level_3_0036_Layer.alphaBottomRight = 0;
		wall_level_3_0036_Layer.body.immovable = true;
		wall_level_3_0036_Layer.body.setSize(6, 33, false);
		walls_layer.add(wall_level_3_0036_Layer);

		// wall_level_3_0036_Layer_1
		const wall_level_3_0036_Layer_1 = this.physics.add.image(342, 568, "wall_level_3_0036_Layer-38");
		wall_level_3_0036_Layer_1.alpha = 0;
		wall_level_3_0036_Layer_1.alphaTopLeft = 0;
		wall_level_3_0036_Layer_1.alphaTopRight = 0;
		wall_level_3_0036_Layer_1.alphaBottomLeft = 0;
		wall_level_3_0036_Layer_1.alphaBottomRight = 0;
		wall_level_3_0036_Layer_1.body.immovable = true;
		wall_level_3_0036_Layer_1.body.setSize(6, 33, false);
		walls_layer.add(wall_level_3_0036_Layer_1);

		// wall_level_3_0036_Layer_2
		const wall_level_3_0036_Layer_2 = this.physics.add.image(477, 568, "wall_level_3_0036_Layer-38");
		wall_level_3_0036_Layer_2.alpha = 0;
		wall_level_3_0036_Layer_2.alphaTopLeft = 0;
		wall_level_3_0036_Layer_2.alphaTopRight = 0;
		wall_level_3_0036_Layer_2.alphaBottomLeft = 0;
		wall_level_3_0036_Layer_2.alphaBottomRight = 0;
		wall_level_3_0036_Layer_2.body.immovable = true;
		wall_level_3_0036_Layer_2.body.setSize(6, 33, false);
		walls_layer.add(wall_level_3_0036_Layer_2);

		// wall_level_3_0037_Layer_39
		const wall_level_3_0037_Layer_39 = this.physics.add.image(173, 552, "wall_level_3_0037_Layer-39");
		wall_level_3_0037_Layer_39.alpha = 0;
		wall_level_3_0037_Layer_39.alphaTopLeft = 0;
		wall_level_3_0037_Layer_39.alphaTopRight = 0;
		wall_level_3_0037_Layer_39.alphaBottomLeft = 0;
		wall_level_3_0037_Layer_39.alphaBottomRight = 0;
		wall_level_3_0037_Layer_39.body.immovable = true;
		wall_level_3_0037_Layer_39.body.setSize(65, 6, false);
		walls_layer.add(wall_level_3_0037_Layer_39);

		// wall_level_3_0038_Layer_40
		const wall_level_3_0038_Layer_40 = this.physics.add.image(429, 518, "wall_level_3_0038_Layer-40");
		wall_level_3_0038_Layer_40.alpha = 0;
		wall_level_3_0038_Layer_40.alphaTopLeft = 0;
		wall_level_3_0038_Layer_40.alphaTopRight = 0;
		wall_level_3_0038_Layer_40.alphaBottomLeft = 0;
		wall_level_3_0038_Layer_40.alphaBottomRight = 0;
		wall_level_3_0038_Layer_40.body.immovable = true;
		wall_level_3_0038_Layer_40.body.setSize(99, 6, false);
		walls_layer.add(wall_level_3_0038_Layer_40);

		// wall_level_3_0038_Layer
		const wall_level_3_0038_Layer = this.physics.add.image(426, 555, "wall_level_3_0038_Layer-40");
		wall_level_3_0038_Layer.alpha = 0;
		wall_level_3_0038_Layer.alphaTopLeft = 0;
		wall_level_3_0038_Layer.alphaTopRight = 0;
		wall_level_3_0038_Layer.alphaBottomLeft = 0;
		wall_level_3_0038_Layer.alphaBottomRight = 0;
		wall_level_3_0038_Layer.body.immovable = true;
		wall_level_3_0038_Layer.body.setSize(99, 6, false);
		walls_layer.add(wall_level_3_0038_Layer);

		// wall_level_3_0038_Layer_1
		const wall_level_3_0038_Layer_1 = this.physics.add.image(289, 555, "wall_level_3_0038_Layer-40");
		wall_level_3_0038_Layer_1.alpha = 0;
		wall_level_3_0038_Layer_1.alphaTopLeft = 0;
		wall_level_3_0038_Layer_1.alphaTopRight = 0;
		wall_level_3_0038_Layer_1.alphaBottomLeft = 0;
		wall_level_3_0038_Layer_1.alphaBottomRight = 0;
		wall_level_3_0038_Layer_1.body.immovable = true;
		wall_level_3_0038_Layer_1.body.setSize(99, 6, false);
		walls_layer.add(wall_level_3_0038_Layer_1);

		// wall_level_3_0038_Layer_2
		const wall_level_3_0038_Layer_2 = this.physics.add.image(294, 520, "wall_level_3_0038_Layer-40");
		wall_level_3_0038_Layer_2.alpha = 0;
		wall_level_3_0038_Layer_2.alphaTopLeft = 0;
		wall_level_3_0038_Layer_2.alphaTopRight = 0;
		wall_level_3_0038_Layer_2.alphaBottomLeft = 0;
		wall_level_3_0038_Layer_2.alphaBottomRight = 0;
		wall_level_3_0038_Layer_2.body.immovable = true;
		wall_level_3_0038_Layer_2.body.setSize(99, 6, false);
		walls_layer.add(wall_level_3_0038_Layer_2);

		// wall_level_3_0039_Layer_41
		const wall_level_3_0039_Layer_41 = this.physics.add.image(375, 466, "wall_level_3_0039_Layer-41");
		wall_level_3_0039_Layer_41.alpha = 0;
		wall_level_3_0039_Layer_41.alphaTopLeft = 0;
		wall_level_3_0039_Layer_41.alphaTopRight = 0;
		wall_level_3_0039_Layer_41.alphaBottomLeft = 0;
		wall_level_3_0039_Layer_41.alphaBottomRight = 0;
		wall_level_3_0039_Layer_41.body.immovable = true;
		wall_level_3_0039_Layer_41.body.setSize(6, 33, false);
		walls_layer.add(wall_level_3_0039_Layer_41);

		// wall_level_3_0039_Layer
		const wall_level_3_0039_Layer = this.physics.add.image(476, 501, "wall_level_3_0039_Layer-41");
		wall_level_3_0039_Layer.alpha = 0;
		wall_level_3_0039_Layer.alphaTopLeft = 0;
		wall_level_3_0039_Layer.alphaTopRight = 0;
		wall_level_3_0039_Layer.alphaBottomLeft = 0;
		wall_level_3_0039_Layer.alphaBottomRight = 0;
		wall_level_3_0039_Layer.body.immovable = true;
		wall_level_3_0039_Layer.body.setSize(6, 33, false);
		walls_layer.add(wall_level_3_0039_Layer);

		// wall_level_3_0039_Layer_1
		const wall_level_3_0039_Layer_1 = this.physics.add.image(512, 470, "wall_level_3_0039_Layer-41");
		wall_level_3_0039_Layer_1.alpha = 0;
		wall_level_3_0039_Layer_1.alphaTopLeft = 0;
		wall_level_3_0039_Layer_1.alphaTopRight = 0;
		wall_level_3_0039_Layer_1.alphaBottomLeft = 0;
		wall_level_3_0039_Layer_1.alphaBottomRight = 0;
		wall_level_3_0039_Layer_1.body.immovable = true;
		wall_level_3_0039_Layer_1.body.setSize(6, 33, false);
		walls_layer.add(wall_level_3_0039_Layer_1);

		// wall_level_3_0040_Layer_42
		const wall_level_3_0040_Layer_42 = this.physics.add.image(357, 417, "wall_level_3_0040_Layer-42");
		wall_level_3_0040_Layer_42.alpha = 0;
		wall_level_3_0040_Layer_42.alphaTopLeft = 0;
		wall_level_3_0040_Layer_42.alphaTopRight = 0;
		wall_level_3_0040_Layer_42.alphaBottomLeft = 0;
		wall_level_3_0040_Layer_42.alphaBottomRight = 0;
		wall_level_3_0040_Layer_42.body.immovable = true;
		wall_level_3_0040_Layer_42.body.setSize(99, 5, false);
		walls_layer.add(wall_level_3_0040_Layer_42);

		// wall_level_3_0042_Layer_44
		const wall_level_3_0042_Layer_44 = this.physics.add.image(323, 453, "wall_level_3_0042_Layer-44");
		wall_level_3_0042_Layer_44.alpha = 0;
		wall_level_3_0042_Layer_44.alphaTopLeft = 0;
		wall_level_3_0042_Layer_44.alphaTopRight = 0;
		wall_level_3_0042_Layer_44.alphaBottomLeft = 0;
		wall_level_3_0042_Layer_44.alphaBottomRight = 0;
		wall_level_3_0042_Layer_44.body.immovable = true;
		wall_level_3_0042_Layer_44.body.setSize(95, 6, false);
		walls_layer.add(wall_level_3_0042_Layer_44);

		// wall_level_3_0045_Layer_47
		const wall_level_3_0045_Layer_47 = this.physics.add.image(424, 487, "wall_level_3_0045_Layer-47");
		wall_level_3_0045_Layer_47.alpha = 0;
		wall_level_3_0045_Layer_47.alphaTopLeft = 0;
		wall_level_3_0045_Layer_47.alphaTopRight = 0;
		wall_level_3_0045_Layer_47.alphaBottomLeft = 0;
		wall_level_3_0045_Layer_47.alphaBottomRight = 0;
		wall_level_3_0045_Layer_47.body.immovable = true;
		wall_level_3_0045_Layer_47.body.setSize(99, 6, false);
		walls_layer.add(wall_level_3_0045_Layer_47);

		// wall_level_3_0046_Layer_48
		const wall_level_3_0046_Layer_48 = this.physics.add.image(916, 399, "wall_level_3_0046_Layer-48");
		wall_level_3_0046_Layer_48.alpha = 0;
		wall_level_3_0046_Layer_48.alphaTopLeft = 0;
		wall_level_3_0046_Layer_48.alphaTopRight = 0;
		wall_level_3_0046_Layer_48.alphaBottomLeft = 0;
		wall_level_3_0046_Layer_48.alphaBottomRight = 0;
		wall_level_3_0046_Layer_48.body.immovable = true;
		wall_level_3_0046_Layer_48.body.setSize(6, 40, false);
		walls_layer.add(wall_level_3_0046_Layer_48);

		// wall_level_3_0046_Layer
		const wall_level_3_0046_Layer = this.physics.add.image(881, 537, "wall_level_3_0046_Layer-48");
		wall_level_3_0046_Layer.alpha = 0;
		wall_level_3_0046_Layer.alphaTopLeft = 0;
		wall_level_3_0046_Layer.alphaTopRight = 0;
		wall_level_3_0046_Layer.alphaBottomLeft = 0;
		wall_level_3_0046_Layer.alphaBottomRight = 0;
		wall_level_3_0046_Layer.body.immovable = true;
		wall_level_3_0046_Layer.body.setSize(6, 40, false);
		walls_layer.add(wall_level_3_0046_Layer);

		// wall_level_3_0048_Layer_50
		const wall_level_3_0048_Layer_50 = this.physics.add.image(811, 534, "wall_level_3_0048_Layer-50");
		wall_level_3_0048_Layer_50.alpha = 0;
		wall_level_3_0048_Layer_50.alphaTopLeft = 0;
		wall_level_3_0048_Layer_50.alphaTopRight = 0;
		wall_level_3_0048_Layer_50.alphaBottomLeft = 0;
		wall_level_3_0048_Layer_50.alphaBottomRight = 0;
		wall_level_3_0048_Layer_50.body.immovable = true;
		wall_level_3_0048_Layer_50.body.setOffset(10, 0);
		wall_level_3_0048_Layer_50.body.setSize(6, 34, false);
		walls_layer.add(wall_level_3_0048_Layer_50);

		// wall_level_3_0049_Layer_51
		const wall_level_3_0049_Layer_51 = this.physics.add.image(878, 468, "wall_level_3_0049_Layer-51");
		wall_level_3_0049_Layer_51.alpha = 0;
		wall_level_3_0049_Layer_51.alphaTopLeft = 0;
		wall_level_3_0049_Layer_51.alphaTopRight = 0;
		wall_level_3_0049_Layer_51.alphaBottomLeft = 0;
		wall_level_3_0049_Layer_51.alphaBottomRight = 0;
		wall_level_3_0049_Layer_51.body.immovable = true;
		wall_level_3_0049_Layer_51.body.setOffset(13, 0);
		wall_level_3_0049_Layer_51.body.setSize(7, 32, false);
		walls_layer.add(wall_level_3_0049_Layer_51);

		// wall_level_3_0050_Layer_52
		const wall_level_3_0050_Layer_52 = this.physics.add.image(897, 520, "wall_level_3_0050_Layer-52");
		wall_level_3_0050_Layer_52.alpha = 0;
		wall_level_3_0050_Layer_52.alphaTopLeft = 0;
		wall_level_3_0050_Layer_52.alphaTopRight = 0;
		wall_level_3_0050_Layer_52.alphaBottomLeft = 0;
		wall_level_3_0050_Layer_52.alphaBottomRight = 0;
		wall_level_3_0050_Layer_52.body.immovable = true;
		wall_level_3_0050_Layer_52.body.setSize(31, 6, false);
		walls_layer.add(wall_level_3_0050_Layer_52);

		// wall_level_3_0051_Layer_53
		const wall_level_3_0051_Layer_53 = this.physics.add.image(542, 552, "wall_level_3_0051_Layer-53");
		wall_level_3_0051_Layer_53.alpha = 0;
		wall_level_3_0051_Layer_53.alphaTopLeft = 0;
		wall_level_3_0051_Layer_53.alphaTopRight = 0;
		wall_level_3_0051_Layer_53.alphaBottomLeft = 0;
		wall_level_3_0051_Layer_53.alphaBottomRight = 0;
		wall_level_3_0051_Layer_53.body.immovable = true;
		wall_level_3_0051_Layer_53.body.setSize(20, 68, false);
		walls_layer.add(wall_level_3_0051_Layer_53);

		// wall_level_3_0053_Layer_55
		const wall_level_3_0053_Layer_55 = this.physics.add.image(442, 450, "wall_level_3_0053_Layer-55");
		wall_level_3_0053_Layer_55.alpha = 0;
		wall_level_3_0053_Layer_55.alphaTopLeft = 0;
		wall_level_3_0053_Layer_55.alphaTopRight = 0;
		wall_level_3_0053_Layer_55.alphaBottomLeft = 0;
		wall_level_3_0053_Layer_55.alphaBottomRight = 0;
		wall_level_3_0053_Layer_55.body.immovable = true;
		wall_level_3_0053_Layer_55.body.setSize(61, 6, false);
		walls_layer.add(wall_level_3_0053_Layer_55);

		// wall_level_3_0053_Layer
		const wall_level_3_0053_Layer = this.physics.add.image(342, 383, "wall_level_3_0053_Layer-55");
		wall_level_3_0053_Layer.alpha = 0;
		wall_level_3_0053_Layer.alphaTopLeft = 0;
		wall_level_3_0053_Layer.alphaTopRight = 0;
		wall_level_3_0053_Layer.alphaBottomLeft = 0;
		wall_level_3_0053_Layer.alphaBottomRight = 0;
		wall_level_3_0053_Layer.body.immovable = true;
		wall_level_3_0053_Layer.body.setSize(61, 6, false);
		walls_layer.add(wall_level_3_0053_Layer);

		// wall_level_3_0054_Layer_56
		const wall_level_3_0054_Layer_56 = this.physics.add.image(764, 385, "wall_level_3_0054_Layer-56");
		wall_level_3_0054_Layer_56.alpha = 0;
		wall_level_3_0054_Layer_56.alphaTopLeft = 0;
		wall_level_3_0054_Layer_56.alphaTopRight = 0;
		wall_level_3_0054_Layer_56.alphaBottomLeft = 0;
		wall_level_3_0054_Layer_56.alphaBottomRight = 0;
		wall_level_3_0054_Layer_56.body.immovable = true;
		wall_level_3_0054_Layer_56.body.setSize(94, 6, false);
		walls_layer.add(wall_level_3_0054_Layer_56);

		// wall_level_3_0055_Layer_57
		const wall_level_3_0055_Layer_57 = this.physics.add.image(546, 316, "wall_level_3_0055_Layer-57");
		wall_level_3_0055_Layer_57.alpha = 0;
		wall_level_3_0055_Layer_57.alphaTopLeft = 0;
		wall_level_3_0055_Layer_57.alphaTopRight = 0;
		wall_level_3_0055_Layer_57.alphaBottomLeft = 0;
		wall_level_3_0055_Layer_57.alphaBottomRight = 0;
		wall_level_3_0055_Layer_57.body.immovable = true;
		wall_level_3_0055_Layer_57.body.setSize(5, 141, false);
		walls_layer.add(wall_level_3_0055_Layer_57);

		// wall_level_3_0056_Layer_58
		const wall_level_3_0056_Layer_58 = this.physics.add.image(443, 250, "wall_level_3_0056_Layer-58");
		wall_level_3_0056_Layer_58.alpha = 0;
		wall_level_3_0056_Layer_58.alphaTopLeft = 0;
		wall_level_3_0056_Layer_58.alphaTopRight = 0;
		wall_level_3_0056_Layer_58.alphaBottomLeft = 0;
		wall_level_3_0056_Layer_58.alphaBottomRight = 0;
		wall_level_3_0056_Layer_58.body.immovable = true;
		wall_level_3_0056_Layer_58.body.setSize(130, 6, false);
		walls_layer.add(wall_level_3_0056_Layer_58);

		// wall_level_3_0057_Layer_59
		const wall_level_3_0057_Layer_59 = this.physics.add.image(410, 366, "wall_level_3_0057_Layer-59");
		wall_level_3_0057_Layer_59.alpha = 0;
		wall_level_3_0057_Layer_59.alphaTopLeft = 0;
		wall_level_3_0057_Layer_59.alphaTopRight = 0;
		wall_level_3_0057_Layer_59.alphaBottomLeft = 0;
		wall_level_3_0057_Layer_59.alphaBottomRight = 0;
		wall_level_3_0057_Layer_59.body.immovable = true;
		wall_level_3_0057_Layer_59.body.setSize(6, 172, false);
		walls_layer.add(wall_level_3_0057_Layer_59);

		// wall_level_3_0058_Layer_60
		const wall_level_3_0058_Layer_60 = this.physics.add.image(476, 383, "wall_level_3_0058_Layer-60");
		wall_level_3_0058_Layer_60.alpha = 0;
		wall_level_3_0058_Layer_60.alphaTopLeft = 0;
		wall_level_3_0058_Layer_60.alphaTopRight = 0;
		wall_level_3_0058_Layer_60.alphaBottomLeft = 0;
		wall_level_3_0058_Layer_60.alphaBottomRight = 0;
		wall_level_3_0058_Layer_60.body.immovable = true;
		wall_level_3_0058_Layer_60.body.setSize(7, 138, false);
		walls_layer.add(wall_level_3_0058_Layer_60);

		// wall_level_3_0059_Layer_61
		const wall_level_3_0059_Layer_61 = this.physics.add.image(477, 285, "wall_level_3_0059_Layer-61");
		wall_level_3_0059_Layer_61.alpha = 0;
		wall_level_3_0059_Layer_61.alphaTopLeft = 0;
		wall_level_3_0059_Layer_61.alphaTopRight = 0;
		wall_level_3_0059_Layer_61.alphaBottomLeft = 0;
		wall_level_3_0059_Layer_61.alphaBottomRight = 0;
		wall_level_3_0059_Layer_61.body.immovable = true;
		wall_level_3_0059_Layer_61.body.setSize(61, 6, false);
		walls_layer.add(wall_level_3_0059_Layer_61);

		// wall_level_3_0060_Layer_62
		const wall_level_3_0060_Layer_62 = this.physics.add.image(680, 348, "wall_level_3_0060_Layer-62");
		wall_level_3_0060_Layer_62.alpha = 0;
		wall_level_3_0060_Layer_62.alphaTopLeft = 0;
		wall_level_3_0060_Layer_62.alphaTopRight = 0;
		wall_level_3_0060_Layer_62.alphaBottomLeft = 0;
		wall_level_3_0060_Layer_62.alphaBottomRight = 0;
		wall_level_3_0060_Layer_62.body.immovable = true;
		wall_level_3_0060_Layer_62.body.setSize(6, 138, false);
		walls_layer.add(wall_level_3_0060_Layer_62);

		// wall_level_3_0061_Layer_63
		const wall_level_3_0061_Layer_63 = this.physics.add.image(711, 416, "wall_level_3_0061_Layer-63");
		wall_level_3_0061_Layer_63.alpha = 0;
		wall_level_3_0061_Layer_63.alphaTopLeft = 0;
		wall_level_3_0061_Layer_63.alphaTopRight = 0;
		wall_level_3_0061_Layer_63.alphaBottomLeft = 0;
		wall_level_3_0061_Layer_63.alphaBottomRight = 0;
		wall_level_3_0061_Layer_63.body.immovable = true;
		wall_level_3_0061_Layer_63.body.setSize(62, 6, false);
		walls_layer.add(wall_level_3_0061_Layer_63);

		// wall_level_3_0062_Layer_64
		const wall_level_3_0062_Layer_64 = this.physics.add.image(511, 301, "wall_level_3_0062_Layer-64");
		wall_level_3_0062_Layer_64.alpha = 0;
		wall_level_3_0062_Layer_64.alphaTopLeft = 0;
		wall_level_3_0062_Layer_64.alphaTopRight = 0;
		wall_level_3_0062_Layer_64.alphaBottomLeft = 0;
		wall_level_3_0062_Layer_64.alphaBottomRight = 0;
		wall_level_3_0062_Layer_64.body.immovable = true;
		wall_level_3_0062_Layer_64.body.setSize(5, 236, false);
		walls_layer.add(wall_level_3_0062_Layer_64);

		// wall_level_3_0063_Layer_65
		const wall_level_3_0063_Layer_65 = this.physics.add.image(646, 468, "wall_level_3_0063_Layer-65");
		wall_level_3_0063_Layer_65.alpha = 0;
		wall_level_3_0063_Layer_65.alphaTopLeft = 0;
		wall_level_3_0063_Layer_65.alphaTopRight = 0;
		wall_level_3_0063_Layer_65.alphaBottomLeft = 0;
		wall_level_3_0063_Layer_65.alphaBottomRight = 0;
		wall_level_3_0063_Layer_65.body.immovable = true;
		wall_level_3_0063_Layer_65.body.setSize(5, 40, false);
		walls_layer.add(wall_level_3_0063_Layer_65);

		// wall_level_3_0064_Layer_66
		const wall_level_3_0064_Layer_66 = this.physics.add.image(530, 520, "wall_level_3_0064_Layer-66");
		wall_level_3_0064_Layer_66.alpha = 0;
		wall_level_3_0064_Layer_66.alphaTopLeft = 0;
		wall_level_3_0064_Layer_66.alphaTopRight = 0;
		wall_level_3_0064_Layer_66.alphaBottomLeft = 0;
		wall_level_3_0064_Layer_66.alphaBottomRight = 0;
		wall_level_3_0064_Layer_66.body.immovable = true;
		wall_level_3_0064_Layer_66.body.setSize(32, 6, false);
		walls_layer.add(wall_level_3_0064_Layer_66);

		// wall_level_3_0065_Layer_67
		const wall_level_3_0065_Layer_67 = this.physics.add.image(581, 382, "wall_level_3_0065_Layer-67");
		wall_level_3_0065_Layer_67.alpha = 0;
		wall_level_3_0065_Layer_67.alphaTopLeft = 0;
		wall_level_3_0065_Layer_67.alphaTopRight = 0;
		wall_level_3_0065_Layer_67.alphaBottomLeft = 0;
		wall_level_3_0065_Layer_67.alphaBottomRight = 0;
		wall_level_3_0065_Layer_67.body.immovable = true;
		wall_level_3_0065_Layer_67.body.setSize(62, 6, false);
		walls_layer.add(wall_level_3_0065_Layer_67);

		// wall_level_3_0066_Layer_68
		const wall_level_3_0066_Layer_68 = this.physics.add.image(916, 350, "wall_level_3_0066_Layer-68");
		wall_level_3_0066_Layer_68.alpha = 0;
		wall_level_3_0066_Layer_68.alphaTopLeft = 0;
		wall_level_3_0066_Layer_68.alphaTopRight = 0;
		wall_level_3_0066_Layer_68.alphaBottomLeft = 0;
		wall_level_3_0066_Layer_68.alphaBottomRight = 0;
		wall_level_3_0066_Layer_68.body.immovable = true;
		wall_level_3_0066_Layer_68.body.setSize(62, 6, false);
		walls_layer.add(wall_level_3_0066_Layer_68);

		// wall_level_3_0067_Layer_69
		const wall_level_3_0067_Layer_69 = this.physics.add.image(579, 487, "wall_level_3_0067_Layer-69");
		wall_level_3_0067_Layer_69.alpha = 0;
		wall_level_3_0067_Layer_69.alphaTopLeft = 0;
		wall_level_3_0067_Layer_69.alphaTopRight = 0;
		wall_level_3_0067_Layer_69.alphaBottomLeft = 0;
		wall_level_3_0067_Layer_69.alphaBottomRight = 0;
		wall_level_3_0067_Layer_69.body.immovable = true;
		wall_level_3_0067_Layer_69.body.setSize(6, 138, false);
		walls_layer.add(wall_level_3_0067_Layer_69);

		// wall_level_3_0068_Layer_70
		const wall_level_3_0068_Layer_70 = this.physics.add.image(526, 453, "wall_level_3_0068_Layer-70");
		wall_level_3_0068_Layer_70.alpha = 0;
		wall_level_3_0068_Layer_70.alphaTopLeft = 0;
		wall_level_3_0068_Layer_70.alphaTopRight = 0;
		wall_level_3_0068_Layer_70.alphaBottomLeft = 0;
		wall_level_3_0068_Layer_70.alphaBottomRight = 0;
		wall_level_3_0068_Layer_70.body.immovable = true;
		wall_level_3_0068_Layer_70.body.setSize(32, 6, false);
		walls_layer.add(wall_level_3_0068_Layer_70);

		// wall_level_3_0069_Layer_71
		const wall_level_3_0069_Layer_71 = this.physics.add.image(527, 215, "wall_level_3_0069_Layer-71");
		wall_level_3_0069_Layer_71.alpha = 0;
		wall_level_3_0069_Layer_71.alphaTopLeft = 0;
		wall_level_3_0069_Layer_71.alphaTopRight = 0;
		wall_level_3_0069_Layer_71.alphaBottomLeft = 0;
		wall_level_3_0069_Layer_71.alphaBottomRight = 0;
		wall_level_3_0069_Layer_71.body.immovable = true;
		wall_level_3_0069_Layer_71.body.setSize(32, 6, false);
		walls_layer.add(wall_level_3_0069_Layer_71);

		// wall_level_3_0070_Layer_72
		const wall_level_3_0070_Layer_72 = this.physics.add.image(445, 353, "wall_level_3_0070_Layer-72");
		wall_level_3_0070_Layer_72.alpha = 0;
		wall_level_3_0070_Layer_72.alphaTopLeft = 0;
		wall_level_3_0070_Layer_72.alphaTopRight = 0;
		wall_level_3_0070_Layer_72.alphaBottomLeft = 0;
		wall_level_3_0070_Layer_72.alphaBottomRight = 0;
		wall_level_3_0070_Layer_72.body.immovable = true;
		wall_level_3_0070_Layer_72.body.setSize(6, 141, false);
		walls_layer.add(wall_level_3_0070_Layer_72);

		// wall_level_3_0071_Layer_73
		const wall_level_3_0071_Layer_73 = this.physics.add.image(308, 349, "wall_level_3_0071_Layer-73");
		wall_level_3_0071_Layer_73.alpha = 0;
		wall_level_3_0071_Layer_73.alphaTopLeft = 0;
		wall_level_3_0071_Layer_73.alphaTopRight = 0;
		wall_level_3_0071_Layer_73.alphaBottomLeft = 0;
		wall_level_3_0071_Layer_73.alphaBottomRight = 0;
		wall_level_3_0071_Layer_73.body.immovable = true;
		wall_level_3_0071_Layer_73.body.setSize(62, 6, false);
		walls_layer.add(wall_level_3_0071_Layer_73);

		// wall_level_3_0072_Layer_74
		const wall_level_3_0072_Layer_74 = this.physics.add.image(221, 349, "wall_level_3_0072_Layer-74");
		wall_level_3_0072_Layer_74.alpha = 0;
		wall_level_3_0072_Layer_74.alphaTopLeft = 0;
		wall_level_3_0072_Layer_74.alphaTopRight = 0;
		wall_level_3_0072_Layer_74.alphaBottomLeft = 0;
		wall_level_3_0072_Layer_74.alphaBottomRight = 0;
		wall_level_3_0072_Layer_74.body.immovable = true;
		wall_level_3_0072_Layer_74.body.setSize(28, 6, false);
		walls_layer.add(wall_level_3_0072_Layer_74);

		// wall_level_3_0074_Layer_76
		const wall_level_3_0074_Layer_76 = this.physics.add.image(812, 265, "wall_level_3_0074_Layer-76");
		wall_level_3_0074_Layer_76.alpha = 0;
		wall_level_3_0074_Layer_76.alphaTopLeft = 0;
		wall_level_3_0074_Layer_76.alphaTopRight = 0;
		wall_level_3_0074_Layer_76.alphaBottomLeft = 0;
		wall_level_3_0074_Layer_76.alphaBottomRight = 0;
		wall_level_3_0074_Layer_76.body.immovable = true;
		wall_level_3_0074_Layer_76.body.setSize(7, 37, false);
		walls_layer.add(wall_level_3_0074_Layer_76);

		// wall_level_3_0075_Layer_77
		const wall_level_3_0075_Layer_77 = this.physics.add.image(594, 216, "wall_level_3_0075_Layer-77");
		wall_level_3_0075_Layer_77.alpha = 0;
		wall_level_3_0075_Layer_77.alphaTopLeft = 0;
		wall_level_3_0075_Layer_77.alphaTopRight = 0;
		wall_level_3_0075_Layer_77.alphaBottomLeft = 0;
		wall_level_3_0075_Layer_77.alphaBottomRight = 0;
		wall_level_3_0075_Layer_77.body.immovable = true;
		wall_level_3_0075_Layer_77.body.setSize(27, 5, false);
		walls_layer.add(wall_level_3_0075_Layer_77);

		// wall_level_3_0076_Layer_78
		const wall_level_3_0076_Layer_78 = this.physics.add.image(544, 483, "wall_level_3_0076_Layer-78");
		wall_level_3_0076_Layer_78.alpha = 0;
		wall_level_3_0076_Layer_78.alphaTopLeft = 0;
		wall_level_3_0076_Layer_78.alphaTopRight = 0;
		wall_level_3_0076_Layer_78.alphaBottomLeft = 0;
		wall_level_3_0076_Layer_78.alphaBottomRight = 0;
		wall_level_3_0076_Layer_78.body.immovable = true;
		wall_level_3_0076_Layer_78.body.setSize(61, 6, false);
		walls_layer.add(wall_level_3_0076_Layer_78);

		// wall_level_3_0077_Layer_79
		const wall_level_3_0077_Layer_79 = this.physics.add.image(714, 367, "wall_level_3_0077_Layer-79");
		wall_level_3_0077_Layer_79.alpha = 0;
		wall_level_3_0077_Layer_79.alphaTopLeft = 0;
		wall_level_3_0077_Layer_79.alphaTopRight = 0;
		wall_level_3_0077_Layer_79.alphaBottomLeft = 0;
		wall_level_3_0077_Layer_79.alphaBottomRight = 0;
		wall_level_3_0077_Layer_79.body.immovable = true;
		wall_level_3_0077_Layer_79.body.setSize(5, 40, false);
		walls_layer.add(wall_level_3_0077_Layer_79);

		// wall_level_3_0078_Layer_80
		const wall_level_3_0078_Layer_80 = this.physics.add.image(766, 216, "wall_level_3_0078_Layer-80");
		wall_level_3_0078_Layer_80.alpha = 0;
		wall_level_3_0078_Layer_80.alphaTopLeft = 0;
		wall_level_3_0078_Layer_80.alphaTopRight = 0;
		wall_level_3_0078_Layer_80.alphaBottomLeft = 0;
		wall_level_3_0078_Layer_80.alphaBottomRight = 0;
		wall_level_3_0078_Layer_80.body.immovable = true;
		wall_level_3_0078_Layer_80.body.setSize(239, 6, false);
		walls_layer.add(wall_level_3_0078_Layer_80);

		// wall_level_3_0079_Layer_81
		const wall_level_3_0079_Layer_81 = this.physics.add.image(563, 251, "wall_level_3_0079_Layer-81");
		wall_level_3_0079_Layer_81.alpha = 0;
		wall_level_3_0079_Layer_81.alphaTopLeft = 0;
		wall_level_3_0079_Layer_81.alphaTopRight = 0;
		wall_level_3_0079_Layer_81.alphaBottomLeft = 0;
		wall_level_3_0079_Layer_81.alphaBottomRight = 0;
		wall_level_3_0079_Layer_81.body.immovable = true;
		wall_level_3_0079_Layer_81.body.setSize(34, 6, false);
		walls_layer.add(wall_level_3_0079_Layer_81);

		// wall_level_3_0080_Layer_82
		const wall_level_3_0080_Layer_82 = this.physics.add.image(713, 520, "wall_level_3_0080_Layer-82");
		wall_level_3_0080_Layer_82.alpha = 0;
		wall_level_3_0080_Layer_82.alphaTopLeft = 0;
		wall_level_3_0080_Layer_82.alphaTopRight = 0;
		wall_level_3_0080_Layer_82.alphaBottomLeft = 0;
		wall_level_3_0080_Layer_82.alphaBottomRight = 0;
		wall_level_3_0080_Layer_82.body.immovable = true;
		wall_level_3_0080_Layer_82.body.setSize(203, 6, false);
		walls_layer.add(wall_level_3_0080_Layer_82);

		// wall_level_3_0081_Layer_83
		const wall_level_3_0081_Layer_83 = this.physics.add.image(579, 331, "wall_level_3_0081_Layer-83");
		wall_level_3_0081_Layer_83.alpha = 0;
		wall_level_3_0081_Layer_83.alphaTopLeft = 0;
		wall_level_3_0081_Layer_83.alphaTopRight = 0;
		wall_level_3_0081_Layer_83.alphaBottomLeft = 0;
		wall_level_3_0081_Layer_83.alphaBottomRight = 0;
		wall_level_3_0081_Layer_83.body.immovable = true;
		wall_level_3_0081_Layer_83.body.setSize(7, 34, false);
		walls_layer.add(wall_level_3_0081_Layer_83);

		// wall_level_3_0083_Layer_85
		const wall_level_3_0083_Layer_85 = this.physics.add.image(644, 350, "wall_level_3_0083_Layer-85");
		wall_level_3_0083_Layer_85.alpha = 0;
		wall_level_3_0083_Layer_85.alphaTopLeft = 0;
		wall_level_3_0083_Layer_85.alphaTopRight = 0;
		wall_level_3_0083_Layer_85.alphaBottomLeft = 0;
		wall_level_3_0083_Layer_85.alphaBottomRight = 0;
		wall_level_3_0083_Layer_85.body.immovable = true;
		wall_level_3_0083_Layer_85.body.setSize(6, 138, false);
		walls_layer.add(wall_level_3_0083_Layer_85);

		// wall_level_3_0084_Layer_86
		const wall_level_3_0084_Layer_86 = this.physics.add.image(612, 233, "wall_level_3_0084_Layer-86");
		wall_level_3_0084_Layer_86.alpha = 0;
		wall_level_3_0084_Layer_86.alphaTopLeft = 0;
		wall_level_3_0084_Layer_86.alphaTopRight = 0;
		wall_level_3_0084_Layer_86.alphaBottomLeft = 0;
		wall_level_3_0084_Layer_86.alphaBottomRight = 0;
		wall_level_3_0084_Layer_86.body.immovable = true;
		wall_level_3_0084_Layer_86.body.setSize(6, 37, false);
		walls_layer.add(wall_level_3_0084_Layer_86);

		// wall_level_3_0086_Layer_88
		const wall_level_3_0086_Layer_88 = this.physics.add.image(711, 252, "wall_level_3_0086_Layer-88");
		wall_level_3_0086_Layer_88.alpha = 0;
		wall_level_3_0086_Layer_88.alphaTopLeft = 0;
		wall_level_3_0086_Layer_88.alphaTopRight = 0;
		wall_level_3_0086_Layer_88.alphaBottomLeft = 0;
		wall_level_3_0086_Layer_88.alphaBottomRight = 0;
		wall_level_3_0086_Layer_88.body.immovable = true;
		wall_level_3_0086_Layer_88.body.setSize(197, 6, false);
		walls_layer.add(wall_level_3_0086_Layer_88);

		// wall_level_3_0087_Layer_89
		const wall_level_3_0087_Layer_89 = this.physics.add.image(764, 317, "wall_level_3_0087_Layer-89");
		wall_level_3_0087_Layer_89.alpha = 0;
		wall_level_3_0087_Layer_89.alphaTopLeft = 0;
		wall_level_3_0087_Layer_89.alphaTopRight = 0;
		wall_level_3_0087_Layer_89.alphaBottomLeft = 0;
		wall_level_3_0087_Layer_89.alphaBottomRight = 0;
		wall_level_3_0087_Layer_89.body.immovable = true;
		wall_level_3_0087_Layer_89.body.setSize(166, 5, false);
		walls_layer.add(wall_level_3_0087_Layer_89);

		// wall_level_3_0088_Layer_90
		const wall_level_3_0088_Layer_90 = this.physics.add.image(765, 484, "wall_level_3_0088_Layer-90");
		wall_level_3_0088_Layer_90.alpha = 0;
		wall_level_3_0088_Layer_90.alphaTopLeft = 0;
		wall_level_3_0088_Layer_90.alphaTopRight = 0;
		wall_level_3_0088_Layer_90.alphaBottomLeft = 0;
		wall_level_3_0088_Layer_90.alphaBottomRight = 0;
		wall_level_3_0088_Layer_90.body.immovable = true;
		wall_level_3_0088_Layer_90.body.setSize(236, 6, false);
		walls_layer.add(wall_level_3_0088_Layer_90);

		// wall_level_3_0089_Layer_91
		const wall_level_3_0089_Layer_91 = this.physics.add.image(746, 453, "wall_level_3_0089_Layer-91");
		wall_level_3_0089_Layer_91.alpha = 0;
		wall_level_3_0089_Layer_91.alphaTopLeft = 0;
		wall_level_3_0089_Layer_91.alphaTopRight = 0;
		wall_level_3_0089_Layer_91.alphaBottomLeft = 0;
		wall_level_3_0089_Layer_91.alphaBottomRight = 0;
		wall_level_3_0089_Layer_91.body.immovable = true;
		wall_level_3_0089_Layer_91.body.setSize(136, 6, false);
		walls_layer.add(wall_level_3_0089_Layer_91);

		// wall_level_3_0091_Layer_93
		const wall_level_3_0091_Layer_93 = this.physics.add.image(747, 281, "wall_level_3_0091_Layer-93");
		wall_level_3_0091_Layer_93.alpha = 0;
		wall_level_3_0091_Layer_93.alphaTopLeft = 0;
		wall_level_3_0091_Layer_93.alphaTopRight = 0;
		wall_level_3_0091_Layer_93.alphaBottomLeft = 0;
		wall_level_3_0091_Layer_93.alphaBottomRight = 0;
		wall_level_3_0091_Layer_93.body.immovable = true;
		wall_level_3_0091_Layer_93.body.setSize(128, 6, false);
		walls_layer.add(wall_level_3_0091_Layer_93);

		// wall_level_3_0091_Layer
		const wall_level_3_0091_Layer = this.physics.add.image(781, 350, "wall_level_3_0091_Layer-93");
		wall_level_3_0091_Layer.alpha = 0;
		wall_level_3_0091_Layer.alphaTopLeft = 0;
		wall_level_3_0091_Layer.alphaTopRight = 0;
		wall_level_3_0091_Layer.alphaBottomLeft = 0;
		wall_level_3_0091_Layer.alphaBottomRight = 0;
		wall_level_3_0091_Layer.body.immovable = true;
		wall_level_3_0091_Layer.body.setSize(128, 6, false);
		walls_layer.add(wall_level_3_0091_Layer);

		// wall_level_3_0092_Layer_94
		const wall_level_3_0092_Layer_94 = this.physics.add.image(544, 416, "wall_level_3_0092_Layer-94");
		wall_level_3_0092_Layer_94.alpha = 0;
		wall_level_3_0092_Layer_94.alphaTopLeft = 0;
		wall_level_3_0092_Layer_94.alphaTopRight = 0;
		wall_level_3_0092_Layer_94.alphaBottomLeft = 0;
		wall_level_3_0092_Layer_94.alphaBottomRight = 0;
		wall_level_3_0092_Layer_94.body.immovable = true;
		wall_level_3_0092_Layer_94.body.setSize(65, 6, false);
		walls_layer.add(wall_level_3_0092_Layer_94);

		// wall_level_3_0093_Layer_95
		const wall_level_3_0093_Layer_95 = this.physics.add.image(733, 552, "wall_level_3_0093_Layer-95");
		wall_level_3_0093_Layer_95.alpha = 0;
		wall_level_3_0093_Layer_95.alphaTopLeft = 0;
		wall_level_3_0093_Layer_95.alphaTopRight = 0;
		wall_level_3_0093_Layer_95.alphaBottomLeft = 0;
		wall_level_3_0093_Layer_95.alphaBottomRight = 0;
		wall_level_3_0093_Layer_95.body.immovable = true;
		wall_level_3_0093_Layer_95.body.setSize(163, 5, false);
		walls_layer.add(wall_level_3_0093_Layer_95);

		// wall_level_3_0096_Layer_98
		const wall_level_3_0096_Layer_98 = this.physics.add.image(781, 418, "wall_level_3_0096_Layer-98");
		wall_level_3_0096_Layer_98.alpha = 0;
		wall_level_3_0096_Layer_98.alphaTopLeft = 0;
		wall_level_3_0096_Layer_98.alphaTopRight = 0;
		wall_level_3_0096_Layer_98.alphaBottomLeft = 0;
		wall_level_3_0096_Layer_98.alphaBottomRight = 0;
		wall_level_3_0096_Layer_98.body.immovable = true;
		wall_level_3_0096_Layer_98.body.setSize(6, 61, false);
		walls_layer.add(wall_level_3_0096_Layer_98);

		// wall_level_3_0098_Layer_100
		const wall_level_3_0098_Layer_100 = this.physics.add.image(831, 419, "wall_level_3_0098_Layer-100");
		wall_level_3_0098_Layer_100.alpha = 0;
		wall_level_3_0098_Layer_100.alphaTopLeft = 0;
		wall_level_3_0098_Layer_100.alphaTopRight = 0;
		wall_level_3_0098_Layer_100.alphaBottomLeft = 0;
		wall_level_3_0098_Layer_100.alphaBottomRight = 0;
		wall_level_3_0098_Layer_100.body.immovable = true;
		wall_level_3_0098_Layer_100.body.setSize(32, 6, false);
		walls_layer.add(wall_level_3_0098_Layer_100);

		// wall_level_3_0098_Layer
		const wall_level_3_0098_Layer = this.physics.add.image(934, 487, "wall_level_3_0098_Layer-100");
		wall_level_3_0098_Layer.alpha = 0;
		wall_level_3_0098_Layer.alphaTopLeft = 0;
		wall_level_3_0098_Layer.alphaTopRight = 0;
		wall_level_3_0098_Layer.alphaBottomLeft = 0;
		wall_level_3_0098_Layer.alphaBottomRight = 0;
		wall_level_3_0098_Layer.body.immovable = true;
		wall_level_3_0098_Layer.body.setSize(32, 6, false);
		walls_layer.add(wall_level_3_0098_Layer);

		// wall_level_3_0099_Layer_101
		const wall_level_3_0099_Layer_101 = this.physics.add.image(845, 404, "wall_level_3_0099_Layer-101");
		wall_level_3_0099_Layer_101.alpha = 0;
		wall_level_3_0099_Layer_101.alphaTopLeft = 0;
		wall_level_3_0099_Layer_101.alphaTopRight = 0;
		wall_level_3_0099_Layer_101.alphaBottomLeft = 0;
		wall_level_3_0099_Layer_101.alphaBottomRight = 0;
		wall_level_3_0099_Layer_101.body.immovable = true;
		wall_level_3_0099_Layer_101.body.setOffset(23, 0);
		wall_level_3_0099_Layer_101.body.setSize(9, 371, false);
		walls_layer.add(wall_level_3_0099_Layer_101);

		// wall_level_3_0100_Layer_102
		const wall_level_3_0100_Layer_102 = this.physics.add.image(241, 419, "wall_level_3_0100_Layer-102");
		wall_level_3_0100_Layer_102.alpha = 0;
		wall_level_3_0100_Layer_102.alphaTopLeft = 0;
		wall_level_3_0100_Layer_102.alphaTopRight = 0;
		wall_level_3_0100_Layer_102.alphaBottomLeft = 0;
		wall_level_3_0100_Layer_102.alphaBottomRight = 0;
		wall_level_3_0100_Layer_102.body.immovable = true;
		wall_level_3_0100_Layer_102.body.setSize(6, 65, false);
		walls_layer.add(wall_level_3_0100_Layer_102);

		// wall_level_3_0101_Layer_103
		const wall_level_3_0101_Layer_103 = this.physics.add.image(882, 365, "wall_level_3_0101_Layer-103");
		wall_level_3_0101_Layer_103.alpha = 0;
		wall_level_3_0101_Layer_103.alphaTopLeft = 0;
		wall_level_3_0101_Layer_103.alphaTopRight = 0;
		wall_level_3_0101_Layer_103.alphaBottomLeft = 0;
		wall_level_3_0101_Layer_103.alphaBottomRight = 0;
		wall_level_3_0101_Layer_103.body.immovable = true;
		wall_level_3_0101_Layer_103.body.setSize(6, 101, false);
		walls_layer.add(wall_level_3_0101_Layer_103);

		// wall_level_3_0102_Layer_104
		const wall_level_3_0102_Layer_104 = this.physics.add.image(934, 416, "wall_level_3_0102_Layer-104");
		wall_level_3_0102_Layer_104.alpha = 0;
		wall_level_3_0102_Layer_104.alphaTopLeft = 0;
		wall_level_3_0102_Layer_104.alphaTopRight = 0;
		wall_level_3_0102_Layer_104.alphaBottomLeft = 0;
		wall_level_3_0102_Layer_104.alphaBottomRight = 0;
		wall_level_3_0102_Layer_104.body.immovable = true;
		wall_level_3_0102_Layer_104.body.setSize(28, 5, false);
		walls_layer.add(wall_level_3_0102_Layer_104);

		// wall_level_3_0103_Layer_105
		const wall_level_3_0103_Layer_105 = this.physics.add.image(915, 268, "wall_level_3_0103_Layer-105");
		wall_level_3_0103_Layer_105.alpha = 0;
		wall_level_3_0103_Layer_105.alphaTopLeft = 0;
		wall_level_3_0103_Layer_105.alphaTopRight = 0;
		wall_level_3_0103_Layer_105.alphaBottomLeft = 0;
		wall_level_3_0103_Layer_105.alphaBottomRight = 0;
		wall_level_3_0103_Layer_105.body.immovable = true;
		wall_level_3_0103_Layer_105.body.setSize(6, 106, false);
		walls_layer.add(wall_level_3_0103_Layer_105);

		// wall_level_3_0104_Layer_106
		const wall_level_3_0104_Layer_106 = this.physics.add.image(610, 284, "wall_level_3_0104_Layer-106");
		wall_level_3_0104_Layer_106.alpha = 0;
		wall_level_3_0104_Layer_106.alphaTopLeft = 0;
		wall_level_3_0104_Layer_106.alphaTopRight = 0;
		wall_level_3_0104_Layer_106.alphaBottomLeft = 0;
		wall_level_3_0104_Layer_106.alphaBottomRight = 0;
		wall_level_3_0104_Layer_106.body.immovable = true;
		wall_level_3_0104_Layer_106.body.setSize(62, 6, false);
		walls_layer.add(wall_level_3_0104_Layer_106);

		// wall_level_3_0105_Layer_107
		const wall_level_3_0105_Layer_107 = this.physics.add.image(577, 270, "wall_level_3_0105_Layer-107");
		wall_level_3_0105_Layer_107.alpha = 0;
		wall_level_3_0105_Layer_107.alphaTopLeft = 0;
		wall_level_3_0105_Layer_107.alphaTopRight = 0;
		wall_level_3_0105_Layer_107.alphaBottomLeft = 0;
		wall_level_3_0105_Layer_107.alphaBottomRight = 0;
		wall_level_3_0105_Layer_107.body.immovable = true;
		wall_level_3_0105_Layer_107.body.setSize(6, 31, false);
		walls_layer.add(wall_level_3_0105_Layer_107);

		// wall_level_3_0107_Layer_109
		const wall_level_3_0107_Layer_109 = this.physics.add.image(899, 318, "wall_level_3_0107_Layer-109");
		wall_level_3_0107_Layer_109.alpha = 0;
		wall_level_3_0107_Layer_109.alphaTopLeft = 0;
		wall_level_3_0107_Layer_109.alphaTopRight = 0;
		wall_level_3_0107_Layer_109.alphaBottomLeft = 0;
		wall_level_3_0107_Layer_109.alphaBottomRight = 0;
		wall_level_3_0107_Layer_109.body.immovable = true;
		wall_level_3_0107_Layer_109.body.setSize(28, 6, false);
		walls_layer.add(wall_level_3_0107_Layer_109);

		// wall_level_3_0108_Layer_110
		const wall_level_3_0108_Layer_110 = this.physics.add.image(915, 503, "wall_level_3_0108_Layer-110");
		wall_level_3_0108_Layer_110.alpha = 0;
		wall_level_3_0108_Layer_110.alphaTopLeft = 0;
		wall_level_3_0108_Layer_110.alphaTopRight = 0;
		wall_level_3_0108_Layer_110.alphaBottomLeft = 0;
		wall_level_3_0108_Layer_110.alphaBottomRight = 0;
		wall_level_3_0108_Layer_110.body.immovable = true;
		wall_level_3_0108_Layer_110.body.setSize(6, 102, false);
		walls_layer.add(wall_level_3_0108_Layer_110);

		// wall_level_3_0107_Layer
		const wall_level_3_0107_Layer = this.physics.add.image(596, 318, "wall_level_3_0107_Layer-109");
		wall_level_3_0107_Layer.alpha = 0;
		wall_level_3_0107_Layer.alphaTopLeft = 0;
		wall_level_3_0107_Layer.alphaTopRight = 0;
		wall_level_3_0107_Layer.alphaBottomLeft = 0;
		wall_level_3_0107_Layer.alphaBottomRight = 0;
		wall_level_3_0107_Layer.body.immovable = true;
		wall_level_3_0107_Layer.body.setSize(28, 6, false);
		walls_layer.add(wall_level_3_0107_Layer);

		// wall_level_3_0109_Layer_111
		const wall_level_3_0109_Layer_111 = this.physics.add.image(933, 218, "wall_level_3_0109_Layer-111");
		wall_level_3_0109_Layer_111.alpha = 0;
		wall_level_3_0109_Layer_111.alphaTopLeft = 0;
		wall_level_3_0109_Layer_111.alphaTopRight = 0;
		wall_level_3_0109_Layer_111.alphaBottomLeft = 0;
		wall_level_3_0109_Layer_111.alphaBottomRight = 0;
		wall_level_3_0109_Layer_111.body.immovable = true;
		wall_level_3_0109_Layer_111.body.setSize(28, 6, false);
		walls_layer.add(wall_level_3_0109_Layer_111);

		// wall_level_3_0096_Layer
		const wall_level_3_0096_Layer = this.physics.add.image(881, 249, "wall_level_3_0096_Layer-98");
		wall_level_3_0096_Layer.alpha = 0;
		wall_level_3_0096_Layer.alphaTopLeft = 0;
		wall_level_3_0096_Layer.alphaTopRight = 0;
		wall_level_3_0096_Layer.alphaBottomLeft = 0;
		wall_level_3_0096_Layer.alphaBottomRight = 0;
		wall_level_3_0096_Layer.body.immovable = true;
		wall_level_3_0096_Layer.body.setSize(6, 61, false);
		walls_layer.add(wall_level_3_0096_Layer);

		// wall_level_3_0099_Layer
		const wall_level_3_0099_Layer = this.physics.add.image(609, 498, "wall_level_3_0099_Layer-101");
		wall_level_3_0099_Layer.alpha = 0;
		wall_level_3_0099_Layer.alphaTopLeft = 0;
		wall_level_3_0099_Layer.alphaTopRight = 0;
		wall_level_3_0099_Layer.alphaBottomLeft = 0;
		wall_level_3_0099_Layer.alphaBottomRight = 0;
		wall_level_3_0099_Layer.body.immovable = true;
		wall_level_3_0099_Layer.body.setOffset(22, 0);
		wall_level_3_0099_Layer.body.setSize(7, 371, false);
		walls_layer.add(wall_level_3_0099_Layer);

		// score_once
		const score_once = this.physics.add.image(236, 271, "score_once");
		score_once.body.immovable = true;
		score_once.body.setSize(85, 39, false);

		// score_a
		const score_a = this.physics.add.image(324, 281, "score_a");
		score_a.body.immovable = true;
		score_a.body.setSize(21, 40, false);

		// score_day
		const score_day = this.physics.add.image(312, 332, "score_day");
		score_day.body.immovable = true;
		score_day.body.setSize(59, 40, false);

		// timer
		const timer = new TimerPrefab(this, 884, 105);
		this.add.existing(timer);
		timer.setStyle({  });

		// lists
		const walls = [wall_level_3_0099_Layer, wall_level_3_0096_Layer, wall_level_3_0109_Layer_111, wall_level_3_0107_Layer, wall_level_3_0108_Layer_110, wall_level_3_0107_Layer_109, wall_level_3_0105_Layer_107, wall_level_3_0104_Layer_106, wall_level_3_0103_Layer_105, wall_level_3_0102_Layer_104, wall_level_3_0101_Layer_103, wall_level_3_0100_Layer_102, wall_level_3_0099_Layer_101, wall_level_3_0098_Layer, wall_level_3_0098_Layer_100, wall_level_3_0096_Layer_98, wall_level_3_0093_Layer_95, wall_level_3_0092_Layer_94, wall_level_3_0091_Layer, wall_level_3_0091_Layer_93, wall_level_3_0089_Layer_91, wall_level_3_0088_Layer_90, wall_level_3_0087_Layer_89, wall_level_3_0086_Layer_88, wall_level_3_0084_Layer_86, wall_level_3_0083_Layer_85, wall_level_3_0081_Layer_83, wall_level_3_0080_Layer_82, wall_level_3_0079_Layer_81, wall_level_3_0078_Layer_80, wall_level_3_0077_Layer_79, wall_level_3_0076_Layer_78, wall_level_3_0075_Layer_77, wall_level_3_0074_Layer_76, wall_level_3_0072_Layer_74, wall_level_3_0071_Layer_73, wall_level_3_0070_Layer_72, wall_level_3_0069_Layer_71, wall_level_3_0068_Layer_70, wall_level_3_0067_Layer_69, wall_level_3_0066_Layer_68, wall_level_3_0065_Layer_67, wall_level_3_0064_Layer_66, wall_level_3_0063_Layer_65, wall_level_3_0062_Layer_64, wall_level_3_0061_Layer_63, wall_level_3_0060_Layer_62, wall_level_3_0059_Layer_61, wall_level_3_0058_Layer_60, wall_level_3_0057_Layer_59, wall_level_3_0056_Layer_58, wall_level_3_0055_Layer_57, wall_level_3_0054_Layer_56, wall_level_3_0053_Layer, wall_level_3_0053_Layer_55, wall_level_3_0051_Layer_53, wall_level_3_0050_Layer_52, wall_level_3_0049_Layer_51, wall_level_3_0048_Layer_50, wall_level_3_0046_Layer, wall_level_3_0046_Layer_48, wall_level_3_0045_Layer_47, wall_level_3_0042_Layer_44, wall_level_3_0040_Layer_42, wall_level_3_0039_Layer_1, wall_level_3_0039_Layer, wall_level_3_0039_Layer_41, wall_level_3_0038_Layer_2, wall_level_3_0038_Layer_1, wall_level_3_0038_Layer, wall_level_3_0038_Layer_40, wall_level_3_0037_Layer_39, wall_level_3_0036_Layer_2, wall_level_3_0036_Layer_1, wall_level_3_0036_Layer, wall_level_3_0036_Layer_38, wall_level_3_0035_Layer_37, wall_level_3_0033_Layer_35, wall_level_3_0032_Layer_34, wall_level_3_0031_Layer, wall_level_3_0031_Layer_33, wall_level_3_0030_Layer_32, wall_level_3_0029_Layer_31, wall_level_3_0028_Layer_30, wall_level_3_0027_Layer_29, wall_level_3_0026_Layer_1, wall_level_3_0026_Layer, wall_level_3_0026_Layer_28, wall_level_3_0025_Layer_27, wall_level_3_0024_Layer_26, wall_level_3_0023_Layer_25, wall_level_3_0022_Layer_24, wall_level_3_0021_Layer_23, wall_level_3_0020_Layer_22, wall_level_3_0019_Layer_21, wall_level_3_0018_Layer_20, wall_level_3_0017_Layer_19, wall_level_3_0016_Layer_18, wall_level_3_0015_Layer_17, wall_level_3_0014_Layer_16, wall_level_3_0013_Layer_15, wall_level_3_0012_Layer_14, wall_level_3_0010_Layer_12, wall_level_3_0009_Layer_11, wall_level_3_0008_Layer, wall_level_3_0008_Layer_10, wall_level_3_0007_Layer_9, wall_level_3_0006_Layer_8, wall_level_3_0005_Layer_7, wall_level_3_0002_Layer_4, wall_level_3_0000_Layer, wall_level_3_0001_Layer, wall_level_3_0001_Layer_3, wall_level_3_0000_Layer_2];
		const roads = [road_323, road_322, road_321, road_320, road_319, road_318, road_317, road_316, road_315, road_314, road_313, road_312, road_311, road_310, road_309, road_308, road_307, road_306, road_305, road_304, road_303, road_302, road_301, road_300, road_299, road_298, road_297, road_296, road_295, road_294, road_293, road_292, road_291, road_290, road_289, road_288, road_287, road_286, road_285, road_284, road_283, road_282, road_281, road_280, road_279, road_278, road_277, road_276, road_275, road_274, road_273, road_272, road_271, road_270, road_269, road_268, road_267, road_266, road_265, road_264, road_262, road_261, road_260, road_259, road_258, road_257, road_256, road_255, road_254, road_253, road_252, road_251, road_250, road_249, road_248, road_247, road_246, road_245, road_244, road_243, road_242, road_241, road_240, road_239, road_238, road_237, road_236, road_235, road_234, road_233, road_232, road_231, road_230, road_229, road_228, road_227, road_226, road_225, road_224, road_223, road_222, road_221, road_220, road_219, road_218, road_217, road_216, road_215, road_214, road_213, road_212, road_211, road_210, road_209, road_208, road_207, road_206, road_205, road_204, road_203, road_202, road_201, road_200, road_199, road_198, road_197, road_196, road_195, road_194, road_193, road_192, road_191, road_190, road_189, road_188, road_187, road_186, road_185, road_184, road_183, road_182, road_181, road_180, road_179, road_178, road_177, road_176, road_175, road_174, road_173, road_172, road_171, road_170, road_169, road_168, road_167, road_166, road_165, road_164, road_163, road_162, road_161, road_160, road_159, road_158, road_157, road_156, road_155, road_154, road_153, road_152, road_151, road_150, road_149, road_148, road_147, road_146, road_145, road_144, road_143, road_142, road_141, road_140, road_139, road_138, road_137, road_136, road_135, road_134, road_133, road_132, road_131, road_130, road_129, road_128, road_127, road_126, road_125, road_124, road_123, road_122, road_121, road_120, road_119, road_118, road_117, road_116, road_115, road_114, road_113, road_112, road_111, road_110, road_109, road_108, road_107, road_106, road_105, road_104, road_103, road_102, road_101, road_100, road_99, road_98, road_97, road_96, road_95, road_94, road_93, road_92, road_91, road_90, road_89, road_88, road_87, road_86, road_85, road_84, road_83, road_82, road_81, road_80, road_79, road_78, road_77, road_76, road_75, road_74, road_73, road_72, road_71, road_70, road_69, road_68, road_67, road_66, road_65, road_64, road_63, road_62, road_61, road_60, road_59, road_58, road_57, road_56, road_55, road_54, road_53, road_52, road_51, road_50, road_49, road_48, road_47, road_46, road_45, road_44, road_43, road_42, road_41, road_40, road_39, road_38, road_37, road_36, road_35, road_34, road_33, road_32, road_31, road_30, road_29, road_28, road_27, road_26, road_25, road_24, road_23, road_22, road_21, road_20, road_19, road_18, road_17, road_16, road_15, road_14, road_13, road_12, road_11, road_10, road_9, road_8, road_7, road_6, road_5, road_4, road_3, road_2, road_1, road, road_263];
		const scores = [score_once, score_day, score_a];

		// collider
		this.physics.add.collider(player, walls, this.colliderCallBack);

		// scoreCollider
		this.physics.add.collider(player, scores, this.onScore, undefined, this);

		// roadUnlockCollider
		this.physics.add.collider(player, roads, this.unlockRoad, undefined, this);

		// gameOverPrefab (prefab fields)
		gameOverPrefab.onRetry = this.retry.bind(this);
		gameOverPrefab.onSkip = this.onNext.bind(this);

		// levelClearPrefab (prefab fields)
		levelClearPrefab.onRetry = this.retry.bind(this);
		levelClearPrefab.onNext = this.onNext.bind(this);

		// timer (prefab fields)
		timer.duration = 59;
		timer.onComplete = this.onGameOver.bind(this);

		this.player = player;
		this.gameOverPrefab = gameOverPrefab;
		this.levelClearPrefab = levelClearPrefab;
		this.timer = timer;

		this.events.emit("scene-awake");
	}

	private player!: Hero;
	private gameOverPrefab!: GameOverPrefab;
	private levelClearPrefab!: LevelClearPrefab;
	private timer!: TimerPrefab;

	/* START-USER-CODE */
	private lastPointerX: number = 0;
	private lastPointerY: number = 0;
	private isDragging: boolean = false;
	private isBlocked: boolean = false; // Track if blocked
	private playerScore: number = 0;

	// Write your code here

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

	private unlockRoad(_player: any, road: any) {
		road.disableBody();
		road.destroy();
	}

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

	private onNext() {
		this.scene.start("LevelTwo");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
