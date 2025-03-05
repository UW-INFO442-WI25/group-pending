import "../styles/Sign.css";
import bg0 from "../assets/sign0.png";
import SignUp from "../components/SignUp";
const SignUpPage = () => {
  return (
    <div className="signpage">
      <div className="signpage_left" style={{ overflow: "auto" }}>
        <SignUp />
      </div>
      <div className="signpage_right">
        <img src={bg0} alt="background" className="sign_image" />
      </div>
    </div>
  );
};

export default SignUpPage;
