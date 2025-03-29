// You can write more code here
import Phaser from "phaser";
/* START OF COMPILED CODE */

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

		// level_1
		const level_1 = this.add.image(512, 384, "level 1");
		level_1.tintFill = true;
		level_1.tintTopLeft = 983297;
		level_1.tintTopRight = 2294531;
		level_1.tintBottomLeft = 196608;
		level_1.tintBottomRight = 459009;

		// player
		const player = this.physics.add.image(117, 202, "home_button_light");
		player.scaleX = 0.4;
		player.scaleY = 0.4;
		player.body.drag.x = 1000;
		player.body.drag.y = 1000;
		player.body.useDamping = true;
		player.body.collideWorldBounds = true;
		player.body.setSize(66, 61, false);

		// wall_level_1__0000
		const wall_level_1__0000 = this.physics.add.image(516, 176, "wall_level_1__0000");
		wall_level_1__0000.body.immovable = true;
		wall_level_1__0000.body.setSize(839, 7, false);

		// wall_level
		const wall_level = this.physics.add.image(510, 592, "wall_level_1__0000");
		wall_level.body.immovable = true;
		wall_level.body.setSize(839, 7, false);

		// wall_level_1__0001
		const wall_level_1__0001 = this.physics.add.image(95, 383, "wall_level_1__0001");
		wall_level_1__0001.body.immovable = true;
		wall_level_1__0001.body.setSize(7, 410, false);

		// wall_level_1
		const wall_level_1 = this.physics.add.image(928, 383, "wall_level_1__0001");
		wall_level_1.body.immovable = true;
		wall_level_1.body.setSize(7, 410, false);

		// wall_level_1__0004
		const wall_level_1__0004 = this.physics.add.image(136, 218, "wall_level_1__0004");
		wall_level_1__0004.body.immovable = true;
		wall_level_1__0004.body.setSize(6, 85, false);

		// wall_level_2
		const wall_level_2 = this.physics.add.image(162, 256, "wall_level_1__0005");
		wall_level_2.body.immovable = true;
		wall_level_2.body.setSize(42, 8, false);

		// wall_level_1__0006
		const wall_level_1__0006 = this.physics.add.image(179, 234, "wall_level_1__0006");
		wall_level_1__0006.body.immovable = true;
		wall_level_1__0006.body.setSize(8, 41, false);

		// wall_level_1__0007
		const wall_level_1__0007 = this.physics.add.image(264, 217, "wall_level_1__0007");
		wall_level_1__0007.body.immovable = true;
		wall_level_1__0007.body.setSize(162, 7, false);

		// wall_level_1__0008
		const wall_level_1__0008 = this.physics.add.image(387, 198, "wall_level_1__0008");
		wall_level_1__0008.body.immovable = true;
		wall_level_1__0008.body.setSize(10, 43, false);

		// wall_level_1__0009
		const wall_level_1__0009 = this.physics.add.image(427, 216, "wall_level_1__0009");
		wall_level_1__0009.body.immovable = true;
		wall_level_1__0009.body.setSize(79, 7, false);

		// wall_level_1__0010_Layer_3
		const wall_level_1__0010_Layer_3 = this.physics.add.image(512, 327, "wall_level_1__0010_Layer-3");
		wall_level_1__0010_Layer_3.body.immovable = true;
		wall_level_1__0010_Layer_3.body.setSize(8, 293, false);

		// wall_level_1__0011_Layer_4
		const wall_level_1__0011_Layer_4 = this.physics.add.image(534, 218, "wall_level_1__0011_Layer-4");
		wall_level_1__0011_Layer_4.body.immovable = true;
		wall_level_1__0011_Layer_4.body.setSize(38, 7, false);

		// wall_level_1__0012_Layer_5
		const wall_level_1__0012_Layer_5 = this.physics.add.image(614, 217, "wall_level_1__0012_Layer-5");
		wall_level_1__0012_Layer_5.body.immovable = true;
		wall_level_1__0012_Layer_5.body.setSize(39, 7, false);

		// wall_level_1__0013_Layer_6
		const wall_level_1__0013_Layer_6 = this.physics.add.image(635, 238, "wall_level_1__0013_Layer-6");
		wall_level_1__0013_Layer_6.body.immovable = true;
		wall_level_1__0013_Layer_6.body.setSize(7, 49, false);

		// wall_level_1__0014_Layer_7
		const wall_level_1__0014_Layer_7 = this.physics.add.image(755, 259, "wall_level_1__0014_Layer-7");
		wall_level_1__0014_Layer_7.body.immovable = true;
		wall_level_1__0014_Layer_7.body.setSize(247, 7, false);

		// wall_level_1__0015_Layer_8
		const wall_level_1__0015_Layer_8 = this.physics.add.image(803, 217, "wall_level_1__0015_Layer-8");
		wall_level_1__0015_Layer_8.body.immovable = true;
		wall_level_1__0015_Layer_8.body.setSize(250, 8, false);

		// wall_level_1__0016_Layer_9
		const wall_level_1__0016_Layer_9 = this.physics.add.image(883, 275, "wall_level_1__0016_Layer-9");
		wall_level_1__0016_Layer_9.body.immovable = true;
		wall_level_1__0016_Layer_9.body.setSize(7, 40, false);

		// wall_level_1__0017_Layer_10
		const wall_level_1__0017_Layer_10 = this.physics.add.image(803, 299, "wall_level_1__0017_Layer-10");
		wall_level_1__0017_Layer_10.body.immovable = true;
		wall_level_1__0017_Layer_10.body.setSize(167, 7, false);

		// wall_level_1__0018_Layer_11
		const wall_level_1__0018_Layer_11 = this.physics.add.image(720, 380, "wall_level_1__0018_Layer-11");
		wall_level_1__0018_Layer_11.body.immovable = true;
		wall_level_1__0018_Layer_11.body.setSize(7, 167, false);

		// wall_level_1__0019_Layer_12
		const wall_level_1__0019_Layer_12 = this.physics.add.image(824, 342, "wall_level_1__0019_Layer-12");
		wall_level_1__0019_Layer_12.body.immovable = true;
		wall_level_1__0019_Layer_12.body.setSize(201, 7, false);

		// wall_level_1__0020_Layer_13
		const wall_level_1__0020_Layer_13 = this.physics.add.image(843, 384, "wall_level_1__0020_Layer-13");
		wall_level_1__0020_Layer_13.body.immovable = true;
		wall_level_1__0020_Layer_13.body.setSize(166, 8, false);

		// wall_level_1__0021_Layer_14
		const wall_level_1__0021_Layer_14 = this.physics.add.image(763, 402, "wall_level_1__0021_Layer-14");
		wall_level_1__0021_Layer_14.body.immovable = true;
		wall_level_1__0021_Layer_14.body.setSize(7, 41, false);

		// wall_level_1__0022_Layer_15
		const wall_level_1__0022_Layer_15 = this.physics.add.image(821, 424, "wall_level_1__0022_Layer-15");
		wall_level_1__0022_Layer_15.body.immovable = true;
		wall_level_1__0022_Layer_15.body.setSize(122, 8, false);

		// wall_level_1__0023_Layer_16
		const wall_level_1__0023_Layer_16 = this.physics.add.image(757, 466, "wall_level_1__0023_Layer-16");
		wall_level_1__0023_Layer_16.body.immovable = true;
		wall_level_1__0023_Layer_16.body.setSize(80, 7, false);

		// wall_level_1__0024_Layer_17
		const wall_level_1__0024_Layer_17 = this.physics.add.image(905, 466, "wall_level_1__0024_Layer-17");
		wall_level_1__0024_Layer_17.body.immovable = true;
		wall_level_1__0024_Layer_17.body.setSize(38, 7, false);

		// wall_level_1__0025_Layer_18
		const wall_level_1__0025_Layer_18 = this.physics.add.image(804, 508, "wall_level_1__0025_Layer-18");
		wall_level_1__0025_Layer_18.body.immovable = true;
		wall_level_1__0025_Layer_18.body.setSize(168, 8, false);

		// wall_level_1__0026_Layer_19
		const wall_level_1__0026_Layer_19 = this.physics.add.image(845, 466, "wall_level_1__0026_Layer-19");
		wall_level_1__0026_Layer_19.body.immovable = true;
		wall_level_1__0026_Layer_19.body.setSize(7, 74, false);

		// wall_level_1__0027_Layer_20
		const wall_level_1__0027_Layer_20 = this.physics.add.image(801, 550, "wall_level_1__0027_Layer-20");
		wall_level_1__0027_Layer_20.body.immovable = true;
		wall_level_1__0027_Layer_20.body.setSize(250, 7, false);

		// lists
		const walls = [wall_level_1__0000, wall_level, wall_level_1__0001, wall_level_1, wall_level_1__0004, wall_level_2, wall_level_1__0006, wall_level_1__0007, wall_level_1__0008, wall_level_1__0009, wall_level_1__0010_Layer_3, wall_level_1__0011_Layer_4, wall_level_1__0012_Layer_5, wall_level_1__0014_Layer_7, wall_level_1__0013_Layer_6, wall_level_1__0015_Layer_8, wall_level_1__0016_Layer_9, wall_level_1__0017_Layer_10, wall_level_1__0018_Layer_11, wall_level_1__0019_Layer_12, wall_level_1__0020_Layer_13, wall_level_1__0021_Layer_14, wall_level_1__0022_Layer_15, wall_level_1__0023_Layer_16, wall_level_1__0024_Layer_17, wall_level_1__0025_Layer_18, wall_level_1__0026_Layer_19, wall_level_1__0027_Layer_20];

		// collider
		this.physics.add.collider(player, walls, this.colliderCallBack);

		this.player = player;

		this.events.emit("scene-awake");
	}

	private player!: Phaser.Physics.Arcade.Image;

	/* START-USER-CODE */

	// Write your code here
	private lastPointerX: number = 0;
	private lastPointerY: number = 0;
	private isDragging: boolean = false;
	private isBlocked: boolean = false; // Track if blocked

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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
