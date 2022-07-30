import { directionEnum } from './../enum/positionEnum'
import bullet from '../canvas/bullet'
import config from '../config'
import { image } from '../services/images'
import modelAbstract from './modelAbstract'
import util from '../util'
import wall from '../canvas/wall'
import steels from '../canvas/steels'

export default class extends modelAbstract implements IModel {
	public canvas: ICanvas = bullet
	constructor(public tank: IModel) {
		super(tank.x + config.model.width / 2, tank.y + config.model.height / 2)
		this.direction = tank.direction as directionEnum
	}
	image(): HTMLImageElement {
		return image.get('bullet')!
	}

	render(): void {
		let x = this.x
		let y = this.y
 		switch (this.direction) {
			case directionEnum.top:
				y--
				break
			case directionEnum.bottom:
				y++
				break
			case directionEnum.right:
				x++
				break
			case directionEnum.left:
				x--
				break
		}
		// 打到墙消失
		const touchModel = util.isModelTouch(
			x,
			y,
			config.bullet.width,
			config.bullet.height,
			[...wall.models]
		)
		const touchModel2 = util.isModelTouch(
			x,
			y,
			config.bullet.width,
			config.bullet.height,
			[...steels.models]
		)
		if (touchModel) { 
			this.destory()
			touchModel.destory()	
		} else if (
			util.isCanvasTouch(x, y, config.bullet.width, config.bullet.height )|| touchModel2
		) {
			this.destory()
		} else {
			this.x = x
			this.y = y
			this.draw()
		}
	}

	protected draw() {
		this.canvas.canvasBox.drawImage(
			this.image(),
			this.x,
			this.y,
			config.bullet.width,
			config.bullet.height
		)
	}
}
