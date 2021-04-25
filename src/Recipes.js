import React from "react";

const Recipes = ({ title, image, calories, carbs, protein, fat }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} alt={`${title}`} />
      </div>
      <div className="content">
        <div>Recipe: {title}</div>
        <div>Calories: {calories}</div>
        <div>Carbohydrates: {carbs}</div>
        <div>Protein: {protein}</div>
        <div>Fats: {fat}</div>
      </div>
    </div>
  );
};

export default Recipes;
