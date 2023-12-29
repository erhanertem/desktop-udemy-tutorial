const toggleButton = document.querySelector("#toggleMode");

const toggleTheme = () => {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Enable Dark Mode";
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Enable Light Mode";
  }
};

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Enable Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    toggleButton.textContent = "Enable Dark Mode";
  }
};
toggleButton.addEventListener("click", toggleTheme);

applySavedTheme();

window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    applySavedTheme();
  }
});
