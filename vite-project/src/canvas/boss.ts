import canvasAbstract from './canvasAbstract'
import model from '../model/boss'
import config from '../config'
class boss extends canvasAbstract implements ICanvas {
	num(): number {
		return 0
	}
	model(): Modelconstructor {
		return model
	}
	render(): void {
		this.createboss()
		super.renderModels()
	}
	createboss(): void {
		[
			{
				x: config.canvas.width / 2,
				y: config.canvas.height - config.model.height,
			},
		].forEach(position => {
			const model = this.model() as Modelconstructor
			const instance = new model(position.x, position.y)
			//画布不断渲染要保存
			this.models.push(instance)
		})
	}
}

export default new boss('boss')
