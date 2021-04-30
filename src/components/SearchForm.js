import React from 'react';

const SearchForm = (props) => { 
    const [macros, setMacros] = React.useState({
        calories: "0",
        carbohydrates: "0",
        fats: "0",
        fibre: "0",
        protein: "0"
    });

    const { calories, carbohydrates, fats, fibre, protein } = macros;

  const getRecipes = async () => {
    const { REACT_APP_RECIPE_API_URL, REACT_APP_RECIPE_API_KEY } = process.env;
    const url = `${REACT_APP_RECIPE_API_URL}?apiKey=${REACT_APP_RECIPE_API_KEY}&${calories ? `maxCalories=${calories}` : ''}&${protein ? `minProtein=${protein}` : ''}&number=4`;

    const response = await fetch(url);
    
    const data = await response.json();
    
    await props.setRecipes(data);
  };

  const handleFormSubmit = () => {
    getRecipes();
  };

  return (
    <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
        className="ui form"
      >
        <div className="field">
          <label htmlFor="calories">Calories</label>
          <input
            id="calories"
            onChange={(e) => setMacros({ ...macros, calories: e.target.value })}
            value={calories}
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
              value={protein}
            />
          </div>
          <div className="four wide field">
            <label htmlFor="carbs">Carbohydrates</label>
            <input
              id="carbs"
              onChange={(e) =>
                setMacros({ ...macros, carbohydrates: e.target.value })
              }
              value={carbohydrates}
            />
          </div>
          <div className="four wide field">
            <label htmlFor="fats">Fats</label>
            <input
              id="fats"
              onChange={(e) => setMacros({ ...macros, fats: e.target.value })}
              value={fats}
            />
          </div>
          <div className="four wide field">
            <label htmlFor="fibre">Fibre</label>
            <input
              id="fibre"
              onChange={(e) => setMacros({ ...macros, fibre: e.target.value })}
              value={fibre}
            />
          </div>
        </div>
        <button type="submit" className="ui button">
          Search
        </button>
      </form>
  )
}

export default SearchForm;