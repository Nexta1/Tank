import config from '../config'
import canvasAbstract from './canvasAbstract'
import model from '../model/straw'
class straw extends canvasAbstract implements  ICanvas{
    num(): number {
       return config.straw.num
    }
    model(): Modelconstructor {
       return  model
    }
	render(): void {
        super.createModels()
        super.renderModels()
        
	}
}
export default new straw('straw') 
