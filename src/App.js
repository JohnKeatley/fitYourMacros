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

  return (
    <div className="App">
      <h1>Fit Your Macros</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(macros);
        }}
      >
        <FormInput name="Calories" callback={setMacros} value={macros} />
        <FormInput name="Protein" callback={setMacros} value={macros} />
        <FormInput name="Carbohydrates" callback={setMacros} value={macros} />
        <FormInput name="Fats" callback={setMacros} value={macros} />
        <FormInput name="Fibre" callback={setMacros} value={macros} />
        {/* <h2>Protein</h2>
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
        /> */}
        <button>Search</button>
      </form>
    </div>
  );
}
