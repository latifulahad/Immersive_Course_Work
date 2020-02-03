import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

import { bringPokeData } from '../../actions/pokemon_actions';
import { chgItemState } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
    const poke = state.entities.pokemon[ownProps.match.params.id];
    const pokeIt = chgItemState(state, parseInt(ownProps.match.params.id));
    return { poke, pokeIt }
};

const mapDispatchProps = (dispatch) => ({
    bringPoke: id => dispatch(bringPokeData(id))
});

export default connect(mapStateToProps, mapDispatchProps)(PokemonDetail);