import React from 'react'

import HeaderComponent from '../layout/HeaderComponent'
import MusicContainer from '../music/MusicContainer'

const MainComponent = () => {
    return(
        <React.Fragment>  
            <HeaderComponent />
            <MusicContainer />
            <div className="row">
                <div className="col-sm">
                One of three columns
                </div>
                <div className="col-sm">
                One of three columns
                </div>
                <div className="col-sm">
                One of three columns
                </div>
            </div>
        </React.Fragment> 
        
    )
}

export default MainComponent;