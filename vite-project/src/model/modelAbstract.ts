import { directionEnum } from "../enum/positionEnum";

export default abstract class modelAbstract {
	direction!: directionEnum;
	abstract render(): void
	abstract image(): HTMLImageElement
	constructor(
		public canvas: CanvasRenderingContext2D,
		public x: number,
		public y: number
	) {
		this.randomDirection() 
	}
	protected randomDirection() {
		this.direction = Object.values(directionEnum)[
			Math.floor(Math.random() * 4)
		] as directionEnum
	}
}
