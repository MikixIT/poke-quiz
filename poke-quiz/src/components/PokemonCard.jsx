import PropTypes from "prop-types";

export default function PokemonCard({ name, image }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-red-600 dark:border-red-600">
      <div className="flex justify-center w-100 h-40 cursor-pointer">
        <img className="object-cover p-1 items-center" src={image} alt={name} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
