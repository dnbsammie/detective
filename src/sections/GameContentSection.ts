// import { GameLog } from "../components/UI/GameLog";
// import { Notebook } from "../components/UI/Notebook";
// import { Panel } from "../components/UI/Panel";
// import { Inventory } from "../components/UI/Inventory";

export function GameContentSection(): HTMLElement {
  const section = document.createElement("section");
  section.id = "gameContent";
  section.setAttribute("aria-labelledby", "game-content");

  // const leftDiv = document.createElement("div");
  // leftDiv.className = "game-left";
  // // leftDiv.appendChild(Notebook());
  // // leftDiv.appendChild(GameLog());

  // const centerDiv = document.createElement("div");
  // centerDiv.className = "game-center";
  // centerDiv.innerHTML = `<div id="levelContent">Contenido del nivel aquí</div>
  //                        <div id="panelContainer">${Panel().outerHTML}</div>`;

  // const rightDiv = document.createElement("div");
  // rightDiv.className = "game-right";
  // rightDiv.appendChild(Inventory());

  // section.appendChild(leftDiv);
  // section.appendChild(centerDiv);
  // section.appendChild(rightDiv);

  return section;
}
