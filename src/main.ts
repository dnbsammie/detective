import { renderHome } from "./pages/home";
import { renderGame } from "./pages/game";
import { renderEnd } from "./pages/end";
import { Footer } from "./components/UI/Footer";
import { playBackgroundMusic, pauseBackgroundMusic } from "./components/BackgroundMusic"

function getCurrentRoute(): string {
  const hash = window.location.hash.slice(1);
  return hash || 'home';
}

function renderApp() {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";

  const route = getCurrentRoute();
  let layoutContainer: HTMLElement;

  if (route === "game") {
    layoutContainer = renderGame();
    playBackgroundMusic();
  } else if (route === "end") {
    layoutContainer = renderEnd();
    pauseBackgroundMusic();
  } else {
    layoutContainer = renderHome();
    pauseBackgroundMusic();
  }

  const container = layoutContainer.querySelector(".container");
  if (container) container.appendChild(Footer());
  app.appendChild(layoutContainer);
}

document.addEventListener("DOMContentLoaded", renderApp);
window.addEventListener("hashchange", renderApp);


export function navigateTo(page: string) {

  if (page.includes(".html") || page.startsWith('/')) {
    const isGithubPages = window.location.hostname.includes("github.io");

    if (isGithubPages) {
      const parts = window.location.pathname.split('/').filter(p => p.length > 0);
      const basePath = parts.length > 0 ? parts[0] : '';

      window.location.href = `/${basePath}/${page}`;
    } else {
      window.location.href = `/${page}`;
    }
  } else {
    window.location.hash = page;
  }
}