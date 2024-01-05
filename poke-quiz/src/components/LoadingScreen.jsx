import React from "react";
import pikaLoading from "/src/assets/pika-loading.gif";

function LoadingScreen() {
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

export default LoadingScreen;
