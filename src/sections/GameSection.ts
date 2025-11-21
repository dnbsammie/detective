// nextLevel, prevLevel,
import { levelIndex, levelData } from "../core/levels";
import { pauseBackgroundMusic } from "../components/BackgroundMusic";
import { navigateTo } from "../utils/router";

export function GameSection() {
  const section = document.createElement("section");
  section.id = "gameContent";

  section.innerHTML = `
    <header id="title">
      <h5>Parte ${levelIndex() + 1}: ${levelData[levelIndex()].title}</h5>

      <nav class="level-nav" aria-label="Navegación de niveles">
      <!-- <a href="#" id="prevLevel">Anterior</a> -->
      
        <!--<a href="#" id="nextLevel">Siguiente</a>-->
        <a href="#" id="goHome">Inicio</a>
      </nav>
    </header>

    <div class="gameWindow">

      <div class="game-l">
        <div class="notebook"></div>
        <div class="gamelog"></div>
      </div>

      <div class="game-m">
        <div class="content"></div>
      </div>

      <div class="game-r">
        <div class="inventory"></div>
      </div>

    </div>
  `;

  // section.querySelector("#prevLevel")?.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   prevLevel();
  // });

  // section.querySelector("#nextLevel")?.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   nextLevel();
  // });

  section.querySelector("#goHome")?.addEventListener("click", (e) => {
    e.preventDefault();
    pauseBackgroundMusic();
    navigateTo("index.html");
  });
  return section;
}
