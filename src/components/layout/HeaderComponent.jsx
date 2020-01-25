import React from 'react'

import './layout.css'

const HeaderComponent = () => {
    return(
        <div className="search"> 
        <div className="jumbotron text-center" style={{background: '#fff'}}>
            <div className="row">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </div>  
            </div>
      </div>   
    )
}

export default HeaderComponent