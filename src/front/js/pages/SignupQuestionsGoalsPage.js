import React from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import HeroWelcome from "/src/front/img/Food Recipe Hero.png";

export const SignUpQuestionsGoalsPage = () => {
  return (
    <div id="welcomePage" className="heroWelcome">
      <div className="containerBMI">
        <div className="Calculator">
          <h3 className="CalcTitle">Your BMI is:</h3>
          <div className="BMInumberbox">
            <h1 className="BMInumber">18.5</h1>
          </div>
          <div className="tableheader">
            <h3 className="Tableh3">BMI Healthy Weight</h3>
          </div>
          <div className="tablep">
            <div className="leftp">
              <p className="lefttablep">Underweight</p>
              <p className="lefttablep">Normal Weight</p>
              <p className="lefttablep">Overweight</p>
              <p className="lefttablep">Obesity</p>
            </div>
            <div className="rightp">
              <p className="Righttablep">Below 18.5</p>
              <p className="Righttablep">18.5 to 24.9</p>
              <p className="Righttablep">25 to 29.9</p>
              <p className="Righttablep"> 30 and above</p>
            </div>
          </div>
          <div className="CalorieP">
            <h3 className="CaloriesP">Recommended Daily Calories</h3>
          </div>
          <div>
            <div className="BMIweight">
              <input className="WeightBMI" placeholder="Gain Weight"></input>
              <input className="WeightBMI" placeholder="Lose Weight"></input>
              <input
                className="WeightBMI"
                placeholder="Maintain Weight"
              ></input>
            </div>
          </div>
          <div>
            <div>
              <Link to="/SignupQuestions">
                <div className="SignupFormbtn">
                  <button className="btn btn-orange" id="Questionbuttons1">
                    Go Back
                  </button>
                  <button className="btn btn-orange" id="Questionbuttons">
                    Get Recipes
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="ImageRight">
          <img src={HeroWelcome} />
        </div>
      </div>
    </div>
  );
};

export default SignUpQuestionsGoalsPage;
