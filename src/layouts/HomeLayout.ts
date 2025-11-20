import "../styles/home.css";

export function HomeLayout(): HTMLElement {
    const main = document.createElement("main");
    const container = document.createElement("div");
    container.className = "container";

    main.appendChild(container);
    return main;
}
