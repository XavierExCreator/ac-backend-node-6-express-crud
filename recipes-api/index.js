// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

//Importing fs and express
import express from "express";

import fs from "fs/promises";
// ---------------------------------
// Helper Functions
// ---------------------------------

//Declaring variables for express and the port
const app = express();

const port = 3000;

//Making a .use and .listen so a port is created to use for a localServer to be opened that we can view the endpoints we mak for the api.
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// 1. getAllRecipes()
//This async function will parse the data and return the full array of objects in the localServer
async function getAllRecipes() {
    const data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);
    return parsedRecipes;
}

// 2. getOneRecipe(index)
//This async function will parse the data and run the specific recipe the localServer has been assigned to get in the URL
async function getOneRecipe(index) {
    const data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);
    return parsedRecipes[index];
}

// 3. getAllRecipeNames()
//This async function will parse the data and show all of the recipes names ONLY to the user, using the .map method
async function getAllRecipeNames() {
    const data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);
 
    const recipeNames = parsedRecipes.map((recipeName) => recipeName.name)

    return recipeNames;
}

// 4. getRecipesCount()
//This async function will track the count of the amount of recipes in the array object using .length to see how many objects are inside the array of objects
async function getRecipesCount() {
   const  data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);

    return parsedRecipes.length;
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// 1. GET /get-all-recipes
//This endpoint waits for the variable to load the function above
app.get("/get-all-recipes", async (req, res) => {
    const recipes = await getAllRecipes();

    res.json(recipes);
});

// 2. GET /get-one-recipe/:index
//This endpoint waits for the variable to load the function above
app.get("/get-one-recipe/:index", async (req, res) => {
    const index = req.params.index
    const recipes = await getOneRecipe(index);

    res.json({title: recipes});
});

// 3. GET /get-all-recipe-names
//This endpoint waits for the variable to load the function above
app.get("/get-all-recipe-names", async (req, res) => {

    const recipes = await getAllRecipeNames();

    res.json({recipeNames: recipes});
});

// 4. GET /get-recipes-count
//This endpoint waits for the variable to load the function above
app.get("/get-recipes-count", async (req, res) => {
    const recipes = await getRecipesCount();

    res.json({totalRecipes: recipes});
});
