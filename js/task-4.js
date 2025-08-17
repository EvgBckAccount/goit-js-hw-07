const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Отримуємо значення полів з очищенням пробілів
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();
  
  // Перевіряємо очищені значення
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  
  // Формуємо об'єкт з очищеними даними
  const result = {
    email: email,
    password: password
  };
  
  console.log(result);
  loginForm.reset();
});