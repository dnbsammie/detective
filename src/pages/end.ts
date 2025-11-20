import { HomeLayout } from "../layouts/HomeLayout";
import { Hero } from "../sections/HeroSection";
import { Rules } from "../sections/RulesSection";

export function renderEnd(): HTMLElement | undefined {
    const app = document.getElementById("app");
    if (!app) return;

    app.innerHTML = "";

    const layout = HomeLayout();

    const container = layout.querySelector(".container");
    if (!container) return;

    container.appendChild(Hero());
    container.appendChild(Rules());

    app.appendChild(layout);
}
