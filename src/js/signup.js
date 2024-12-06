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
const selectElement = document.querySelector(".signup__country");
const signUpButton = document.querySelector(".signup__submit-button");
const toast = document.querySelector(".signup__toast");
const toastCloseButton = document.querySelector(".signup__toast-close-button");

document.addEventListener("DOMContentLoaded", () => {
  displayOption();
  submitUser();
  popUpMessage();
});

// adding option from array for select element dynimacily and alfabeticly
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

// store users inside local storage
const storeUsersSignUp = (Key, value) => {
  localStorage.setItem(Key, value);
};

// collect data from user from form
const submitUser = () => {
  const users = [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = { id: Date.now() };

    for (let element of e.target.elements) {
      if (element.name && element.tagName.toLowerCase() === "input") {
        user[`user${capitalizeFirstLetter(element.name)}`] = element.value;
      }
    }
    users.push(user);

    storeUsersSignUp("userSignUp", JSON.stringify(users));

    e.target.reset();
  });
};

// add camelcase for key
const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const ArrayFromLocalStorage = JSON.parse(localStorage.getItem("userSignUp"));
console.log(ArrayFromLocalStorage);

// toast message pop up after user signed up. removes when user click on x
const popUpMessage = () => {
  signUpButton.addEventListener("click", () => {
    setTimeout(() => {
      toast.classList.add("signup__toast--active");
      toastCloseButton.addEventListener("click", () => {
        toast.classList.remove("signup__toast--active");
      });
    }, 100);
  });
};
