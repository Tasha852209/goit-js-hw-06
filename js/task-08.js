const form = document.querySelector(".login-form");
const inputPass = document.querySelector(`input[type="password"]`);
const inputEmail = document.querySelector(`input[type="email"]`);
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (!inputPass.value || !inputEmail.value) {
    return alert("Всі поля повинні бути заповнені!");
  } else {
    const docForms = document.forms[0];
    const formEmail = docForms.elements.email;
    const formPass = docForms.elements.password;
    const formObj = {
      [formPass.name]: formPass.value,
      [formEmail.name]: formEmail.value,
    };
    console.log(formObj);
    form.reset();
  }
}
