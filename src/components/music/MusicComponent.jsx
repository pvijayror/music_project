import React from 'react'
import HeaderComponent from '../layout/HeaderComponent'
import Loader from '../../common/Loader';

class MusicComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "mi2" //default search
        }
    }

    componentDidMount() {
        const { actions } = this.props
        actions.getMusics()
    }

    handleClick = (e) => {
        e.preventDefault()
        const { actions } = this.props
        actions.getMusics(this.state.value)
     }

     handleChange = (e) => {
        this.setState({value: e.target.value})
     }

    musicList = (props) => {
        const { musics } = this.props 
        
        return(
            <React.Fragment>
                { musics && musics.map(music => (
                  <div className='col-md-3'>
                    <div className="card">
                    <div className="card-body">  
                      <div className="row"> 
                        <div className='col-md-4'>
                            <img src={music.artworkUrl100} className="img-fluid"/>
                        </div>                
                        <div className='col-md-8'>
                            <div className="row">
                                <div className='col-md-12'><p style={{fontSize: "0.8vw"}}>{music.collectionName}</p> </div>
                            </div>
                            <div className="row">                            
                                <span className='col-md-6'></span>
                                <a href={music.artistViewUrl} target="_blank" className='col-md-6 float-md-rigtht float-lg-rigtht float-xl-rigtht' style={{fontSize: "0.8vw"}}>More</a>
                            </div>                                                                                           
                        </div>                                         
                        </div>
                    </div>
                  </div>
                  <br/>
                  </div>  
                )
             )}
            </React.Fragment> 
        )
    }

    render() {
        const { musics } = this.props 
        return(
            <React.Fragment> 
                <HeaderComponent 
                        handleClick={this.handleClick}
                        handleChange={this.handleChange}
                        value={this.state.value}
                        />
                <div className="container-fluid">
                    { musics && musics.length > 0 ?  
                     (<div className="row">
                        <div className="card-deck">  
                            { this.musicList(this.props)} 
                        </div>    
                    </div>)
                    : 
                    <Loader /> 
                    }      
                </div> 
           </React.Fragment>
        )
    }
}

export default MusicComponent;