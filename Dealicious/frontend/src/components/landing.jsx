import React from 'react';
import '../style.css';

// Import all assets
import logo from '../assets/logo0.svg';
import heroBg from '../assets/hero-bg0.png';
import vector0 from '../assets/vector0.svg';
import vector1 from '../assets/vector1.svg';
import vector2 from '../assets/vector2.svg';
import vector3 from '../assets/vector3.svg';
import image340 from '../assets/image-340.png';
import image350 from '../assets/image-350.png';
import image360 from '../assets/image-360.png';
import rating from '../assets/raiting0.svg';
import arrow0 from '../assets/arrow0.svg';
import arrow1 from '../assets/arrow1.svg';
import logo1 from '../assets/logo1.svg';
import facebookIcon from '../assets/facebook-icon0.svg';
import twitterIcon from '../assets/twitter-icon0.svg';
import youtubeIcon from '../assets/youtube-icon0.svg';
import linkedInIcon from '../assets/linked-in-icon0.svg';

const Landing = () => {
  return (
    <div className="landing">
      {/* Navbar */}
      <div className="landing-navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="categories">
          <div className="home">Home</div>
          <div className="meal-planner">Meal Planner</div>
          <div className="grocery-deal">Grocery Deal</div>
        </div>
        <div className="login-btn">
          <div className="login">Sign In / Sign Up</div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="landing-hero">
        <img className="hero-bg" src={heroBg} alt="hero background" />
        <div className="sub-title">
          <div className="hero-sub-title">
            Explore budget-friendly meal plans at Dealicious,
            <br />
            designed to nourish your body while fitting your lifestyle and goals.
          </div>
          <div className="component-05">
            <div className="text-324">Get Started</div>
            <img className="vector" src={vector0} alt="vector" />
          </div>
        </div>
        <div className="hero-title">
          ONLY THE BEST
          <br />
          FOR YOU
        </div>
      </div>

      {/* Main Content */}
      <div className="landing-content">
        <div className="seperator"></div>

        {/* Section 01 - Weekly Meal Planner */}
        <div className="landing-container-01">
          <div className="title-content-01">
            <div className="title-container-01">
              <div className="_01">01</div>
              <div className="text-295">Weekly Meal Planner</div>
            </div>
            <div className="landing-container-body">
              Plan affordable meals, track nutritional balance, and explore diverse
              cuisines effortlessly.
              <br />
              Stay organized while enjoying healthy, budget-friendly, and flavorful
              dishes.
            </div>
          </div>
          <div className="card-container-01">
            <div className="left-card-container">
              <div className="card-01">
                <div className="card-01-title">Budget</div>
                <div className="card-01-body">
                  Create cost-effective meal plans that minimize waste and make the
                  most of your grocery budget.
                </div>
              </div>
              <div className="card-02">
                <div className="card-02-title">Nutrition</div>
                <div className="card-02-body">
                  Enjoy well-balanced meals packed with essential nutrients to
                  support a healthy lifestyle.
                </div>
              </div>
              <div className="card-03">
                <div className="card-03-title">Cuisine</div>
                <div className="card-03-body">
                  Discover a variety of flavorful dishes inspired by different
                  cuisines to keep your meals exciting.
                </div>
              </div>
            </div>
            <div className="image-34" style={{ backgroundImage: `url(${image340})` }}>
              <div className="component-01">
                <div className="text-303">Explore more</div>
                <img className="vector2" src={vector1} alt="vector" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 02 - Exclusive Deals */}
        <div className="landing-container-02">
          <div className="title-content-02">
            <div className="landing-content-title-02">
              <div className="_02">02</div>
              <div className="text-305">Exclusive Deals</div>
            </div>
            <div className="text-306">
              Access special discounts and limited-time offers on a variety of
              products and services.
              <br />
              Save more on your favorite brands while enjoying premium deals
              tailored to your needs.
            </div>
          </div>
          <div className="card-container-02">
            <img className="image-35" src={image350} alt="steak" />
            <div className="steak-description">
              <div className="steak-title-container-01">
                <div className="steak-title-container-02">
                  <div className="text-307">USDA Choice Ribeye Steak</div>
                  <div className="rating-container">
                    <img className="raiting" src={rating} alt="rating" />
                    <div className="text-308">5.0 (259)</div>
                  </div>
                </div>
                <div className="price-container">
                  <div className="text-309">$12.49</div>
                  <div className="sale-tag">
                    <div className="text-310">40% off</div>
                  </div>
                </div>
              </div>
              <div className="text-311">
                Enjoy premium, tender, and juicy USDA Choice ribeye steak at an
                unbeatable price. Perfect for grilling, pan-searing, or roasting,
                this high-quality cut delivers rich flavor and exceptional marbling.
              </div>
              <div className="property-1-default">
                <div className="text-312">Clip the coupon</div>
                <img className="vector3" src={vector2} alt="vector" />
              </div>
            </div>
          </div>
        </div>

        {/* Section 03 - Grocery With Exclusive Price */}
        <div className="landing-container-03">
          <div className="title-content-03">
            <div className="landing-content-title-03">
              <div className="text-313">03</div>
              <div className="text-314">Grocery With Exclusive Price</div>
            </div>
            <div className="text-315">
              Get the best deals on fresh groceries with special discounts and
              member-only pricing.
              <br />
              Save more on everyday essentials while enjoying quality products at
              unbeatable prices.
            </div>
          </div>
          <div className="image-36" style={{ backgroundImage: `url(${image360})` }}>
            <div className="component-02">
              <div className="text-317">Explore more</div>
              <img className="vector4" src={vector3} alt="vector" />
            </div>
            <div className="card-container-03-title">
              <div className="text-316">
                Grab Your Favorites Add to Cart Now Start Saving Today
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="seperator2"></div>
        <div className="review-container">
          <div className="component-03">
            <img className="arrow" src={arrow0} alt="arrow left" />
          </div>
          <div className="review-text-container">
            <div className="text-318">Hear It From Our Users</div>
            <div className="review-sub-title">
              <div className="text-319">Why Dealicious?</div>
              <div className="text-320">Time-Saving, Money-Saving, Healthy Eating</div>
            </div>
            <div className="text-321">
              "Super easy to use, saves me time and money,
              <br />
              and helps me eat healthier. Highly recommend!"
            </div>
          </div>
          <div className="component-04">
            <img className="arrow2" src={arrow1} alt="arrow right" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="logo-container">
            <img className="logo2" src={logo1} alt="logo" />
            <div className="social-media-icons">
              <img className="facebook-icon" src={facebookIcon} alt="facebook" />
              <img className="twitter-icon" src={twitterIcon} alt="twitter" />
              <img className="youtube-icon" src={youtubeIcon} alt="youtube" />
              <img className="linked-in-icon" src={linkedInIcon} alt="linkedin" />
            </div>
          </div>
          <div className="quick-link-container">
            <div className="quick-links">Quick Links</div>
            <div className="bottom-navbar">
              <div className="bottom-home">Home</div>
              <div className="bottom-meal-planner">Meal Planner</div>
              <div className="bottom-grocery">Grocery Deal</div>
            </div>
          </div>
          <div className="contact-container">
            <div className="text-291">We want to get to know you more!</div>
            <div className="email-field">
              <div className="text-292">Enter your Email</div>
            </div>
            <div className="send-us-btn">
              <div className="background"></div>
              <div className="text-293">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing; 