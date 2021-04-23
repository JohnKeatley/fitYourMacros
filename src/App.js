import React, { useEffect } from "react";
import "./styles.css";
import response from "./response";

export default function App() {
  const [macros, setMacros] = React.useState({
    calories: null,
    carbohydrates: null,
    fats: null,
    fibre: null,
    protein: null
  });
  const [recipes, setRecipes] = React.useState([]);

  const getRecipes = async () => {
    // const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=&minCarbs=${
    //   carbohydrates - 5
    // }&maxCarbs=${carbohydrates}&number=2`;

    // console.log("url", url);
    // const response = await fetch(
    //   `https://api.spoonacular.com/recipes/findByNutrients?apiKey=&minCarbs=20&maxCarbs=100&number=2`
    // );

    console.log(recipes);
    setRecipes(response);

    // const data = await response.json();

    // console.log(data);

    // const recipeMatch = response.filter(
    //   (recipe) => recipe.calories.toString() === macros.calories
    // );
  };

  const handleFormSubmit = (query) => {
    getRecipes(query);
  };

  return (
    <div className="App">
      <h1>Fit Your Macros</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit(macros);
        }}
      >
        {/* <FormInput name="Calories" callback={setMacros} value={macros} />
        <FormInput name="Protein" callback={setMacros} value={macros} />
        <FormInput name="Carbohydrates" callback={setMacros} value={macros} />
        <FormInput name="Fats" callback={setMacros} value={macros} />
        <FormInput name="Fibre" callback={setMacros} value={macros} /> */}
        <h2>Calories</h2>
        <input
          onChange={(e) => setMacros({ ...macros, calories: e.target.value })}
        />
        <h2>Protein</h2>
        <input
          onChange={(e) => setMacros({ ...macros, protein: e.target.value })}
        />
        <h2>Carbohydrates</h2>
        <input
          onChange={(e) =>
            setMacros({ ...macros, carbohydrates: e.target.value })
          }
        />
        <h2>Fats</h2>
        <input
          onChange={(e) => setMacros({ ...macros, fats: e.target.value })}
        />
        <h2>Fibre</h2>
        <input
          onChange={(e) => setMacros({ ...macros, fibre: e.target.value })}
        />
        <button>Search</button>
        {console.log(recipes)}
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div>
                <div>Recipe: {recipe.title}</div>
                <div>Calories: {recipe.calories}</div>
                <div>Carbohydrates: {recipe.carbs}</div>
                <div>Protein: {recipe.protein}</div>
                <div>Fats: {recipe.fat}</div>
                <hr />
              </div>
            );
          })}
      </form>
    </div>
  );
}
