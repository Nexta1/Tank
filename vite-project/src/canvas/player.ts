import canvasAbstract from './canvasAbstract'
import model from '../model/play'
import config from '../config'
class player extends canvasAbstract implements  ICanvas{
    num(): number {
       return 1
    }
    model(): Modelconstructor {
       return  model
    }
	render(): void {
        this.createModels()
        super.renderModels()
        
	}
   protected createModels() {
		[{x:config.canvas.width-10*config.model.width, y:config.canvas.height-config.model.height}].forEach(position => {
			const model = this.model() as Modelconstructor
			const instance = new model(position.x, position.y)
			//画布不断渲染要保存
			this.models.push(instance)
		})
	}
}
export default new player('player') 
