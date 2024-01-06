let countries = [
  "Pakistan",
  "America",
  "India",
  "Japan",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Chad",
  "China",
  "Colombia",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Denmark",
  "Djibouti",
  "Dominica",
];

let container = document.querySelector(".container");
let selectBtn = document.querySelector(".select-option");
let dropDownList = document.querySelector(".list-search-container");
let searchInput = document.querySelector("#search");
let lists = document.querySelector(".list");

selectBtn.addEventListener("click", function () {
  container.classList.toggle("active");
});

function addCountry() {
  lists.innerHTML = "";
  countries.forEach(function (country) {
    let listItem = "<li>" + country + "</li>";
    lists.insertAdjacentHTML("beforeend", listItem);
  });
}

addCountry();

lists.querySelectorAll("li").forEach((listItem) => {
  listItem.addEventListener("click", () => {
    updateSelectCountry(listItem);
  });
});

function updateSelectCountry(listItem) {
  searchInput.value = "";
  selectBtn.firstElementChild.innerHTML = listItem.innerHTML;
  container.classList.remove("active");
}

searchInput.addEventListener("keydown", () => {
  let searchInpVal = searchInput.value.toLowerCase();
  let filteredCountries = countries
    .filter((country) => {
      return country.toLocaleLowerCase().startsWith(searchInpVal);
    })
    .map((country) => {
      return "<li>" + country + "</li>";
    })
    .join("");
  lists.innerHTML = filteredCountries;
});
