import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import pikaLoading from "/src/assets/pika-loading.gif";
import { useCopyToClipboard } from "./Copyclipboard";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizPokemon, setQuizPokemon] = useState(null);
  const [pokeScore, setPokeScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();
  const maxAttempts = 2;
  const { addCopyListener, removeCopyListener } =
    useCopyToClipboard("do not cheat bro");

  const getRandomPokemon = async () => {
    const randomPokemonNumbers = new Set();
    const maxPokemonId = 998;

    while (randomPokemonNumbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * maxPokemonId) + 1;
      randomPokemonNumbers.add(randomNumber);
    }

    // Converti il Set in un array per il fetching dei dati Pokémon
    const pokemonPromises = Array.from(randomPokemonNumbers).map((number) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}`).then((response) =>
        response.json()
      )
    );

    const pokemonData = await Promise.all(pokemonPromises);
    setPokemonData(pokemonData);
    setQuizPokemon(pokemonData[Math.floor(Math.random() * pokemonData.length)]);

    // Simula un tempo di caricamento, poi imposta il caricamento su false
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  };

  useEffect(() => {
    getRandomPokemon();
    addCopyListener(); //anticheat copy

    return () => {
      //rimuovere l'anticheat copy
      removeCopyListener();
    };
  }, [addCopyListener, removeCopyListener]);

  const gameOverData = useCallback(() => {
    navigate("/gameover", { state: { pokeScore } });
  }, [navigate, pokeScore]);

  // Funzione per controllare se la risposta è corretta
  const handleCardClick = (name) => {
    setAttempts((prevAttempts) => prevAttempts + 1);

    if (quizPokemon && name === quizPokemon.name) {
      //temp using alert
      alert("Nice!");
      setPokeScore(pokeScore + 1);
      setAttempts(0);
      getRandomPokemon();
    } else {
      alert("Oops! Try again.");
      setAttempts(attempts + 1);
    }
  };

  useEffect(() => {
    if (attempts >= maxAttempts) {
      // Sostituisci con il numero massimo di tentativi consentiti
      alert("Game Over!");
      setGameOver(true);
      gameOverData();
    }
  }, [attempts, gameOverData]);

  //Loading screen
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
        <Link to="/">👈 Back</Link>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-center text-5xl font-bold mt-2 mb-3">Pokè Quiz</h1>
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
              /// Aggiungi l'evento onClick per gestire la selezione della risposta
              onClick={() => handleCardClick(pokemon.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
