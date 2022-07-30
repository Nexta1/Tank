import config from '../config'
import position from '../services/position'

export default abstract class canvasAbstract {
	//记录开始的位置不断渲染
	public models: IModel[] = []
	//定义渲染规范方法
	abstract render(): void
	abstract num(): number
	abstract model(): Modelconstructor | BulletModelconstructor
	constructor(
		protected name: string,
		protected app = document.getElementById('app') as HTMLDivElement,
		protected el = document.createElement('canvas'),
		public canvasBox = el.getContext('2d')!
	) {
		this.createCanvas()
	}
	//创建画布
	public createCanvas() {
		this.el.width = config.canvas.width
		this.el.height = config.canvas.height
		this.app.insertAdjacentElement('afterbegin', this.el)
		this.el.setAttribute('name', this.name)
	}
	//创建模型实例
	protected createModels() {
		position.positionCollection(this.num()).forEach(position => {
			const model = this.model() as Modelconstructor
			const instance = new model(position.x, position.y)
			//画布不断渲染要保存
			this.models.push(instance)
		})
	}
	//渲染模型
	public renderModels() {
		//子弹打掉要渲染
		this.canvasBox.clearRect(0, 0, config.canvas.width, config.canvas.height)
		this.models.forEach(model => model.render())
	}

	//画布移除
	public removeModel(model: IModel){
		this.models = this.models.filter(mo => mo!=model)
	}
}
