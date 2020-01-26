import React from 'react'

import './layout.css'


const HeaderComponent = (props) => {
    return(
        <div className="container search" style={{marginRight: '4px'}}> 
        <div className="jumbotron text-center" style={{background: '#fff'}}>
            <div className="row">
            <form onSubmit={props.handleClick}> 
                <div className="input-group mb-3">                 
                    <input type="text" value={props.value} className="form-control" placeholder="Search" onChange={props.handleChange} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>                
                 </div>
                </form>
            </div>  
            </div>
      </div>   
    )
}

export default HeaderComponent