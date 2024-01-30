import PropTypes from "prop-types";

function Banner(props) {
  return (
    <div role="alert">
      <div
        className={`bg-${props.color}-500 text-white font-bold rounded-t px-4 py-2`}
      >
        {props.title}
      </div>
      <div
        className={`border border-t-0 border-${props.color}-400 rounded-b bg-${props.color}-100 px-4 py-3 text-${props.color}-700`}
      >
        {props.message}
      </div>
    </div>
  );
}

export default Banner;

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  color: PropTypes.string.isRequired,
};
