import { EndLayout } from "../layouts/EndLayout";
import { EndSection } from "../sections/EndSection";

export function renderEnd(): HTMLElement {
    const layout = EndLayout();
    const container = layout.querySelector(".container");
    if (!container) throw new Error("Container no encontrado");

    container.appendChild(EndSection());

    return layout;
}
