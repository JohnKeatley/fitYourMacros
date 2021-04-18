import React from "react";
import "./styles.css";

export default function App() {
  const [macros, setMacros] = React.useState({
    calories: null,
    carbohydrates: null,
    fats: null,
    fibre: null,
    protein: null
  });

  return (
    <div className="App">
      <h1>Fit Your Macros</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(macros);
        }}
      >
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
