import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipeDetailsVegan() {
  const { store } = useContext(Context);
  const params = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const data = store.recipeVegan.find((item) => {
      if (item.id == params.theid) {
        return item;
      }
    });
    setRecipe(data);
  }, [store.recipeVegan]);

  return (
    <div className="container">
      <div className="card mb-3 cardShapeSingle">
        <div className="row g-0">
          <div className="col-md-6 fillImage">
            <img
              src={`https://spoonacular.com/recipeImages/${recipe?.id}-312x231.${recipe?.imageType}`}
              className="img-fluid shapeImageTopSingle"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title singleRecipeTitle">{recipe?.title}</h5>
              <hr />
              <p className="card-text">
                <strong>Carbs: </strong>
                {recipe?.carbs}
              </p>
              <p className="card-text">
                <strong>Fat: </strong>
                {recipe?.fat}
              </p>

              <p className="card-text">
                <strong>Calories: </strong>
                {recipe?.calories}
              </p>

              <p className="card-text">
                <strong>Protein: </strong>
                {recipe?.protein}
              </p>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
