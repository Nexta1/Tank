import steels from '../canvas/steels'
import { image } from '../services/images'
import modelAbstract from './modelAbstract'
export default class extends modelAbstract implements IModel {
	name: string = 'steels'
	public canvas: ICanvas = steels
	image(): HTMLImageElement {
		return image.get('steels')!
	}

	render(): void {
		//可复用放父级
		super.draw()
	}
}
