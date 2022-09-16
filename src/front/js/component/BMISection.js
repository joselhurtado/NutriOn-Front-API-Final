import React from "react";
import { Link } from "react-router-dom";

export const BMISection = () => {
	return (
        <div className="BMISection">
            <div className="row mainHBMI">
                <div className="col-sm-7">
                <h1 className='text-light'>Calculate your BMI</h1>
                    <p className="text-light">Maintaining a weight in the healthy BMI range is one way to support overall health as you age.</p>
                    
                    <div className='d-flex'>
                    <table class="table text-light ">
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
                        <div className="card text-center" style={{maxWidth: "25rem"}}>
                            <div className="card-body">
                            <div class="row ">
                                <h1 className="card-title m-2">YOUR HEIGHT</h1>
                                    <div className="col">
                                        <div type="text" class="form-control" placeholder="Feet">Feet</div>
                                    </div>
                                        <div className="col">
                                        <div type="text" class="form-control" placeholder="Inches">Inches</div>
                                    </div>
                            </div> 

                            <div class="row m-2">
                                <h1 className="card-title m-2">YOUR WEIGHT</h1>
                                    <div className="col">
                                        <div type="text" class="form-control" placeholder="Weight">Weight</div>
                                    </div>
                            </div> 
                                <h5 href="#" class="btn btn-orange m-4 ">Compute BMI <span className="fa fa-arrow-right"></span></h5>
                                <h1>Your Height</h1>
                                <h1>22.5</h1>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
	);
};

export default BMISection;


