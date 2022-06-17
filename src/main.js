import {marquee} from './marquee.js'
import {tab } from './tab.js'
import './style/index.css'
import './style/index.less'
tab()
marquee()

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif=document.createElement('img')
const png=document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'

