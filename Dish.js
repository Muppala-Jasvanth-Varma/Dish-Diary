// app.js
document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const story = document.getElementById('story').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Create recipe object
    const recipe = {
        title,
        story,
        ingredients,
        instructions
    };

    // Add recipe to local storage
    let recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    // Clear form
    document.getElementById('recipeForm').reset();

    // Display recipes
    displayRecipes();
});

// Function to display recipes
function displayRecipes() {
    const recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : [];
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        recipeList.innerHTML += `
            <div class="recipe">
                <h3>${recipe.title}</h3>
                <p><strong>Story:</strong> ${recipe.story}</p>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            </div>
        `;
    });
}

// Initial display
displayRecipes();
