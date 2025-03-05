import "../styles/Sign.css";
import SignIn from "../components/SignIn";
import bg0 from "../assets/sign1.png";
const SignInPage = () => {
  return (
    <div className="signpage">
      <div className="signpage_left" style={{ overflow: "auto" }}>
        <SignIn />
      </div>
      <div className="signpage_right">
        <img src={bg0} alt="background" className="sign_image" />
      </div>
    </div>
  );
}

export default SignInPage;