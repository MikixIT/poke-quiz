import React from "react";
import PropTypes from "prop-types";

export default function PokemonCard({ name, image }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-red-600 dark:border-red-600">
      <a href="#">
        <img
          className="rounded-t-lg object-cover h-48 w-96"
          src={image}
          alt={name}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
