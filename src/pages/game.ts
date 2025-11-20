import { GameLayout } from "../layouts/GameLayout";
import { GameContentSection } from "../sections/GameContentSection";

export function renderGame(): HTMLElement {
    const layout = GameLayout();
    const container = layout.querySelector(".container");
    if (!container) throw new Error("Container no encontrado");

    container.appendChild(GameContentSection());

    return layout;
}
