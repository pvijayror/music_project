import types from './types'

const initialState = {
    musics: []
}

const musicReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.GET_MUSICS:
            return {
                ...state,
                musics: action.payload
            }

       default:
           return state     
    }
}

export default musicReducer