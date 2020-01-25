import BaseApi from './BaseApi'

class Api extends BaseApi {

    static getMusics = () => Api.get('https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=mi2')
}

export default Api
