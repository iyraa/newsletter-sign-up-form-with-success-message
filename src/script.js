const imgCol = document.getElementById("img-col");
const subCol = document.getElementById("sub-col");
const thanksCol = document.getElementById("thanks-col");
const dismissBtn = document.getElementById("dismiss-btn");
const emailSpan = document.getElementById("email-span");

// Email validation
function handleSubmit(event) {
  event.preventDefault();
  // Prevent default form submission behavior
  const emailInput = document.getElementById("email-input");
  const emailError = document.getElementById("email-error");
  const emailValue = emailInput.value;

  // Simple email pattern
  const emailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const isValidEmail = emailPattern.test(emailValue);

  emailError.classList.toggle("hidden", isValidEmail);
  emailInput.classList.toggle("border-tomato", !isValidEmail);
  emailInput.classList.toggle("bg-tomato-lighter", !isValidEmail);
  emailInput.classList.toggle("border-grey", !isValidEmail);
  emailInput.classList.toggle("text-tomato", !isValidEmail);
  emailInput.classList.toggle("border-charcoal-grey", isValidEmail);
  emailInput.classList.toggle("text-tomato", !isValidEmail);
  emailSpan.innerText = emailInput.value;

  //const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (isValidEmail) {
    imgCol.classList.add("hidden");
    subCol.classList.add("hidden");
    thanksCol.classList.remove("hidden");
  }
}

//Dismiss button to return to init stage
dismissBtn.addEventListener("click", function () {
  imgCol.classList.remove("hidden");
  subCol.classList.remove("hidden");
  thanksCol.classList.add("hidden");
});

//change image
function switchImage() {
  const imgElement = document.getElementById("responsive-img");
  if (window.innerWidth <= 640) {
    imgElement.src = "/assets/images/illustration-sign-up-mobile.svg";
  } else {
    imgElement.src = "/assets/images/illustration-sign-up-desktop.svg";
  }
}
// Call switchImage on initial load
switchImage();

// Add event listener to call switchImage on window resize
window.addEventListener("resize", switchImage);
