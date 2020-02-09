import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';
import errorsReducer from './errors_reducer';

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    items: itemsReducer,
    errors: errorsReducer
});

export default entitiesReducer;