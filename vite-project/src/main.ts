import  './canvas/straw'
import './style.sass'
import config from './config'
import {promises,image} from './services/images'
const app =document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width+'px'
app.style.height = config.canvas.height+'px'

async function bootstrap(){
    //加载贴图
   await Promise.all(promises)
    
    
}
bootstrap()