export async function getPokemon(search) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?pokemon=${search}`);
  const data = await rawResponse.json();
  return data;
}