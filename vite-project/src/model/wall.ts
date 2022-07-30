import wall from '../canvas/wall';
import { image } from './../services/images';
import modelAbstract from './modelAbstract'
export default class extends modelAbstract implements IModel {
	public canvas: ICanvas = wall
	image(): HTMLImageElement {
		return image.get('wall')!
	}
	
	render(): void {
		//可复用放父级
		super.draw()
	}
}
