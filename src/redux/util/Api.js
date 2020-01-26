import BaseApi from './BaseApi'

class Api extends BaseApi {

    static getMusics = (query) => Api.get(`https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${query}`)
}

export default Api
