import React from "react";
import "./styles.css";
import Recipes from "./Recipes";
import SearchForm from './SearchForm';


export default function App() {
  const [recipes, setRecipes] = React.useState([]);

  return (
    <div className="App">
      <h1>Fit Your Macros</h1>
      <SearchForm setRecipes={setRecipes} recipes={recipes}/>
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
