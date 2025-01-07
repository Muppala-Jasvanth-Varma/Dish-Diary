document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const story = document.getElementById('story').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const recipe = {
        title,
        story,
        ingredients,
        instructions
    };
    let recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    document.getElementById('recipeForm').reset();

    displayRecipes();
});
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
displayRecipes();
