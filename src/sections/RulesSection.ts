import { navigateTo } from "../main";

export function Rules() {
  const section = document.createElement("section");
  section.id = "rules";
  section.setAttribute("aria-labelledby", "rules-title");

  section.innerHTML = `
    <h2 id="rules-title">Cómo jugar</h2>

    <p aria-label="Descripción general">
      Este simulador te permitirá analizar escenas, evaluar sospechosos,
      reconstruir líneas temporales y formular una acusación fundamentada.
    </p>

    <div class="cards">

      <!-- Carta 1 -->
      <div class="card" role="article" aria-label="Mecánica de búsqueda">
        <div class="card-title">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h5>Búsqueda</h5>
        </div>
        <ul>
          <li>Identifica pistas relevantes dentro de cada escena.</li>
          <li>Evalúa elementos forenses visibles.</li>
          <li>Determina inconsistencias físicas.</li>
        </ul>
      </div>

      <!-- Carta 2 -->
      <div class="card" role="article" aria-label="Mecánica de exploración">
        <div class="card-title">
          <i class="fa-regular fa-compass"></i>
          <h5>Exploración</h5>
        </div>
        <ul>
          <li>Analiza perfiles psicológicos y patrones de conducta.</li>
          <li>Contrasta testimonios con evidencia.</li>
          <li>Relaciona móviles, tiempos y oportunidades.</li>
        </ul>
      </div>

      <!-- Carta 3 -->
      <div class="card" role="article" aria-label="Mecánica de acusación">
        <div class="card-title">
          <i class="fa-solid fa-gavel"></i>
          <h5>Acusación</h5>
        </div>
        <ul>
          <li>Reconstruye el orden real de los eventos.</li>
          <li>Asocia evidencia a cada sospechoso.</li>
          <li>Formula tu veredicto final con argumentos sólidos.</li>
        </ul>
      </div>

    </div>

    <button id="startGame" aria-label="Comenzar juego e iniciar nivel 1">Comenzar la Investigación</button>
  `;

  section.querySelector("#startGame")?.addEventListener("click", () => {
    navigateTo("game");
  });


  return section;
}
