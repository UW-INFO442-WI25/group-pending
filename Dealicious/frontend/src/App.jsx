import { useEffect, useState } from "react";
import axios from "axios";
import "./mealPlan.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [nutritionOption, setNutritionOption] = useState("");
  const [rating, setRating] = useState(false);
  const [cuisineOption, setCuisineOption] = useState("");

  useEffect(() => {
    fetchRecipes();
  }, [nutritionOption, rating, cuisineOption]);

  const fetchRecipes = () => {
    const params = {
      nutrition: nutritionOption,
      rating: rating ? 4 : undefined,
      cuisine: cuisineOption,
    };

    axios.get("/api/recipe", { params })
      .then(response => setRecipes(response.data.results))
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
                  <div className="meal">
                    <div className="frame-427318924">
                      <img className="icon" src="icon1.svg" />
                      <div className="group-2">
                        <div className="_520-kcal">520 kcal </div>
                      </div>
                    </div>
                    <div className="product-image">
                      <img className="image" src="image0.png" />
                    </div>
                    <div className="frame-427319029">
                      <div className="frame-427319020">
                        <div className="info">
                          <div className="salmon-poke-salad">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-427319019">
                          <div className="rating3">
                            <div className="star-12">
                              <img className="group6" src="group5.svg" />
                            </div>
                            <div className="star-22">
                              <img className="group7" src="group6.svg" />
                            </div>
                            <div className="star-32">
                              <img className="group8" src="group7.svg" />
                            </div>
                            <div className="star-42">
                              <img className="group9" src="group8.svg" />
                            </div>
                            <div className="star-52">
                              <img className="group10" src="group9.svg" />
                            </div>
                          </div>
                          <div className="_4-8-100">4.8 (100+) </div>
                        </div>
                        <div className="frame-3">
                          <img className="vector4" src="vector3.svg" />
                          <div className="_12-m">12 m </div>
                        </div>
                      </div>
                      <img className="add-to-cart" src="add-to-cart0.svg" />
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image1.png" />
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad2">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group11" src="group10.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group12" src="group11.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group13" src="group12.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group14" src="group13.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group15" src="group14.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1002">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector5" src="vector4.svg" />
                          <div className="_12-m">12 m </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon2" src="icon2.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image2.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon3" src="icon3.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad2">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group16" src="group15.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group17" src="group16.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group18" src="group17.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group19" src="group18.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group20" src="group19.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1002">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector6" src="vector5.svg" />
                          <div className="_12-m">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image3.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon4" src="icon4.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad3">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group21" src="group20.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group22" src="group21.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group23" src="group22.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group24" src="group23.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group25" src="group24.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1003">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector7" src="vector6.svg" />
                          <div className="_12-m2">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-427319047">
                <div className="frame-427319038">
                  <div className="rectangle-26"></div>
                  <div className="lunch">Lunch </div>
                </div>
                <div className="lunch2">
                  <div className="meal3">
                    <div className="product-image">
                      <img className="image" src="image4.png" />
                    </div>
                    <div className="frame-427318924">
                      <img className="icon5" src="icon5.svg" />
                      <div className="group-2">
                        <div className="_520-kcal">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319029">
                      <div className="frame-427319020">
                        <div className="info">
                          <div className="salmon-poke-salad">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-427319019">
                          <div className="rating3">
                            <div className="star-12">
                              <img className="group26" src="group25.svg" />
                            </div>
                            <div className="star-22">
                              <img className="group27" src="group26.svg" />
                            </div>
                            <div className="star-32">
                              <img className="group28" src="group27.svg" />
                            </div>
                            <div className="star-42">
                              <img className="group29" src="group28.svg" />
                            </div>
                            <div className="star-52">
                              <img className="group30" src="group29.svg" />
                            </div>
                          </div>
                          <div className="_4-8-100">4.8 (100+) </div>
                        </div>
                        <div className="frame-3">
                          <img className="vector8" src="vector7.svg" />
                          <div className="_12-m3">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image5.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon6" src="icon6.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad3">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group31" src="group30.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group32" src="group31.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group33" src="group32.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group34" src="group33.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group35" src="group34.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1003">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector9" src="vector8.svg" />
                          <div className="_12-m2">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image6.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon7" src="icon7.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad3">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group36" src="group35.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group37" src="group36.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group38" src="group37.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group39" src="group38.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group40" src="group39.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1003">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector10" src="vector9.svg" />
                          <div className="_12-m2">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image7.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon8" src="icon8.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad3">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group41" src="group40.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group42" src="group41.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group43" src="group42.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group44" src="group43.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group45" src="group44.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1003">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector11" src="vector10.svg" />
                          <div className="_12-m2">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-427319046">
                <div className="frame-427319038">
                  <div className="rectangle-26"></div>
                  <div className="dinner">Dinner </div>
                </div>
                <div className="lunch2">
                  <div className="meal3">
                    <div className="product-image">
                      <img className="image" src="image8.png" />
                    </div>
                    <div className="frame-427318924">
                      <img className="icon9" src="icon9.svg" />
                      <div className="group-2">
                        <div className="_520-kcal">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319029">
                      <div className="frame-427319020">
                        <div className="info">
                          <div className="salmon-poke-salad">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-427319019">
                          <div className="rating3">
                            <div className="star-12">
                              <img className="group46" src="group45.svg" />
                            </div>
                            <div className="star-22">
                              <img className="group47" src="group46.svg" />
                            </div>
                            <div className="star-32">
                              <img className="group48" src="group47.svg" />
                            </div>
                            <div className="star-42">
                              <img className="group49" src="group48.svg" />
                            </div>
                            <div className="star-52">
                              <img className="group50" src="group49.svg" />
                            </div>
                          </div>
                          <div className="_4-8-100">4.8 (100+) </div>
                        </div>
                        <div className="frame-3">
                          <img className="vector12" src="vector11.svg" />
                          <div className="_12-m3">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image9.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon10" src="icon10.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad3">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group51" src="group50.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group52" src="group51.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group53" src="group52.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group54" src="group53.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group55" src="group54.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1003">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector13" src="vector12.svg" />
                          <div className="_12-m2">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image10.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon11" src="icon11.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad3">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group56" src="group55.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group57" src="group56.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group58" src="group57.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group59" src="group58.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group60" src="group59.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1003">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector14" src="vector13.svg" />
                          <div className="_12-m2">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="meal2">
                    <div className="product-image2">
                      <img className="image2" src="image11.png" />
                    </div>
                    <div className="frame-4273189242">
                      <img className="icon12" src="icon12.svg" />
                      <div className="group-22">
                        <div className="_520-kcal2">520 kcal </div>
                      </div>
                    </div>
                    <div className="frame-427319042">
                      <div className="frame-4273190202">
                        <div className="info">
                          <div className="salmon-poke-salad3">
                            Salmon Poke Salad{" "}
                          </div>
                        </div>
                        <div className="frame-4273190192">
                          <div className="rating3">
                            <div className="star-13">
                              <img className="group61" src="group60.svg" />
                            </div>
                            <div className="star-23">
                              <img className="group62" src="group61.svg" />
                            </div>
                            <div className="star-33">
                              <img className="group63" src="group62.svg" />
                            </div>
                            <div className="star-43">
                              <img className="group64" src="group63.svg" />
                            </div>
                            <div className="star-53">
                              <img className="group65" src="group64.svg" />
                            </div>
                          </div>
                          <div className="_4-8-1003">4.8 (100+) </div>
                        </div>
                        <div className="frame-32">
                          <img className="vector15" src="vector14.svg" />
                          <div className="_12-m2">12 m </div>
                        </div>
                      </div>
                    </div>
                  </div>
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