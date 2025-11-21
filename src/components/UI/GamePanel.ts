export function GamePanel(_question: string, options: string[], correctIndex: number, onResult: (selectedIndex: number) => void) {
    const container = document.createElement("div");
    container.className = "panel";

    container.innerHTML = `
        <div class="panel-options"></div>
    `;

    const optionsContainer = container.querySelector(".panel-options") as HTMLElement;

    options.forEach((op, i) => {
        const option = document.createElement("div");
        option.className = "option";
        option.innerHTML = `<p>${op}</p>`;

        option.addEventListener("click", () => {
            const correct = i === correctIndex;

            onResult(i);

            option.classList.add(correct ? "correct" : "wrong");

            setTimeout(() => {
                container.dispatchEvent(new CustomEvent("panelFinished", { detail: { correct } }));
            }, 700);
        });

        optionsContainer.appendChild(option);
    });

    return container;
}