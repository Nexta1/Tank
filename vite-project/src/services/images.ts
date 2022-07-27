import config from '../config'
//取的图片
type mapKey = keyof typeof config.imgs
export const image = new Map<mapKey, HTMLImageElement>()

export const promises = Object.entries(config.imgs).map(([key, value]) => {
	//异步加载
	return new Promise(resolve => {
		const img = document.createElement('img')
		img.src = value
		img.onload = () => {
			image.set(key as mapKey, img)
			resolve(img)
		}
	})
})
