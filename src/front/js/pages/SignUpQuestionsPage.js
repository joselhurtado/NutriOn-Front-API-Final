import React from "react";
import "../../styles/SignUp.css";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import HeroWelcome from "/src/front/img/Hero Healthy Food.png";

export const SignUpQuestionsPage = () => {
  return (
    <div id="welcomePage" className="heroWelcome">
      <div className="row mainHero">
        <div className="col-sm heroHeadline2">
          <h1 className="text-light text-center m-2">
            {" "}
            Tell us about yourself!
          </h1>
          <hr />
          <div className="SignupForm2">
            <div className="genderP">
              <h5 className="gender-title">Select your ideal diet?</h5>
            </div>
            <div className="dietcheckboxes">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                ></input>
                <label className="form-check-label" for="inlineCheckbox1">
                  Vegan
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                ></input>
                <label className="form-check-label" for="inlineCheckbox2">
                  Vegetarian
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                ></input>
                <label className="form-check-label" for="inlineCheckbox2">
                  Gluten Free
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                ></input>
                <label className="form-check-label" for="inlineCheckbox2">
                  Keto
                </label>
              </div>
              <div className="2nddietcheckboxes">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  ></input>
                  <label className="form-check-label" for="inlineCheckbox1">
                    Paleo
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  ></input>
                  <label className="form-check-label" for="inlineCheckbox2">
                    Pescatarian
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  ></input>
                  <label className="form-check-label" for="inlineCheckbox2">
                    No restrictions
                  </label>
                </div>
                <hr />
                <div className="container align-between">
                  <h5 className="gender-title">BODY MASS INDEX</h5>
                  <p className="BMIinfo ">
                    (BMI) IS A MEASURE OF BODY FAT BASED ON
                    HEIGHT AND WEIGHT THAT APPLIES TO ADULT MEN AND WOMEN
                  </p>
                </div>
                <div className="BMIheight">
                  <input className="feet" placeholder="Feet"></input>
                  <input className="inch" placeholder="Inches"></input>
                  <input className="weight" placeholder="Weight"></input>
                  <input className="age" placeholder="Age"></input>
                </div>
                <hr />
                <div className="BMIinfo">
                  <h5 className="BMIactivity">How active are you?</h5>
                  <div className="BMIactivitybtn">
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-outline-light m-2"
                        type="button"
                        id="activitybtn"
                      >
                        Light
                      </button>
                      <button
                        className="btn btn-outline-light m-2"
                        type="button"
                        id="activitybtn"
                      >
                        Moderate
                      </button>
                      <button
                        className="btn btn-outline-light m-2"
                        type="button"
                        id="activitybtn"
                      >
                        Active
                      </button>
                    </div>
                    <hr />
                    <div className="SignupForm btn space-between">
                      <Link to ="/SignUp">
                      <button className="btn btn-light" id="Questionbuttons1">Go Back</button>
                      </Link>
                      <Link to ="/SignUpQuestionsGoals">
                      <button className="btn btn-orange" id="Questionbuttons">Continue</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUpQuestionsPage;
