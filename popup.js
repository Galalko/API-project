export function popup(recipeDiv, result) {
  const viewIngredients = document.createElement("button");
  viewIngredients.classList.add("item-data");
  viewIngredients.textContent = "Recipe ingredients";

  recipeDiv.append(viewIngredients);

  // popup

  viewIngredients.addEventListener("click", (e) => {
    const popUpBody = document.querySelector(".modal-body");
    const popUpMessage = document.querySelector(".modal");
    const overlay = document.getElementById("overlay");
    const closeButton = document.querySelector(".close-button");
    const allIngredientTexts = document.querySelectorAll(".ingredient-text");
    allIngredientTexts.forEach((el) => el.remove());
    result.recipe.ingredientLines.map((ingredient) => {
      const ingredientText = document.createElement("p");
      ingredientText.classList.add("ingredient-text");
      ingredientText.textContent = ingredient;
      popUpBody.appendChild(ingredientText);
    });
    popUpMessage.classList.add("active");
    overlay.classList.add("active");
    overlay.addEventListener("click", () => {
      popUpMessage.classList.remove("active");
      overlay.classList.remove("active");
    });
    closeButton.addEventListener("click", () => {
      popUpMessage.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
}
