// You can write more code here
import Phaser from "phaser";
/* START OF COMPILED CODE */

import RoadPrefab from "./RoadPrefab";
import Hero from "./Hero";
import TimerPrefab from "./TimerPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelOne extends Phaser.Scene {

	constructor() {
		super("LevelOne");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background_game
		this.add.image(512, 384, "background_game");

		// footer
		this.add.image(512, 701, "footer");

		// header
		this.add.image(512, 78, "header");

		// rectangle_1
		const rectangle_1 = this.add.rectangle(512, 383, 830, 420);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 11714166;

		// road_layer
		const road_layer = this.add.layer();

		// road_5
		const road_5 = new RoadPrefab(this, 159, 192);
		road_layer.add(road_5);

		// road
		const road = new RoadPrefab(this, 201, 192);
		road_layer.add(road);

		// road_1
		const road_1 = new RoadPrefab(this, 243, 192);
		road_layer.add(road_1);

		// road_2
		const road_2 = new RoadPrefab(this, 285, 192);
		road_layer.add(road_2);

		// road_3
		const road_3 = new RoadPrefab(this, 327, 192);
		road_layer.add(road_3);

		// road_4
		const road_4 = new RoadPrefab(this, 369, 192);
		road_layer.add(road_4);

		// road_6
		const road_6 = new RoadPrefab(this, 411, 192);
		road_layer.add(road_6);

		// road_7
		const road_7 = new RoadPrefab(this, 453, 192);
		road_layer.add(road_7);

		// road_8
		const road_8 = new RoadPrefab(this, 495, 192);
		road_layer.add(road_8);

		// road_9
		const road_9 = new RoadPrefab(this, 537, 192);
		road_layer.add(road_9);

		// road_10
		const road_10 = new RoadPrefab(this, 579, 192);
		road_layer.add(road_10);

		// road_11
		const road_11 = new RoadPrefab(this, 621, 192);
		road_layer.add(road_11);

		// road_12
		const road_12 = new RoadPrefab(this, 662, 192);
		road_layer.add(road_12);

		// road_13
		const road_13 = new RoadPrefab(this, 704, 192);
		road_layer.add(road_13);

		// road_14
		const road_14 = new RoadPrefab(this, 746, 192);
		road_layer.add(road_14);

		// road_15
		const road_15 = new RoadPrefab(this, 788, 192);
		road_layer.add(road_15);

		// road_16
		const road_16 = new RoadPrefab(this, 830, 192);
		road_layer.add(road_16);

		// road_17
		const road_17 = new RoadPrefab(this, 872, 192);
		road_layer.add(road_17);

		// road_18
		const road_18 = new RoadPrefab(this, 911, 192);
		road_layer.add(road_18);

		// road_19
		const road_19 = new RoadPrefab(this, 159, 234);
		road_layer.add(road_19);

		// road_20
		const road_20 = new RoadPrefab(this, 201, 234);
		road_layer.add(road_20);

		// road_21
		const road_21 = new RoadPrefab(this, 243, 234);
		road_layer.add(road_21);

		// road_22
		const road_22 = new RoadPrefab(this, 285, 234);
		road_layer.add(road_22);

		// road_23
		const road_23 = new RoadPrefab(this, 327, 234);
		road_layer.add(road_23);

		// road_24
		const road_24 = new RoadPrefab(this, 369, 234);
		road_layer.add(road_24);

		// road_25
		const road_25 = new RoadPrefab(this, 411, 234);
		road_layer.add(road_25);

		// road_26
		const road_26 = new RoadPrefab(this, 453, 234);
		road_layer.add(road_26);

		// road_27
		const road_27 = new RoadPrefab(this, 495, 234);
		road_layer.add(road_27);

		// road_28
		const road_28 = new RoadPrefab(this, 537, 234);
		road_layer.add(road_28);

		// road_29
		const road_29 = new RoadPrefab(this, 579, 234);
		road_layer.add(road_29);

		// road_30
		const road_30 = new RoadPrefab(this, 621, 234);
		road_layer.add(road_30);

		// road_31
		const road_31 = new RoadPrefab(this, 662, 234);
		road_layer.add(road_31);

		// road_32
		const road_32 = new RoadPrefab(this, 704, 234);
		road_layer.add(road_32);

		// road_33
		const road_33 = new RoadPrefab(this, 746, 234);
		road_layer.add(road_33);

		// road_34
		const road_34 = new RoadPrefab(this, 788, 234);
		road_layer.add(road_34);

		// road_35
		const road_35 = new RoadPrefab(this, 830, 234);
		road_layer.add(road_35);

		// road_36
		const road_36 = new RoadPrefab(this, 872, 234);
		road_layer.add(road_36);

		// road_37
		const road_37 = new RoadPrefab(this, 911, 234);
		road_layer.add(road_37);

		// road_38
		const road_38 = new RoadPrefab(this, 117, 235);
		road_layer.add(road_38);

		// road_39
		const road_39 = new RoadPrefab(this, 161, 276);
		road_layer.add(road_39);

		// road_40
		const road_40 = new RoadPrefab(this, 203, 276);
		road_layer.add(road_40);

		// road_41
		const road_41 = new RoadPrefab(this, 245, 276);
		road_layer.add(road_41);

		// road_42
		const road_42 = new RoadPrefab(this, 287, 276);
		road_layer.add(road_42);

		// road_43
		const road_43 = new RoadPrefab(this, 329, 276);
		road_layer.add(road_43);

		// road_44
		const road_44 = new RoadPrefab(this, 371, 276);
		road_layer.add(road_44);

		// road_45
		const road_45 = new RoadPrefab(this, 413, 276);
		road_layer.add(road_45);

		// road_46
		const road_46 = new RoadPrefab(this, 455, 276);
		road_layer.add(road_46);

		// road_47
		const road_47 = new RoadPrefab(this, 497, 276);
		road_layer.add(road_47);

		// road_48
		const road_48 = new RoadPrefab(this, 539, 276);
		road_layer.add(road_48);

		// road_49
		const road_49 = new RoadPrefab(this, 581, 276);
		road_layer.add(road_49);

		// road_50
		const road_50 = new RoadPrefab(this, 623, 276);
		road_layer.add(road_50);

		// road_51
		const road_51 = new RoadPrefab(this, 664, 276);
		road_layer.add(road_51);

		// road_52
		const road_52 = new RoadPrefab(this, 706, 276);
		road_layer.add(road_52);

		// road_53
		const road_53 = new RoadPrefab(this, 748, 276);
		road_layer.add(road_53);

		// road_54
		const road_54 = new RoadPrefab(this, 790, 276);
		road_layer.add(road_54);

		// road_55
		const road_55 = new RoadPrefab(this, 832, 276);
		road_layer.add(road_55);

		// road_56
		const road_56 = new RoadPrefab(this, 874, 276);
		road_layer.add(road_56);

		// road_57
		const road_57 = new RoadPrefab(this, 913, 276);
		road_layer.add(road_57);

		// road_58
		const road_58 = new RoadPrefab(this, 119, 277);
		road_layer.add(road_58);

		// road_59
		const road_59 = new RoadPrefab(this, 161, 316);
		road_layer.add(road_59);

		// road_60
		const road_60 = new RoadPrefab(this, 203, 316);
		road_layer.add(road_60);

		// road_61
		const road_61 = new RoadPrefab(this, 245, 316);
		road_layer.add(road_61);

		// road_62
		const road_62 = new RoadPrefab(this, 287, 316);
		road_layer.add(road_62);

		// road_63
		const road_63 = new RoadPrefab(this, 329, 316);
		road_layer.add(road_63);

		// road_64
		const road_64 = new RoadPrefab(this, 371, 316);
		road_layer.add(road_64);

		// road_65
		const road_65 = new RoadPrefab(this, 413, 316);
		road_layer.add(road_65);

		// road_66
		const road_66 = new RoadPrefab(this, 455, 316);
		road_layer.add(road_66);

		// road_67
		const road_67 = new RoadPrefab(this, 497, 316);
		road_layer.add(road_67);

		// road_68
		const road_68 = new RoadPrefab(this, 539, 316);
		road_layer.add(road_68);

		// road_69
		const road_69 = new RoadPrefab(this, 581, 316);
		road_layer.add(road_69);

		// road_70
		const road_70 = new RoadPrefab(this, 623, 316);
		road_layer.add(road_70);

		// road_71
		const road_71 = new RoadPrefab(this, 664, 316);
		road_layer.add(road_71);

		// road_72
		const road_72 = new RoadPrefab(this, 706, 316);
		road_layer.add(road_72);

		// road_73
		const road_73 = new RoadPrefab(this, 748, 316);
		road_layer.add(road_73);

		// road_74
		const road_74 = new RoadPrefab(this, 790, 316);
		road_layer.add(road_74);

		// road_75
		const road_75 = new RoadPrefab(this, 832, 316);
		road_layer.add(road_75);

		// road_76
		const road_76 = new RoadPrefab(this, 874, 316);
		road_layer.add(road_76);

		// road_77
		const road_77 = new RoadPrefab(this, 913, 316);
		road_layer.add(road_77);

		// road_78
		const road_78 = new RoadPrefab(this, 119, 317);
		road_layer.add(road_78);

		// road_79
		const road_79 = new RoadPrefab(this, 160, 358);
		road_layer.add(road_79);

		// road_80
		const road_80 = new RoadPrefab(this, 202, 358);
		road_layer.add(road_80);

		// road_81
		const road_81 = new RoadPrefab(this, 244, 358);
		road_layer.add(road_81);

		// road_82
		const road_82 = new RoadPrefab(this, 286, 358);
		road_layer.add(road_82);

		// road_83
		const road_83 = new RoadPrefab(this, 328, 358);
		road_layer.add(road_83);

		// road_84
		const road_84 = new RoadPrefab(this, 370, 358);
		road_layer.add(road_84);

		// road_85
		const road_85 = new RoadPrefab(this, 412, 358);
		road_layer.add(road_85);

		// road_86
		const road_86 = new RoadPrefab(this, 454, 358);
		road_layer.add(road_86);

		// road_87
		const road_87 = new RoadPrefab(this, 496, 358);
		road_layer.add(road_87);

		// road_88
		const road_88 = new RoadPrefab(this, 538, 358);
		road_layer.add(road_88);

		// road_89
		const road_89 = new RoadPrefab(this, 580, 358);
		road_layer.add(road_89);

		// road_90
		const road_90 = new RoadPrefab(this, 622, 358);
		road_layer.add(road_90);

		// road_91
		const road_91 = new RoadPrefab(this, 663, 358);
		road_layer.add(road_91);

		// road_92
		const road_92 = new RoadPrefab(this, 705, 358);
		road_layer.add(road_92);

		// road_93
		const road_93 = new RoadPrefab(this, 747, 358);
		road_layer.add(road_93);

		// road_94
		const road_94 = new RoadPrefab(this, 789, 358);
		road_layer.add(road_94);

		// road_95
		const road_95 = new RoadPrefab(this, 831, 358);
		road_layer.add(road_95);

		// road_96
		const road_96 = new RoadPrefab(this, 873, 358);
		road_layer.add(road_96);

		// road_97
		const road_97 = new RoadPrefab(this, 912, 358);
		road_layer.add(road_97);

		// road_98
		const road_98 = new RoadPrefab(this, 118, 359);
		road_layer.add(road_98);

		// road_99
		const road_99 = new RoadPrefab(this, 159, 399);
		road_layer.add(road_99);

		// road_100
		const road_100 = new RoadPrefab(this, 201, 399);
		road_layer.add(road_100);

		// road_101
		const road_101 = new RoadPrefab(this, 243, 399);
		road_layer.add(road_101);

		// road_102
		const road_102 = new RoadPrefab(this, 285, 399);
		road_layer.add(road_102);

		// road_103
		const road_103 = new RoadPrefab(this, 327, 399);
		road_layer.add(road_103);

		// road_104
		const road_104 = new RoadPrefab(this, 369, 399);
		road_layer.add(road_104);

		// road_105
		const road_105 = new RoadPrefab(this, 411, 399);
		road_layer.add(road_105);

		// road_106
		const road_106 = new RoadPrefab(this, 453, 399);
		road_layer.add(road_106);

		// road_107
		const road_107 = new RoadPrefab(this, 495, 399);
		road_layer.add(road_107);

		// road_108
		const road_108 = new RoadPrefab(this, 537, 399);
		road_layer.add(road_108);

		// road_109
		const road_109 = new RoadPrefab(this, 579, 399);
		road_layer.add(road_109);

		// road_110
		const road_110 = new RoadPrefab(this, 621, 399);
		road_layer.add(road_110);

		// road_111
		const road_111 = new RoadPrefab(this, 662, 399);
		road_layer.add(road_111);

		// road_112
		const road_112 = new RoadPrefab(this, 704, 399);
		road_layer.add(road_112);

		// road_113
		const road_113 = new RoadPrefab(this, 746, 399);
		road_layer.add(road_113);

		// road_114
		const road_114 = new RoadPrefab(this, 788, 399);
		road_layer.add(road_114);

		// road_115
		const road_115 = new RoadPrefab(this, 830, 399);
		road_layer.add(road_115);

		// road_116
		const road_116 = new RoadPrefab(this, 872, 399);
		road_layer.add(road_116);

		// road_117
		const road_117 = new RoadPrefab(this, 911, 399);
		road_layer.add(road_117);

		// road_118
		const road_118 = new RoadPrefab(this, 117, 400);
		road_layer.add(road_118);

		// road_119
		const road_119 = new RoadPrefab(this, 159, 441);
		road_layer.add(road_119);

		// road_120
		const road_120 = new RoadPrefab(this, 201, 441);
		road_layer.add(road_120);

		// road_121
		const road_121 = new RoadPrefab(this, 243, 441);
		road_layer.add(road_121);

		// road_122
		const road_122 = new RoadPrefab(this, 285, 441);
		road_layer.add(road_122);

		// road_123
		const road_123 = new RoadPrefab(this, 327, 441);
		road_layer.add(road_123);

		// road_124
		const road_124 = new RoadPrefab(this, 369, 441);
		road_layer.add(road_124);

		// road_125
		const road_125 = new RoadPrefab(this, 411, 441);
		road_layer.add(road_125);

		// road_126
		const road_126 = new RoadPrefab(this, 453, 441);
		road_layer.add(road_126);

		// road_127
		const road_127 = new RoadPrefab(this, 495, 441);
		road_layer.add(road_127);

		// road_128
		const road_128 = new RoadPrefab(this, 537, 441);
		road_layer.add(road_128);

		// road_129
		const road_129 = new RoadPrefab(this, 579, 441);
		road_layer.add(road_129);

		// road_130
		const road_130 = new RoadPrefab(this, 621, 441);
		road_layer.add(road_130);

		// road_131
		const road_131 = new RoadPrefab(this, 662, 441);
		road_layer.add(road_131);

		// road_132
		const road_132 = new RoadPrefab(this, 704, 441);
		road_layer.add(road_132);

		// road_133
		const road_133 = new RoadPrefab(this, 746, 441);
		road_layer.add(road_133);

		// road_134
		const road_134 = new RoadPrefab(this, 788, 441);
		road_layer.add(road_134);

		// road_135
		const road_135 = new RoadPrefab(this, 830, 441);
		road_layer.add(road_135);

		// road_136
		const road_136 = new RoadPrefab(this, 872, 441);
		road_layer.add(road_136);

		// road_137
		const road_137 = new RoadPrefab(this, 911, 441);
		road_layer.add(road_137);

		// road_138
		const road_138 = new RoadPrefab(this, 117, 442);
		road_layer.add(road_138);

		// road_139
		const road_139 = new RoadPrefab(this, 159, 482);
		road_layer.add(road_139);

		// road_140
		const road_140 = new RoadPrefab(this, 201, 482);
		road_layer.add(road_140);

		// road_141
		const road_141 = new RoadPrefab(this, 243, 482);
		road_layer.add(road_141);

		// road_142
		const road_142 = new RoadPrefab(this, 285, 482);
		road_layer.add(road_142);

		// road_143
		const road_143 = new RoadPrefab(this, 327, 482);
		road_layer.add(road_143);

		// road_144
		const road_144 = new RoadPrefab(this, 369, 482);
		road_layer.add(road_144);

		// road_145
		const road_145 = new RoadPrefab(this, 411, 482);
		road_layer.add(road_145);

		// road_146
		const road_146 = new RoadPrefab(this, 453, 482);
		road_layer.add(road_146);

		// road_147
		const road_147 = new RoadPrefab(this, 495, 482);
		road_layer.add(road_147);

		// road_148
		const road_148 = new RoadPrefab(this, 537, 482);
		road_layer.add(road_148);

		// road_149
		const road_149 = new RoadPrefab(this, 579, 482);
		road_layer.add(road_149);

		// road_150
		const road_150 = new RoadPrefab(this, 621, 482);
		road_layer.add(road_150);

		// road_151
		const road_151 = new RoadPrefab(this, 662, 482);
		road_layer.add(road_151);

		// road_152
		const road_152 = new RoadPrefab(this, 704, 482);
		road_layer.add(road_152);

		// road_153
		const road_153 = new RoadPrefab(this, 746, 482);
		road_layer.add(road_153);

		// road_154
		const road_154 = new RoadPrefab(this, 788, 482);
		road_layer.add(road_154);

		// road_155
		const road_155 = new RoadPrefab(this, 830, 482);
		road_layer.add(road_155);

		// road_156
		const road_156 = new RoadPrefab(this, 872, 482);
		road_layer.add(road_156);

		// road_157
		const road_157 = new RoadPrefab(this, 911, 482);
		road_layer.add(road_157);

		// road_158
		const road_158 = new RoadPrefab(this, 117, 483);
		road_layer.add(road_158);

		// road_159
		const road_159 = new RoadPrefab(this, 158, 524);
		road_layer.add(road_159);

		// road_160
		const road_160 = new RoadPrefab(this, 200, 524);
		road_layer.add(road_160);

		// road_161
		const road_161 = new RoadPrefab(this, 242, 524);
		road_layer.add(road_161);

		// road_162
		const road_162 = new RoadPrefab(this, 284, 524);
		road_layer.add(road_162);

		// road_163
		const road_163 = new RoadPrefab(this, 326, 524);
		road_layer.add(road_163);

		// road_164
		const road_164 = new RoadPrefab(this, 368, 524);
		road_layer.add(road_164);

		// road_165
		const road_165 = new RoadPrefab(this, 410, 524);
		road_layer.add(road_165);

		// road_166
		const road_166 = new RoadPrefab(this, 452, 524);
		road_layer.add(road_166);

		// road_167
		const road_167 = new RoadPrefab(this, 494, 524);
		road_layer.add(road_167);

		// road_168
		const road_168 = new RoadPrefab(this, 536, 524);
		road_layer.add(road_168);

		// road_169
		const road_169 = new RoadPrefab(this, 578, 524);
		road_layer.add(road_169);

		// road_170
		const road_170 = new RoadPrefab(this, 620, 524);
		road_layer.add(road_170);

		// road_171
		const road_171 = new RoadPrefab(this, 661, 524);
		road_layer.add(road_171);

		// road_172
		const road_172 = new RoadPrefab(this, 703, 524);
		road_layer.add(road_172);

		// road_173
		const road_173 = new RoadPrefab(this, 745, 524);
		road_layer.add(road_173);

		// road_174
		const road_174 = new RoadPrefab(this, 787, 524);
		road_layer.add(road_174);

		// road_175
		const road_175 = new RoadPrefab(this, 829, 524);
		road_layer.add(road_175);

		// road_176
		const road_176 = new RoadPrefab(this, 871, 524);
		road_layer.add(road_176);

		// road_177
		const road_177 = new RoadPrefab(this, 910, 524);
		road_layer.add(road_177);

		// road_178
		const road_178 = new RoadPrefab(this, 116, 525);
		road_layer.add(road_178);

		// road_179
		const road_179 = new RoadPrefab(this, 159, 565);
		road_layer.add(road_179);

		// road_180
		const road_180 = new RoadPrefab(this, 201, 565);
		road_layer.add(road_180);

		// road_181
		const road_181 = new RoadPrefab(this, 243, 565);
		road_layer.add(road_181);

		// road_182
		const road_182 = new RoadPrefab(this, 285, 565);
		road_layer.add(road_182);

		// road_183
		const road_183 = new RoadPrefab(this, 327, 565);
		road_layer.add(road_183);

		// road_184
		const road_184 = new RoadPrefab(this, 369, 565);
		road_layer.add(road_184);

		// road_185
		const road_185 = new RoadPrefab(this, 411, 565);
		road_layer.add(road_185);

		// road_186
		const road_186 = new RoadPrefab(this, 453, 565);
		road_layer.add(road_186);

		// road_187
		const road_187 = new RoadPrefab(this, 495, 565);
		road_layer.add(road_187);

		// road_188
		const road_188 = new RoadPrefab(this, 537, 565);
		road_layer.add(road_188);

		// road_189
		const road_189 = new RoadPrefab(this, 579, 565);
		road_layer.add(road_189);

		// road_190
		const road_190 = new RoadPrefab(this, 621, 565);
		road_layer.add(road_190);

		// road_191
		const road_191 = new RoadPrefab(this, 662, 565);
		road_layer.add(road_191);

		// road_192
		const road_192 = new RoadPrefab(this, 704, 565);
		road_layer.add(road_192);

		// road_193
		const road_193 = new RoadPrefab(this, 746, 565);
		road_layer.add(road_193);

		// road_194
		const road_194 = new RoadPrefab(this, 788, 565);
		road_layer.add(road_194);

		// road_195
		const road_195 = new RoadPrefab(this, 830, 565);
		road_layer.add(road_195);

		// road_196
		const road_196 = new RoadPrefab(this, 872, 565);
		road_layer.add(road_196);

		// road_197
		const road_197 = new RoadPrefab(this, 911, 565);
		road_layer.add(road_197);

		// road_198
		const road_198 = new RoadPrefab(this, 117, 566);
		road_layer.add(road_198);

		// level_1
		const level_1 = this.add.image(512, 384, "level 1");
		level_1.tintTopRight = 16711422;

		// player
		const player = new Hero(this, 117, 197);
		this.add.existing(player);

		// walls_layer
		const walls_layer = this.add.layer();
		walls_layer.alpha = 0;

		// wall_level_1__0027_Layer_20
		const wall_level_1__0027_Layer_20 = this.physics.add.image(801, 550, "wall_level_1__0027_Layer-20");
		wall_level_1__0027_Layer_20.body.immovable = true;
		wall_level_1__0027_Layer_20.body.setSize(250, 7, false);
		walls_layer.add(wall_level_1__0027_Layer_20);

		// wall_level_1__0000
		const wall_level_1__0000 = this.physics.add.image(516, 176, "wall_level_1__0000");
		wall_level_1__0000.body.immovable = true;
		wall_level_1__0000.body.setSize(839, 7, false);
		walls_layer.add(wall_level_1__0000);

		// wall_level
		const wall_level = this.physics.add.image(510, 592, "wall_level_1__0000");
		wall_level.body.immovable = true;
		wall_level.body.setSize(839, 7, false);
		walls_layer.add(wall_level);

		// wall_level_1__0001
		const wall_level_1__0001 = this.physics.add.image(95, 383, "wall_level_1__0001");
		wall_level_1__0001.body.immovable = true;
		wall_level_1__0001.body.setSize(7, 410, false);
		walls_layer.add(wall_level_1__0001);

		// wall_level_1
		const wall_level_1 = this.physics.add.image(928, 383, "wall_level_1__0001");
		wall_level_1.body.immovable = true;
		wall_level_1.body.setSize(7, 410, false);
		walls_layer.add(wall_level_1);

		// wall_level_1__0004
		const wall_level_1__0004 = this.physics.add.image(136, 218, "wall_level_1__0004");
		wall_level_1__0004.body.immovable = true;
		wall_level_1__0004.body.setSize(6, 85, false);
		walls_layer.add(wall_level_1__0004);

		// wall_level_2
		const wall_level_2 = this.physics.add.image(162, 256, "wall_level_1__0005");
		wall_level_2.body.immovable = true;
		wall_level_2.body.setSize(42, 8, false);
		walls_layer.add(wall_level_2);

		// wall_level_1__0006
		const wall_level_1__0006 = this.physics.add.image(179, 234, "wall_level_1__0006");
		wall_level_1__0006.body.immovable = true;
		wall_level_1__0006.body.setSize(8, 41, false);
		walls_layer.add(wall_level_1__0006);

		// wall_level_1__0007
		const wall_level_1__0007 = this.physics.add.image(264, 217, "wall_level_1__0007");
		wall_level_1__0007.body.immovable = true;
		wall_level_1__0007.body.setSize(162, 7, false);
		walls_layer.add(wall_level_1__0007);

		// wall_level_1__0008
		const wall_level_1__0008 = this.physics.add.image(387, 198, "wall_level_1__0008");
		wall_level_1__0008.body.immovable = true;
		wall_level_1__0008.body.setSize(10, 43, false);
		walls_layer.add(wall_level_1__0008);

		// wall_level_1__0009
		const wall_level_1__0009 = this.physics.add.image(427, 216, "wall_level_1__0009");
		wall_level_1__0009.body.immovable = true;
		wall_level_1__0009.body.setSize(79, 7, false);
		walls_layer.add(wall_level_1__0009);

		// wall_level_1__0010_Layer_3
		const wall_level_1__0010_Layer_3 = this.physics.add.image(512, 327, "wall_level_1__0010_Layer-3");
		wall_level_1__0010_Layer_3.body.immovable = true;
		wall_level_1__0010_Layer_3.body.setSize(8, 293, false);
		walls_layer.add(wall_level_1__0010_Layer_3);

		// wall_level_1__0011_Layer_4
		const wall_level_1__0011_Layer_4 = this.physics.add.image(534, 218, "wall_level_1__0011_Layer-4");
		wall_level_1__0011_Layer_4.body.immovable = true;
		wall_level_1__0011_Layer_4.body.setSize(38, 7, false);
		walls_layer.add(wall_level_1__0011_Layer_4);

		// wall_level_1__0012_Layer_5
		const wall_level_1__0012_Layer_5 = this.physics.add.image(614, 217, "wall_level_1__0012_Layer-5");
		wall_level_1__0012_Layer_5.body.immovable = true;
		wall_level_1__0012_Layer_5.body.setSize(39, 7, false);
		walls_layer.add(wall_level_1__0012_Layer_5);

		// wall_level_1__0013_Layer_6
		const wall_level_1__0013_Layer_6 = this.physics.add.image(635, 238, "wall_level_1__0013_Layer-6");
		wall_level_1__0013_Layer_6.body.immovable = true;
		wall_level_1__0013_Layer_6.body.setSize(7, 49, false);
		walls_layer.add(wall_level_1__0013_Layer_6);

		// wall_level_1__0014_Layer_7
		const wall_level_1__0014_Layer_7 = this.physics.add.image(755, 259, "wall_level_1__0014_Layer-7");
		wall_level_1__0014_Layer_7.body.immovable = true;
		wall_level_1__0014_Layer_7.body.setSize(247, 7, false);
		walls_layer.add(wall_level_1__0014_Layer_7);

		// wall_level_1__0015_Layer_8
		const wall_level_1__0015_Layer_8 = this.physics.add.image(803, 217, "wall_level_1__0015_Layer-8");
		wall_level_1__0015_Layer_8.body.immovable = true;
		wall_level_1__0015_Layer_8.body.setSize(250, 8, false);
		walls_layer.add(wall_level_1__0015_Layer_8);

		// wall_level_1__0016_Layer_9
		const wall_level_1__0016_Layer_9 = this.physics.add.image(883, 275, "wall_level_1__0016_Layer-9");
		wall_level_1__0016_Layer_9.body.immovable = true;
		wall_level_1__0016_Layer_9.body.setSize(7, 40, false);
		walls_layer.add(wall_level_1__0016_Layer_9);

		// wall_level_1__0017_Layer_10
		const wall_level_1__0017_Layer_10 = this.physics.add.image(803, 299, "wall_level_1__0017_Layer-10");
		wall_level_1__0017_Layer_10.body.immovable = true;
		wall_level_1__0017_Layer_10.body.setSize(167, 7, false);
		walls_layer.add(wall_level_1__0017_Layer_10);

		// wall_level_1__0018_Layer_11
		const wall_level_1__0018_Layer_11 = this.physics.add.image(720, 380, "wall_level_1__0018_Layer-11");
		wall_level_1__0018_Layer_11.body.immovable = true;
		wall_level_1__0018_Layer_11.body.setSize(7, 167, false);
		walls_layer.add(wall_level_1__0018_Layer_11);

		// wall_level_1__0019_Layer_12
		const wall_level_1__0019_Layer_12 = this.physics.add.image(824, 342, "wall_level_1__0019_Layer-12");
		wall_level_1__0019_Layer_12.body.immovable = true;
		wall_level_1__0019_Layer_12.body.setSize(201, 7, false);
		walls_layer.add(wall_level_1__0019_Layer_12);

		// wall_level_1__0020_Layer_13
		const wall_level_1__0020_Layer_13 = this.physics.add.image(843, 384, "wall_level_1__0020_Layer-13");
		wall_level_1__0020_Layer_13.body.immovable = true;
		wall_level_1__0020_Layer_13.body.setSize(166, 8, false);
		walls_layer.add(wall_level_1__0020_Layer_13);

		// wall_level_1__0021_Layer_14
		const wall_level_1__0021_Layer_14 = this.physics.add.image(763, 402, "wall_level_1__0021_Layer-14");
		wall_level_1__0021_Layer_14.body.immovable = true;
		wall_level_1__0021_Layer_14.body.setSize(7, 41, false);
		walls_layer.add(wall_level_1__0021_Layer_14);

		// wall_level_1__0022_Layer_15
		const wall_level_1__0022_Layer_15 = this.physics.add.image(821, 424, "wall_level_1__0022_Layer-15");
		wall_level_1__0022_Layer_15.body.immovable = true;
		wall_level_1__0022_Layer_15.body.setSize(122, 8, false);
		walls_layer.add(wall_level_1__0022_Layer_15);

		// wall_level_1__0023_Layer_16
		const wall_level_1__0023_Layer_16 = this.physics.add.image(757, 466, "wall_level_1__0023_Layer-16");
		wall_level_1__0023_Layer_16.body.immovable = true;
		wall_level_1__0023_Layer_16.body.setSize(80, 7, false);
		walls_layer.add(wall_level_1__0023_Layer_16);

		// wall_level_1__0024_Layer_17
		const wall_level_1__0024_Layer_17 = this.physics.add.image(905, 466, "wall_level_1__0024_Layer-17");
		wall_level_1__0024_Layer_17.body.immovable = true;
		wall_level_1__0024_Layer_17.body.setSize(38, 7, false);
		walls_layer.add(wall_level_1__0024_Layer_17);

		// wall_level_1__0025_Layer_18
		const wall_level_1__0025_Layer_18 = this.physics.add.image(804, 508, "wall_level_1__0025_Layer-18");
		wall_level_1__0025_Layer_18.body.immovable = true;
		wall_level_1__0025_Layer_18.body.setSize(168, 8, false);
		walls_layer.add(wall_level_1__0025_Layer_18);

		// wall_level_1__0026_Layer_19
		const wall_level_1__0026_Layer_19 = this.physics.add.image(845, 466, "wall_level_1__0026_Layer-19");
		wall_level_1__0026_Layer_19.body.immovable = true;
		wall_level_1__0026_Layer_19.body.setSize(7, 74, false);
		walls_layer.add(wall_level_1__0026_Layer_19);

		// wall_level_1__0028_Layer_21
		const wall_level_1__0028_Layer_21 = this.physics.add.image(680, 527, "wall_level_1__0028_Layer-21");
		wall_level_1__0028_Layer_21.body.immovable = true;
		wall_level_1__0028_Layer_21.body.setSize(7, 39, false);
		walls_layer.add(wall_level_1__0028_Layer_21);

		// wall_level_1__0029_Layer_22
		const wall_level_1__0029_Layer_22 = this.physics.add.image(678, 382, "wall_level_1__0029_Layer-22");
		wall_level_1__0029_Layer_22.body.immovable = true;
		wall_level_1__0029_Layer_22.body.setSize(7, 171, false);
		walls_layer.add(wall_level_1__0029_Layer_22);

		// wall_level_1__0030_Layer_23
		const wall_level_1__0030_Layer_23 = this.physics.add.image(638, 301, "wall_level_1__0030_Layer-23");
		wall_level_1__0030_Layer_23.body.immovable = true;
		wall_level_1__0030_Layer_23.body.setSize(83, 8, false);
		walls_layer.add(wall_level_1__0030_Layer_23);

		// wall_level_1__0031_Layer_24
		const wall_level_1__0031_Layer_24 = this.physics.add.image(595, 285, "wall_level_1__0031_Layer-24");
		wall_level_1__0031_Layer_24.body.immovable = true;
		wall_level_1__0031_Layer_24.body.setSize(8, 40, false);
		walls_layer.add(wall_level_1__0031_Layer_24);

		// wall_level_1__0032_Layer_25
		const wall_level_1__0032_Layer_25 = this.physics.add.image(574, 262, "wall_level_1__0032_Layer-25");
		wall_level_1__0032_Layer_25.body.immovable = true;
		wall_level_1__0032_Layer_25.body.setSize(34, 14, false);
		walls_layer.add(wall_level_1__0032_Layer_25);

		// wall_level_1__0033_Layer_26
		const wall_level_1__0033_Layer_26 = this.physics.add.image(554, 342, "wall_level_1__0033_Layer-26");
		wall_level_1__0033_Layer_26.body.immovable = true;
		wall_level_1__0033_Layer_26.body.setSize(7, 173, false);
		walls_layer.add(wall_level_1__0033_Layer_26);

		// wall_level_1__0034_Layer_27
		const wall_level_1__0034_Layer_27 = this.physics.add.image(595, 425, "wall_level_1__0034_Layer-27");
		wall_level_1__0034_Layer_27.body.immovable = true;
		wall_level_1__0034_Layer_27.body.setSize(76, 7, false);
		walls_layer.add(wall_level_1__0034_Layer_27);

		// wall_level_1__0035_Layer_28
		const wall_level_1__0035_Layer_28 = this.physics.add.image(597, 361, "wall_level_1__0035_Layer-28");
		wall_level_1__0035_Layer_28.body.immovable = true;
		wall_level_1__0035_Layer_28.body.setSize(8, 45, false);
		walls_layer.add(wall_level_1__0035_Layer_28);

		// wall_level_1__0036_Layer_29
		const wall_level_1__0036_Layer_29 = this.physics.add.image(616, 342, "wall_level_1__0036_Layer-29");
		wall_level_1__0036_Layer_29.body.immovable = true;
		wall_level_1__0036_Layer_29.body.setSize(34, 7, false);
		walls_layer.add(wall_level_1__0036_Layer_29);

		// wall_level_1__0037_Layer_30
		const wall_level_1__0037_Layer_30 = this.physics.add.image(637, 445, "wall_level_1__0037_Layer-30");
		wall_level_1__0037_Layer_30.body.immovable = true;
		wall_level_1__0037_Layer_30.body.setSize(7, 212, false);
		walls_layer.add(wall_level_1__0037_Layer_30);

		// wall_level_1__0038_Layer_31
		const wall_level_1__0038_Layer_31 = this.physics.add.image(557, 470, "wall_level_1__0038_Layer-31");
		wall_level_1__0038_Layer_31.body.immovable = true;
		wall_level_1__0038_Layer_31.body.setSize(82, 7, false);
		walls_layer.add(wall_level_1__0038_Layer_31);

		// wall_level_1__0039_Layer_32
		const wall_level_1__0039_Layer_32 = this.physics.add.image(594, 515, "wall_level_1__0039_Layer-32");
		wall_level_1__0039_Layer_32.body.immovable = true;
		wall_level_1__0039_Layer_32.body.setSize(8, 83, false);
		walls_layer.add(wall_level_1__0039_Layer_32);

		// wall_level_1__0040_Layer_33
		const wall_level_1__0040_Layer_33 = this.physics.add.image(532, 508, "wall_level_1__0040_Layer-33");
		wall_level_1__0040_Layer_33.body.immovable = true;
		wall_level_1__0040_Layer_33.body.setSize(46, 7, false);
		walls_layer.add(wall_level_1__0040_Layer_33);

		// wall_level_1__0041_Layer_34
		const wall_level_1__0041_Layer_34 = this.physics.add.image(550, 553, "wall_level_1__0041_Layer-34");
		wall_level_1__0041_Layer_34.body.immovable = true;
		wall_level_1__0041_Layer_34.body.setSize(82, 7, false);
		walls_layer.add(wall_level_1__0041_Layer_34);

		// wall_level_1__0042_Layer_35
		const wall_level_1__0042_Layer_35 = this.physics.add.image(513, 530, "wall_level_1__0042_Layer-35");
		wall_level_1__0042_Layer_35.body.immovable = true;
		wall_level_1__0042_Layer_35.body.setSize(7, 35, false);
		walls_layer.add(wall_level_1__0042_Layer_35);

		// wall_level_1__0043_Layer_36
		const wall_level_1__0043_Layer_36 = this.physics.add.image(407, 550, "wall_level_1__0043_Layer-36");
		wall_level_1__0043_Layer_36.body.immovable = true;
		wall_level_1__0043_Layer_36.body.setSize(129, 8, false);
		walls_layer.add(wall_level_1__0043_Layer_36);

		// wall_level_1__0044_Layer_37
		const wall_level_1__0044_Layer_37 = this.physics.add.image(346, 526, "wall_level_1__0044_Layer-37");
		wall_level_1__0044_Layer_37.body.immovable = true;
		wall_level_1__0044_Layer_37.body.setSize(7, 41, false);
		walls_layer.add(wall_level_1__0044_Layer_37);

		// wall_level_1__0045_Layer_38
		const wall_level_1__0045_Layer_38 = this.physics.add.image(280, 510, "wall_level_1__0045_Layer-38");
		wall_level_1__0045_Layer_38.body.immovable = true;
		wall_level_1__0045_Layer_38.body.setSize(124, 7, false);
		walls_layer.add(wall_level_1__0045_Layer_38);

		// wall_level_1__0046_Layer_39
		const wall_level_1__0046_Layer_39 = this.physics.add.image(303, 570, "wall_level_1__0046_Layer-39");
		wall_level_1__0046_Layer_39.body.immovable = true;
		wall_level_1__0046_Layer_39.body.setSize(9, 36, false);
		walls_layer.add(wall_level_1__0046_Layer_39);

		// wall_level_1__0047_Layer_40
		const wall_level_1__0047_Layer_40 = this.physics.add.image(203, 549, "wall_level_1__0047_Layer-40");
		wall_level_1__0047_Layer_40.body.immovable = true;
		wall_level_1__0047_Layer_40.body.setSize(208, 8, false);
		walls_layer.add(wall_level_1__0047_Layer_40);

		// wall_level_1__0048_Layer_41
		const wall_level_1__0048_Layer_41 = this.physics.add.image(137, 506, "wall_level_1__0048_Layer-41");
		wall_level_1__0048_Layer_41.body.immovable = true;
		wall_level_1__0048_Layer_41.body.setSize(7, 79, false);
		walls_layer.add(wall_level_1__0048_Layer_41);

		// wall_level_1__0049_Layer_42
		const wall_level_1__0049_Layer_42 = this.physics.add.image(428, 383, "wall_level_1__0049_Layer-42");
		wall_level_1__0049_Layer_42.body.immovable = true;
		wall_level_1__0049_Layer_42.body.setSize(7, 170, false);
		walls_layer.add(wall_level_1__0049_Layer_42);

		// wall_level_1__0050_Layer_43
		const wall_level_1__0050_Layer_43 = this.physics.add.image(426, 509, "wall_level_1__0050_Layer-43");
		wall_level_1__0050_Layer_43.body.immovable = true;
		wall_level_1__0050_Layer_43.body.setSize(83, 8, false);
		walls_layer.add(wall_level_1__0050_Layer_43);

		// wall_level_1__0051_Layer_44
		const wall_level_1__0051_Layer_44 = this.physics.add.image(469, 427, "wall_level_1__0051_Layer-44");
		wall_level_1__0051_Layer_44.body.immovable = true;
		wall_level_1__0051_Layer_44.body.setSize(7, 171, false);
		walls_layer.add(wall_level_1__0051_Layer_44);

		// wall_level_1__0052_Layer_45
		const wall_level_1__0052_Layer_45 = this.physics.add.image(451, 301, "wall_level_1__0052_Layer-45");
		wall_level_1__0052_Layer_45.body.immovable = true;
		wall_level_1__0052_Layer_45.body.setSize(38, 7, false);
		walls_layer.add(wall_level_1__0052_Layer_45);

		// wall_level_1__0053_Layer_46
		const wall_level_1__0053_Layer_46 = this.physics.add.image(427, 260, "wall_level_1__0053_Layer-46");
		wall_level_1__0053_Layer_46.body.immovable = true;
		wall_level_1__0053_Layer_46.body.setSize(167, 8, false);
		walls_layer.add(wall_level_1__0053_Layer_46);

		// wall_level_1__0054_Layer_47
		const wall_level_1__0054_Layer_47 = this.physics.add.image(388, 402, "wall_level_1__0054_Layer-47");
		wall_level_1__0054_Layer_47.body.immovable = true;
		wall_level_1__0054_Layer_47.body.setSize(8, 204, false);
		walls_layer.add(wall_level_1__0054_Layer_47);

		// wall_level_1__0055_Layer_48
		const wall_level_1__0055_Layer_48 = this.physics.add.image(322, 466, "wall_level_1__0055_Layer-48");
		wall_level_1__0055_Layer_48.body.immovable = true;
		wall_level_1__0055_Layer_48.body.setSize(124, 8, false);
		walls_layer.add(wall_level_1__0055_Layer_48);

		// wall_level_1__0056_Layer_49
		const wall_level_1__0056_Layer_49 = this.physics.add.image(265, 442, "wall_level_1__0056_Layer-49");
		wall_level_1__0056_Layer_49.body.immovable = true;
		wall_level_1__0056_Layer_49.body.setSize(8, 41, false);
		walls_layer.add(wall_level_1__0056_Layer_49);

		// wall_level_1__0057_Layer_50
		const wall_level_1__0057_Layer_50 = this.physics.add.image(308, 427, "wall_level_1__0057_Layer-50");
		wall_level_1__0057_Layer_50.body.immovable = true;
		wall_level_1__0057_Layer_50.body.setSize(82, 8, false);
		walls_layer.add(wall_level_1__0057_Layer_50);

		// wall_level_1__0058_Layer_51
		const wall_level_1__0058_Layer_51 = this.physics.add.image(347, 344, "wall_level_1__0058_Layer-51");
		wall_level_1__0058_Layer_51.body.immovable = true;
		wall_level_1__0058_Layer_51.body.setSize(7, 157, false);
		walls_layer.add(wall_level_1__0058_Layer_51);

		// wall_level_1__0059_Layer_52
		const wall_level_1__0059_Layer_52 = this.physics.add.image(265, 260, "wall_level_1__0059_Layer-52");
		wall_level_1__0059_Layer_52.body.immovable = true;
		wall_level_1__0059_Layer_52.body.setSize(87, 8, false);
		walls_layer.add(wall_level_1__0059_Layer_52);

		// wall_level_1__0060_Layer_53
		const wall_level_1__0060_Layer_53 = this.physics.add.image(303, 325, "wall_level_1__0060_Layer-53");
		wall_level_1__0060_Layer_53.body.immovable = true;
		wall_level_1__0060_Layer_53.body.setSize(8, 123, false);
		walls_layer.add(wall_level_1__0060_Layer_53);

		// wall_level_1__0061_Layer_54
		const wall_level_1__0061_Layer_54 = this.physics.add.image(261, 383, "wall_level_1__0061_Layer-54");
		wall_level_1__0061_Layer_54.body.immovable = true;
		wall_level_1__0061_Layer_54.body.setSize(76, 7, false);
		walls_layer.add(wall_level_1__0061_Layer_54);

		// wall_level_1__0062_Layer_55
		const wall_level_1__0062_Layer_55 = this.physics.add.image(183, 301, "wall_level_1__0062_Layer-55");
		wall_level_1__0062_Layer_55.body.immovable = true;
		wall_level_1__0062_Layer_55.body.setSize(166, 8, false);
		walls_layer.add(wall_level_1__0062_Layer_55);

		// wall_level_1__0063_Layer_56
		const wall_level_1__0063_Layer_56 = this.physics.add.image(261, 325, "wall_level_1__0063_Layer-56");
		wall_level_1__0063_Layer_56.body.immovable = true;
		wall_level_1__0063_Layer_56.body.setSize(7, 38, false);
		walls_layer.add(wall_level_1__0063_Layer_56);

		// wall_level_1__0064_Layer_57
		const wall_level_1__0064_Layer_57 = this.physics.add.image(179, 343, "wall_level_1__0064_Layer-57");
		wall_level_1__0064_Layer_57.body.immovable = true;
		wall_level_1__0064_Layer_57.body.setSize(91, 8, false);
		walls_layer.add(wall_level_1__0064_Layer_57);

		// wall_level_1__0065_Layer_58
		const wall_level_1__0065_Layer_58 = this.physics.add.image(138, 367, "wall_level_1__0065_Layer-58");
		wall_level_1__0065_Layer_58.body.immovable = true;
		wall_level_1__0065_Layer_58.body.setSize(8, 40, false);
		walls_layer.add(wall_level_1__0065_Layer_58);

		// wall_level_1__0066_Layer_59
		const wall_level_1__0066_Layer_59 = this.physics.add.image(161, 383, "wall_level_1__0066_Layer-59");
		wall_level_1__0066_Layer_59.body.immovable = true;
		wall_level_1__0066_Layer_59.body.setSize(38, 7, false);
		walls_layer.add(wall_level_1__0066_Layer_59);

		// wall_level_1__0067_Layer_60
		const wall_level_1__0067_Layer_60 = this.physics.add.image(220, 427, "wall_level_1__0067_Layer-60");
		wall_level_1__0067_Layer_60.body.immovable = true;
		wall_level_1__0067_Layer_60.body.setSize(7, 158, false);
		walls_layer.add(wall_level_1__0067_Layer_60);

		// wall_level_1__0068_Layer_61
		const wall_level_1__0068_Layer_61 = this.physics.add.image(159, 425, "wall_level_1__0068_Layer-61");
		wall_level_1__0068_Layer_61.body.immovable = true;
		wall_level_1__0068_Layer_61.body.setSize(118, 7, false);
		walls_layer.add(wall_level_1__0068_Layer_61);

		// wall_level_1__0069_Layer_62
		const wall_level_1__0069_Layer_62 = this.physics.add.image(181, 468, "wall_level_1__0069_Layer-62");
		wall_level_1__0069_Layer_62.body.immovable = true;
		wall_level_1__0069_Layer_62.body.setSize(7, 80, false);
		walls_layer.add(wall_level_1__0069_Layer_62);

		// score_once
		const score_once = this.physics.add.image(261, 241, "score_once");
		score_once.body.setSize(85, 39, false);

		// score_a
		const score_a = this.physics.add.image(441, 533, "score_a");
		score_a.body.setSize(21, 40, false);

		// score_day
		const score_day = this.physics.add.image(801, 367, "score_day");
		score_day.body.setSize(59, 40, false);

		// level_1_button
		this.add.image(512, 682.5, "level_1_button");

		// timer_container
		this.add.image(855, 106, "timer_container");

		// timer
		const timer = new TimerPrefab(this, 852, 98);
		this.add.existing(timer);
		timer.setStyle({  });

		// lists
		const walls = [wall_level_1__0000, wall_level, wall_level_1__0001, wall_level_1, wall_level_1__0004, wall_level_2, wall_level_1__0006, wall_level_1__0007, wall_level_1__0008, wall_level_1__0009, wall_level_1__0010_Layer_3, wall_level_1__0011_Layer_4, wall_level_1__0012_Layer_5, wall_level_1__0014_Layer_7, wall_level_1__0013_Layer_6, wall_level_1__0015_Layer_8, wall_level_1__0016_Layer_9, wall_level_1__0017_Layer_10, wall_level_1__0018_Layer_11, wall_level_1__0019_Layer_12, wall_level_1__0020_Layer_13, wall_level_1__0021_Layer_14, wall_level_1__0022_Layer_15, wall_level_1__0023_Layer_16, wall_level_1__0024_Layer_17, wall_level_1__0025_Layer_18, wall_level_1__0026_Layer_19, wall_level_1__0027_Layer_20, wall_level_1__0028_Layer_21, wall_level_1__0037_Layer_30, wall_level_1__0036_Layer_29, wall_level_1__0035_Layer_28, wall_level_1__0034_Layer_27, wall_level_1__0033_Layer_26, wall_level_1__0032_Layer_25, wall_level_1__0031_Layer_24, wall_level_1__0030_Layer_23, wall_level_1__0029_Layer_22, wall_level_1__0047_Layer_40, wall_level_1__0046_Layer_39, wall_level_1__0045_Layer_38, wall_level_1__0044_Layer_37, wall_level_1__0043_Layer_36, wall_level_1__0042_Layer_35, wall_level_1__0041_Layer_34, wall_level_1__0040_Layer_33, wall_level_1__0039_Layer_32, wall_level_1__0038_Layer_31, wall_level_1__0048_Layer_41, wall_level_1__0057_Layer_50, wall_level_1__0056_Layer_49, wall_level_1__0055_Layer_48, wall_level_1__0054_Layer_47, wall_level_1__0053_Layer_46, wall_level_1__0052_Layer_45, wall_level_1__0051_Layer_44, wall_level_1__0050_Layer_43, wall_level_1__0049_Layer_42, wall_level_1__0069_Layer_62, wall_level_1__0068_Layer_61, wall_level_1__0067_Layer_60, wall_level_1__0066_Layer_59, wall_level_1__0065_Layer_58, wall_level_1__0064_Layer_57, wall_level_1__0063_Layer_56, wall_level_1__0062_Layer_55, wall_level_1__0061_Layer_54, wall_level_1__0060_Layer_53, wall_level_1__0059_Layer_52, wall_level_1__0058_Layer_51];
		const roads = [road_5, road_18, road_17, road_16, road_15, road_14, road_13, road_12, road_11, road_10, road_9, road_8, road_7, road_6, road_4, road_3, road_2, road_1, road, road_19, road_20, road_21, road_22, road_23, road_24, road_25, road_26, road_27, road_28, road_29, road_30, road_31, road_32, road_33, road_34, road_35, road_36, road_37, road_38, road_39, road_40, road_41, road_42, road_43, road_44, road_45, road_46, road_47, road_48, road_49, road_50, road_51, road_52, road_53, road_54, road_55, road_56, road_57, road_58, road_59, road_60, road_61, road_62, road_63, road_64, road_65, road_66, road_67, road_68, road_69, road_70, road_71, road_72, road_73, road_74, road_75, road_76, road_77, road_78, road_79, road_80, road_81, road_82, road_83, road_84, road_85, road_86, road_87, road_88, road_89, road_90, road_91, road_92, road_93, road_94, road_95, road_96, road_97, road_98, road_99, road_100, road_101, road_102, road_103, road_104, road_105, road_106, road_107, road_108, road_109, road_110, road_111, road_112, road_113, road_114, road_115, road_116, road_117, road_118, road_119, road_120, road_121, road_122, road_123, road_124, road_125, road_126, road_127, road_128, road_129, road_130, road_131, road_132, road_133, road_134, road_135, road_136, road_137, road_138, road_139, road_140, road_141, road_142, road_143, road_144, road_145, road_146, road_147, road_148, road_149, road_150, road_151, road_152, road_153, road_154, road_155, road_156, road_157, road_158, road_159, road_160, road_161, road_162, road_163, road_164, road_165, road_166, road_167, road_168, road_169, road_170, road_171, road_172, road_173, road_174, road_175, road_176, road_177, road_178, road_179, road_180, road_181, road_182, road_183, road_184, road_185, road_186, road_187, road_188, road_189, road_190, road_191, road_192, road_193, road_194, road_195, road_196, road_197, road_198];
		const scores = [score_once, score_a, score_day];

		// collider
		this.physics.add.collider(player, walls, this.colliderCallBack);

		// roadUnlockCollider
		this.physics.add.overlap(player, roads, this.unlockRoad);

		// scoreCollider
		this.physics.add.overlap(player, scores, this.onScore, undefined, this);

		// timer (prefab fields)
		timer.duration = 60;
		timer.onComplete = this.onGameOver;

		this.player = player;

		this.events.emit("scene-awake");
	}

	private player!: Hero;

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

	// Check if the pointer is inside the fufuSuperDino's bounding box
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
		console.log("TG>>> player", this.playerScore);
	}

	private onGameOver() {
		alert("game over");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
