import React from "react";
import { Link } from "react-router-dom";

export default function Gameover() {
  return (
    <>
      <h1 className="text-5xl m-52">Game Over!</h1>
      <Link to="/Quiz">
        <button className="text-5xl relative -top-1 -left-1 bg-red-600 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-red-800 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
          Play Again!
        </button>
      </Link>
    </>
  );
}
