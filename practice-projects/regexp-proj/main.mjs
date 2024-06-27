import {
  validateEmail,
  validateName,
  validatePassword,
} from "./validation.mjs";

const nameInput = document.getElementById("name-input");
const passwordInput = document.getElementById("password-input");
const emailInput = document.getElementById("email-input");
const button = document.getElementById("button");

nameInput.addEventListener("blur", () => {
  validateName();
});

nameInput.addEventListener("focus", () => {
  nameInput.classList.remove("is-invalid");
});

emailInput.addEventListener("blur", () => {
  validateEmail();
});

emailInput.addEventListener("focus", () => {
  emailInput.classList.remove("is-invalid");
});

passwordInput.addEventListener("blur", () => {
  validatePassword();
});

passwordInput.addEventListener("focus", () => {
  passwordInput.classList.remove("is-invalid");
});

button.addEventListener("click", () => {
  validateName();
  validateEmail();
  validatePassword();
});
