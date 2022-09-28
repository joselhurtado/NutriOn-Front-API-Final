import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export default function RecipeCardPaleo() {
    const {store, actions} = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
    const [recipes, setRecipes] = useState([]); //UseState run the function from recipes (API)
    console.log(recipes, "Recipes")
    
    useEffect(() => {
        setRecipes(store.recipePaleo)
    }, [store.recipePaleo] // In Here we call out again to keep stored the data on re-load the page
    )

    return (
        <div className="row">{recipes.length > 0 && recipes.map((x,i) => 
            <div key={i} className="col-sm card m-2 cardShape" style={{minWidth: "18rem"}}>
                <img src={`https://spoonacular.com/recipeImages/${x.id}-556x370.${x.imageType}`} className="card-img-top shapeImageTop" alt="recipe Image" />
                    <div className="card-body text-light">
                        <h4 className="card-title mb-4"><strong>{x.title}</strong></h4>
                        <div className="d-flex mt-4 justify-content-between">
                        <Link to={`/SingleRecipePaleo/${x.id}`} className="btn btn-orange">
                        Read More
                        </Link>
                        <a onClick={() => actions.addFavorites(x)} className="btn btn-outline-orange fa fa-heart" />
                        </div>
                    </div>
            </div>
        ) }</div>
    );
}