import { Link } from "react-router-dom";
import pokeQuizLogo from "/poke-quiz-logo(createdByMikixiT).svg";

export default function WelcomePage() {
  return (
    <div className="app  ">
      <h1 className="text-4xl font-bold animate-rainbow ">Welcome</h1>
      <img src={pokeQuizLogo} className="w-32 content-center m-5" />
      <Link to="/Quiz">
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Play
        </button>
      </Link>
    </div>
  );
}
