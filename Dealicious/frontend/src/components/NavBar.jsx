import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.categories}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/meal-planner" className={styles.navLink}>Meal Planner</Link>
        <Link to="/grocery-deals" className={styles.navLink}>Grocery Deal</Link>
      </div>
      <div className={styles.loginBtn}>
      <Link to="/sign-in" className={styles.login}>Sign In / Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;