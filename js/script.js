const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
  if (topButton) topButton.style.display = window.scrollY > 300 ? "block" : "none";
});

if (topButton) {
  topButton.onclick = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

const current = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach((a) => {
  if (a.getAttribute("href") === current) a.classList.add("active");
});

const menuToggle = document.querySelector(".menu-toggle");
const navActions = document.querySelector(".nav-actions");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = navActions.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.textContent = open ? "✕" : "☰";
  });
}

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("nexora-theme");

if (savedTheme === "light") document.body.classList.add("light");

if (themeToggle) {
  const updateIcon = () =>
    (themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☀");

  updateIcon();

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    localStorage.setItem(
      "nexora-theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );

    updateIcon();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
