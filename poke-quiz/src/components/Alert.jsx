import PropTypes from "prop-types";

export default function Alert(props) {
  return props.trigger ? (
    <div
      id="info-popup"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="bg-red-800 p-4 rounded-lg shadow dark:bg-black-900 max-w-lg mx-auto">
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          {props.title}
        </h3>
        <p className="mb-4 text-sm font-light text-white-900 dark:text-white">
          {props.message}
        </p>
        <div className="flex justify-center">
          <button
            id="close-modal"
            type="button"
            className="py-2 px-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-white dark:text-black- dark:border-gray-500 "
            onClick={props.redirectButton}
          >
            {props.buttonMessage}
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

Alert.propTypes = {
  trigger: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  redirectButton: PropTypes.func,
};
