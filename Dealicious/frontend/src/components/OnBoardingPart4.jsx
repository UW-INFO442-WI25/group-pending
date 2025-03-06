import PropTypes from "prop-types";
const OnBoardingPart1 = ({ title0, title1 }) => {
  return (
    <div className="sQZ4S">
      <div className="DUKUN">{title0}</div>
      <p className="M6ZdE">{title1}</p>
    </div>
  );
};

OnBoardingPart1.propTypes = {
  title0: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
};

export default OnBoardingPart1;
