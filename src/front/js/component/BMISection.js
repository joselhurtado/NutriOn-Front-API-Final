import React from "react";
import { Link } from "react-router-dom";

export const BMISection = () => {
  return (
    <div className="BMISection">
      <div className="row mainHBMI">
        <div className="col-sm-7">
          <h1 className="text-light">Calculate your BMI</h1>
          <p className="text-light">
            Maintaining a weight in the healthy BMI range is one way to support
            overall health as you age.
          </p>

          <div className="d-flex">
            <table className="table text-light ">
              <thead>
                <tr>
                  <th scope="col">BMI HEALTHY WEIGHT REFERENCE:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Underweight</th>
                  <td>Below 18.5</td>
                </tr>
                <tr>
                  <th scope="row">Normal weight</th>
                  <td>18.5 to 24.9</td>
                </tr>
                <tr>
                  <th scope="row">Overweight</th>
                  <td>25 to 29.9</td>
                </tr>
                <tr>
                  <th scope="row">Obesity</th>
                  <td>30 and Above</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-5 mx-auto">
            <div className="card text-center" style={{ maxWidth: "25rem" }}>
                <div className="card-body">
                <div className="row m-2">
                    <h1 className="card-title m-2">Calculate Your BMI</h1>
                        <div className="col">
                            <form className="form" id="form" onsubmit="return validateForm()">
                                <div className="row-one">
                                    <input type="text" class="text-input" id="age" autocomplete="off" required/><p className="text">Age</p>
                                    <label className="container">
                                    <input type="radio" name="radio" id="f" /><p className="text">Female</p>
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">
                                    <input type="radio" name="radio" id="m" /><p className="text">Male</p>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div class="row-two">
                                    <input type="text" className="text-input" id="height" autocomplete="off" required /><p className="text">Height (cm)</p>
                                    <input type="text" className="text-input" id="weight" autocomplete="off" required /><p className="text">Weight (kg)</p>
                                </div>
                                <h5 href="#" className="btn btn-orange m-4 ">
                                  Compute BMI <span className="fa fa-arrow-right"></span>
                                </h5>
                            </form>
                </div>
            </div>

            <h1>Your Weight</h1>
            <h1>22.5</h1>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default BMISection;
