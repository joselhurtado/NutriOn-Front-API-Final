import React from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import { SignUpFormUser } from "/src/front/js/component/SignUpFormUser";
import HeroWelcome from "/src/front/img/Food Recipe Hero.png";

export const SignUpPage = () => {
	return (
	<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline">
					<h1 className='text-light text-center m-2'>Lets Start your Health Journey.</h1>
					<div className="SignupForm">
						<SignUpFormUser/>
					</div>
					<div className="Userinfo">
					<input className="form-control" type="text" placeholder="Enter your email"id="emailsignup" required></input>
					</div>
					<div className="UserinfoPassword">
						<input className="form-control" type="text" placeholder="Enter your username" required></input>
						<input className="form-control" type="email" placeholder="Enter your password" required></input>
					</div>
					<div className="weightgoal">
						<p className="weight-title">What is your weight goal?</p>
					</div>
					<div className="weightgoalbuttons">
						<div class="3btnweight">
							<button class="btnweight" type="button" id="weightbtn">Lose Weight</button>
							<button class="btnweight" type="button" id="weightbtn">Gain Weight</button>
							<button class="btnweight" type="button" id="weightbtn">Maintain Weight</button>
						</div>
						<div className="genderP">
						<p className="gender-title">What is your gender?</p>
						</div>
						<div className="Genderdiv">
							<button class="btnweight" type="button" id="genderbtn">Male</button>
							<button class="btnweight" type="button" id="genderbtn">Female</button>
							<button class="btnweight" type="button" id="genderbtn">Other</button>
						</div>
					</div>
					<Link to ="/SignupQuestions">
					<div className="SignupFormbtn">
						<button className="btn btn-orange" id="Questionbuttons1">Go Back</button>
						<button className="btn btn-orange" id="Questionbuttons">Continue</button>
					</div>
					</Link>
			</div>
				<div className="col-sm ">
					<img className="heroImage" src={HeroWelcome} />
			</div>
		</div>
	</div>
);
};

export default SignUpPage;