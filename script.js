// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project tabs
const tabs = document.querySelectorAll(".project-tab");
const panels = document.querySelectorAll(".project-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-target");

    tabs.forEach((t) => t.classList.remove("is-active"));
    panels.forEach((p) => p.classList.remove("is-active"));

    tab.classList.add("is-active");
    document.getElementById(targetId).classList.add("is-active");
  });
});
