import config from "../config";
type positionType ={ x: number; y: number }
 class Position{
    //排除所有已经渲染后的地方
    collection:positionType[] = []
    public position() {
		return {
			//算法排除最后一位在扩大
			x:
				Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
				config.model.width,
			y:
				Math.floor(
					Math.random() * (config.canvas.height / config.model.height - 6)
				) * config.model.height+3*config.model.height
		}
	}

    public positionCollection(num: number) {
		const collection:positionType[] = []
		for (let i = 0; i < num; i++) {
			//一直循环
			while (true) {
				const position = this.position()
				const exist = this.collection.some(
					obj => obj.x === position.x && obj.y === position.y
				)
				//只有不存在推入则终止
				if (!exist) {
					this.collection.push(position)
					collection.push(position)
					break
				}
			}
		}
		return collection
	}
}
export default new Position()