// 在随笔详情页顶部随笔生成一个文章头图
// 引入即可
import { randomImgurl, pageName, randomArrayElements } from '@tools'
import './index.css'

const opts = window.opts.postTopimage

function postTopimage() {
    const enable = opts.enable
    const urls = opts.urls
    if (!enable) return
    if (pageName() !== 'post') return
    let url = ''
    if (urls.length === 0) {
        url = randomImgurl()
    } else {
        url = randomArrayElements(urls, 1)[0]
    }
    const ele = `<div id="custom-post-topimage"></div>`
    $('.post>.postTitle').after(ele)
    $('#custom-post-topimage').css('background-image',`url(${url})`)
}

export default postTopimage