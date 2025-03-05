import "../styles/SignIn.css";
import { Link } from "react-router-dom";
import googleLogo from "../assets/googlelogo.png";
import appleLogo from "../assets/applelogo.png";

const SignUp = () => {
  return (
    <div className="IGrkypdOOu">
      <div className="ss1D6AkttG">
        <div
          style={{
            fontFamily: "SFProDisplay",
            fontSize: "36px",
            fontWeight: "normal",

            color: "#2EA45E",
          }}
        >
          Start Your Journey With Us
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
      <div className="XMKf4gMwmG">
        <div className="ss1D6AkttG">
          <div
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              color: "#2A292B",
            }}
          >
            Name
          </div>
          <input type="text" name="name" className="m0Zw1mYbzQ" />
        </div>
        {/* Email address */}
        <div className="ss1D6AkttG">
          <div
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              color: "#2A292B",
            }}
          >
            Email address
          </div>
          <input type="email" name="email" className="m0Zw1mYbzQ" />
        </div>
        {/* Password */}
        <div className="ss1D6AkttG">
          <div
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              color: "#2A292B",
            }}
          >
            Password
          </div>
          <input type="password" name="password" className="m0Zw1mYbzQ" />
        </div>
      </div>
      <div className="LX0ja9IV4T">
        {/* I agree to the terms & policy */}
        <input type="checkbox" name="agree" />
        <label>I agree to the terms & policy</label>
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
        Sign Up
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
      <div className="jRsgCfXkxQ">
        <div className="oslgl2tBvI">
          <div className="h66zTSQaMB">
            <img src={googleLogo} alt="google" style={{ height: "100%" }} />
            Sign up with Google
          </div>
          <div className="h66zTSQaMB">
            <img src={appleLogo} alt="apple" style={{ height: "100%" }} />
            Sign up with Apple
          </div>
        </div>
        <div className="fKUKncA48E">
          Have an account?{" "}
          <Link to="/sign-in" style={{ color: "#2EA45E" }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
