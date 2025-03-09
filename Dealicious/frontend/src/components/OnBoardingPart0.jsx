import PropTypes from "prop-types";
import OnBoardingPart4 from "./OnBoardingPart4";

const OnBoardingPart0 = ({ changePart }) => {
  return (
    <>
      <div className="topic">
        <OnBoardingPart4
          title0={"Tell Us More About You"}
          title1={"Before we get started, we just need a few details from you."}
        />
      </div>
      <div className="info">
        <label htmlFor="zip-code" className="part7">What is your zip code?</label>
        <input
          id="zip-code"
          type="text"
          aria-label="Enter your zip code"
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
      <div className="button-container">
        <button
          className="nextstep"
          onClick={() => changePart(1)}
          onTouchStart={() => changePart(1)}
          aria-label="Next step"
        >
          Next
        </button>
      </div>
    </>
  );
};

OnBoardingPart0.propTypes = {
  changePart: PropTypes.func.isRequired,
};

export default OnBoardingPart0;