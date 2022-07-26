import './style.sass'
import config from './config'
const app =document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width+'px'
app.style.height = config.canvas.height+'px'

import  './canvas/straw'