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
            <div className="container">
              <Route exact path="/" component={MainComponent} />
            </div>   
        </Router> 
      </Provider>  
    );
  }

export default App;