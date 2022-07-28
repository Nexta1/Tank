import { image } from './../services/images';
import modelAbstract from './modelAbstract'
export default class extends modelAbstract implements IModel {
	render(): void {
		//可复用放父级
		super.draw(image.get('wall')!)
	}
}
