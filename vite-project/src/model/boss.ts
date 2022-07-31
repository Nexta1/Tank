import boss from '../canvas/boss';

import { image } from '../services/images';
import modelAbstract from './modelAbstract'
export default class  extends modelAbstract implements IModel {
	name: string ='boss'
	public canvas: ICanvas = boss
	image(): HTMLImageElement {
		return image.get('boss')!
	}
	render(): void {
		//可复用放父级
		super.draw()
	}
}
