require('dotenv').config();

const express = require("express");
const axios = require("axios");
const asyncHandler = require("express-async-handler");
const fs = require("fs");

const router = express.Router();

const apiKey = process.env.SPOONACULAR_API_KEY;
const JSON_FILE_PATH = "./data/data.json";

const getIngredients = asyncHandler(async (req) => {
    const jsonData = fs.readFileSync(JSON_FILE_PATH, "utf8");
    const ingredients = JSON.parse(jsonData);

    const selectedIngredients = [];
    const ingredientCount = ingredients.ingredients.length;
    const selectedIndices = new Set();

    let count = 0


    while (selectedIndices.size < 30) {
        const randomIndex = Math.floor(Math.random() * ingredientCount);
        if (!selectedIndices.has(randomIndex)) {
            selectedIndices.add(randomIndex);
            selectedIngredients.push(ingredients.ingredients[randomIndex]);
        }
    }
    return selectedIngredients;
});

const getIngredientsInfo = asyncHandler(async (req) => {


});

router.get("/", async (req, res) => {
    try {
        const ingredients = await getIngredients();
        res.json(ingredients);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/info", async (req, res) => {
    try {
        const ingredients = await getIngredientsInfo();
        res.json(ingredients);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


module.exports = { router, getIngredients };

