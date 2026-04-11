
document.getElementById('form-contact').addEventListener('submit', (e) => {
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const nameError = document.getElementById('name-error');
  const phoneError = document.getElementById('phone-error');
  const emailError = document.getElementById('email-error');

  let isValid = true;


  nameError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';
  nameInput.classList.remove('invalid');
  phoneInput.classList.remove('invalid');
  emailInput.classList.remove('invalid');

  const namePattern = /^[A-Za-zА-Яа-яЁё]+([ -][A-Za-zА-Яа-яЁё]+)*$/;
  if (!nameInput.value.trim()) {
    nameError.textContent = 'Пожалуйста, введите имя';
    nameInput.classList.add('invalid');
    isValid = false;
  } else if (!namePattern.test(nameInput.value.trim())) {
    nameError.textContent = 'Имя может содержать только буквы, пробелы, -';
    nameInput.classList.add('invalid');
    isValid = false;
  }


  const phonePattern = /^[0-9\s\+\-\(\)]+$/;
  if (!phoneInput.value.trim()) {
    phoneError.textContent = 'Пожалуйста, введите номер телефона';
    phoneInput.classList.add('invalid');
    isValid = false;
  } else if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.textContent = 'Телефон может содержать только цифры, пробелы, + - ( )';
    phoneInput.classList.add('invalid');
    isValid = false;
  }


  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Пожалуйста, введите email';
    emailInput.classList.add('invalid');
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Введите корректный email c @';
    emailInput.classList.add('invalid');
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});

