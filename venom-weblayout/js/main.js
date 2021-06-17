const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuButtonClose = document.querySelector(".menu-button-close");
menuButton.addEventListener("click", () => {
  menu.classList.add("is-open");
  menuButtonClose.classList.add("is-active");
});
menuButtonClose.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menuButtonClose.classList.remove("is-active");
});

const hideForm = document.querySelector(".hide-form");
const orderTicket = document.querySelector(".order-ticket");
const orderTrigger = document.querySelector(".order-trigger");

setTimeout(() => {
  const heightForm = orderTicket.offsetHeight;
  hideForm.style.bottom = -heightForm + "px";
}, 1000);

orderTrigger.addEventListener("click", () => {
  hideForm.classList.toggle("hide-form-active");
});
