function validate() {
  const form = document.getElementById('registerForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const isCompany = document.getElementById('company');
  const companyInfo = document.getElementById('companyInfo');
  const companyNumber = document.getElementById('companyNumber');
  const validDiv = document.getElementById('valid');

  isCompany.addEventListener('change', () => {
    companyInfo.style.display = isCompany.checked ? 'block' : 'none';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    if (!usernamePattern.test(username.value)) {
      username.style.borderColor = 'red';
      isValid = false;
    } else {
      username.style.border = 'none';
    }

    const emailVal = email.value;
    const atIndex = emailVal.indexOf('@');
    if (
      atIndex < 1 ||
      emailVal.indexOf('.', atIndex) === -1
    ) {
      email.style.borderColor = 'red';
      isValid = false;
    } else {
      email.style.border = 'none';
    }

    const passwordPattern = /^\w{5,15}$/;
    if (!passwordPattern.test(password.value)) {
      password.style.borderColor = 'red';
      isValid = false;
    } else {
      password.style.border = 'none';
    }

    if (!passwordPattern.test(confirmPassword.value) || password.value !== confirmPassword.value) {
      confirmPassword.style.borderColor = 'red';
      isValid = false;
    } else {
      confirmPassword.style.border = 'none';
    }

    if (isCompany.checked) {
      const num = Number(companyNumber.value);
      if (!Number.isInteger(num) || num < 1000 || num > 9999) {
        companyNumber.style.borderColor = 'red';
        isValid = false;
      } else {
        companyNumber.style.border = 'none';
      }
    } else {
      companyNumber.style.border = 'none'; 
    }

    
    validDiv.style.display = isValid ? 'block' : 'none';
  });
}

window.onload = validate;
