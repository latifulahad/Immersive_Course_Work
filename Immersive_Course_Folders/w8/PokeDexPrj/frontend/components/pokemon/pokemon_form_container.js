import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';

import { makePoke } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
    tstForSpec: ""
})

const mapDispatchToProps = dispatch => ({
    sendPokeData: pokemon => dispatch(makePoke(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);