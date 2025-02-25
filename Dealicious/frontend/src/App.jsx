import { useEffect, useState } from "react";
import axios from "axios";
import "./mealPlan.css";

function App() {
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);
  const [lunchRecipes, setLunchRecipes] = useState([]);
  const [dinnerRecipes, setDinnerRecipes] = useState([]);
  const [nutritionOption, setNutritionOption] = useState("");
  const [rating, setRating] = useState(false);
  const [cuisineOption, setCuisineOption] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, [nutritionOption, rating, cuisineOption]);

  const fetchRecipes = () => {
    let params = {
      nutrition: nutritionOption,
      rating: rating ? 4 : undefined,
      cuisine: cuisineOption,
      type: "breakfast"
    };

    axios.get("/api/recipe", { params })
      .then(response => {
        setBreakfastRecipes(response.data.results)
        console.log(response.data.results);
      })
      .catch(error => console.error("Error fetching data:", error));

      params = {
        nutrition: nutritionOption,
        rating: rating ? 4 : undefined,
        cuisine: cuisineOption,
        type: "main course"
      };
  
      axios.get("/api/recipe", { params })
        .then(response => {
          setLunchRecipes(response.data.results)
          console.log(response.data.results);
        })
        .catch(error => console.error("Error fetching data:", error));

        axios.get("/api/recipe", { params })
        .then(response => {
          setDinnerRecipes(response.data.results)
          console.log(response.data.results);
        })
        .catch(error => console.error("Error fetching data:", error));
  };
  

  return (
    <div className={"my-meal-plan "}>
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
            <div className="design">Meal Plan </div>
            <div className="themes">Grocery </div>
            <div className="illustrations">Contact Us </div>
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
      <div className="content">
        <div className="current-status">
          <div className="low-carb-meal-plan">Low Carb Meal Plan </div>
        </div>
        <div className="status-nav">
          <div className="frame-427319028">
            <div className="frame-427319021">
              <div className="day-1">Day 1 </div>
            </div>
            <div className="frame-427319022">
              <div className="day-2">Day 2 </div>
            </div>
            <div className="frame-427319023">
              <div className="day-3">Day 3 </div>
            </div>
            <div className="frame-427319024">
              <div className="day-4">Day 4 </div>
            </div>
            <div className="frame-427319025">
              <div className="day-5">Day 5 </div>
            </div>
            <div className="frame-427319026">
              <div className="day-6">Day 6 </div>
            </div>
            <div className="frame-427319027">
              <div className="day-7">Day 7 </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="search">Search </div>
          </div>
        </div>
        <div className="main">
          <div className="filter">
            <div className="all-categories">
              <div className="heading">
                <div className="nutrition-option">Nutrition Option </div>
                <img className="vector" src="vector0.svg" />
              </div>
              <div className="categories">
                <div className="frame-151">
                  <div className="balanced-diet">Balanced Diet </div>
                </div>
              </div>
              <div className="categories2">
                <div className="frame-151">
                  <div className="high-protein">High-Protein </div>
                </div>
              </div>
              <div className="categories2">
                <div className="frame-151">
                  <div className="low-carb">Low-Carb </div>
                </div>
              </div>
              <div className="categories2">
                <div className="frame-151">
                  <div className="gluten-free">Gluten-Free </div>
                </div>
              </div>
              <div className="categories2">
                <div className="frame-151">
                  <div className="high-fiber">High-Fiber </div>
                </div>
              </div>
              <div className="categories2">
                <div className="frame-151">
                  <div className="vegan">Vegan </div>
                </div>
              </div>
              <div className="categories3">
                <div className="frame-151">
                  <div className="keto">Keto </div>
                </div>
              </div>
            </div>
            <div className="line-46"></div>
            <div className="line-47"></div>
            <div className="all-categories">
              <div className="heading2">
                <div className="rating">Rating </div>
                <img className="vector2" src="vector1.svg" />
              </div>
              <div className="categories3">
                <div className="rating2">
                  <div className="star-1">
                    <img className="group" src="group0.svg" />
                  </div>
                  <div className="star-2">
                    <img className="group2" src="group1.svg" />
                  </div>
                  <div className="star-3">
                    <img className="group3" src="group2.svg" />
                  </div>
                  <div className="star-4">
                    <img className="group4" src="group3.svg" />
                  </div>
                  <div className="star-5">
                    <img className="group5" src="group4.svg" />
                  </div>
                  <div className="_4-0-up">4.0 &amp; up </div>
                </div>
              </div>
            </div>
            <div className="line-48"></div>
            <div className="popular-tag">
              <div className="heading3">
                <div className="cuisine-option">Cuisine Option </div>
                <img className="vector3" src="vector2.svg" />
              </div>
              <div className="tags">
                <div className="frame-427318946">
                  <div className="tag">
                    <div className="korean">Korean </div>
                  </div>
                  <div className="tag2">
                    <div className="japanese">Japanese </div>
                  </div>
                  <div className="tag">
                    <div className="thai">Thai </div>
                  </div>
                </div>
                <div className="frame-427318948">
                  <div className="tag">
                    <div className="american">American </div>
                  </div>
                  <div className="tag">
                    <div className="italian">Italian </div>
                  </div>
                  <div className="tag">
                    <div className="mediterranean">Mediterranean </div>
                  </div>
                </div>
                <div className="frame-427318949">
                  <div className="tag">
                    <div className="french">French </div>
                  </div>
                  <div className="tag">
                    <div className="vietnamese">Vietnamese </div>
                  </div>
                  <div className="tag">
                    <div className="brazilian">Brazilian </div>
                  </div>
                </div>
                <div className="frame-427318947">
                  <div className="tag">
                    <div className="chinese">Chinese </div>
                  </div>
                  <div className="tag">
                    <div className="mexican">Mexican </div>
                  </div>
                  <div className="tag">
                    <div className="indian">Indian </div>
                  </div>
                </div>
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
                    <div className={index === 0 ? "frame-427318924" : "frame-4273189242"}>
                      <img className={index === 0 ? "icon" : "icon2"} src={index === 0 ? "icon1.svg" : "icon2.svg"} />
                      <div className={index === 0 ? "group-2" : "group-22"}>
                        <div className={index === 0 ? "_520-kcal" : "_520-kcal2"}>520 kcal </div>
                      </div>
                    </div>
                    <div className={index === 0 ? "product-image" : "product-image2"}>
                      <img className={index === 0 ? "image" : "image2"} src={recipe.image} />
                    </div>
                    <div className={index === 0 ? "frame-427319029" : "frame-427319042"}>
                      <div className={index === 0 ? "frame-427319020" : "frame-4273190202"}>
                        <div className="info">
                          <div className={index === 0 ? "meal-card" : "meal-card2"}>{recipe.title}</div>
                        </div>
                        <div className={index === 0 ? "frame-427319019" : "frame-4273190192"}>
                          <div className="rating3">
                            <div className={index === 0 ? "star-12" : "star-13"}>
                              <img className={index === 0 ? "group6" : "group11"} src={index === 0 ? "group5.svg" : "group10.svg"} />
                            </div>
                            <div className={index === 0 ? "star-22" : "star-23"}>
                              <img className={index === 0 ? "group7" : "group12"} src={index === 0 ? "group6.svg" : "group11.svg"} />
                            </div>
                            <div className={index === 0 ? "star-32" : "star-33"}>
                              <img className={index === 0 ? "group8" : "group13"} src={index === 0 ? "group7.svg" : "group12.svg"} />
                            </div>
                            <div className={index === 0 ? "star-42" : "star-43"}>
                              <img className={index === 0 ? "group9" : "group14"} src={index === 0 ? "group8.svg" : "group13.svg"} />
                            </div>
                            <div className={index === 0 ? "star-52" : "star-53"}>
                              <img className={index === 0 ? "group10" : "group15"} src={index === 0 ? "group9.svg" : "group14.svg"} />
                            </div>
                          </div>
                          <div className={index === 0 ? "_4-8-100" : "_4-8-1002"}>4.8 (100+) </div>
                        </div>
                        <div className={index === 0 ? "frame-3" : "frame-32"}>
                          <img className={index === 0 ? "vector4" : "vector5"} src={index === 0 ? "vector3.svg" : "vector4.svg"} />
                          <div className="_12-m">12 m </div>
                        </div>
                      </div>
                      {index === 0 && <img className="add-to-cart" src="add-to-cart0.svg" />}
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
                    <div className={index === 0 ? "frame-427318924" : "frame-4273189242"}>
                      <img className={index === 0 ? "icon" : "icon2"} src={index === 0 ? "icon1.svg" : "icon2.svg"} />
                      <div className={index === 0 ? "group-2" : "group-22"}>
                        <div className={index === 0 ? "_520-kcal" : "_520-kcal2"}>520 kcal </div>
                      </div>
                    </div>
                    <div className={index === 0 ? "product-image" : "product-image2"}>
                      <img className={index === 0 ? "image" : "image2"} src={recipe.image} />
                    </div>
                    <div className={index === 0 ? "frame-427319029" : "frame-427319042"}>
                      <div className={index === 0 ? "frame-427319020" : "frame-4273190202"}>
                        <div className="info">
                          <div className={index === 0 ? "meal-card" : "meal-card2"}>{recipe.title}</div>
                        </div>
                        <div className={index === 0 ? "frame-427319019" : "frame-4273190192"}>
                          <div className="rating3">
                            <div className={index === 0 ? "star-12" : "star-13"}>
                              <img className={index === 0 ? "group6" : "group11"} src={index === 0 ? "group5.svg" : "group10.svg"} />
                            </div>
                            <div className={index === 0 ? "star-22" : "star-23"}>
                              <img className={index === 0 ? "group7" : "group12"} src={index === 0 ? "group6.svg" : "group11.svg"} />
                            </div>
                            <div className={index === 0 ? "star-32" : "star-33"}>
                              <img className={index === 0 ? "group8" : "group13"} src={index === 0 ? "group7.svg" : "group12.svg"} />
                            </div>
                            <div className={index === 0 ? "star-42" : "star-43"}>
                              <img className={index === 0 ? "group9" : "group14"} src={index === 0 ? "group8.svg" : "group13.svg"} />
                            </div>
                            <div className={index === 0 ? "star-52" : "star-53"}>
                              <img className={index === 0 ? "group10" : "group15"} src={index === 0 ? "group9.svg" : "group14.svg"} />
                            </div>
                          </div>
                          <div className={index === 0 ? "_4-8-100" : "_4-8-1002"}>4.8 (100+) </div>
                        </div>
                        <div className={index === 0 ? "frame-3" : "frame-32"}>
                          <img className={index === 0 ? "vector4" : "vector5"} src={index === 0 ? "vector3.svg" : "vector4.svg"} />
                          <div className="_12-m">12 m </div>
                        </div>
                      </div>
                      {index === 0 && <img className="add-to-cart" src="add-to-cart0.svg" />}
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
                    <div className={index === 0 ? "frame-427318924" : "frame-4273189242"}>
                      <img className={index === 0 ? "icon" : "icon2"} src={index === 0 ? "icon1.svg" : "icon2.svg"} />
                      <div className={index === 0 ? "group-2" : "group-22"}>
                        <div className={index === 0 ? "_520-kcal" : "_520-kcal2"}>520 kcal </div>
                      </div>
                    </div>
                    <div className={index === 0 ? "product-image" : "product-image2"}>
                      <img className={index === 0 ? "image" : "image2"} src={recipe.image} />
                    </div>
                    <div className={index === 0 ? "frame-427319029" : "frame-427319042"}>
                      <div className={index === 0 ? "frame-427319020" : "frame-4273190202"}>
                        <div className="info">
                          <div className={index === 0 ? "meal-card" : "meal-card2"}>{recipe.title}</div>
                        </div>
                        <div className={index === 0 ? "frame-427319019" : "frame-4273190192"}>
                          <div className="rating3">
                            <div className={index === 0 ? "star-12" : "star-13"}>
                              <img className={index === 0 ? "group6" : "group11"} src={index === 0 ? "group5.svg" : "group10.svg"} />
                            </div>
                            <div className={index === 0 ? "star-22" : "star-23"}>
                              <img className={index === 0 ? "group7" : "group12"} src={index === 0 ? "group6.svg" : "group11.svg"} />
                            </div>
                            <div className={index === 0 ? "star-32" : "star-33"}>
                              <img className={index === 0 ? "group8" : "group13"} src={index === 0 ? "group7.svg" : "group12.svg"} />
                            </div>
                            <div className={index === 0 ? "star-42" : "star-43"}>
                              <img className={index === 0 ? "group9" : "group14"} src={index === 0 ? "group8.svg" : "group13.svg"} />
                            </div>
                            <div className={index === 0 ? "star-52" : "star-53"}>
                              <img className={index === 0 ? "group10" : "group15"} src={index === 0 ? "group9.svg" : "group14.svg"} />
                            </div>
                          </div>
                          <div className={index === 0 ? "_4-8-100" : "_4-8-1002"}>4.8 (100+) </div>
                        </div>
                        <div className={index === 0 ? "frame-3" : "frame-32"}>
                          <img className={index === 0 ? "vector4" : "vector5"} src={index === 0 ? "vector3.svg" : "vector4.svg"} />
                          <div className="_12-m">12 m </div>
                        </div>
                      </div>
                      {index === 0 && <img className="add-to-cart" src="add-to-cart0.svg" />}
                    </div>
                  </div>
                ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="right-meal-every-time">
          right meal
          <br />
          every time{" "}
        </div>
        <div className="image3">
          <img className="highlight" src="highlight0.svg" />
          <img className="shadow" src="shadow0.png" />
          <img className="image-7" src="image-70.png" />
        </div>
      </div>
      <div className="navbar">
        <div className="dealicious2">dealicious </div>
        <div className="frame-427318916">
          <div className="frame-427318915">
            <div className="home">Home </div>
            <div className="meal-plan">Meal Plan </div>
            <div className="grocery">Grocery </div>
          </div>
          <div className="frame-1">
            <div className="log-in">LogIn </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;