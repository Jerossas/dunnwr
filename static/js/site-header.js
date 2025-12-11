document.addEventListener("DOMContentLoaded", () => {
  console.log("[site-header] DOMContentLoaded");

  const header = document.querySelector("[data-site-header]");
  console.log("[site-header] header =", header);
  if (!header) return;

  const toggleButton = header.querySelector("[data-site-header-toggle]");
  const nav = header.querySelector("[data-site-header-nav]");

  console.log("[site-header] toggleButton =", toggleButton);
  console.log("[site-header] nav =", nav);

  if (!toggleButton || !nav) return;

  toggleButton.addEventListener("click", () => {
    console.log("[site-header] toggle clicked");
    const isOpen = header.classList.toggle("site-header--nav-open");
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    console.log("[site-header] isOpen =", isOpen);
  });
});
