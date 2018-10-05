import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchtoProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect(mapStateToProps,mapDispatchtoProps)(PokemonIndex);
