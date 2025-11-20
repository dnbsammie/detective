import "../styles/end.css";

export function EndLayout(): HTMLElement {
    const main = document.createElement("main");
    const container = document.createElement("div");
    container.className = "container";

    main.appendChild(container);
    return main;
}
