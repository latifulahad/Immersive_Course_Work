import { connect } from 'react-redux';
import { bringPoke } from '../../actions/pokemon_actions'
import { chgPokeState } from '../../reducers/selector'
import PokemonIndex from './pokemon_index';
import { loggOut } from '../../actions/users_action'
import { log_out } from '../../actions/sessions_action'

const mapStateToProps = state => ({
        pokemon: chgPokeState(state),
        loggedIn: Boolean(state.ui.session.id),
        sessionInfo: state.ui.session.id
});

const mapDispatchToProps = dispatch => ({
    loadPoke: () => dispatch(bringPoke()),
    logOut: () => {
        dispatch(log_out());
        dispatch(loggOut());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);