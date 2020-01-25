import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import music from '../../redux/music';
import MusicComponent from './MusicComponent'

const { getMusics } = music.actions

const mapStateToProps = (state) => ({
    musics: state[music.name].musics
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            getMusics
        },
        dispatch
    )
})

export default connect(
mapStateToProps,
mapDispatchToProps
)(MusicComponent)