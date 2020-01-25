import React from 'react'


class MusicComponent extends React.Component {

    componentDidMount() {
        const { actions } = this.props
        actions.getMusics()
    }

    render() {
        console.log(this.props)
        return(
            <div>
                test
            </div>
        )
    }
}

export default MusicComponent;