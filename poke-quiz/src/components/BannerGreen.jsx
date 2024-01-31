import PropTypes from "prop-types";

function BannerGreen(props) {
  return props.trigger ? (
    <div role="alert">
      <div className={`bg-green-500 text-white font-bold rounded-t px-4 py-2`}>
        {props.title}
      </div>
      <div
        className={`border border-t-0 border-green-400 rounded-b bg-green-300 px-4 py-3 text-black font-extrabold`}
      >
        {props.message}
      </div>
    </div>
  ) : null;
}

export default BannerGreen;

BannerGreen.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  trigger: PropTypes.bool,
};
