import React from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import { SignupFormQuestions } from "/src/front/js/component/SignupFormQuestions";

export const SignUpQuestionsPage = () => {
	return (
		<div id="welcomePage" className="heroWelcome">
		<div className='row mainHero'>
			<div className="col-sm heroHeadline2">
					<h1 className='text-light text-center m-2'> Tell us about yourself!</h1>
					<div className="SignupForm2">
						<SignupFormQuestions/>
					</div>
					<Link to ="/SignupQuestionsGoals">
					<div className="SignupFormbtn" id="Signupformbtn2"><button className="btn btn-primary" id="Signupbtn2">Continue</button>
					</div>
					</Link>
			</div>
		</div>
	</div>
);
};

export default SignUpQuestionsPage;