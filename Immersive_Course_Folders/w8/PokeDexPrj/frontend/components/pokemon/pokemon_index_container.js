import { connect } from 'react-redux';
import { bringPoke } from '../../actions/pokemon_actions'
import { chgPokeState } from '../../reducers/selector'
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
    pokemon: chgPokeState(state),
    loggedIn: Boolean(state.ui.session.id)
});

const mapDispatchToProps = dispatch => ({
    loadPoke: () => dispatch(bringPoke())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);