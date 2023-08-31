import React, { useState } from "react";
import "../component/styles/home.css";

const Homepage = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmivalue = weight / (heightInMeters * heightInMeters);
      setBMI(bmivalue.toFixed(2));
    } else {
      setBMI(null);
    }
  };

  const statusCheck = () => {
    if (bmi < 18.5) {
      setStatus("underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setStatus("healthy weight");
    } else if (bmi >= 25 && bmi <= 34.9) {
      setStatus("overweight");
    } else if (bmi > 34.9) {
      setStatus("obese");
    }
  };

  React.useEffect(() => {
    statusCheck();
  }, [bmi]);

  return (
    <section className='header'>
      <div className='information-header'>
        <h1>Body Mass Index Calculator</h1>
        <p>
          This calculation is useful for individuals, healthcare professionals,
          and fitness experts to evaluate potential health risks associated with
          their body composition. Its a simple yet effective tool for promoting
          overall health and well-being.
        </p>
     </div>
      <div className='calculator'>
        <div className='inner-calculator'>
          <h3>Enter your details below</h3>
          <label htmlFor=''>Height </label>
          <input
            type='number'
            name='height'
            id=''
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
          <label htmlFor=''>Weight </label>
          <input
            type='number'
            name='weight'
            id=''
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <button onClick={calculateBMI}>Calculate BMI</button>
          <div className='result'>
            {bmi ? (
              <p>
                Your BMI is ... <span>{bmi}</span>{" "}
                <span> Your BMI suggests youre {status}</span>
              </p>
            ) : (
              <p>
                Enter your height and weight to get your BMI and health status
                suggestion{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
