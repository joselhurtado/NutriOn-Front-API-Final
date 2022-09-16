import React from "react";
import { Link } from "react-router-dom";
import Hero1 from "/src/front/img/Hero Healthy Food.png";


export const Hero = () => {
	return (
        <div className="heroSection">
            <div className='row mainHero'>
                <div className="col-sm heroHeadline">
                    <h1 className='text-light'>Good health starts with what you eat.</h1>
                        <p className="text-light">Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with NutriOn</p>
                            <Link to="/WelcomePage">
                                <span className="btn btn-orange" href="#" role="button">
                                JOIN THE CHALLENGE
                                </span>
                            </Link>
                </div>
                    <div className="col-sm ">
                        <img className="heroImage" src={Hero1} />
                    </div>
            </div>
        </div>
	);
};

export default Hero;


