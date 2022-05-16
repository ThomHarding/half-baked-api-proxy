import Pokemon from './Pokemon';

export default function PokemonList(pokemonList) {
    
  return (
    <div className='list'>
      { 
        pokemonList.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />
        )
      }
    </div>
  );
}
