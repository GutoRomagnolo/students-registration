const registerForm = document.getElementById('register-form');
const formInputs = Array.from(document.querySelectorAll('input'));
const genderSelector = document.getElementById('select-gender');
const submitButton = document.getElementById('submit-button');
const mainContainer = document.getElementById('main-container');

const submitRegisterForm = async (event) => {
  event.preventDefault();
  try {
    await fetch('students-registration.php', {
      method: 'POST',
      body: new FormData(registerForm)
    });

    const successMessage = 'Estudante registrado com sucesso!';
    invokeRegisterResultMessage('success', successMessage);
    registerForm.reset();
    startElementsListeners();
  } catch (error) {
    const errorMessage = 'Não foi possível cadastrar o estudante!';
    invokeRegisterResultMessage('fail', errorMessage);
    console.log("Um erro ocorreu ao cadastrar estudante: ", error);
  }
};

const validateFormInputs = () => {
  const validInputs = formInputs.every(input => input.value)
  const formIsValid = validInputs && genderSelector.options[genderSelector.selectedIndex].value
  formIsValid
    ? submitButton.removeAttribute('disabled')
    : submitButton.setAttribute('disabled', 'disabled')
}

const invokeRegisterResultMessage = (result, resultMessage) => {
  registerForm.innerHTML += `
    <div class="success-message" id="success-message">
      <h4>${resultMessage}</h4>
      <img class="success-icon" src="./../assets/${result}-icon.svg">
    </div>
  `
  setTimeout(() => {
    const successMessage = document.getElementById('success-message')
    successMessage.style.display = 'none';
  }, 2200)
}

const startElementsListeners = () => {
  formInputs.forEach(input => {
    input.addEventListener('input', event => validateFormInputs());
  })
  
  genderSelector.addEventListener('input', event => validateFormInputs());
}

startElementsListeners();