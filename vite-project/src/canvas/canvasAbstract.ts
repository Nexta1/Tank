 import config from '../config'																												
import config from '../config'
import position from '../services/position'

export default abstract class canvasAbstract {
	//记录开始的位置不断渲染
	protected models: IModel[] = []
	//定义渲染规范方法
	abstract render(): void
	abstract num(): number
	abstract model(): Modelconstructor
	constructor(
		protected app = document.getElementById('app') as HTMLDivElement,
		protected el = document.createElement('canvas'),
		protected canvas = el.getContext('2d')!
	) {
		this.createCanvas()
	}
	//创建画布
	protected createCanvas() {
		this.el.width = config.canvas.width
		this.el.height = config.canvas.height
		this.app.insertAdjacentElement('afterbegin', this.el)
	}
	//创建模型实例
	protected createModels() {
		position.positionCollection(this.num()).forEach(position => {
			const model = this.model()
			const instance = new model(this.canvas, position.x, position.y)
			//画布不断渲染要保存
			this.models.push(instance)
		})
	}
	//渲染
	protected renderModels() {
		// this.models.forEach(model => model.render())
		this.models.forEach(model =>
			model.canvas.drawImage(
				model.image(),
				model.x,
				model.y,
				config.model.width,
				config.model.height
			)
		)
	}
}
