import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useState, useEffect } from "react";
import pikaLoading from "/src/assets/pika-loading.gif";

export default function QuizPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizPokemon, setQuizPokemon] = useState(null);
  const [pokeScore, setPokeScore] = useState(0);

  useEffect(() => {
    const getRandomPokemon = async () => {
      const randomPokemonNumbers = Array.from(
        { length: 6 },
        () => Math.floor(Math.random() * 1000) + 1
      );
      const pokemonPromises = randomPokemonNumbers.map((number) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then((response) =>
          response.json()
        )
      );
      const pokemonData = await Promise.all(pokemonPromises);
      setPokemonData(pokemonData);
      // Imposta il pokemon del quiz casualmente
      setQuizPokemon(
        pokemonData[Math.floor(Math.random() * pokemonData.length)]
      );
      setTimeout(() => {
        setLoading(false);
      }, 2100);
    };

    getRandomPokemon();
  }, []);

  // Funzione per controllare se la risposta è corretta
  const handleCardClick = (name) => {
    if (quizPokemon && name === quizPokemon.name) {
      alert("Correct! You guessed the right Pokémon!");
    } else {
      alert("Oops! Try again.");
    }
  };

  if (loading) {
    return (
      <div className="app grid grid-cols-1 place-items-center">
        <img
          src={pikaLoading}
          alt="pika-loading"
          className="items-center mb-5 w-60 drop-shadow-xl mt-28"
        />
        <p className="drop-shadow-xl flicker text-6xl">Loading</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="back">
        <Link to="/">
          <a href="">👈 Back</a>
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-center text-5xl font-bold mt-3 mb-4">Pokè Quiz</h1>
        {quizPokemon && (
          <>
            <h3 className="text-xl m-3">
              What does{" "}
              <span className="text-4xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl">
                {quizPokemon.name}
              </span>{" "}
              look like?
            </h3>
            <h4>Pokè score: {pokeScore}</h4>
          </>
        )}
        <div className="grid grid-cols-3 gap-4 p-4">
          {pokemonData.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              // Aggiungi l'evento onClick per gestire la selezione della risposta
              onClick={() => handleCardClick(pokemon.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
