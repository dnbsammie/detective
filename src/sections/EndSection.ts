import { navigateTo } from "../utils/router";
import { state } from "../core/store";
import { levelCount, levelData } from "../core/levels";

export function EndSection() {
    const section = document.createElement("section");
    section.id = "resultSection";
    section.setAttribute("aria-labelledby", "result-content");

    const answers = state.answers || [];

    let totalCorrect = 0;
    for (let i = 0; i < levelCount; i++) {
        const level = levelData[i];
        if (answers[i] === level.correctIndex) {
            totalCorrect++;
        }
    }

    const lastIndex = levelCount - 1;

    const finalVerdictCorrect = answers[lastIndex] === levelData[lastIndex].correctIndex;

    const rule1Solved = totalCorrect >= 3 || finalVerdictCorrect;

    const clue1 = answers[0] === levelData[5].correctIndex;
    const clue2 = answers[3] === levelData[3].correctIndex;
    const clue3 = answers[5] === levelData[0].correctIndex;

    const rule2Solved = clue1 && clue2 && clue3;

    const solved = rule1Solved || rule2Solved;

    const finalVerdictLevel = levelData[lastIndex];

    const culprit = solved
        ? finalVerdictLevel.options[finalVerdictLevel.correctIndex].replace(/^[A-D]\.\s*/, "")
        : "Desconocido";

    const weapon = solved ? "Martillo" : "Indeterminado";
    const place = solved ? "Casa abandonada" : "Indeterminado";

    section.innerHTML = `
<div class="finalVerdict">
    <h1>CASO: ${solved ? 'RESUELTO' : 'NO RESUELTO'}</h1>
    
    <p>
        ${solved
            ? 'Lograste reconstruir el crimen mediante las pruebas clave o por un veredicto acertado.'
            : 'Las pruebas no fueron suficientes para resolver el caso.'}
    </p>

    <div class="squares">
        <div class="square">
            <small>SOSPECHOSO</small>
            <p class="detail">${culprit}</p>
        </div>
        <div class="square">
            <small>ARMA</small>
            <p class="detail">${weapon}</p>
        </div>
        <div class="square">
            <small>LUGAR</small>
            <p class="detail">${place}</p>
        </div>
    </div>

    <button id="goHome" aria-label="Return Home">Volver al Inicio</button>
</div>
    `;

    section.querySelector("#goHome")?.addEventListener("click", (e) => {
        e.preventDefault();
        navigateTo("index.html");
    });

    return section;
}