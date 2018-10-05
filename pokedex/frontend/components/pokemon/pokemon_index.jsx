import React from 'react';


class PokemonIndex extends React.Component {
  componentDidMount() {
   this.props.requestAllPokemon();
  }

    render () {
    const { pokemon } = this.props;
    // debugger

    return (
      <section className="pokedex">

        <ul>
          {pokemon.map(poke => <li key={poke.id}>{poke.name} <img src={poke.image_url}/></li>)}
        </ul>
      </section>
    );
  }
}


export default PokemonIndex;
