import { image } from '../services/images';
import modelAbstract from './modelAbstract'
export default class extends modelAbstract implements IModel {
	image(): HTMLImageElement {
		return image.get('steels')!
	}

	render(): void {
		//可复用放父级
		
	}
}
