const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  toggleBtn.textContent =
    document.body.classList.contains("dark-theme") ? "☀️" : "🌙";

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-theme") ? "dark" : "light"
  );
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️";
  }
});
