import { applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'

import music from '../redux/music'

import Api from '../redux/util/Api'

export const rootReducer = combineReducers({
    [music.name]: music.reducer
})

export const configureStore = () => {
    const composeEnhancers = composeWithDevTools({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      // https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
    });
  
    return createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk.withExtraArgument({Api}))),
    );
  };