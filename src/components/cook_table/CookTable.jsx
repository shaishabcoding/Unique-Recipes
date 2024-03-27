import PropTypes from "prop-types";

const CookTable = ({ cooks, cooking, handleAddToCooking }) => {
  const totalTime = cooking.reduce(
    (total, recipe) => total + recipe.preparingTime,
    0
  );
  const totalCalories = cooking.reduce(
    (total, recipe) => total + recipe.calories,
    0
  );
  return (
    <div className="lg:w-2/5 h-fit border p-4 rounded-lg">
      <h3 className="text-xl text-center font-semibold mb-3">
        Want to cook: {cooks.length}
      </h3>
      <div className="border-b border-gray-200 w-2/3 mx-auto"></div>
      <div className="overflow-x-auto mt-2">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {cooks.map((recipe, idx) => {
              const { recipeName, preparingTime, calories } = recipe;

              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{recipeName}</td>
                  <td>{preparingTime} minutes</td>
                  <td>{calories} calories</td>
                  <td>
                    <button
                      className="btn btn-xs bg-green-400 rounded-full border-green-400"
                      onClick={handleAddToCooking(recipe, idx)}
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3 className="text-xl text-center font-semibold mb-3 mt-10">
        Currently cooking: {cooking.length}
      </h3>
      <div className="border-b border-gray-200 w-2/3 mx-auto"></div>
      <div className="overflow-x-auto mt-2">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {cooking.map(({ recipeName, preparingTime, calories }, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{recipeName}</td>
                <td>{preparingTime} minutes</td>
                <td>{calories} calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right mt-4">
        <span>Total Time = {totalTime} minutes</span>
        <br />
        <span>Total Calories = {totalCalories} calories</span>
      </div>
    </div>
  );
};

CookTable.propTypes = {
  cooks: PropTypes.array.isRequired,
  handleAddToCooking: PropTypes.func.isRequired,
  cooking: PropTypes.array.isRequired,
};

export default CookTable;
