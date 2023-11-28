import PokemonCard from "./PokemonCard";
import { useState, useEffect } from "react";

export default function QuizPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRandomPokemon = async () => {
      //array con quantità di card da creare
      const randomPokemonNumbers = Array.from(
        { length: 5 },
        () => Math.floor(Math.random() * 1000) + 1
      ); // Genera 3 numeri casuali da 1 a 1000
      const pokemonPromises = randomPokemonNumbers.map((number) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then((response) =>
          response.json()
        )
      );
      const pokemonData = await Promise.all(pokemonPromises);
      setPokemonData(pokemonData);
      setLoading(false);
    };

    getRandomPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-center text-5xl font-bold mb-8">Pokemon Quiz</h1>
        <div className="grid grid-cols-3 gap-4 p-4">
          {pokemonData.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
