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

lists.querySelectorAll("li").forEach;
