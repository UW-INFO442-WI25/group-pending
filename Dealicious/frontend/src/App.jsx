import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    axios.get("/api/recipe")
      .then(response => setRecipes(response.data.recipes))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🍽️ Random Recipes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-md p-4">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary?.substring(0, 100)}...</p>
              <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-3 inline-block">View Full Recipe</a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">Loading recipes...</p>
        )}
      </div>
    </div>
  );
}

export default App;
