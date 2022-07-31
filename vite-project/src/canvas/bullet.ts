import canvasAbstract from './canvasAbstract'
import model from '../model/bullet'
import tank from './tank'
import bullet from '../model/bullet'
import config from '../config'
//返回单例
export default new (class extends canvasAbstract implements ICanvas {
	IntervalId = 0
	num(): number {
		return 0
	}
	model(): BulletModelconstructor {
		return model
	}
	stop() {
		clearInterval(this.IntervalId)
	}
	render(): void {
		// 定时器this指向window
		this.IntervalId = setInterval(() => {
			this.createBullet()
			this.renderModels()
		}, config.bulletTimeout)
	}
	//添加子弹不使用父级
	//子弹
	createBullet() {
		tank.models.forEach(tank => {
			const isExist = this.models.some(bull => bull.tank == tank)
			if (!isExist) {
				this.models.push(new bullet(tank))
			}
		})
	}
})('bullet')
