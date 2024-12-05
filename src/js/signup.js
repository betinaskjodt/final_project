// storing countries for option element
const countries = [
  {
    country: "Norway",
  },
  {
    country: "Sweden",
  },
  {
    country: "Denmark",
  },
  {
    country: "Finland",
  },
  {
    country: "Iceland",
  },
  {
    country: "Germany",
  },
  {
    country: "France",
  },
  {
    country: "Scotland",
  },
  {
    country: "England",
  },
  {
    country: "Spain",
  },
  {
    country: "Egypt",
  },
  {
    country: "Austalia",
  },
  {
    country: "USA",
  },
  {
    country: "Canada",
  },
  {
    country: "China",
  },
  {
    country: "Japan",
  },
  {
    country: "South-Korea",
  },
];

// selecting elements from html
const form = document.querySelector(".signup");
const fullName = document.querySelector(".singup__name-input");
const birthday = document.querySelector(".signup__birthday-input");
const phoneNumber = document.querySelector(".singup__phone-input");
const email = document.querySelector(".singup__email-input");
const selectElement = document.querySelector(".singup__country");
const signUpButton = document.querySelector(".singup__submit-button");

// adding countries for select element dynimacily

document.addEventListener("DOMContentLoaded", () => {
  displayOption();
});

const displayOption = () => {
  sortedArray = countries.sort((a, b) => {
    return a.country.localeCompare(b.country);
  });
  sortedArray.forEach((country) => {
    const optionElemet = document.createElement("option");
    optionElemet.textContent = country.country;
    selectElement.append(optionElemet);
  });
};

const submitUser = () => {
  const users = [];

  form.addEventListener("subut", (e) => {
    e.preventDefault();
    const user = { id: Date.now() };

    for (let element of e.target.elements) {
      if (element.name && e.target.elements.toLowerCase() === "input") {
        user[`user${capitalizeFirstLetter(element.name)}`] = element.value;
      }
    }
    users.push(user);

    console.log(users);
    e.target.reset();
  });
};

const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
