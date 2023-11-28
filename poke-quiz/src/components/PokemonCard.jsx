import PropTypes from "prop-types";

export default function PokemonCard({ name, image }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-red-600 dark:border-red-600">
      <a href="#">
        <div className="flex justify-center">
          <img
            className="object-cover h-48 w-48 p-1 max-h-full max-w-full"
            src={image}
            alt={name}
          />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
        </a>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
