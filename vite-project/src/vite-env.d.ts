/// <reference types="vite/client" />
interface Modelconstructor {
    //构造函数的参数
    new(x:number,y:number):IModel
}
interface BulletModelconstructor {
    //传递坦克
    new(tank:IModel):IModel
}

interface IModel {
	// direction: import("f:/soft/Tank/vite-project/src/enum/positionEnum").directionEnum
    direction : string
    tank?: IModel
	height: number
	width: number
    x:number
    y:number
	image(): HTMLImageElement
    render(): void 
    destory(): void
}
interface ICanvas {
	renderModels():void
	removeModel(model:IModel):void
    num(): number,
    model():Modelconstructor | BulletModelconstructor
    canvasBox :CanvasRenderingContext2D,
    render(): void
}
