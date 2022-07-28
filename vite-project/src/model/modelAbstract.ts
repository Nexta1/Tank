import config from '../config'
// import { image } from '../services/images'

export default abstract class modelAbstract {
	// abstract render(): void
	constructor(
		protected canvas: CanvasRenderingContext2D,
		protected x: number,
		protected y: number
	) {}
	protected draw(img:HTMLImageElement) {
		this.canvas.drawImage(
			// image.get('straw')!,
            img,
			this.x,
			this.y,
			config.model.width,
			config.model.height
		)
	}
}
