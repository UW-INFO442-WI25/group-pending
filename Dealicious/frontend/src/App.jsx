import { useEffect, useState } from "react";
import axios from "axios";
import "./mealPlan.css";
// 引入图片
import png0 from "./assets/20250226155143.png";
import s0 from "./assets/s0.svg";
function App() {
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [lunchRecipes, setLunchRecipes] = useState([]);
  const [dinnerRecipes, setDinnerRecipes] = useState([]);
  const [nutritionOption, setNutritionOption] = useState("");
  const [rating, setRating] = useState(false);
  const [cuisineOption, setCuisineOption] = useState("");
  const [minFiber, setMinFiber] = useState(null);
  const [maxCarb, setMaxCarb] = useState(null);
  const [minProtein, setMinProtein] = useState(null);

  const categories = [
    "Gluten Free",
    "High-Protein",
    "Low-Carb",
    "High-Fiber",
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Keto",
  ];

  const specialParams = {
    "High-Protein": { minProtein: 25 },
    "Low-Carb": { maxCarb: 45 },
    "High-Fiber": { minFiber: 12 },
  };

  const handleSelection = (category) => {
    if (specialParams[category]) {
      setMinProtein(specialParams[category].minProtein || null);
      setMaxCarb(specialParams[category].maxCarb || null);
      setMinFiber(specialParams[category].minFiber || null);
      setNutritionOption("");
    } else {
      setNutritionOption(category);
      setMinProtein(null);
      setMaxCarb(null);
      setMinFiber(null);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [nutritionOption, rating, cuisineOption]);

  const fetchRecipes = () => {
    let params = {
      nutrition: nutritionOption,
      rating: rating ? 4 : undefined,
      cuisine: cuisineOption,
      type: "breakfast",
      maxCarbs: maxCarb,
      minFiber: minFiber,
      minProtein: minProtein,
    };

    axios
      .get("/api/recipe", { params })
      .then((response) => {
        setBreakfastRecipes(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));

    params = {
      nutrition: nutritionOption,
      rating: rating ? 4 : undefined,
      cuisine: cuisineOption,
      type: "main course",
      maxCarbs: maxCarb,
      minFiber: minFiber,
      minProtein: minProtein,
    };

    axios
      .get("/api/recipe", { params })
      .then((response) => {
        setLunchRecipes(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));

    axios
      .get("/api/recipe", { params })
      .then((response) => {
        setDinnerRecipes(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className={"my-meal-plan "}>
      <div className="navbar">
        <div className="dealicious2">dealicious </div>
        <div className="frame-427318916">
          <div className="frame-427318915">
            <div className="home">Home </div>
            <div className="home">Meal Plan </div>
            <div className="home">Grocery </div>
          </div>
          <div className="frame-1">
            
          </div>
        </div>
        <div className="HmI5EtHwOB">
        <div className="log-in">LogIn </div>
        <div className="SgcpWhP8d0">Get Started</div>
        </div>
      </div>
      <div className="hero">
        <div className="hero1">
          <img src={png0} alt="png0" className="umv49RURnC" />
        </div>
        <div className="hero2">
          <p className="gyfKLcTrZ4">Zaire Dokidis</p>
          <div className="LgL57SFu6z"></div>
          <div className="BkEOXo0iLd">
            <p className="gyfKLcTrZ4">&quot;Super easy to use, saves me</p>
            <p className="gyfKLcTrZ4">time and money, and helps me</p>
            <p className="gyfKLcTrZ4">
              eat healthier. Highly
            </p>
            <p className="gyfKLcTrZ4">recommend!&quot;</p>
          </div>
        </div>
      </div>
      <h1 className="Cuu8Apn8Lg">YOUR WEEKIY MEAL PLAN</h1>
      <div className="content">
        <div className="status-nav">
          <div className="frame-427319028">
            <div className="frame-427319021">
              <div className="day">Day 1 </div>
            </div>
            <div className="frame-427319021">
              <div className="day">Day 2 </div>
            </div>
            <div className="frame-427319021">
              <div className="day">Day 3 </div>
            </div>
            <div className="frame-427319021">
              <div className="day">Day 4 </div>
            </div>
            <div className="frame-427319021">
              <div className="day">Day 5 </div>
            </div>
            <div className="frame-427319021">
              <div className="day">Day 6 </div>
            </div>
            <div className="frame-427319021">
              <div className="day">Day 7 </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="search">Search </div>
          </div>
        </div>
        <div className="main">
          <div className="filter">
            <div className="all-categories">
              <div className="OKfiBvftcs">
                <div className="nutrition-option">Nutrition Option</div>
                <img className="vector" src="vector0.svg" />
              </div>
              {categories.map((category, index) => (
                <label key={index} className="category-option">
                  <input
                    type="radio"
                    name="nutrition"
                    value={category}
                    checked={
                      nutritionOption === category ||
                      (minProtein && category === "High-Protein") ||
                      (maxCarb && category === "Low-Carb") ||
                      (minFiber && category === "High-Fiber")
                    }
                    onChange={() => handleSelection(category)}
                  />
                  <div className="category-text">{category}</div>
                </label>
              ))}
            </div>
            <div className="line-47"></div>
            <div className="all-categories">
              <div className="OKfiBvftcs">
                <div className="nutrition-option">Rating </div>
                <img className="vector2" src="vector1.svg" />
              </div>
              <div className="categories3">
                <input type="checkbox" className="checkbox0" />
                <div className="star-1">
                  <img className="group" src={s0} />
                </div>
                <div className="star-1">
                  <img className="group" src={s0} />
                </div>
                <div className="star-1">
                  <img className="group" src={s0} />
                </div>
                <div className="star-1">
                  <img className="group" src={s0} />
                </div>
                <div className="star-1">
                  <img className="group" src={s0} />
                </div>
                <div className="_4-0-up">4.0 &amp; up </div>
              </div>
            </div>
            <div className="line-48"></div>
            <div className="popular-tag">
              <div className="OKfiBvftcs">
                <div className="nutrition-option">Cuisine Option</div>
              </div>
              <div className="cuisine-options">
                {[
                  "Korean",
                  "Japanese",
                  "Thai",
                  "Chinese",
                  "Mexican",
                  "Indian",
                  "American",
                  "Italian",
                  "Mediterranean",
                  "French",
                  "Vietnamese",
                ].map((cuisine) => (
                  <button
                    key={cuisine}
                    className="btn0"
                    onClick={() => setCuisineOption(cuisine)}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="displaying">
            <div className="frame-427319049">
              <div className="frame-427319048">
                <div className="frame-427319037">
                  <div className="rectangle-26"></div>
                  <div className="breakfast">Breakfast </div>
                </div>
                <div className="breakfast2">
                  {breakfastRecipes.map((recipe, index) => (
                    <div className={index === 0 ? "meal" : "meal2"} key={index}>
                      <div
                        className={
                          index === 0 ? "frame-427318924" : "frame-4273189242"
                        }
                      >
                        <img
                          className={index === 0 ? "icon" : "icon2"}
                          src={index === 0 ? "icon1.svg" : "icon2.svg"}
                        />
                        <div className={index === 0 ? "group-2" : "group-22"}>
                          <div
                            className={index === 0 ? "_520-kcal" : "_520-kcal2"}
                          >
                            520 kcal{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          index === 0 ? "product-image" : "product-image2"
                        }
                      >
                        <img
                          className={index === 0 ? "image" : "image2"}
                          src={recipe.image}
                        />
                      </div>
                      <div
                        className={
                          index === 0 ? "frame-427319029" : "frame-427319042"
                        }
                      >
                        <div
                          className={
                            index === 0 ? "frame-427319020" : "frame-4273190202"
                          }
                        >
                          <div className="info">
                            <div
                              className={
                                index === 0 ? "meal-card" : "meal-card2"
                              }
                            >
                              {recipe.title}
                            </div>
                          </div>
                          <div
                            className={
                              index === 0
                                ? "frame-427319019"
                                : "frame-4273190192"
                            }
                          >
                            <div className="rating3">
                              <div
                                className={index === 0 ? "star-12" : "star-13"}
                              >
                                <img
                                  className={index === 0 ? "group6" : "group11"}
                                  src={
                                    index === 0 ? "group5.svg" : "group10.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-22" : "star-23"}
                              >
                                <img
                                  className={index === 0 ? "group7" : "group12"}
                                  src={
                                    index === 0 ? "group6.svg" : "group11.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-32" : "star-33"}
                              >
                                <img
                                  className={index === 0 ? "group8" : "group13"}
                                  src={
                                    index === 0 ? "group7.svg" : "group12.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-42" : "star-43"}
                              >
                                <img
                                  className={index === 0 ? "group9" : "group14"}
                                  src={
                                    index === 0 ? "group8.svg" : "group13.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-52" : "star-53"}
                              >
                                <img
                                  className={
                                    index === 0 ? "group10" : "group15"
                                  }
                                  src={
                                    index === 0 ? "group9.svg" : "group14.svg"
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className={index === 0 ? "_4-8-100" : "_4-8-1002"}
                            >
                              4.8 (100+){" "}
                            </div>
                          </div>
                          <div className={index === 0 ? "frame-3" : "frame-32"}>
                            <img
                              className={index === 0 ? "vector4" : "vector5"}
                              src={index === 0 ? "vector3.svg" : "vector4.svg"}
                            />
                            <div className="_12-m">12 m </div>
                          </div>
                        </div>
                        {index === 0 && (
                          <img className="add-to-cart" src="add-to-cart0.svg" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="frame-427319047">
                <div className="frame-427319038">
                  <div className="rectangle-26"></div>
                  <div className="lunch">Lunch </div>
                </div>
                <div className="lunch2">
                  {lunchRecipes.map((recipe, index) => (
                    <div className={index === 0 ? "meal" : "meal2"} key={index}>
                      <div
                        className={
                          index === 0 ? "frame-427318924" : "frame-4273189242"
                        }
                      >
                        <img
                          className={index === 0 ? "icon" : "icon2"}
                          src={index === 0 ? "icon1.svg" : "icon2.svg"}
                        />
                        <div className={index === 0 ? "group-2" : "group-22"}>
                          <div
                            className={index === 0 ? "_520-kcal" : "_520-kcal2"}
                          >
                            520 kcal{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          index === 0 ? "product-image" : "product-image2"
                        }
                      >
                        <img
                          className={index === 0 ? "image" : "image2"}
                          src={recipe.image}
                        />
                      </div>
                      <div
                        className={
                          index === 0 ? "frame-427319029" : "frame-427319042"
                        }
                      >
                        <div
                          className={
                            index === 0 ? "frame-427319020" : "frame-4273190202"
                          }
                        >
                          <div className="info">
                            <div
                              className={
                                index === 0 ? "meal-card" : "meal-card2"
                              }
                            >
                              {recipe.title}
                            </div>
                          </div>
                          <div
                            className={
                              index === 0
                                ? "frame-427319019"
                                : "frame-4273190192"
                            }
                          >
                            <div className="rating3">
                              <div
                                className={index === 0 ? "star-12" : "star-13"}
                              >
                                <img
                                  className={index === 0 ? "group6" : "group11"}
                                  src={
                                    index === 0 ? "group5.svg" : "group10.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-22" : "star-23"}
                              >
                                <img
                                  className={index === 0 ? "group7" : "group12"}
                                  src={
                                    index === 0 ? "group6.svg" : "group11.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-32" : "star-33"}
                              >
                                <img
                                  className={index === 0 ? "group8" : "group13"}
                                  src={
                                    index === 0 ? "group7.svg" : "group12.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-42" : "star-43"}
                              >
                                <img
                                  className={index === 0 ? "group9" : "group14"}
                                  src={
                                    index === 0 ? "group8.svg" : "group13.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-52" : "star-53"}
                              >
                                <img
                                  className={
                                    index === 0 ? "group10" : "group15"
                                  }
                                  src={
                                    index === 0 ? "group9.svg" : "group14.svg"
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className={index === 0 ? "_4-8-100" : "_4-8-1002"}
                            >
                              4.8 (100+){" "}
                            </div>
                          </div>
                          <div className={index === 0 ? "frame-3" : "frame-32"}>
                            <img
                              className={index === 0 ? "vector4" : "vector5"}
                              src={index === 0 ? "vector3.svg" : "vector4.svg"}
                            />
                            <div className="_12-m">12 m </div>
                          </div>
                        </div>
                        {index === 0 && (
                          <img className="add-to-cart" src="add-to-cart0.svg" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="frame-427319046">
                <div className="frame-427319038">
                  <div className="rectangle-26"></div>
                  <div className="dinner">Dinner </div>
                </div>
                <div className="lunch2">
                  {dinnerRecipes.map((recipe, index) => (
                    <div className={index === 0 ? "meal" : "meal2"} key={index}>
                      <div
                        className={
                          index === 0 ? "frame-427318924" : "frame-4273189242"
                        }
                      >
                        <img
                          className={index === 0 ? "icon" : "icon2"}
                          src={index === 0 ? "icon1.svg" : "icon2.svg"}
                        />
                        <div className={index === 0 ? "group-2" : "group-22"}>
                          <div
                            className={index === 0 ? "_520-kcal" : "_520-kcal2"}
                          >
                            520 kcal{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          index === 0 ? "product-image" : "product-image2"
                        }
                      >
                        <img
                          className={index === 0 ? "image" : "image2"}
                          src={recipe.image}
                        />
                      </div>
                      <div
                        className={
                          index === 0 ? "frame-427319029" : "frame-427319042"
                        }
                      >
                        <div
                          className={
                            index === 0 ? "frame-427319020" : "frame-4273190202"
                          }
                        >
                          <div className="info">
                            <div
                              className={
                                index === 0 ? "meal-card" : "meal-card2"
                              }
                            >
                              {recipe.title}
                            </div>
                          </div>
                          <div
                            className={
                              index === 0
                                ? "frame-427319019"
                                : "frame-4273190192"
                            }
                          >
                            <div className="rating3">
                              <div
                                className={index === 0 ? "star-12" : "star-13"}
                              >
                                <img
                                  className={index === 0 ? "group6" : "group11"}
                                  src={
                                    index === 0 ? "group5.svg" : "group10.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-22" : "star-23"}
                              >
                                <img
                                  className={index === 0 ? "group7" : "group12"}
                                  src={
                                    index === 0 ? "group6.svg" : "group11.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-32" : "star-33"}
                              >
                                <img
                                  className={index === 0 ? "group8" : "group13"}
                                  src={
                                    index === 0 ? "group7.svg" : "group12.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-42" : "star-43"}
                              >
                                <img
                                  className={index === 0 ? "group9" : "group14"}
                                  src={
                                    index === 0 ? "group8.svg" : "group13.svg"
                                  }
                                />
                              </div>
                              <div
                                className={index === 0 ? "star-52" : "star-53"}
                              >
                                <img
                                  className={
                                    index === 0 ? "group10" : "group15"
                                  }
                                  src={
                                    index === 0 ? "group9.svg" : "group14.svg"
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className={index === 0 ? "_4-8-100" : "_4-8-1002"}
                            >
                              4.8 (100+){" "}
                            </div>
                          </div>
                          <div className={index === 0 ? "frame-3" : "frame-32"}>
                            <img
                              className={index === 0 ? "vector4" : "vector5"}
                              src={index === 0 ? "vector3.svg" : "vector4.svg"}
                            />
                            <div className="_12-m">12 m </div>
                          </div>
                        </div>
                        {index === 0 && (
                          <img className="add-to-cart" src="add-to-cart0.svg" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="frame-5944">
          <div className="company-name">
            <div className="dealicious">dealicious </div>
            <div className="we-help-college-students-build-healthy-eating-habits-while-staying-within-a-tight-budget-our-service-provides-personalized-weekly-meal-plans-tailored-to-their-nutritional-preferences-making-balanced-eating-both-accessible-and-affordable">
              We help college students build healthy eating habits while staying
              within a tight budget. Our service provides personalized weekly
              meal plans tailored to their nutritional preferences, making
              balanced eating both accessible and affordable.{" "}
            </div>
          </div>
          <div className="quick-link">
            <div className="services">Quick Links </div>
            <div className="documentation">Home </div>
            <div className="documentation">Meal Plan </div>
            <div className="documentation">Grocery </div>
            <div className="documentation">Contact Us </div>
          </div>
          <div className="company">
            <div className="company2">Company </div>
            <div className="about">About </div>
            <div className="terms">Terms </div>
            <div className="privacy-policy">Privacy Policy </div>
          </div>
          <div className="contact">
            <div className="more">Contact </div>
            <div className="call-1-123456789">
              <span>
                <span className="call-1-123456789-span">Call</span>
                <span className="call-1-123456789-span2">:</span>
                <span className="call-1-123456789-span3">+1 123456789</span>
              </span>{" "}
            </div>
            <div className="email-dealicious-gmail-com">
              <span>
                <span className="email-dealicious-gmail-com-span">Email :</span>
                <span className="email-dealicious-gmail-com-span2">
                  dealicious@gmail.com
                </span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
