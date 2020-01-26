import React from 'react'

const Loader = () => {
    return(
        <div className='container'> 
           <div class="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
export default Loader;