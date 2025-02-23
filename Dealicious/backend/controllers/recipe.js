require('dotenv').config()

const express = require("express");
const axios = require("axios");
const asyncHandler = require("express-async-handler");


const router = express.Router();

const apiKey = process.env.SPOONACULAR_API_KEY;

const getRecipes = asyncHandler(async (req, res) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random`, {
            params: {
                apiKey: apiKey,
                number: 3
            }
        });
        console.log(response.data.recipes[0].title);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes", error: error.message });
    }
});

router.get("/", getRecipes);

module.exports = router;
