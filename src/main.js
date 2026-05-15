import "./style.css";

const modal = document.querySelector("[data-modal]");
const openBtn = document.querySelector("[data-open-rules]");
const closeEls = document.querySelectorAll("[data-close-rules]");

function openModal() {
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
}

openBtn?.addEventListener("click", openModal);
closeEls.forEach((el) => el.addEventListener("click", closeModal));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});
