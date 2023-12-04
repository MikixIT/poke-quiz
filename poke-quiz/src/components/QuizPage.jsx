import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useState, useEffect } from "react";
import pikaLoading from "/src/assets/pika-loading.gif";

export default function QuizPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRandomPokemon = async () => {
      //array con quantità di card da creare
      const randomPokemonNumbers = Array.from(
        { length: 6 },
        () => Math.floor(Math.random() * 1000) + 1
      ); // Genera 3 numeri casuali da 1 a 1000
      const pokemonPromises = randomPokemonNumbers.map((number) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then((response) =>
          response.json()
        )
      );
      const pokemonData = await Promise.all(pokemonPromises);
      setPokemonData(pokemonData);
      setTimeout(() => {
        setLoading(false);
      }, 1700);
    };

    getRandomPokemon();
  }, []);

  if (loading) {
    return (
      <div className="app grid grid-cols-1 place-items-center">
        <img
          src={pikaLoading}
          alt="pika-loading"
          className="items-center mb-5 w-72 drop-shadow-xl mt-28"
        />
        <p className="text-6xl drop-shadow-xl mt-6">⏳ Loading ⌛️</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="back">
        <Link to="/">
          <a href=""> 👈 Back</a>
        </Link>
      </div>
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
