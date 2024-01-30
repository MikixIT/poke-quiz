import PropTypes from "prop-types";

function BannerRed(props) {
  return (
    <div role="alert">
      <div className={`bg-red-500 text-white font-bold rounded-t px-4 py-2`}>
        {props.title}
      </div>
      <div
        className={`border border-t-0 border-red-400 rounded-b bg-red-300 px-4 py-3 text-black `}
      >
        {props.message}
      </div>
    </div>
  );
}

export default BannerRed;

BannerRed.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};
