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
      console.log(minFiber + " " + maxCarb + " " + minProtein);
      setNutritionOption("");
    } else {
      setNutritionOption(category);
      setMinProtein(null);
      setMaxCarb(null);
      setMinFiber(null);
      console.log(minFiber + " " + maxCarb + " " + minProtein);
    }
    // fetchRecipes("/api/recipe/update");
    fetchRecipes("/api/recipe");
  };

  const handleCuisineOption = (cuisine) => {
    setCuisineOption(cuisine);
    // fetchRecipes("/api/recipe/update");
    fetchRecipes("/api/recipe");
  };

  useEffect(() => {
    fetchRecipes("/api/recipe");
  }, [nutritionOption, rating, cuisineOption]);

  const fetchRecipes = (apiString) => {
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
      .get(apiString, { params })
      .then((response) => {

        console.log(response.data);
        setBreakfastRecipes(response.data.breakfast);
        setLunchRecipes(response.data.lunch);
        setDinnerRecipes(response.data.dinner);

      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const RecipeCard = ({ recipe }) => {
    console.log(recipe.analyzedInstructions?.[0]?.steps);
    if (!recipe) return <p>Loading...</p>;
  
    return (
      <div className="meal">
        <div className="frame-427318924">
          <div className="group-2">
            <div className="_520-kcal">{recipe.nutrition?.nutrients[0]?.amount} kcal</div>
          </div>
        </div>
  
        <div className="product-image">
          <img className="image" src={recipe.image} alt={recipe.title} />
        </div>
        <div className="frame-427319020">
          <div className="info">
            <div className="meal-card">{recipe.title}</div>
          </div>

          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {recipe.analyzedInstructions?.[0]?.steps?.map((steps) => (
                <li key={steps.step}>{steps.step}</li>
              ))}
            </ol>
          </div>

          <div className="ingredients">
            <h3>Ingredients</h3>
            <p>
              {[
                ...new Set(
                  recipe.analyzedInstructions?.[0]?.steps?.flatMap((step) =>
                    step.ingredients.map((ingredient) => ingredient.name)
                  )
                ),
              ].join(', ')}
            </p>
          </div>

          <div className="nutrition">
            <h3>Nutrition</h3>
            <ul>
              {recipe.nutrition?.nutrients?.map((nutrient) => (
                <li key={nutrient.name}>{nutrient.name +": " +nutrient.amount +""+nutrient.unit}</li>
              ))}
            </ul>
          </div>

          <div className="frame-3">
            <div className="_12-m">{recipe.readyInMinutes} min</div>
          </div>
        </div>
      </div>
    );
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
      <h1 className="Cuu8Apn8Lg">YOUR WEEKLY MEAL PLAN</h1>
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
                    onClick={() => handleCuisineOption(cuisine)}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="displaying">
            <div>
              <h2>Breakfast</h2>
              <RecipeCard recipe={breakfastRecipes} />

              <h2>Lunch</h2>
              <RecipeCard recipe={lunchRecipes} />

              <h2>Dinner</h2>
              <RecipeCard recipe={dinnerRecipes} />
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
