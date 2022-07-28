/// <reference types="vite/client" />
interface Modelconstructor {
    //构造函数的参数
    new(canvas: CanvasRenderingContext2D,x:number,y:number):IModel
}

interface IModel {
    render(): void 
}
interface ICanvas {
    num(): number,
    model():Modelconstructor,
    render(): void
}
