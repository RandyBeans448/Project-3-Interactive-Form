let inputName = document.getElementById("name").focus();
//create and hide input box, while setting out some inital attributes
let createInputfield = document.createElement("input");
const firstFieldSet = document.getElementsByTagName("fieldset")[0];

function scrollActive() {
  window.scroll({
    top: 1,
    behavior: "smooth",
  });
}

createInputfield.setAttribute("id", "other-title");
createInputfield.type = "text";
firstFieldSet.appendChild(createInputfield);
createInputfield.placeholder = "Your Job Role";
createInputfield.style.display = "none";

//selecting the drop down options bar which contains job selection.
const jobs = document.getElementById("title");

//event listener added to the select list in the html
//when the other option is selected it reveals the hidden input box
jobs.addEventListener("change", (e) => {
  const otherBeenSelected = e.target.value;
  if (otherBeenSelected === "other") {
    createInputfield.style.display = "";
  } else if (otherBeenSelected !== "other") {
    createInputfield.style.display = "none";
  }
});

//Getting hold of the div which the drop down list is on
const shirtColorDiv = document.getElementById("color");

//Getting the actual list items
const shirtColorList = shirtColorDiv.children;
//Getting hold of the shirt design drop down menu
const shirtDesignChoice = document.getElementById("design");

//Creating the new option for the color drop down list
const newOption = document.createElement("option");
newOption.textContent = "Please select a T-shirt theme";
newOption.selected = "select";

//Setting the index too 0 so that the new option sits at the top of the list
shirtColorDiv.add(newOption, shirtColorDiv[0]);

const selectThemeDiv = document.getElementById("design");
selectThemeDiv[0].hidden = true;

//Hiding the drop down menu
for (let i = 0; i < shirtColorList.length; i++) {
  shirtColorList[i].style.display = "none";
}

//When the shirt design is picked depending on the option, it will either
//reval the relevant colours,

shirtDesignChoice.addEventListener("change", (e) => {
  const tShirtSelected = e.target.value;
  for (let j = 0; j < shirtColorList.length; j++) {
    if (tShirtSelected === "js puns") {
      shirtColorList[0].style.display = "none";
      shirtColorList[1].selected = true;
      shirtColorList[1].style.display = "";
      shirtColorList[2].style.display = "";
      shirtColorList[3].style.display = "";
      shirtColorList[4].style.display = "none";
      shirtColorList[5].style.display = "none";
      shirtColorList[6].style.display = "none";
    } else if (tShirtSelected === "heart js") {
      shirtColorList[0].style.display = "none";
      shirtColorList[1].style.display = "none";
      shirtColorList[2].style.display = "none";
      shirtColorList[3].style.display = "none";
      shirtColorList[4].selected = true;
      shirtColorList[4].style.display = "";
      shirtColorList[5].style.display = "";
      shirtColorList[6].style.display = "";
    }
  }
});

//Getting a reference to the activities div and creating a div to append a new sting to hold the total cost of the clicked activities.
const activities = document.querySelector(".activities");
let totalActivityCost = document.createElement("div");
activities.appendChild(totalActivityCost);
let totalCost = 0;

//Setting the text content to tell the total and adding the total cost which will be calculated later.
totalActivityCost.textContent = "Total: $" + totalCost;
const activitiesInput = document.querySelectorAll(".activities input");

//Using the querySelectorAll to select all the input and label elements.
//Needed the input elements to be able to add a addEventListener to the checkboxes.
//Needed the labels to change the color of the labels when they are disabled.

const labelFromActivities = document.querySelectorAll(".activities label");

//The first part of this addEventListener adds and subtracts the cost of the activities.
//You didnt convert the data-cost from a string to a interger which is why you couldnt get the getAttribute to work
//until you where shown.
activities.addEventListener("change", (e) => {
  const clicked = e.target;
  if (clicked.checked) {
    totalCost += parseInt(clicked.getAttribute("data-cost"));
  } else {
    totalCost -= parseInt(clicked.getAttribute("data-cost"));
  }
  //This part of the event listener disables any conflicting date and times when they are checked.
  totalActivityCost.textContent = "Total: $" + totalCost;
  for (let i = 0; i < activitiesInput.length; i++) {
    if (activitiesInput[1].checked) {
      activitiesInput[3].disabled = true;
      labelFromActivities[3].style.color = "#696969";
    } else {
      activitiesInput[3].disabled = false;
      labelFromActivities[3].style.color = "#000";
    }
    if (activitiesInput[3].checked) {
      activitiesInput[1].disabled = true;
      labelFromActivities[1].style.color = "#696969";
    } else {
      activitiesInput[1].disabled = false;
      labelFromActivities[1].style.color = "#000";
    }
    if (activitiesInput[2].checked) {
      activitiesInput[4].disabled = true;
      labelFromActivities[4].style.color = "#696969";
    } else {
      activitiesInput[4].disabled = false;
      labelFromActivities[4].style.color = "#000";
    }
    if (activitiesInput[4].checked) {
      activitiesInput[2].disabled = true;
      labelFromActivities[2].style.color = "#696969";
    } else {
      activitiesInput[2].disabled = false;
      labelFromActivities[2].style.color = "#000";
    }
  }
});

//removing the select payment option.
const paymentMethod = document.getElementById("payment");
paymentMethod.remove(0);
console.log(paymentMethod.value);
//hiding the the paypal and bitcoin payment divs when the page is loaded
const creditCard = document.querySelector(".credit-card");
const payPal = document.querySelector(".paypal");
const bitCoin = document.querySelector(".bitcoin");
payPal.style.display = "none";
bitCoin.style.display = "none";

//Depending on which payment method is chosen in the drop down menu depends on which div is revaled on the form.
paymentMethod.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    paymentMethod.value = "paypal";
    console.log(paymentMethod.value);
    payPal.style.display = "";
    bitCoin.style.display = "none";
    creditCard.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    paymentMethod.value = "bitcoin";
    console.log(paymentMethod.value);
    payPal.style.display = "none";
    bitCoin.style.display = "";
    creditCard.style.display = "none";
  } else if (e.target.value === "credit card") {
    paymentMethod.value = "credit card";
    console.log(paymentMethod.value);
    payPal.style.display = "none";
    bitCoin.style.display = "none";
    creditCard.style.display = "";
  }
});

//These function test to see the entries in the input boxes are Valid when compared to the regex. The color
//of the borders are changed depending if the result comes back true or false.
let nameInput = document.getElementById("name");
const nameValidator = () => {
  const nameValue = nameInput.value;
  let nameRegex = /^[a-z ,.'-]+$/i;
  if (nameRegex.test(nameValue)) {
    nameInput.style.border = "2px solid #00FA9A";
    return true;
  } else {
    nameInput.style.border = "2px solid red";
    return false;
  }
};

let inputEmail = document.getElementById("mail");
const emailValidator = () => {
  const emailValue = inputEmail.value;
  let emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i;
  if (emailRegex.test(emailValue)) {
    inputEmail.style.border = "2px solid #00FA9A";
    return true;
  } else {
    inputEmail.style.border = "2px solid red";
    return false;
  }
};

let inputCard = document.getElementById("cc-num");
const cardValidator = () => {
  const cardValue = inputCard.value;
  let cardRegex = /^[0-9]{11,16}$/;
  if (cardRegex.test(cardValue)) {
    inputCard.style.border = "2px solid #00FA9A";
    return true;
  } else {
    inputCard.style.border = "2px solid red";
    return false;
  }
};

let inputZip = document.getElementById("zip");
const zipValidtor = () => {
  const zipValue = inputZip.value;
  let zipRegex = /^\d{5}(?:[-\s]\d{4})?$/i;
  if (zipRegex.test(zipValue)) {
    inputZip.style.border = "2px solid #00FA9A";
    return true;
  } else {
    inputZip.style.border = "2px solid red";
    return false;
  }
};

let inputCvv = document.getElementById("cvv");
const cvvValidtor = () => {
  const cvvValue = inputCvv.value;
  let cvvRegex = /^\d{3}/i;
  if (cvvRegex.test(cvvValue)) {
    inputCvv.style.border = "2px solid #00FA9A";
    return true;
  } else {
    inputCvv.style.border = "2px solid red";
    return false;
  }
};

//The event listener runs the validation functions on the inputs submissions.
//The credit card payment inputs only run if the any of the activities have been clicked
const form = document.querySelector("form");
const actError = document.createElement("p");
actError.className = "error";
actError.textContent = "Application error: Please select an activity";

form.addEventListener("submit", function (e) {
  
  if (totalCost === 0) {
    e.preventDefault();
    activities.appendChild(actError);
  }

    if (!nameValidator()) {
      scrollActive();
      e.preventDefault();
      console.log("this validator prevented submission");
    }

    if (!emailValidator()) {
      e.preventDefault();
      console.log("this validator prevented submission");
    } 

  if (paymentMethod.value === "credit card") {

    if (!cardValidator()) {
      e.preventDefault();
      console.log("this validator prevented submission");
    } 


    if (!zipValidtor()) {
      e.preventDefault();
      console.log("this validator prevented submission");
    } 

    if (!cvvValidtor()) {
      e.preventDefault();
      console.log("this validator prevented submission");
    } 
    
  }
});
