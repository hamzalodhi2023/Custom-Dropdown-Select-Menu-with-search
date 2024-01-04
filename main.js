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
  "Antigua and Barbuda",
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
  "Bosnia and Herzegovina",
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
  "Central African Republic",
  "Chad",
  "China",
  "Colombia",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
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
  countries.forEach(function (conunty) {
    let listItem = "<li>" + "county" + "</li>";
    lists.insertAdjacentHTML("beforeend", listItem);
  });
}

addCountry();
