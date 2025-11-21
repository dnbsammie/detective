import { renderHome } from "./pages/home";
import { renderGame } from "./pages/game";
import { renderEnd } from "./pages/end";
import { Footer } from "./components/UI/Footer";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";

  const path = window.location.pathname;
  let layoutContainer: HTMLElement;

  if (path.endsWith("/game.html")) {
    layoutContainer = renderGame();
  } else if (path.endsWith("/end.html")) {
    layoutContainer = renderEnd();
  } else {
    layoutContainer = renderHome();
  }
  const container = layoutContainer.querySelector(".container");
  if (container) container.appendChild(Footer());
  app.appendChild(layoutContainer);
});
