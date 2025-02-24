import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MealPlan from './components/MealPlan';
import Shopping from './components/Shopping';
import Deals from './components/Deals';
import Profile from './components/Profile';
import Recipie from './components/Recipie';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">Home</a> |
        <a href="/mealplan">My Meal Plan</a> |
        <a href="/shopping">Shopping List</a> |
        <a href="/deals">Deals</a> |
        <a href="/profile">Profile</a> |
        <a href="/recipie">Recipie</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipie" element={<Recipie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
