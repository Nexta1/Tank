import config from '../config'
import canvasAbstract from './canvasAbstract'
import model from '../model/wall'
class wall extends canvasAbstract implements ICanvas {
	num(): number {
		return config.wall.num
	}
	model(): Modelconstructor {
		return model
	}
	render(): void {
		super.createModels()
		this.createBossWaall()
		super.renderModels()
	}
	createBossWaall() {
		const cW = config.canvas.width
		const cH = config.canvas.height
		const mW = config.model.width
		const mH = config.model.height
		const posit = [
			{
				x: cW / 2 - 2 * mW,
				y: cH - mH,
			},
			{
				x: cW / 2 - 2 * mW,
				y: cH - 2 * mH,
			},
			{
				x: cW / 2 - 2 * mW,
				y: cH - 3 * mH,
			},
			{
				x: cW / 2 - mW,
				y: cH - 3 * mH,
			},
			{
				x: cW / 2,
				y: cH - 3 * mH,
			},
			{
				x: cW / 2 + mW,
				y: cH - 3 * mH,
			},
			{
				x: cW / 2 + 2 * mW,
				y: cH - 3 * mH,
			},
			{
				x: cW / 2 + 2 * mW,
				y: cH - 2 * mH,
			},
			{
				x: cW / 2 + 2 * mW,
				y: cH - mH,
			},
		]

		posit.forEach(position => {
			const model = this.model() as Modelconstructor
			const instance = new model(position.x, position.y)
			//画布不断渲染要保存
			this.models.push(instance)
		})
	}
}

export default new wall('wall')
