import boss from './canvas/boss'
import steels from './canvas/steels'
import wall from './canvas/wall'
import water from './canvas/water'
import config from './config'
export default {
	isCanvasTouch(
		x: number,
		y: number,
		width = config.model.width,
		height = config.model.height
	): boolean {
		
		return	x < 0 ||
			x + width > config.canvas.width ||
			y + height > config.canvas.height ||
			y < 0
		
	
	},
	isModelTouch(
		x: number,
		y: number,
		width = config.model.width,
		height = config.model.height,
		models = [...water.models, ...steels.models, ...wall.models,...boss.models]
	): IModel | undefined {
		return models.find(model => {
			const state =
				x + width <= model.x ||
				model.x + model.width <= x ||
				y + height <= model.y ||
				model.y + model.height <= y
			return !state
		})
	},
}
