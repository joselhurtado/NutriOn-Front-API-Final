import React from "react";
import { Link } from "react-router-dom";
import trackImage from "/src/front/img/track-improve-image.png";
import findImage from "/src/front/img/find-recipes-image.png";
import evaluateImage from "/src/front/img/evalaute-nutrients-image.png";

export const StatsSection = () => {
	return (
        <div className="container statsGrid">
            <h1>We Simplify Care</h1>
            <p>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there.
</p>
        <div className="container">
            <div className="row">
                <div className="col">
                <img src={trackImage} className='StatsImage'/>
                <p className='statsText'>Track and Improve</p>
                </div>

                <div className="col">
                <img src={findImage} className='StatsImage' />
                <p className='statsText'>Find Recipes</p>
                </div>

                <div className="col">
                <img src={evaluateImage} className='StatsImage' />
                <p className='statsText'>Evaluate Nutrients</p>
                </div>

            </div>
            </div>
        </div>
	);
};

export default StatsSection;


