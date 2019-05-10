import request from '../../utils/request'

/**
 * query all the article 
 */
export function queryAllArticles() {
    return request({
        url: "/api/public/article",
        method: 'get'
    })
}



export function queryArticle(id) {
    return request({
        url: "/api/public/article/" + id,
        method: 'get'
    })
}