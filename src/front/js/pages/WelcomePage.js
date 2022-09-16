import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import HeroWelcome from "/src/front/img/Food Recipe Hero.png";

export const WelcomePage = () => {
	return (
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
				<h1 className='text-light text-center m-2'>WELCOME TO NUTRION</h1>
					<p className="text-light m-2">Let’s start your healthy journey.</p>

					<div className="introBTN">
						<Link to="/LoginPage">
							<span className="btn btn-light m-2" href="#" role="button">
							LOG IN
							</span>
						</Link>

						<Link to="/SignUP">
							<span className="btn btn-orange m-2" href="#" role="button">
							SIGN UP
							</span>
						</Link>
					</div>
			</div>
				<div className="col-sm ">
					<img className="heroImage" src={HeroWelcome} />
			</div>
		</div>
	</div>
);
};

export default WelcomePage;