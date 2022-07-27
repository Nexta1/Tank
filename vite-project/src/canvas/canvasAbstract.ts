import config from '../config'

export default abstract class canvasAbstract {
    //数量
    protected items =[]
    abstract render():void
	constructor(
		protected app = document.getElementById('app') as HTMLDivElement,
		protected el = document.createElement('canvas'),
		protected canvas = el.getContext('2d')!
	) {
		this.createCanvas()
		this.drawModels()
	}
	protected createCanvas() {
		this.el.width = config.canvas.width
		this.el.height = config.canvas.height
		this.app.insertAdjacentElement('afterbegin', this.el)
	}
	protected drawModels() {
		
	}
    protected position(){
        return {
            x:20,
            y:10
        }
    }
}
