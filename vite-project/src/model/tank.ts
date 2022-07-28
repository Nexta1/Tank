import { directionEnum } from './../enum/positionEnum';
import { image } from '../services/images';
import modelAbstract from './modelAbstract'
import { mapKey } from '../services/images';
export default class  extends modelAbstract implements IModel {
	protected direction!: directionEnum
	render(): void {
		this.randomDirection()
		super.draw(this.randomImage())
	}
	randomDirection(){
		this.direction= Object.values(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
		console.log(this.direction);
		
	}
	randomImage():HTMLImageElement{
		const directionImg = `tank${this.direction}` as mapKey
		return image.get( directionImg)!
		
	}
}
