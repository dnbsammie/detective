(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=r(i);fetch(i.href,t)}})();function s(){const e=document.createElement("main"),a=document.createElement("div");return a.className="container",e.appendChild(a),e}const l="/detective/assets/img_2-xb6EFWwk.jpg";function c(){const e=document.createElement("section");return e.id="hero",e.setAttribute("aria-labelledby","hero-title"),e.innerHTML=`
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
          <img src="${l}" alt="player img">
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
  `,e.querySelector("#goToRules")?.addEventListener("click",()=>{document.getElementById("rules")?.scrollIntoView({behavior:"smooth"})}),e.querySelector("#startGame")?.addEventListener("click",()=>{window.location.href="/game.html"}),e}function d(){const e=document.createElement("section");return e.id="rules",e.setAttribute("aria-labelledby","rules-title"),e.innerHTML=`
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
  `,e.querySelector("#startGame")?.addEventListener("click",()=>{window.location.href="/game.html"}),e}function u(){const e=s(),a=e.querySelector(".container");if(!a)throw new Error("Container no encontrado");return a.appendChild(c()),a.appendChild(d()),e}function m(){const e=document.createElement("footer");return e.setAttribute("aria-label","Pie de página"),e.innerHTML=`
        <small>Hecho por:</small>
        <h3 aria-label="autor">SAMUEL RIVERA</h3>
        <a
            href="#"
            target="_blank"
            rel="noonpener noreferrer"
            aria-label="Github Repository Link"
            >&copy;2025 DETECTIVE / Operación San Lorenzo</a
        >
  `,e}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");if(!e)return;e.innerHTML="";const a=u(),r=a.querySelector(".container");r&&r.appendChild(m()),e.appendChild(a)});
