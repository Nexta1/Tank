import config from '../config'
import canvasAbstract from './canvasAbstract'
import model from '../model/tank'
import position from '../services/position'
class tank extends canvasAbstract implements ICanvas {
	IntervalId = 0
	num(): number {
		return config.tank.num
	}
	model(): Modelconstructor {
		return model
	}
	stop(){
		clearInterval(this.IntervalId)
	}
	render(): void {
		this.createModels()
		this.renderModels()
		this.IntervalId = setInterval(() => {
			this.renderModels()
		}, config.timeout)
	}
	//重写坦克模型
	public renderModels() {
		this.canvasBox.clearRect(0, 0, config.canvas.width, config.canvas.height)
		super.renderModels()
	}
	//自定义坐标
	protected createModels() {
		for (let i = 0; i < this.num(); i++) {
			const positionT = position.position()
			const model = this.model()
			const instance = new model(positionT.x, 0)
			this.models.push(instance)
		}
	}
}
export default new tank('tank')
