import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Landing from './pages/LandingPage';
import GroceryDeals from './pages/GroceryDealsPage';
import MealPlan from './pages/MealPlanPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/grocery-deals" element={<GroceryDeals />} />
        <Route path="/meal-planner" element={<MealPlan />} />
      </Routes>
    </Router>
  );
}
