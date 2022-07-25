export{}
const el =document.querySelector<HTMLCanvasElement>('#canvas')!
const app =el.getContext('2d')!
//颜料
app.fillStyle = 'red'
app.fillRect(0,0,300,300)
app.fillStyle = 'yellow'
app.fillRect(el.width/2-50,el.height/2-50, 100,100)
