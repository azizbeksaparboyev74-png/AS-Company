/* ======================
   BURGER MENU
====================== */
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

/* ======================
   PROJECT MODAL
====================== */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openModal(title, text) {
  modal.style.display = "flex";
  modalTitle.textContent = title;
  modalText.textContent = text;
}

function closeModal() {
  modal.style.display = "none";
}

/* Close modal on outside click */
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

/* Close modal with ESC */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ======================
   DARK MODE
====================== */
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  // Save mode
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
}

/* Load dark mode on refresh */
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}
/* ======================
   SERVICES MODAL
====================== */
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");
    const text = card.getAttribute("data-text");

    modalTitle.textContent = title;
    modalText.textContent = text;
    modal.style.display = "flex";
  });
});
/* MOBILE SLIDE MODAL */
modal.style.display = "flex";
