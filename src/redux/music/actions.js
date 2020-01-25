import types from './types'
import fetchData from '../util'

export const getMusics = (query) => {
   return fetchData(
    types.GET_MUSICS,
    'getMusics',
    query,
   )
}

export default {
    getMusics
}