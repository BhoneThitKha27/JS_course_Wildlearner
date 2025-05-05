function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("result");

  if (age >= 18) {
    result.textContent = "You're an adult.";
  } else if (age > 0) {
    result.textContent = "You're a minor.";
  } else {
    result.textContent = "Please enter a valid age.";
  }
}