import PropTypes from "prop-types";
//raw.githubuserc†ontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png
export default function PokemonCard({ name, image, onClick }) {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-red-600 dark:border-red-600"
      onClick={onClick}
    >
      <div className="flex justify-center h-52 cursor-pointer">
        <img
          className="object-cover items-center w-48"
          src={image}
          alt={name}
        />
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
