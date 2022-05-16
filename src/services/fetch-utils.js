export async function getPokemon(search) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon=${search}`);
  console.log(rawResponse);
  const data = await rawResponse.json();
  console.log(data);
  return data;
}