function validate() {
  const emailInput = document.getElementById('email');

  emailInput.addEventListener('change', () => {
    const emailValue = emailInput.value;

    const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add('error');
    } else {
      emailInput.classList.remove('error');
    }
  });
}