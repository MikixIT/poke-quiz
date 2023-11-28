import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="app grid-cols-1 m-10 p-10 ">
      <h1 className="text-4xl font-bold animate-rainbow m-20">Welcome</h1>
      <Link to="/Quiz">
        <img
          src="/poke-quiz/public/poke-quiz-logo(createdByMikixiT).svg"
          className="logo "
        />
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Play
        </button>
      </Link>
    </div>
  );
}
