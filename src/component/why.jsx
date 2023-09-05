import "../component/styles/why.css";
import { Icecream, Exercise, Sleep } from "../assets/svg";


const Why = () => {
  return (
    <>
    <div className="bmi-details">
      <div className="image-div">
        <img src='../src/assets/mobile.png' alt='someone eating' srcSet='' />
        
      </div>
      <div>
        <h2>What your BMI result means</h2>
        <p>
          Your BMI result gives you an idea of your weight relative to your
          height. A BMI range of 18.5 to 24.9 is considered a `&apos;`healthy weight`&apos;`. Maintaining a healthy weight may lower your chances of experiencing health issues later on such as obesity and type 2 diabetes.
          
          Remember, BMI is a basic measure and doesn`&apos;`t consider muscle and other
          factors. For personalized health advice, consult a professional.
        </p>
      </div></div>
      <div className="improve">
        <div className="improve-card">
          <Icecream />
          <h2>Regular exercise</h2>
          <p>Exercise improves fitness, aids weight controle, elevates mood and reduces disease risk, fostering wellness and longevity</p>
        </div>
        <div className="improve-card">
        <Exercise />
          <h2>Regular exercise</h2>
          <p>Exercise improves fitness, aids weight controle, elevates mood and reduces disease risk, fostering wellness and longevity</p>
        </div>
        <div className="improve-card">
         <Sleep />
          <h2>Regular exercise</h2>
          <p>Exercise improves fitness, aids weight controle, elevates mood and reduces disease risk, fostering wellness and longevity</p>
        </div>
      
    </div></>
  );
};

export default Why;
