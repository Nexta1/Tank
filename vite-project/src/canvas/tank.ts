import config from '../config'
import canvasAbstract from './canvasAbstract'
import model from '../model/tank'
import position from '../services/position'
class water extends canvasAbstract implements ICanvas {
	num(): number {
		return config.tank.num
	}
	model(): Modelconstructor {
		return model
	}
	render(): void {
		this.createModels()
		super.renderModels()
	}
    //自定义坐标
	protected createModels() {
		for (let i = 0; i < this.num(); i++) {
			const positionT = position.position()
			const model = this.model()
			const instance = new model(this.canvas, positionT.x,0)
            this.models.push(instance)
		}
	}
}
export default new water()
