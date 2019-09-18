import {Dimensions,PixelRatio,Image} from 'react-native'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
let fontScale = PixelRatio.getFontScale     //字体缩放比例
let pixelRatio = PixelRatio.get()
const defaultPixelRatio = 2             //iPhone6的像素密度

//px换成dp
const w2 = 750 / defaultPixelRatio
const h2 = 1334 /defaultPixelRatio

//缩放比例
const scale = Math.min(deviceWidth / w2 , deviceHeight / h2)

//文字适配比例
export function setSpText(size:number) {
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale)
}

//View适配比例
export function size(size:number) {
    size =Math.round(size * scale + 0.5)
    return size
}

//图片高度适配
export function imgHeight(imgUrl,width) {
    let imgWidth = Image.resolveAssetSource(imgUrl).width
    let imgHeight = Image.resolveAssetSource(imgUrl).width

    return Math.floor(width / imgWidth * imgHeight)
}
