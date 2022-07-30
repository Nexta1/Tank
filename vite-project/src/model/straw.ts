import straw from '../canvas/straw';
import { image } from './../services/images';
import modelAbstract from './modelAbstract'
export default class  extends modelAbstract implements IModel {
	public canvas: ICanvas = straw
	image(): HTMLImageElement {
		return image.get('straw')!
	}
	render(): void {
		//可复用放父级
		super.draw()
	}
}
