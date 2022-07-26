import water from '../canvas/water';
import { image } from '../services/images';
import modelAbstract from './modelAbstract'
export default class  extends modelAbstract implements IModel {
	name: string ='water'
	public canvas: ICanvas =water
	image(): HTMLImageElement {
		return image.get('water')!
	}
	
	render(): void {
		//可复用放父级
		super.draw()
	}
}
