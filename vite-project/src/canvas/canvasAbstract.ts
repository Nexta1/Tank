import config from '../config'
export default abstract class canvasAbstract{
    constructor(
		protected app = document.getElementById('app') as HTMLDivElement,
		protected el = document.createElement('canvas'),
		protected canvas = el.getContext('2d')!
	) {
		el.width = config.canvas.width
		el.height = config.canvas.height
		app.insertAdjacentElement('afterbegin', el)
        canvas.fillStyle = 'blue'
        canvas.fillRect(0,0,500,500)
	}
}