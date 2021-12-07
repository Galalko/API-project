import { generateHtml } from "./generateHtml.js";
export async function fetchApi(searchQuery, appId, key, searchResultDiv) {
  const spinner = document.getElementById("spinner");
  const webUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${key}&to=30`;
  spinner.removeAttribute("hidden");
  try {
    const apiRespond = await fetch(webUrl);
    const data = await apiRespond.json();
    spinner.setAttribute("hidden", "");
    generateHtml(data.hits, searchResultDiv, searchQuery);
  } catch (error) {
    const emptyValue = document.createElement("h2");
    emptyValue.classList.add("Api-error");
    emptyValue.textContent = "can't fetch Api";
    searchResultDiv.appendChild(emptyValue);
  }
}
