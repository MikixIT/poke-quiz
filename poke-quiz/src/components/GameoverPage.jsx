import { Link, useLocation } from "react-router-dom";
import crypika from "/src/assets/crypika.gif";
import ohnopika from "/src/assets/ohnopika.gif";
import pikaescape from "/src/assets/pikaescape.gif";
import React, { useState, useEffect } from "react";

export default function GameoverPage() {
  const location = useLocation();
  const [chosenValue, setChosenValue] = useState("");
  const { pokeScore } = location.state || { pokeScore: 0 };

  useEffect(() => {
    //Generare un immagine di gameover casuale tra le tre gifs
    let gifs = [ohnopika, pikaescape, crypika];
    let randomGif = gifs[Math.floor(Math.random() * gifs.length)];

    setChosenValue(randomGif);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <img src={chosenValue} alt="pika escape" />
      </div>
      <h1 className="text-5xl mt-2 mb-10">Game Over!</h1>

      <h2 className="text-2xl">Your score: {pokeScore}</h2>
      <h1 className="m-5 mb-14 font-extrabold">
        Classifica: <br /> 1. PIERINO 900 POINTS <br />
        2. CICCIO 700 POINTS <br />3 PEPPINO 600 POINTS
      </h1>
      <Link to="/Quiz">
        <button className="text-5xl relative -top-1 -left-1 bg-red-600 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-red-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
          Play Again!
        </button>
      </Link>
    </>
  );
}
