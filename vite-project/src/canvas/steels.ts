import config from '../config'
import canvasAbstract from './canvasAbstract'
import model from '../model/steels'
class steels extends canvasAbstract implements ICanvas{
    num(): number {
       return config.steels.num
    }
    model(): Modelconstructor {
       return model
    }
	render(): void {
        super.createModels()
        super.renderModels()
	}
}
export default new steels() 
