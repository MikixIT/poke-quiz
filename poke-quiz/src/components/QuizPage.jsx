import PokemonCard from "./PokemonCard";
import { useState, useEffect } from "react";

export default function QuizPage() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/2")
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, sprites } = pokemonData;

  return (
    <div className="App">
      <PokemonCard name={name} image={sprites.front_default} />
    </div>
  );
}
