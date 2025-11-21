import img_2 from "../assets/img/img_2.webp";

export function Hero() {
  const section = document.createElement("section");
  section.id = "hero";
  section.setAttribute("aria-labelledby", "hero-title");

  section.innerHTML = `
  <div class="hero-l">
      <h1 id="hero-title">Bienvenido<br>Detective</h1>
      <p>Bienvenido al caso “Homicidio en el Barrio San Lorenzo”.
          Únicamente detectives con criterio analítico,
          observación precisa y dominio emocional son capaces de
          reconstruir lo ocurrido.</p>
      <div class="hero-buttons">
      <button id="goToHistory" aria-label="Ir a la Historia">Ir a la Historia</button>
      <button id="goToRules" aria-label="Ir a las reglas">Ir a las reglas del juego</button>
          
      </div>
  </div>
  <div class="hero-r">
          <img src="${img_2}" alt="player img">
  </div>
  `;

  section.querySelector("#goToHistory")?.addEventListener("click", () => {
    document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
  });
  section.querySelector("#goToRules")?.addEventListener("click", () => {
    document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
  });



  return section;
}
