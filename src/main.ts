import { renderHome } from "./pages/home";
import { Footer } from "./components/UI/Footer";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = "";

  const layoutContainer = renderHome();

  const container = layoutContainer.querySelector(".container");
  if (container) container.appendChild(Footer());

  app.appendChild(layoutContainer);
});
