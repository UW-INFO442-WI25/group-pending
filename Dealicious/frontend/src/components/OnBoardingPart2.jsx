import OnBoardingPart4 from "./OnBoardingPart4";
import PropTypes from "prop-types";

const OnBoardingPart2 = ({ changePart }) => {
  return (
    <>
      <div className="goFqH">
        <OnBoardingPart4
          title0={"Tell Us More About You"}
          title1={"Before we get started, we just need a few details from you."}
        />
      </div>
      <div className="FhfQ5">
        <label htmlFor="dietary-restrictions" className="uQe9Z">Do you have any dietary restrictions or preferences?</label>
        <input
          id="dietary-restrictions"
          type="text"
          aria-label="Enter your dietary restrictions or preferences"
          style={{
            borderRadius: "12.15px",
            width: "100%",
            fontSize: "18px",
            boxSizing: "border-box",
            border: "1.21px solid #FFFFFF",
            padding: "12.15px 0px 12.15px 12.15px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <button
          className="btn0"
          onClick={() => changePart(1)}
          onTouchStart={() => changePart(1)}
          aria-label="Go back to previous step"
        >
          Back
        </button>
        <button
          className="btn0"
          onClick={() => changePart(3)}
          onTouchStart={() => changePart(3)}
          aria-label="Go to next step"
        >
          Next
        </button>
      </div>
    </>
  );
};

OnBoardingPart2.propTypes = {
  changePart: PropTypes.func.isRequired,
};

export default OnBoardingPart2;