import OnBoardingPart4 from "./OnBoardingPart4";
import PropTypes from "prop-types";

const OnBoardingPart1 = ({ changePart }) => {
  return (
    <>
      <div className="goFqH">
        <OnBoardingPart4
          title0={"Tell Us More About You"}
          title1={"Before we get started, we just need a few details from you."}
        />
      </div>
      <div className="FhfQ5">
        <p className="uQe9Z">What is your weekly food budget?</p>
        <input
          type="text"
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
        <button className="btn0" onClick={() => changePart(0)}>
          Back
        </button>
        <button className="btn0" onClick={() => changePart(2)}>
          Next
        </button>
      </div>
    </>
  );
};

OnBoardingPart1.propTypes = {
  changePart: PropTypes.func.isRequired,
};

export default OnBoardingPart1;
