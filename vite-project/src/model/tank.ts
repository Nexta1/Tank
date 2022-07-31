import { image } from '../services/images'
import modelAbstract from './modelAbstract'
import { mapKey } from '../services/images'
import { directionEnum } from '../enum/positionEnum'
import tank from '../canvas/tank'
import util from '../util'

export default class extends modelAbstract implements IModel {
	name: string ='tank'
	public canvas: ICanvas = tank
	image(): HTMLImageElement {
		const directionImg = `tank${this.direction}` as mapKey
		return image.get(directionImg)!
	}
	render(): void {
		this.move()
		//增加概率
		if(Math.floor(Math.random() *100)==0){
			this.direction = directionEnum.bottom
		}
	}
	//改变位置，移除再添加整个画布
	protected move(): void {
		while (true) {
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
			if (util.isCanvasTouch(x,y)||util.isModelTouch(x,y)) {
				//因为实例化生成一次方向
				//每次执行都会接收图片，图片里有方向
				this.randomDirection()
				break
			} else {
				this.x = x
				this.y = y
				break
			}
		}
		super.draw()
	}
	
	
}
