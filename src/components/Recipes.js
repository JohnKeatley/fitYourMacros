import React from "react";

const Recipes = ({ title, image, calories, carbs, protein, fat }) => {
  return (
    <a className="ui card" href="#">
      <div className="content">
      <div className="ui image">
        <img src={image} alt={`${title}`} />
      </div>
      <div className="description">
        <div>Recipe: {title}</div>
        <div>Calories: {calories}</div>
        <div>Carbohydrates: {carbs}</div>
        <div>Protein: {protein}</div>
        <div>Fats: {fat}</div>
      </div>
    </div>
    </a>
  );
};

export default Recipes;
