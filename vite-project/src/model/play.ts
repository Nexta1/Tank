import player from '../canvas/player'
import config from '../config'
import { directionEnum } from '../enum/positionEnum'
import { image, mapKey } from '../services/images'
import util from '../util'
import bullet from './bullet'
import bulletcanvas from '../canvas/bullet'
import modelAbstract from './modelAbstract'
import audio from '../services/audio'
export default class extends modelAbstract implements IModel {
	name: string = 'play'
	public canvas: ICanvas = player
	public bindEvent = false
	image(): HTMLImageElement {
		const directionImg = `player${this.direction}` as mapKey
		return image.get(directionImg)!
	}

	render(): void {
		//可复用放父级
		super.draw()
		if (!this.bindEvent) {
			this.bindEvent = true
			document.addEventListener('keydown', this.moveGo.bind(this))
		}
	}
	moveGo(e: KeyboardEvent): void {
		let x = this.x
		let y = this.y
		switch (e.code) {
			case 'ArrowDown':
				this.direction = directionEnum.bottom
				y += config.speed
				break
			case 'ArrowRight':
				this.direction = directionEnum.right
				x += config.speed
				break
			case 'ArrowLeft':
				this.direction = directionEnum.left
				x -= config.speed
				break
			case 'ArrowUp':
				this.direction = directionEnum.top
				y -= config.speed
				break
			case 'Space':
				player.models.forEach(tank => {
					bulletcanvas.models.push(new bullet(tank))
				})
				audio.fire()
				break
		}
		if (util.isCanvasTouch(x, y) || util.isModelTouch(x, y)) {
			// 终止
			return
		}
		this.x = x
		this.y = y
		this.canvas.renderModels()
	}
}
