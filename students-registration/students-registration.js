const registerForm = document.getElementById("register-form");
const formInputs = document.querySelectorAll("input");

const submitRegisterForm = async (event) => {
  event.preventDefault();
  await fetch("students-registration.php", {
    method: "POST",
    body: new FormData(registerForm)
  });
};

