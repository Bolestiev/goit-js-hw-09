const formData = {
  email: '',
  message: '',
};

// Встановлюємо ключ для локального сховища
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// Отримуємо форму та елементи вводу
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Функція для збереження даних у локальне сховище
const saveToLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

// Функція для завантаження даних з локального сховища
const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email || '';
    formData.message = message || '';
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};

// Обробка події input для збереження даних в локальне сховище
form.addEventListener('input', event => {
  const { name, value } = event.target;
  if (formData.hasOwnProperty(name)) {
    formData[name] = value.trim(); // Зберігаємо дані без пробілів по краях
    saveToLocalStorage();
  }
});

// Завантаження даних з локального сховища при завантаженні сторінки
loadFromLocalStorage();

// Обробка події submit форми
form.addEventListener('submit', event => {
  event.preventDefault(); // Запобігаємо стандартній поведінці форми

  // Перевірка, чи всі поля заповнені
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  // Виведення даних у консоль
  console.log(formData);

  // Очищення локального сховища та об'єкта formData
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  Object.keys(formData).forEach(key => (formData[key] = ''));
  emailInput.value = '';
  messageTextarea.value = '';
});
