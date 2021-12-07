import { popup } from "./popup.js";
export function generateHtml(results, searchResultDiv, searchQuery) {
  document.querySelector(".wrong-input")
    ? (document.querySelector(".wrong-input").textContent = "")
    : null;
  if (results.length === 0 && searchQuery !== "") {
    const emptyValue = document.createElement("h2");
    emptyValue.classList.add("wrong-input");
    emptyValue.textContent = "You should write right recipe";
    searchResultDiv.appendChild(emptyValue);
  }
  results.map((result) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("item");

    const recipeImg = document.createElement("img");
    recipeImg.classList.add("img");
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");
    const recipeName = document.createElement("h2");
    recipeName.classList.add("title");
    const viewButton = document.createElement("a");
    viewButton.href = result.recipe.url;
    viewButton.classList.add("view-button");

    searchResultDiv.appendChild(recipeDiv);

    recipeImg.src = result.recipe.image;
    recipeName.textContent = result.recipe.label;
    recipeDiv.append(recipeImg, flexContainer);
    flexContainer.append(recipeName);
    viewButton.textContent = "View the recipe";
    flexContainer.append(viewButton);
    // pupop

    popup(recipeDiv, result);
  });
}
