import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipeDetailsPaleo() {
  const { store } = useContext(Context);
  const params = useParams();
  const [recipe, setPaleo] = useState({});

  useEffect(() => {
    const data = store.recipePaleo.find((item) => {
      if (item.id == params.theid) {
        return item;
      }
    });
    setPaleo(data);
  }, [store.recipePaleo]);

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
                <strong>carbs: </strong>
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
