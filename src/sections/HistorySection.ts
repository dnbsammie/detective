export function History() {
    const section = document.createElement("section");
    section.id = "history";
    section.setAttribute("aria-labelledby", "history-title");

    section.innerHTML = `
  <h1 id="history-title">      HISTORIA INICIAL </h1>
  <p>En la madrugada del 7 de septiembre de 2025, los vecinos del barrio San Lorenzo reportaron gritos, golpes y un fuerte ruido metálico proveniente de una casa abandonada.
Cuando la policía ingresó, encontró el cuerpo sin vida de S Carvajal, 23 años, estudiante universitaria, con signos de violencia física extrema.</p>


  <span id="text_accent">El crimen estremeció a Bogotá.</span>

<p>Tú y tu equipo llegan como analistas criminológicos, especialistas en perfilación, evaluación conductual y análisis de escena.
Hay tres sospechosos, pistas contradictorias y un posible motivo psicológico detrás del homicidio.
Tu misión: Resolver el crimen antes de que el caso se cierre sin responsable.></p>

<button id="goToRules" aria-label="Ir a las reglas">Ir a las reglas del juego</button>

  `;

    section.querySelector("#goToRules")?.addEventListener("click", () => {
        document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
    });


    return section;
}
