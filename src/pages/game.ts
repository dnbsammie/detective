import { GameLayout } from "../layouts/GameLayout";
import { Notebook } from "../components/UI/Notebook";
import { GameLog } from "../components/UI/GameLog";
import { GamePanel } from "../components/UI/GamePanel";
import { Inventory } from "../components/UI/Inventory";
import { levelIndex, levelData, goNextLevel, levelCount } from "../core/levels";
import { addLog, recordAnswer, state, addItem } from "../core/store";
import { GameSection } from "../sections/GameSection";

export function renderGame(): HTMLElement {
    const layout = GameLayout();
    const container = layout.querySelector(".container");
    if (!container) throw new Error("Container no encontrado");

    container.innerHTML = "";
    const section = GameSection();
    container.appendChild(section);

    const current = levelIndex();
    const data = levelData[current];
    const itemToAdd = data.item;

    const notebookSlot = container.querySelector(".notebook");
    const gamelogSlot = container.querySelector(".gamelog");
    const contentSlot = container.querySelector(".content");
    const panelSlot = container.querySelector(".gamePanel");
    let panelContainer = panelSlot as HTMLElement | null;
    if (!panelContainer) {
        const gameM = container.querySelector('.game-m') as HTMLElement | null;
        if (gameM) {
            panelContainer = document.createElement('div');
            panelContainer.className = 'gamePanel';
            const contentEl = gameM.querySelector('.content');
            if (contentEl && contentEl.nextSibling) {
                gameM.insertBefore(panelContainer, contentEl.nextSibling);
            } else {
                gameM.appendChild(panelContainer);
            }
        }
    }
    const inventorySlot = container.querySelector(".inventory");

    if (notebookSlot) {
        const nb = Notebook(data.notes, data.suspects);
        notebookSlot.appendChild(nb);
    }

    if (contentSlot) {
        contentSlot.innerHTML = `
            <p class="context"><strong>Contexto:</strong> ${data.context || ''}</p>
            <p class="question"><strong>Pregunta:</strong> ${data.question}</p>
        `;
    }

    if (panelContainer) {
        const panel = GamePanel(data.question, data.options, data.correctIndex, (selectedIndex) => {
            recordAnswer(selectedIndex);
            const isCorrect = selectedIndex === data.correctIndex;

            if (isCorrect && itemToAdd) {
                if (!state.inventory.includes(itemToAdd.name)) {
                    addItem(itemToAdd.name);
                    addLog(`¡ITEM OBTENIDO! "${itemToAdd.name}"`);
                }
            }

            addLog(`Nivel ${current + 1}: respuesta ${isCorrect ? 'correcta' : 'incorrecta'}`);
        });

        panel.addEventListener("panelFinished", () => {
            setTimeout(() => {
                if (current < levelCount - 1) {
                    goNextLevel();
                } else {
                    window.location.hash = 'end';
                }
            }, 600);
        });

        panelContainer.appendChild(panel);
    }

    if (gamelogSlot) {
        const gamelog = GameLog();
        state.log.forEach(l => gamelog.add(l));
        gamelogSlot.appendChild(gamelog.element);
    }

    if (inventorySlot) {
        const inventoryNames = state.inventory;
        const itemsInInventory = levelData
            .filter(level => level.item && inventoryNames.includes(level.item.name))
            .map(level => {
                const relativePath = level.item.img;
                const absolutePath = relativePath ? relativePath.replace("../", "/") : null;

                return {
                    img: absolutePath,
                    name: level.item.name
                };
            })
            .filter(item => item.img !== null)
            .sort((a, b) => inventoryNames.indexOf(a.name) - inventoryNames.indexOf(b.name));


        const inv = Inventory(itemsInInventory as { img: string, name: string }[]);
        inventorySlot.appendChild(inv);
    }

    return layout;
}
