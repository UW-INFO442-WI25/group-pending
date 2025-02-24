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
    <div className="meal-plan-container">
      <header className="header">
        <h1>RIGHT MEAL EVERY TIME</h1>
        <img src="/path/to/grocery-image.jpg" alt="Groceries" className="header-image" />
      </header>

      <h2 className="meal-plan-title">Low Carb Meal Plan</h2>

      <div className="tabs">
        {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"].map((day, index) => (
          <button key={index} className={index === 0 ? "active-tab" : ""}>
            {day}
          </button>
        ))}
      </div>

      <div className="filters">
        <h3>Nutrition Option</h3>
        <ul>
          {["Balanced Diet", "High-Protein", "Low-Carb", "Gluten Free", "High-Fiber", "Vegan", "Keto"].map((option) => (
            <li key={option}>
              <input
                type="radio"
                name="nutrition"
                id={option}
                value={option}
                checked={nutritionOption === option}
                onChange={(e) => setNutritionOption(e.target.value)}
              />
              <label htmlFor={option}>{option}</label>
            </li>
          ))}
        </ul>

        <h3>Rating</h3>
        <label>
          <input
            type="checkbox"
            checked={rating}
            onChange={(e) => setRating(e.target.checked)}
          />
          4.0 & up ⭐⭐⭐⭐
        </label>

        <h3>Cuisine Option</h3>
        <div className="cuisine-options">
          {["Korean", "Japanese", "Thai", "Chinese", "Mexican", "Indian", "American", "Italian", "Mediterranean", "French", "Vietnamese", "Brazilian"].map(
            (cuisine) => (
              <button
                key={cuisine}
                className={cuisineOption === cuisine ? "active-cuisine" : ""}
                onClick={() => setCuisineOption(cuisine)}
              >
                {cuisine}
              </button>
            )
          )}
        </div>
      </div>

      <div className="meals-section">
        {["Breakfast", "Lunch", "Dinner"].map((mealType) => (
          <div key={mealType} className="meal-category">
            <h3>{mealType}</h3>
            <div className="meal-cards">
              {recipes.map((recipe, index) => (
                <div key={index} className="meal-card">
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="meal-info">
                    <span className="calories">{"2"} kcal</span>
                    <h4>{recipe.title}</h4>
                    <p>⭐⭐⭐⭐ {recipe.spoonacularScore} ({recipe.aggregateLikes}+)</p>
                    <span>⏳ {recipe.readyInMinutes} min</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-section">
          <h2>DEALICIOUS</h2>
          <p>We help college students build healthy eating habits while staying within a tight budget.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Meal Plan</li>
            <li>Grocery</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📞 +1 123456789</p>
          <p>✉ dealicious@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;