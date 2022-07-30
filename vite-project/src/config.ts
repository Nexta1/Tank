import straw from './static/images/straw/straw.png'
import wall from './static/images/wall/wall.gif'
import water from './static/images/water/water.gif'
import steels from './static/images/wall/steels.gif'
import tankL from './static/images/tank/left.gif'
import tankT from './static/images/tank/top.gif'
import tankR from './static/images/tank/right.gif'
import tankB from './static/images/tank/bottom.gif'
import bullet from './static/images/bullet/bullet.jpg'
export default {
	timeout:10,
	bulletTimeout:5,
	canvas: {
		width: 900,
		height: 600,
	},
	model: {
		width: 30,
		height: 30,
	},
	bullet:{
		width: 2,
		height:2
	},
	straw:{
		num:100
	},
	wall:{
		num:30
	},
	water:{
		num:30
	},
	steels:{
		num:20
	},
	tank:{
		num:10
	},
    imgs:{
        straw,
		wall,
		water,
		steels,
		tankL,
		tankR,
		tankT,
		tankB,
		bullet

    }
}
