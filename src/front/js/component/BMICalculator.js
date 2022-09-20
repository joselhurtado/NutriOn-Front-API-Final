import React, { useState } from "react";

const BMICalculator = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleBmi = () => {
    let value = (weight / height / height).toFixed(1);
    setBmi(value * 703);
    
    if (value < 18.5) {
      setInfo("Under Weight");
    } else if (value > 18.5 && vallue <= 24.9) {
      setInfo("Healthy");
    } else if (value > 24.9 && value < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };

  return (
    <div className="container">
      <div className="col-sm m-4">
        <label>Set Height</label>
        <input
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="5.10"
        />
      </div>

      <div className="col-sm m-4">
        <label>Set Weight</label>
        <input
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="150"
        />
      </div>

      <button className="btn btn-orange" onClick={handleBmi}>
        Calculate
      </button>
      <h4 className="mt-4"><strong>Your BMI is:</strong></h4>
        <h1 className="m-2">{bmi}</h1>
      <h4 className="m-2"><strong>Your Range info:</strong> <br />{info}</h4>
    </div>
  );
};

export default BMICalculator;
