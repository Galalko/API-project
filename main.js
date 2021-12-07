import { fetchApi } from "./fetchApi.js";
let searchQuery = "";
const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");

const appId = "e4a3f814";
const key = "7294cd4b6d451e81c64735156493985b";
const searchValue = document.querySelector("#search-value");

const icon = document.getElementById("icon");

icon.addEventListener("click", (e) => {
  searchResultDiv.textContent = "";
  if (searchValue.value === "" || searchValue.value === " ") {
    const emptyValue = document.createElement("h2");
    emptyValue.classList.add("empty-input");
    emptyValue.textContent = "You should write something";
    searchResultDiv.appendChild(emptyValue);
  }
  e.preventDefault();
  searchQuery = searchValue.value;
  fetchApi(searchQuery, appId, key, searchResultDiv);
});
searchForm.addEventListener("submit", (e) => {
  searchResultDiv.textContent = "";
  if (searchValue.value === "") {
    const emptyValue = document.createElement("h2");
    emptyValue.classList.add("empty-input");
    emptyValue.textContent = "You should write something";
    searchResultDiv.appendChild(emptyValue);
  }
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchApi(searchQuery, appId, key, searchResultDiv);
});
