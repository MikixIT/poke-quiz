import PropTypes from "prop-types"

export default function Alert(props) {
  return props.trigger ? (
    <div
      id="info-popup"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="bg-blue-800 p-4 rounded-lg shadow dark:bg-red-800 max-w-lg mx-auto">
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          Game Over!
        </h3>
        <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
          Your game has ended. Better luck next time!
        </p>
        <div className="flex justify-center">
          <button
            id="close-modal"
            type="button"
            className="py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  ) : "";

}

Alert.propTypes = {
  trigger: PropTypes.bool.isRequired
};