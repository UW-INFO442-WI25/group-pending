import PropTypes from "prop-types";

const OnBoardingPart4 = ({ title0, title1 }) => {
  return (
    <div className="sQZ4S" role="region" aria-labelledby="onboarding-title">
      <div className="DUKUN" id="onboarding-title">{title0}</div>
      <p className="M6ZdE">{title1}</p>
    </div>
  );
};

OnBoardingPart4.propTypes = {
  title0: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
};

export default OnBoardingPart4;