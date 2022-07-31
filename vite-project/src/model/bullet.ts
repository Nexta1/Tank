import { directionEnum } from './../enum/positionEnum'
import bullet from '../canvas/bullet'
import config from '../config'
import { image } from '../services/images'
import modelAbstract from './modelAbstract'
import util from '../util'
import wall from '../canvas/wall'
import steels from '../canvas/steels'
import boss from '../canvas/boss'
import tank from '../canvas/tank'
import player from '../canvas/player'
import audio from '../services/audio'

export default class extends modelAbstract implements IModel {
	name: string = 'bullet'
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
		//设置速度
		let step = this.tank.name == 'play' ? 10 : 1
		switch (this.direction) {
			case directionEnum.top:
				y -= step
				break
			case directionEnum.bottom:
				y += step
				break
			case directionEnum.right:
				x += step
				break
			case directionEnum.left:
				x -= step
				break
		}
		// 砖墙打爆
		const touchModel = util.isModelTouch(
			x,
			y,
			config.bullet.width,
			config.bullet.height,
			[...wall.models, ...steels.models, ...boss.models,...tank.models,...player.models]
		)
		//tank包括自己
		if (touchModel&&this.tank.name!=touchModel.name) {
			this.destory()
			if (touchModel.name != 'steels') touchModel.destory()
			this.blast(touchModel)
			audio.blast()
		} else if (
			util.isCanvasTouch(x, y, config.bullet.width, config.bullet.height)
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
