import "../styles/SignIn.css";
import { Link } from "react-router-dom";
import googleLogo from "../assets/googlelogo.png";
import appleLogo from "../assets/applelogo.png";

const SignIn = () => {
    return (
      <div className="sign_form">
        <div className="sign_form0">
          <div
            style={{
              fontFamily: "SFProDisplay",
              fontSize: "36px",
              fontWeight: "normal",
  
              color: "#2EA45E",
            }}
          >
            Welcome Back
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              color: "#2A292B",
            }}
          >
            Enter your credentials to create your account
          </div>
        </div>
        <div className="sign_form1">
          {/* Email address */}
          <div className="sign_form0">
            <div
              style={{
                fontSize: "16px",
                fontWeight: "normal",
                color: "#2A292B",
              }}
            >
              Email address
            </div>
            <input type="email" name="email" className="sign_form2" />
          </div>
          {/* Password */}
          <div className="sign_form0">
            <div
              style={{
                fontSize: "16px",
                fontWeight: "normal",
                color: "#2A292B",
              }}
            >
              Password
            </div>
            <input type="password" name="password" className="sign_form2" />
          </div>
        </div>
        <div className="sign_form3">
          <input type="checkbox" name="agree" />
          <label>Remember me</label>
        </div>
        <button
          style={{
            width: "100%",
            borderRadius: "11.16px",
            opacity: 1,
            padding: "10px 202.3px",
            background: "#2EA45E",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "normal",
          }}
        >
          Sign In
        </button>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "normal",
              color: "#2A292B",
            }}
          >
            Or sign up with
          </p>
        </div>
        <div className="sign_form4">
          <div className="sign_form5">
            <div className="sign_form6">
              <img src={googleLogo} alt="google" style={{ height: "100%" }} />
              Sign up with Google
            </div>
            <div className="sign_form6">
              <img src={appleLogo} alt="apple" style={{ height: "100%" }} />
              Sign up with Apple
            </div>
          </div>
          <div className="sign_form7">
            Have an account?{" "}
            <Link to="/sign-up" style={{ color: "#2EA45E" }}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default SignIn;