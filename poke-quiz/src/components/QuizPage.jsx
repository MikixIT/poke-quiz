import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { useCopyToClipboard } from "./Copyclipboard";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import pokeQuizLogo from "/poke-quiz-logo(createdByMikixiT).svg";
import LoadingScreen from "./LoadingScreen";
import BannerRed from "./BannerRed";
import BannerGreen from "./BannerGreen";

export default function QuizPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizPokemon, setQuizPokemon] = useState(null);
  const [pokeScore, setPokeScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [guessedPoke, setGuessedPoke] = useState(false);
  const [badTry, setBadTry] = useState(false);
  const navigate = useNavigate();
  const maxAttempts = 2;
  const { addCopyListener, removeCopyListener } =
    useCopyToClipboard("do not cheat bro");
  const [showCorrectPokemon, setShowCorrectPokemon] = useState(false);
  const [isRoundActive, setIsRoundActive] = useState(true);

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
    }, 200);
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
    console.log(gameOver);
  }, [navigate, pokeScore, gameOver]);

  // Funzione per controllare se la risposta è corretta
  const handleCardClick = (name) => {
    if (!isRoundActive) return;

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (quizPokemon && name === quizPokemon.name) {
      //temp using alert (NICE!)
      setGuessedPoke(true);
      setPokeScore(pokeScore + 1);
      setAttempts(0);
      setIsRoundActive(false);
      setTimeout(() => {
        getRandomPokemon();
        setIsRoundActive(true);
      }, 2300);
    } else {
      // (TRY AGAIN!)
      setBadTry(true);
      setAttempts(attempts + 1);
    }
  };

  useEffect(() => {
    if (attempts >= maxAttempts) {
      //il numero massimo di tentativi consentiti
      setGameOver(true);
      setShowCorrectPokemon(true);
      setIsRoundActive(false);
      // gameOverData();
    }
  }, [attempts, gameOverData]);

  useEffect(() => {
    if (guessedPoke) {
      const timer = setTimeout(() => {
        setGuessedPoke(false);
      }, 2500); // Il banner scomparirà dopo 2+ secondi
      return () => clearTimeout(timer);
    }
  }, [guessedPoke]);

  useEffect(() => {
    if (badTry) {
      const timer = setTimeout(() => {
        setBadTry(false);
      }, 2500); // Il banner scomparirà dopo 2+ secondi
      return () => clearTimeout(timer);
    }
  }, [badTry]);

  //Loading screen
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <div className="back">
        <Link to="/">👈 Back</Link>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-center">
          <a href="#">
            <img
              src={pokeQuizLogo}
              alt="logo"
              className="w-24 flex justify-center"
            />
          </a>
        </div>
        {showCorrectPokemon && quizPokemon && (
          <div className="text-center mt-4">
            <h3 className="text-3xl font-bold">The correct Pokémon was:</h3>
            <img
              src={quizPokemon.sprites.front_default}
              alt={quizPokemon.name}
              className="w-48 mx-auto shadow-sm"
            />
          </div>
        )}
        {quizPokemon && (
          <>
            <h3 className="text-xl m-1">
              What does{" "}
              <span className="text-4xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl">
                {quizPokemon.name}
              </span>{" "}
              looks like?
            </h3>
            {/* //POKEMON SCORE 🔴 */}
            <h4 className="text-2xl">
              Points:{" "}
              <span className="text-2xl cursor-pointer font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-2xl">
                {pokeScore}
              </span>
            </h4>
            <BannerGreen
              title="Nice!"
              message="+1 LETS GO!"
              trigger={guessedPoke}
            ></BannerGreen>
            <BannerRed
              title="Opsss!"
              message="Last try! THINK!"
              trigger={badTry}
            ></BannerRed>
          </>
        )}
        <Alert
          title="GAME OVER"
          message="oh no! you lost, continue to see results and rankings!"
          buttonMessage="Continue!"
          redirectButton={gameOverData}
          trigger={gameOver}
        ></Alert>
        <div className="grid grid-cols-3 gap-4 p-2">
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
