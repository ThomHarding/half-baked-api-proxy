export default function Pokemon(pokemon) {
    
  return (
    <div className='pokemon'>
      <p>{pokemon.name} {pokemon.type_1}/({pokemon.type_2} ? {pokemon.type_2} : null)</p>
    </div>
  );
}
  