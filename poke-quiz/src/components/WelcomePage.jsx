import { Link } from "react-router-dom";
import pokeQuizLogo from "/poke-quiz-logo(createdByMikixiT).svg";

export default function WelcomePage() {
  return (
    <div className="app grid grid-cols-1 place-items-center">
      <img
        src={pokeQuizLogo}
        alt="logo"
        className="w-40 content-center drop-shadow-xl"
      />
      <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl mb-8">
        Welcome Dear Trainer!
      </h1>
      <Link to="/Quiz">
        <button className="text-5xl relative -top-1 -left-1 bg-red-600 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-red-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
          Play
        </button>
      </Link>
      <p className="m-5 text-xl">Hey! why are you here Trainer?</p>
      <p className="">
        {" "}
        Oh, there why you are here, Will you be able to guess the name of these{" "}
        <span className="text-xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl ">
          {" "}
          <a href="https://pokeapi.co/">Pokemon?</a>
        </span>
      </p>
      <p className="mt-20 text-sm">
        Try the challenge created by{" "}
        <span className="text-xl cursor-pointer font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient drop-shadow-xl ">
          <a href="https://www.linkedin.com/in/michaeltorresdeveloper/">
            Michael
          </a>
        </span>
        {", "}
        made for you!
      </p>
    </div>
  );
}
