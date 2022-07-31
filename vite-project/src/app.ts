import straw from './canvas/straw'
import wall from './canvas/wall'
import './style.sass'
import config from './config'
import { promises } from './services/images'
import water from './canvas/water'
import steels from './canvas/steels'
import tank from './canvas/tank'
import bullet from './canvas/bullet'
import boss from './canvas/boss'
import player from './canvas/player'
import audio from './services/audio'

const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

export default {
	isStarted: false,
	state: 0,
	Interval: 0,
	async start() {
		if (this.isStarted) return
		audio.start()
		this.isStarted = true
		app.style.backgroundImage = 'none'
		await Promise.all(promises)
		straw.render()
		wall.render()
		water.render()
		steels.render()
		tank.render()
		bullet.render()
		boss.render()
		player.render()
	},
	async stop() {
		clearInterval(this.Interval)
		tank.stop()
		bullet.stop()
		audio.add()
	    setTimeout(() => {
			this.state == 2 ? alert('你输了') : alert('你真厉害')
            location.reload ()
		}, 200)
       
	},
	bootstrap() {
		app.addEventListener('click', async () => {
			await this.start()
			this.Interval = setInterval(() => {
				if (tank.models.length == 0) this.state = 1
				if (player.models.length == 0 || boss.models.length == 0) this.state = 2
				this.state != 0 ? this.stop() : false
			})
		})
	},
}

//因为点击事件一直在只不过不叠加而已
// if (!this.isStarted) {
// 	this.isStarted = true
// 	app.addEventListener('click', this.start.bind(this))
// }
