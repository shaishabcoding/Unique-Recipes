import { useEffect, useState } from "react";
import Recipe from "../recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleAddToCooks }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="lg:w-3/5 grid lg:grid-cols-2 grid-cols-1 gap-4">
      {recipes.map((recipe, idx) => (
        <Recipe key={idx} recipe={recipe} handleAddToCooks={handleAddToCooks} />
      ))}
    </div>
  );
};
Recipes.propTypes = {
  handleAddToCooks: PropTypes.func.isRequired,
};
export default Recipes;
