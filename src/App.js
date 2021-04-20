import React from "react";
import "./styles.css";
import FormInput from "./FormInput";

export default function App() {
  const [macros, setMacros] = React.useState({
    calories: null,
    carbohydrates: null,
    fats: null,
    fibre: null,
    protein: null
  });

  const recipes = [
    {
      calories: 210,
      carbs: "43g",
      fat: "3g",
      imageType: "jpg",
      protein: "1g",
      title: "Baked Apples in White Wine"
    },
    {
      calories: 226,
      carbs: "33g",
      fat: "10g",
      imageType: "jpg",
      protein: "2g",
      title: "Chocolate Silk Pie with Marshmallow Meringue"
    }
  ];

  const handleFormSubmit = () => {
    const recipeMatch = recipes.filter(
      (recipe) => recipe.calories.toString() === macros.calories
    );

    console.log("recipeMatch", recipeMatch);
  };

  return (
    <div className="App">
      <h1>Fit Your Macros</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
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
      </form>
    </div>
  );
}
