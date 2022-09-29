import React, { useState, useEffect, useContext } from "react";
import { Context } from "/src/front/js/store/appContext.js";
import { useNavigate } from "react-router-dom";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";

export function SignUpFormUser() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailsignup: "",
    userName: "",
    passWord: "",
    gender: "",
    weightgoal: "",
    sex: "",
  });

  useEffect(() => {
    console.log("store", store);
  }, []);

  const { store, actions } = useContext(Context); //Const to call store data from Flux (Actions is not used yet)

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", data);
    actions.addsignupData(data);
    navigate("/SignUpGoalsPage");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <div className="form-user">
            <input
              onChange={(e) => handle(e)}
              id="firstName"
              value={data.firstName}
              className="form-control"
              type="text"
              placeholder="First Name"
              required
            ></input>
            <input
              onChange={(e) => handle(e)}
              id="lastName"
              value={data.lastName}
              className="form-control"
              type="text"
              placeholder="Last Name"
              required
            ></input>
          </div>
          <div className="Userinfo">
            <input
              onChange={(e) => handle(e)}
              id="emailsignup"
              value={data.email}
              className="form-control"
              type="email"
              placeholder="Enter your email"
              required
            ></input>
          </div>
          <div className="UserinfoPassword">
            <input
              onChange={(e) => handle(e)}
              id="userName"
              value={data.userName}
              className="form-control"
              type="text"
              placeholder="Enter username"
              required
            ></input>
            <input
              onChange={(e) => handle(e)}
              id="passWord"
              value={data.passWord}
              className="form-control"
              type="text"
              placeholder="Enter password"
              required
            ></input>
          </div>
        </div>
        <hr/>
        <div className="weightgoal">
          <h5 className="weight-title">What is your weight goal?</h5>
        </div>
        <div className="weightgoalbuttons">
          <div>
            <button
              onClick={(e) => {
                setData({ ...data, weightgoal: "Lose weight" });
              }}
              value={"lose Weight"}
              className="btn btnactivity"
              type="button"
              id="weightbtn"
            >
              Lose Weight
            </button>
            <button
              onClick={(e) => {
                setData({ ...data, weightgoal: "Gain weight" });
              }}
              className="btn btnactivity"
              type="button"
              id="weightbtn"
            >
              Gain Weight
            </button>
            <button
              onClick={(e) => {
                setData({ ...data, weightgoal: "Maintain Weight" });
              }}
              className="btn btnactivity"
              type="button"
              id="weightbtn"
            >
              Maintain Weight
            </button>
            <hr/>

            <div className="genderP">
              <h5 className="gender-title">What is your gender?</h5>
            </div>
            <div className="Genderdiv">
              <button
                onClick={(e) => {
                  setData({ ...data, sex: "Male" });
                }}
                className="btn btnactivity"
                type="button"
                id="genderbtn"
              >
                Male
              </button>
              <button
                onClick={(e) => {
                  setData({ ...data, sex: "Female" });
                }}
                className="btn btnactivity"
                type="button"
                id="genderbtn"
              >
                Female
              </button>
              <button
                onClick={(e) => {
                  setData({ ...data, sex: "Other" });
                }}
                className="btn btnactivity"
                type="button"
                id="genderbtn"
              >
                Other
              </button>
            </div>
          </div>
        </div>
        <div className="SignupFormbtn space-between">
          <Link to="/WelcomePage">
            <button className="btn btn-light" id="Questionbuttons1">
              Go Back
            </button>
          </Link>
          <Link to="/SignUpGoalsPage">
            <button className="btn btn-orange" id="Questionbuttons">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignUpFormUser;
