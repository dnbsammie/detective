import img_2 from "../assets/img/img_2.jpg";

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
          <button id="startGame" aria-label="Comenzar juego e iniciar nivel 1">Comenzar la Investigación</button>
          <button id="goToRules" aria-label="Ir a las reglas">Ir a las reglas del juego</button>
      </div>
  </div>
  <div class="hero-r">
      <div class="player">
          <img src="${img_2}" alt="player img">
      </div>
      <p>En la madrugada del 7 de septiembre de 2025, los vecinos del barrio San Lorenzo reportaron gritos, golpes y un
          fuerte ruido metálico proveniente de una casa abandonada.<br>Cuando la policía ingresó, encontró el cuerpo sin
          vida de S. Carvajal, 23 años, estudiante universitaria, con
          signos de violencia física extrema.</p>
      <span id="text_accent">El crimen estremeció a Bogotá.</span>
      <p>Tú y tu equipo llegan como analistas criminológicos, especialistas en perfilación, evaluación conductual y
          análisis de escena.
          Hay tres sospechosos, pistas contradictorias y un posible motivo psicológico detrás del homicidio.
          Tu misión: Resolver el crimen antes de que el caso se cierre sin responsable
      </p>
  </div>
  `;

  section.querySelector("#goToRules")?.addEventListener("click", () => {
    document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
  });

  section.querySelector("#startGame")?.addEventListener("click", () => {
    window.location.href = "/game.html";
  });

  return section;
}
