document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const toggleButton = header.querySelector("[data-site-header-toggle]");
  const nav = header.querySelector("[data-site-header-nav]");

  if (!toggleButton || !nav) return;

  toggleButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("site-header--nav-open");
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
