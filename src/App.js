import React from 'react'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router, 
    Route
  } from 'react-router-dom';

import { configureStore } from './reducers'  

import MainComponent from './components/main/MainComponent'


const store = configureStore()

function App() {
    return (  
      <Provider store={store}>
        <Router>  
          
              <Route exact path="/" component={MainComponent} />
         
        </Router> 
      </Provider>  
    );
  }

export default App;