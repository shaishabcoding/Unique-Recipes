import { useState } from "react";
import CookTable from "../cook_table/CookTable";
import Recipes from "../recipes/Recipes";
import { toast } from "react-toastify";

const Main = () => {
  const [cooks, setCooks] = useState([]);
  const [cooking, setCooking] = useState([]);
  const handleAddToCooks = (recipe) => () => {
    if (
      !cooks.some((cook) => cook.recipeName === recipe.recipeName) &&
      !cooking.some((cook) => cook.recipeName === recipe.recipeName)
    ) {
      const newCooks = [...cooks, recipe];
      setCooks(newCooks);
    } else {
      toast("Already selected");
    }
  };

  const handleAddToCooking = (recipe, idx) => () => {
    const newCooks = [...cooks];
    newCooks.splice(idx, 1);
    setCooks(newCooks);
    const newCooking = [...cooking, recipe];
    setCooking(newCooking);
  };

  return (
    <main className="lg:my-20 lg:container lg:px-20 lg:mx-auto  mx-4 my-10">
      <h1 className="lg:text-5xl text-3xl font-bold text-center">
        Our Recipes
      </h1>
      <p className="text-center text-gray-600 text-sm lg:py-8 py-4 px-6">
        Whether you are a seasoned chef or a novice in the kitchen, Our Recipes
        <br />
        provides accessible and easy-to-follow instructions to recreate these
        delectable dishes at home.
      </p>
      <div className="flex lg:flex-row flex-col gap-4">
        <Recipes handleAddToCooks={handleAddToCooks} />
        <CookTable
          cooks={cooks}
          handleAddToCooking={handleAddToCooking}
          cooking={cooking}
        />
      </div>
    </main>
  );
};

export default Main;
