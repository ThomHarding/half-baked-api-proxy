import { useState, useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import './App.css';

function App() {
  const [pokemonSearch, setPokemonSearch] = useState([]);
  const [name, setName] = useState('pikachu');

  async function load() {
    const response = await getPokemon(name);
    setPokemonSearch(response.data.results);
  }

  useEffect(() => {
    load();
  }, []); // eslint-disable-line

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    load();
  }
      
  return (
    <section className='pokemon'>
      <form onSubmit={handlePokemonSubmit}>
        Search for a Pokemon
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button>Get pokemon</button>
      </form>
      <div className='list'>
        { 
          pokemonSearch.map(pokemon =>
            <div key={pokemon.id}>
              <img src={pokemon.url_image} />
              <p>{pokemon.pokemon}</p>
              <p> {pokemon.type_1}/{pokemon.type_2}</p>
              <p> Species #{pokemon.species_id}</p>
            </div>)
        }
      </div>
    </section>
  );
}

export default App;
