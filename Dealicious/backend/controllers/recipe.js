require('dotenv').config();

const express = require("express");
const axios = require("axios");
const asyncHandler = require("express-async-handler");

const router = express.Router();

const apiKey = process.env.SPOONACULAR_API_KEY;

const getRecipes = asyncHandler(async (req, res) => {
    const { nutrition, rating, cuisine, type } = req.query;

    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
            params: {
                apiKey: apiKey,
                number: 4,
                diet: nutrition,
                cuisine: cuisine,
                type: type,
                sort: "random"
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes", error: error.message });
    }
});

router.get("/", getRecipes);

module.exports = router;