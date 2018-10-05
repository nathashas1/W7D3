import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import   {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  const store = configureStore();
  window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;

  const rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
