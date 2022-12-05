const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const TodoForm = document.querySelector(".todo-form");
const loginForm2 = document.querySelector(".login-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLonginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `어서와 ${username}!`;
  TodoForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm2.classList.remove("login-form");
}

function paintGreetings(username) {
  greeting.innerText = `어서와 ${username}!`;
  TodoForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm2.classList.remove("login-form");
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLonginSubmit);
} else {
  paintGreetings(savedUsername);
}