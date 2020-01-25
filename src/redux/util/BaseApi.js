
import axios from 'axios'

export default class Api {
    static get(url) {
        return axios.get(url).then( res => {
            return res
        }).catch(err => {
            return err
        })
    }
}