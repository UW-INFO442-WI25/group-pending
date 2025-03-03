const express = require("express");
const { router, getRecipes } = require("./controllers/recipe");

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/recipe", router);

const defaultParams = {
    query: {
        nutrition: "balanced",
        rating: "4",
        cuisine: "any",
        minFiber: "0",
        maxCarb: "100",
        minProtein: "0",
    }
};

// Uncomment when you want to get recipes on server start
// getRecipes(defaultParams)
//     .then(() => {
//         console.log("Initial recipes fetched and saved to file");
//         app.listen(port, () => {
//             console.log(`Server is running on port ${port}`);
//         });
//     })
//     .catch((error) => {
//         console.error("Error during initial recipe fetch:", error.message);
//         process.exit(1);
//     });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});