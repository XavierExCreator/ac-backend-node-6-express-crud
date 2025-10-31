// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

import express from "express";

import fs from "fs/promises";
// ---------------------------------
// Helper Functions
// ---------------------------------

const app = express();

const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// 1. getAllRecipes()

async function getAllRecipes() {
    const data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);
    return parsedRecipes;
}

// 2. getOneRecipe(index)

async function getOneRecipe(index) {
    const data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);
    return parsedRecipes[index];
}

// 3. getAllRecipeNames()

async function getAllRecipeNames(index) {
    const data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);
    return parsedRecipes[index];
}

// 4. getRecipesCount()

async function getRecipesCount(index) {
   const  data = await fs.readFile("./recipes-data.json", "utf8");
    const parsedRecipes = JSON.parse(data);
    return parsedRecipes[index];
}

// ---------------------------------
// API Endpoints
// ---------------------------------

// 1. GET /get-all-recipes

app.get("/get-all-recipes", async (req, res) => {
    const recipes = await getAllRecipes();

    res.json(recipes);
});

// 2. GET /get-one-recipe/:index

app.get("/get-one-recipe/:index", async (req, res) => {
    const index = req.params.index
    const recipes = await getOneRecipe(index);

    res.json({title: recipes});
});

// 3. GET /get-all-recipe-names

app.get("/get-all-recipe-names", async (req, res) => {
    const recipes = await getAllRecipeNames();

    res.json({title: recipes});
});

// 4. GET /get-recipes-count

app.get("/get-recipes-count", async (req, res) => {
    const recipes = await getRecipesCount();

    res.json({viewed: recipes});
});
