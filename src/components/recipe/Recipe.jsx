import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, handleAddToCooks }) => {
  const {
    recipeImage,
    recipeName,
    shortDescription,
    ingredients,
    preparingTime,
    calories,
  } = recipe;

  return (
    <div className="border p-4 rounded-lg">
      <img
        className="rounded-lg w-full aspect-video"
        src={recipeImage}
        alt={`image of title ${recipeName}`}
      />
      <h3 className="text-xl font-semibold mt-4">{recipeName}</h3>
      <p className=" text-gray-500 text-sm my-3 font-fira-sans">
        {shortDescription}
      </p>
      <div className="border-b border-gray-200"></div>
      <h3 className="text-lg font-semibold mt-4 mb-2">
        Ingredients: {ingredients.length}
      </h3>
      <ul className="list-disc pl-8 mb-4 font-fira-sans text-gray-500">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <div className="border-b border-gray-200"></div>
      <div className="flex gap-4 my-4 font-fira-sans flex-wrap">
        <div className="flex gap-1 items-center">
          <CiClock2 />
          {preparingTime} minutes
        </div>
        <div className="flex gap-1 items-center">
          <AiOutlineFire />
          {calories} calories
        </div>
      </div>
      <button
        className="btn bg-green-400 rounded-full mr-4 border-green-400"
        onClick={handleAddToCooks(recipe)}
      >
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleAddToCooks: PropTypes.func.isRequired,
};

export default Recipe;
