import { combineReducers } from 'redux';
import pokemonReducer from './pokemons_reducer';
// import

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer

});

export default entitiesReducer;
