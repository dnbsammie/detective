import { HomeLayout } from "../layouts/HomeLayout";
import { Hero } from "../sections/HeroSection";
import { History } from "../sections/HistorySection";
import { Rules } from "../sections/RulesSection";

export function renderHome(): HTMLElement {
    const layout = HomeLayout();
    const container = layout.querySelector(".container");
    if (!container) throw new Error("Container no encontrado");

    container.appendChild(Hero());
    container.appendChild(History());
    container.appendChild(Rules());

    return layout;
}
