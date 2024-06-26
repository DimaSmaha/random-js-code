export function validateName() {
  const nameInput = document.getElementById("name-input");
  const nameInputValue = nameInput.value;
  const nameRegExp = /^[A-Za-z]{2,10}$/;

  if (nameInputValue.search(nameRegExp) === -1) {
    nameInput.classList.add("is-invalid");
  }
}

export function validateEmail() {
  const emailInput = document.getElementById("email-input");
  const emailInputValue = emailInput.value;
  const emailRegExp = /^[a-z0-9]+@([a-z]{2,10})+\.[a-z]{2,6}/;

  if (emailInputValue.search(emailRegExp) === -1) {
    emailInput.classList.add("is-invalid");
  }
}

export function validatePassword() {
  const passwordInput = document.getElementById("password-input");
  const passwordInputValue = passwordInput.value;
  const passwordRegExp = /^[a-zA-Z0-9&$%§\-_]{8,32}$/;

  if (
    passwordInputValue.search(passwordRegExp) === -1 ||
    passwordInputValue.search(/[0-9]/) === -1 ||
    passwordInputValue.search(/[a-zA-Z]/) === -1 ||
    passwordInputValue.search(/[&$%§\-_]/) === -1
  ) {
    passwordInput.classList.add("is-invalid");
  }
}
