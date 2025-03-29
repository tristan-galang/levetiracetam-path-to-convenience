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
		this.add.image(512, 384, "level 1");

		// player
		const player = this.physics.add.image(117, 202, "home_button_light");
		player.scaleX = 0.4;
		player.scaleY = 0.4;
		player.body.drag.x = 1000;
		player.body.drag.y = 1000;
		player.body.useDamping = true;
		player.body.collideWorldBounds = true;
		player.body.setSize(66, 61, false);

		// wallSprite
		const wallSprite = this.physics.add.sprite(101, 297, "_MISSING");
		wallSprite.scaleX = 0.3584993731685987;
		wallSprite.scaleY = 0.3326603341020854;
		wallSprite.setOrigin(0, 0);
		wallSprite.body.immovable = true;
		wallSprite.body.setSize(456, 20, false);

		// wallSprite_1
		const wallSprite_1 = this.physics.add.sprite(91, 171, "_MISSING");
		wallSprite_1.scaleX = 0.3584993731685987;
		wallSprite_1.scaleY = 0.3326603341020854;
		wallSprite_1.setOrigin(0, 0);
		wallSprite_1.body.immovable = true;
		wallSprite_1.body.setOffset(3, 1);
		wallSprite_1.body.setSize(24, 1269, false);

		// lists
		const walls = [wallSprite, wallSprite_1];

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
