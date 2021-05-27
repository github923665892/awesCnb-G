import { poll } from 'utils/helpers'
import { getCurrentPage } from 'utils/cnblog'

function getPostInfo() {
    const date = $('#post-date').text()
    const viewCount = $('#post_view_count').text()
    const commentCount = $('#post_comment_count').text()
    const diggCount = $('#digg_count').text()

    return {
        date,
        viewCount,
        commentCount,
        diggCount,
    }
}

function createContainer() {
    return $('<div>').addClass('post-message')
}

function createCategoriesAndTags() {
    const wrap = $('<div>').addClass('message-top')

    const createCategories = () => {
        const categories = $(`<div>`)
            .addClass('message-categories')
            .text('📂')
        if (!$('#BlogPostCategory a').length) {
            tags.append(`<a>未分类</a>`)
            return categories
        }
        $('#BlogPostCategory a').each(function() {
            categories.append($(this).get(0))
        })
        return categories
    }

    const createTags = () => {
        const tags = $(`<div>`)
            .addClass('message-tags')
            .text('🔖')
        if (!$('#EntryTag a').length) {
            tags.append(`<a>无标签</a>`)
            return tags
        }
        $('#EntryTag a').each(function() {
            tags.append($(this).get(0))
        })
        return tags
    }

    const categories = createCategories()
    const tags = createTags()

    wrap.append(categories).append(tags)
    return wrap
}

/**
 * 博文统计
 */
function createPostStatistics() {
    const { date, viewCount, commentCount, diggCount } = getPostInfo()
    const wrap = $('<div>').addClass('message-bottom')

    wrap.append($('<span>').text(date))
        .append($('<span>').text(`阅读: ${viewCount}`))
        .append($('<span>').text(`评论: ${commentCount}`))
        .append($('<span>').text(`推荐: ${diggCount}`))

    return wrap
}

function buildPostMessage() {
    const container = createContainer()
    const categoriesAndTags = createCategoriesAndTags()
    const postStatistics = createPostStatistics()
    container.append(categoriesAndTags).append(postStatistics)
    $('.post').prepend(container)
}

// function buildCategories() {
//     const categories = $(`<div class='custom-categories'>📂</div>`)

//     const hadBuildCategories = poll(
//         $('#BlogPostCategory a').length,
//         function() {
//             $('#BlogPostCategory a').each(function() {
//                 categories.append($(this).get(0))
//             })
//         },
//     )

//     if (!hadBuildCategories) {
//         categories.append(`<a>未分类</a>`)
//     }

//     $('.custom-post-message-top').append(categories)
// }

// function buildTags() {
//     const tags = $(`<div class='custom-tags'>🔖</div>`)
//     const hadBuildTags = poll($('#EntryTag a').length, function() {
//         $('#EntryTag a').each(function() {
//             tags.append($(this).get(0))
//         })
//     })
//     if (!hadBuildTags) {
//         tags.append(`<a>无标签</a>`)
//     }
//     $('.custom-post-message-top').append(tags)
// }

export default () => {
    if (getCurrentPage() !== 'post') return
    const res = poll(
        $('#EntryTag a').length || $('#BlogPostCategory a').length,
        buildPostMessage,
    )

    if (!res) {
        buildPostMessage()
    }
}
