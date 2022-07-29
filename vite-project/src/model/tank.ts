
import { image } from '../services/images'
import modelAbstract from './modelAbstract'
import { mapKey } from '../services/images'
export default class extends modelAbstract implements IModel {
	image(): HTMLImageElement {
		const directionImg = `tank${this.direction}` as mapKey
		return image.get(directionImg)!
	}

	render(): void {
		// setInterval(() => {
		// 	this.move()
		// }, config.timeout)
	}
	//改变位置，移除再添加整个画布
	// protected move(): void {
	// 	this.canvas.clearRect(
	// 		this.x,
	// 		this.y,
	// 		config.model.width,
	// 		config.model.height
	// 	)
	// 	switch (this.direction) {
	// 		case directionEnum.top:
	// 			this.y--
	// 			break
	// 		case directionEnum.bottom:
	// 			this.y++
	// 			break
	// 		case directionEnum.right:
	// 			this.x++
	// 			break
	// 		case directionEnum.left:
	// 			this.x--
	// 			break
	// 	}
	// 	super.draw()
	// }
}
