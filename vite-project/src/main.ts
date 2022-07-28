import straw from './canvas/straw'
import wall from './canvas/wall'
import './style.sass'
import config from './config'
import { promises } from './services/images'
import water from './canvas/water'
import steels from './canvas/steels'
import tank from './canvas/tank'


const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px'
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
	//加载贴图
	await Promise.all(promises)
	//加载画布
	straw.render()
    wall.render()
    water.render()
    steels.render()
    tank.render()
}
void bootstrap()
