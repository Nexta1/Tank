import config from '../config'
import { directionEnum } from '../enum/positionEnum'
export default abstract class modelAbstract {
	abstract render(): void
	abstract image(): HTMLImageElement
	abstract name : string
	//画布实例
	public abstract canvas: ICanvas
	public width = config.model.width
	public height = config.model.height
	constructor(
		// public canvas: CanvasRenderingContext2D,
		public x: number,
		public y: number
	) {
		this.randomDirection()
	}
	public direction!: directionEnum
	protected randomDirection() {
		this.direction = Object.values(directionEnum)[
			Math.floor(Math.random() * 4)
		] as directionEnum
	}
	protected draw() {
		// this.canvas.drawImage
		//原先在构造画布中
		this.canvas.canvasBox.drawImage(
			this.image(),
			this.x,
			this.y,
			config.model.width,
			config.model.height
		)
	}
	//画布移除
	public destory() {
		this.canvas.removeModel(this)
		this.canvas.renderModels()
	}

	protected blast(model: IModel): void {
		Array(...Array(8).keys()).reduce((promise, value) => {
			return new Promise(resolve => {
				setTimeout(() => {
					const img = new Image()
					img.src = `./src/static/images/blasts/blast${value}.gif`
					img.onload = () => {
						this.canvas.canvasBox.drawImage(
							img,
							model.x,
							model.y,
							model.width,
							model.height
						)
						resolve(promise)
					}
				}, 100)
			})
		}, Promise.resolve())
	}
}
