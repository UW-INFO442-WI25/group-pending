import { Link } from "react-router-dom";
import OnBoardingPart4 from "./OnBoardingPart4";

const OnBoardingPart5 = () => {
  return (
    <>
      <div className="goFqH">
        <OnBoardingPart4
          title0={"You’re all set!"}
          title1={"We've tailored your weekly meal plan based on the information you provided."}
        />
      </div>
      <Link to="/meal-planner" className="btn0">Check out your first meal plan</Link>
    </>
  );
};

export default OnBoardingPart5;
