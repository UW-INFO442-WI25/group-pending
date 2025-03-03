import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MealPlanPage.css";
// 引入图片
import png0 from "../assets/20250226155143.png";
import s0 from "../assets/star.svg";

import Layout from '../components/Layout';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedDay, setSelectedDay] = useState(1);
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

  const handleCuisineOption = (cuisine) => {
    setCuisineOption(cuisine);
  };

  useEffect(() => {
    if (nutritionOption || rating || cuisineOption || minFiber || maxCarb || minProtein) {
      fetchRecipes("/api/recipe/update");
    }
    else {
      fetchRecipes("/api/recipe");
    }
  }, [nutritionOption, rating, cuisineOption, minFiber, maxCarb, minProtein]);

  const fetchRecipes = (apiString) => {
    console.log(cuisineOption + "  " + nutritionOption);
    let params = {
      nutrition: nutritionOption,
      rating: rating ? 4 : undefined,
      cuisine: cuisineOption,
      maxCarbs: maxCarb,
      minFiber: minFiber,
      minProtein: minProtein,
    };

    axios
      .get(apiString, { params })
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const RecipeCard = ({ recipe }) => {
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
              {[...new Set(recipe.analyzedInstructions?.[0]?.steps?.flatMap((step) =>
                step.ingredients.map((ingredient) => ingredient.name)
              ))].join(', ')}
            </p>
          </div>

          <div className="nutrition">
            <h3>Nutrition</h3>
            <ul>
              {recipe.nutrition?.nutrients?.map((nutrient) => (
                <li key={nutrient.name}>{nutrient.name + ": " + nutrient.amount + " " + nutrient.unit}</li>
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
    <Layout>
      <div className={"my-meal-plan "}>
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
              <p className="gyfKLcTrZ4">eat healthier. Highly recommend!&quot;</p>
            </div>
          </div>
        </div>
        <h1 className="Cuu8Apn8Lg">YOUR WEEKLY MEAL PLAN</h1>
        <div className="content">
          <div className="status-nav">
            <div className="frame-427319028">
              {[...Array(7)].map((_, index) => (
                <button
                  key={index}
                  className={`frame-427319021 ${selectedDay === index + 1 ? "active" : ""}`}
                  onClick={() => setSelectedDay(index + 1)}
                >
                  <div className="day">Day {index + 1}</div>
                </button>
              ))}
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
                  <input type="checkbox" className="checkbox0" onChange={() => setRating(!rating)} />
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
                <RecipeCard recipe={recipes[selectedDay - 1]?.breakfast} />

                <h2>Lunch</h2>
                <RecipeCard recipe={recipes[selectedDay - 1]?.lunch} />

                <h2>Dinner</h2>
                <RecipeCard recipe={recipes[selectedDay - 1]?.dinner} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;