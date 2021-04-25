import React from "react";
import "./styles.css";
import Recipes from "./Recipes";

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
        className="ui form"
      >
        <div className="field">
          <label htmlFor="calories">Calories</label>
          <input
            id="calories"
            onChange={(e) => setMacros({ ...macros, calories: e.target.value })}
          />
        </div>
        <div className="fields">
          <div className="four wide field">
            <label htmlFor="protein">Protein</label>
            <input
              id="protein"
              onChange={(e) =>
                setMacros({ ...macros, protein: e.target.value })
              }
            />
          </div>
          <div className="four wide field">
            <label htmlFor="carbs">Carbohydrates</label>
            <input
              id="carbs"
              onChange={(e) =>
                setMacros({ ...macros, carbohydrates: e.target.value })
              }
            />
          </div>
          <div className="four wide field">
            <label htmlFor="fats">Fats</label>
            <input
              id="fats"
              onChange={(e) => setMacros({ ...macros, fats: e.target.value })}
            />
          </div>
          <div className="four wide field">
            <label htmlFor="fibre">Fibre</label>
            <input
              id="fibre"
              onChange={(e) => setMacros({ ...macros, fibre: e.target.value })}
            />
          </div>
        </div>
        <button type="submit" className="ui button">
          Search
        </button>
      </form>
      {recipes &&
        recipes.map(
          ({ image, title, calories, carbs, protein, fat, fibre, id }) => {
            return (
              <Recipes
                image={image}
                title={title}
                calories={calories}
                carbs={carbs}
                protein={protein}
                fat={fat}
                fibre={fibre}
                key={id}
              />
            );
          }
        )}
    </div>
  );
}
