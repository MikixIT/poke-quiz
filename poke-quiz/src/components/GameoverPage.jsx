import { Link, useLocation } from "react-router-dom";

export default function GameoverPage() {
  const location = useLocation();
  // Accedi allo stato passato e ottieni `pokeScore`
  const { pokeScore } = location.state || { pokeScore: 0 };

  return (
    <>
      <h1 className="text-5xl mt-52 mb-20">Game Over!</h1>

      <h2 className="text-2xl mb-20">Your score: {pokeScore}</h2>
      <Link to="/Quiz">
        <button className="text-5xl relative -top-1 -left-1 bg-red-600 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-red-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
          Play Again!
        </button>
        <h1 className="p-52">
          Classifica: <br /> 1. PIERINO 900 POINTS <br />
          2. CICCIO 700 POINTS <br />3 PEPPINO 600 POINTS
        </h1>
      </Link>
    </>
  );
}
