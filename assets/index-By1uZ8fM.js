(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();function T(){const e=document.createElement("main"),n=document.createElement("div");return n.className="container",e.appendChild(n),e}const R="/detective/assets/img_2-xb6EFWwk.webp";function x(){const e=document.createElement("section");return e.id="hero",e.setAttribute("aria-labelledby","hero-title"),e.innerHTML=`
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
          <img src="${R}" alt="player img">
  </div>
  `,e.querySelector("#goToHistory")?.addEventListener("click",()=>{document.getElementById("history")?.scrollIntoView({behavior:"smooth"})}),e.querySelector("#goToRules")?.addEventListener("click",()=>{document.getElementById("rules")?.scrollIntoView({behavior:"smooth"})}),e}function P(){const e=document.createElement("section");return e.id="history",e.setAttribute("aria-labelledby","history-title"),e.innerHTML=`
  <h1 id="history-title">      HISTORIA INICIAL </h1>
  <p>En la madrugada del 7 de septiembre de 2025, los vecinos del barrio San Lorenzo reportaron gritos, golpes y un fuerte ruido metálico proveniente de una casa abandonada.
Cuando la policía ingresó, encontró el cuerpo sin vida de S Carvajal, 23 años, estudiante universitaria, con signos de violencia física extrema.</p>


  <span id="text_accent">El crimen estremeció a Bogotá.</span>

<p>Tú y tu equipo llegan como analistas criminológicos, especialistas en perfilación, evaluación conductual y análisis de escena.
Hay tres sospechosos, pistas contradictorias y un posible motivo psicológico detrás del homicidio.
Tu misión: Resolver el crimen antes de que el caso se cierre sin responsable.></p>

<button id="goToRules" aria-label="Ir a las reglas">Ir a las reglas del juego</button>

  `,e.querySelector("#goToRules")?.addEventListener("click",()=>{document.getElementById("rules")?.scrollIntoView({behavior:"smooth"})}),e}function D(){const e=document.createElement("section");return e.id="rules",e.setAttribute("aria-labelledby","rules-title"),e.innerHTML=`
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
  `,e.querySelector("#startGame")?.addEventListener("click",()=>{pe("game")}),e}function H(){const e=T(),n=e.querySelector(".container");if(!n)throw new Error("Container no encontrado");return n.appendChild(x()),n.appendChild(P()),n.appendChild(D()),e}function N(){const e=document.createElement("main"),n=document.createElement("div");return n.className="container",e.appendChild(n),e}function z(e=[],n=[]){const a=document.createElement("div");a.className="notebook",a.innerHTML=`
    <h6>NOTAS</h6>
    <hr>
    <div class="toggle">
      <button id="nb-notes">Pistas</button>
      <button id="nb-suspects">Sospechosos</button>
    </div>

    <ul class="nb-list nb-notes"></ul>
    <ul class="nb-list nb-suspects" style="display:none"></ul>
  `;const o=a.querySelector(".nb-notes"),t=a.querySelector(".nb-suspects");return e.forEach(i=>{const s=document.createElement("li");s.textContent=i,o.appendChild(s)}),n.forEach(i=>{const s=document.createElement("li");s.textContent=i,t.appendChild(s)}),a.querySelector("#nb-notes")?.addEventListener("click",()=>{o.style.display="block",t.style.display="none"}),a.querySelector("#nb-suspects")?.addEventListener("click",()=>{o.style.display="none",t.style.display="block"}),a}const O=4;function _(){const e=document.createElement("div");e.className="gamelog",e.innerHTML=`
    <h6>GAME LOG</h6>
    <hr>
    <ul class="log-list"></ul>
  `;const n=e.querySelector(".log-list");function a(o){const t=document.createElement("li");if(t.textContent=o,n.appendChild(t),n.children.length>O){const i=n.firstChild;i&&n.removeChild(i)}e.scrollTop=e.scrollHeight}return{element:e,add:a}}function $(e,n,a,o){const t=document.createElement("div");t.className="panel",t.innerHTML=`
        <div class="panel-options"></div>
    `;const i=t.querySelector(".panel-options");return n.forEach((s,l)=>{const r=document.createElement("div");r.className="option",r.innerHTML=`<p>${s}</p>`,r.addEventListener("click",()=>{const f=l===a;o(l),r.classList.add(f?"correct":"wrong"),setTimeout(()=>{t.dispatchEvent(new CustomEvent("panelFinished",{detail:{correct:f}}))},700)}),i.appendChild(r)}),t}function F(e=[]){const n=document.createElement("div");n.className="inventory",n.innerHTML=`
    <h6>INVENTARIO</h6>
    <hr>
    <div class="item-list"></div>
  `;const a=n.querySelector(".item-list");let o=null;e.forEach(s=>{const l=document.createElement("div");l.className="item",l.innerHTML=`
            <img src="${s.img}" alt="${s.name}">
            <p class="item-name">${s.name}</p>
        `,l.addEventListener("mouseenter",()=>{i(s.img,s.name)}),l.addEventListener("mouseleave",()=>{t()}),l.addEventListener("click",()=>{i(s.img,s.name)}),a.appendChild(l)});function t(){if(o){try{clearTimeout(o.timeoutId)}catch{}o.modal.remove(),o=null}}function i(s,l){t();const r=document.createElement("div");r.className="modal-img",r.innerHTML=`
      <div class="modal-bg"></div>
      <div class="modal-content">
      <img src="${s}" alt="${l}">
      </div>
    `,r.querySelector(".modal-bg")?.addEventListener("click",()=>{o&&(clearTimeout(o.timeoutId),o=null),r.remove()}),document.body.appendChild(r);const c=window.setTimeout(()=>{r.remove(),o&&(o=null)},1500);o={modal:r,timeoutId:c}}return n}const j="modulepreload",k=function(e){return"/detective/"+e},w={},B=function(n,a,o){let t=Promise.resolve();if(a&&a.length>0){let f=function(c){return Promise.all(c.map(v=>Promise.resolve(v).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};var s=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),r=l?.nonce||l?.getAttribute("nonce");t=f(a.map(c=>{if(c=k(c),c in w)return;w[c]=!0;const v=c.endsWith(".css"),d=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const u=document.createElement("link");if(u.rel=v?"stylesheet":j,v||(u.as="script"),u.crossOrigin="",u.href=c,r&&u.setAttribute("nonce",r),document.head.appendChild(u),v)return new Promise((g,m)=>{u.addEventListener("load",g),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(l){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=l,window.dispatchEvent(r),!r.defaultPrevented)throw l}return t.then(l=>{for(const r of l||[])r.status==="rejected"&&i(r.reason);return n().catch(i)})},q="detectiveGameAnswers",p={currentLevel:0,log:[],inventory:[],answers:Q()};function G(){p.currentLevel++}function I(e){p.log.push(e)}function V(e){p.inventory.push(e)}function U(){localStorage.setItem(q,JSON.stringify(p.answers))}function Q(){const e=localStorage.getItem(q);return e?JSON.parse(e):[]}function W(e){p.answers||(p.answers=[]),p.answers[p.currentLevel]=e,U()}const J="/detective/assets/item_1-D_iiPtLp.webp",Y="/detective/assets/item_2-C7DvcqNc.webp",K="/detective/assets/item_3-CbuaoDRh.webp",X="/detective/assets/item_4-0cilD9bA.webp",Z="/detective/assets/item_5-C85RA9JG.webp",h=[{title:"Escena del Crimen",context:"Después de examinar cada detalle de la habitación —la mesa volcada, las manchas de sangre, el martillo hallado y el celular roto— ahora debes interpretar lo que estos elementos revelan sobre la dinámica del ataque. Uno de los indicios más importantes es la entrada al lugar del crimen. Antes de continuar, analiza lo que su estado sugiere sobre la relación entre víctima y agresor.",notes:["La mesa está volcada y hay manchas de sangre en patrón de salpicadura.","El cuerpo presenta heridas defensivas en antebrazos.","Se halló un martillo con huellas parciales.","Hay un celular roto cerca del cuerpo.","La puerta no fue forzada."],suspects:["A. Méndez (Expareja)","M. Ríos (Vecino)","D. Franco (Amiga Cercana)"],question:"¿Qué indica la ausencia de puerta forzada?",options:["A. Que la víctima conocía al agresor.","B. Que el agresor era un ladrón improvisado.","C. Que entró por el techo.","D. Que fue un asesinato aleatorio."],correctIndex:0,item:{img:J,name:"Informe Policial"}},{title:"Perfiles Psicológicos",context:"Con los comportamientos y antecedentes de los tres sospechosos sobre la mesa, es momento de comprender cuál de ellos presenta un patrón que encaja mejor con un acto violento premeditado. Estudia sus motivaciones, su historial emocional y las señales de riesgo psicológico para determinar quién tenía la capacidad y la disposición de planear un ataque.",notes:["A Méndez: Conductas posesivas, mensajes insistentes, discusiones recientes.","M Ríos: Violencia impulsiva, riñas en la zona, coartada débil.","D Franco: Celos por proyecto, mensajes contradictorios, eliminó chats."],suspects:["A. Méndez","M. Ríos","D. Franco"],question:"¿Cuál perfil muestra violencia planificada?",options:["A. A. Méndez","B. M. Ríos","C. D. Franco","D. A. Méndez y D. Franco"],correctIndex:3,item:{img:Y,name:"Perfil Psicológico"}},{title:"Interrogatorios",context:"Tras escuchar los testimonios, tu tarea ahora es evaluar la coherencia de cada versión. Las contradicciones son una ventana a la mentira y al ocultamiento, y en un caso de homicidio, la desviación más pequeña puede ser la clave para descubrir la verdad. Revisa qué declaración resulta más incompatible con la evidencia encontrada.",notes:["A Méndez: dijo estar en su casa 'toda la noche', cámaras lo contradicen.","M Ríos: escuchó gritos, vecinos lo vieron cerca.","D Franco: dijo no verla, pero mensajes citándola al lugar del crimen."],suspects:["A. Méndez","M. Ríos","D. Franco"],question:"¿Cuál testimonio tiene la contradicción más grave? Selección multiple.",options:["A. A. Méndez","B. M. Ríos","C. D. Franco","D. Ninguno"],correctIndex:2,item:{img:K,name:"Ficha de Interrogatorio"}},{title:"Evidencia Forense",context:"Ahora que tienes acceso a las pruebas forenses, debes determinar qué pieza de evidencia tiene mayor peso para vincular directamente a un sospechoso con la agresión. La fuerza de cada indicio depende de su proximidad al acto violento y de la probabilidad de que sea producto del enfrentamiento.",notes:["Huella parcial en el martillo coincide 80% con A Méndez.","ADN debajo de las uñas coincide con D Franco.","Huellas de zapatillas coinciden con M Ríos."],suspects:["A. Méndez","M. Ríos","D. Franco"],question:"¿Cuál evidencia tiene el mayor peso criminológico?",options:["A. Huella parcial en martillo","B. ADN debajo de las uñas","C. Huellas de zapatillas","D. Ninguna"],correctIndex:1,item:{img:X,name:"Ficha Forense"}},{title:"Reconstrucción del Crimen",context:"Con todos los elementos reunidos —mensajes, movimientos, evidencia física y el patrón emocional del agresor— es momento de reconstruir los hechos. Determinar si el homicidio surgió de un arrebato o de una acción preparada es esencial para entender la psicología del crimen y su verdadero origen.",notes:["S. Carvajal llega a la casa abandonada (cita de D Franco).","Confrontación verbal y luego física. S intenta huir.","El sospechoso toma el martillo y se producen golpes contundentes."],suspects:["A. Méndez","M. Ríos","D. Franco"],question:"¿El homicidio fue impulsivo o planificado?",options:["A. Impulsivo","B. Planificado","C. Parcialmente planificado","D. No hay pruebas"],correctIndex:2,item:{img:Z,name:"Reconstrucción cronológica"}},{title:"VEREDICTO",context:"Has seguido cada pista, reconstruido cada minuto y desarmado cada mentira… pero algo inquietante permanece en el ambiente. A medida que revisas tus notas, te das cuenta de que cada sospechoso dejó una sombra en la escena, como si todos hubieran estado allí de algún modo. Las coartadas se rompen, los motivos se mezclan y la lógica parece tambalearse por un instante. ¿Y si la verdad no fuera tan lineal como creíste? ¿Y si, entre todas estas historias cruzadas, solo una mano llevó realmente el golpe final? Es momento de decidir, pero cuidado: este es el punto donde muchos investigadores se equivocan.",notes:["A Méndez: La huella en el martillo sigue sin cuadrar del todo.","M Ríos: Lo vieron cerca… pero no hay prueba de que entrara.","D Franco: Su versión no encaja, pero su miedo parece real.","Suicidio: “El mensaje sin enviar decía: ‘No puedo más’.”"],suspects:["A. Méndez","M. Ríos","D. Franco","Suicidio"],question:"¿Quién es el asesino?",options:["A. A. Méndez","B. M. Ríos","C. D. Franco","D. Fue un suicidio"],correctIndex:2,item:{img:null,name:"Reconstrucción final"}}],E=h.length,L=()=>p.currentLevel;function ee(){const e=document.getElementById("app");e&&(e.innerHTML="",B(()=>Promise.resolve().then(()=>re),void 0).then(n=>{e.appendChild(n.renderGame())}).catch(()=>{window.location.reload()}))}function ne(){p.currentLevel<h.length-1&&(G(),ee())}function S(e){const n=window.location.pathname.split("/")[1];window.location.hostname.includes("github.io")?window.location.href=`/${n}/${e}`:window.location.href=`/${e}`}const te="/detective/assets/audio-Czw5gszo.wav";let b=null;const oe=.2;function ae(){b||(b=new Audio(te),b.loop=!0,b.volume=oe)}function ie(){ae(),b&&b.play().catch(e=>{console.warn("Autoplay bloqueado. El usuario debe interactuar para iniciar la música.",e)})}function C(){b&&b.pause()}function se(){const e=document.createElement("section");return e.id="gameContent",e.innerHTML=`
    <header id="title">
      <h5>Parte ${L()+1}: ${h[L()].title}</h5>

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
  `,e.querySelector("#goHome")?.addEventListener("click",n=>{n.preventDefault(),C(),S("index.html")}),e}function A(){const e=N(),n=e.querySelector(".container");if(!n)throw new Error("Container no encontrado");n.innerHTML="";const a=se();n.appendChild(a);const o=L(),t=h[o],i=t.item,s=n.querySelector(".notebook"),l=n.querySelector(".gamelog"),r=n.querySelector(".content");let c=n.querySelector(".gamePanel");if(!c){const d=n.querySelector(".game-m");if(d){c=document.createElement("div"),c.className="gamePanel";const u=d.querySelector(".content");u&&u.nextSibling?d.insertBefore(c,u.nextSibling):d.appendChild(c)}}const v=n.querySelector(".inventory");if(s){const d=z(t.notes,t.suspects);s.appendChild(d)}if(r&&(r.innerHTML=`
            <p class="context"><strong>Contexto:</strong> ${t.context||""}</p>
            <p class="question"><strong>Pregunta:</strong> ${t.question}</p>
        `),c){const d=$(t.question,t.options,t.correctIndex,u=>{W(u);const g=u===t.correctIndex;g&&i&&(p.inventory.includes(i.name)||(V(i.name),I(`¡ITEM OBTENIDO! "${i.name}"`))),I(`Nivel ${o+1}: respuesta ${g?"correcta":"incorrecta"}`)});d.addEventListener("panelFinished",()=>{setTimeout(()=>{o<E-1?ne():S("end.html")},600)}),c.appendChild(d)}if(l){const d=_();p.log.forEach(u=>d.add(u)),l.appendChild(d.element)}if(v){const d=p.inventory,u=h.filter(m=>m.item&&d.includes(m.item.name)).map(m=>{const y=m.item.img;return{img:y?y.replace("../","/"):null,name:m.item.name}}).filter(m=>m.img!==null).sort((m,y)=>d.indexOf(m.name)-d.indexOf(y.name)),g=F(u);v.appendChild(g)}return e}const re=Object.freeze(Object.defineProperty({__proto__:null,renderGame:A},Symbol.toStringTag,{value:"Module"}));function ce(){const e=document.createElement("main"),n=document.createElement("div");return n.className="container",e.appendChild(n),e}function le(){const e=document.createElement("section");e.id="resultSection",e.setAttribute("aria-labelledby","result-content");const n=p.answers||[];let a=0;for(let m=0;m<E;m++){const y=h[m];n[m]===y.correctIndex&&a++}const o=E-1,t=n[o]===h[o].correctIndex,i=a>=3||t,s=n[0]===h[5].correctIndex,l=n[3]===h[3].correctIndex,r=n[5]===h[0].correctIndex,c=i||s&&l&&r,v=h[o],d=c?v.options[v.correctIndex].replace(/^[A-D]\.\s*/,""):"Desconocido",u=c?"Martillo":"Indeterminado",g=c?"Casa abandonada":"Indeterminado";return e.innerHTML=`
<div class="finalVerdict">
    <h1>CASO: ${c?"RESUELTO":"NO RESUELTO"}</h1>
    
    <p>
        ${c?"Lograste reconstruir el crimen mediante las pruebas clave o por un veredicto acertado.":"Las pruebas no fueron suficientes para resolver el caso."}
    </p>

    <div class="squares">
        <div class="square">
            <small>SOSPECHOSO</small>
            <p class="detail">${d}</p>
        </div>
        <div class="square">
            <small>ARMA</small>
            <p class="detail">${u}</p>
        </div>
        <div class="square">
            <small>LUGAR</small>
            <p class="detail">${g}</p>
        </div>
    </div>

    <button id="goHome" aria-label="Return Home">Volver al Inicio</button>
</div>
    `,e.querySelector("#goHome")?.addEventListener("click",m=>{m.preventDefault(),S("index.html")}),e}function de(){const e=ce(),n=e.querySelector(".container");if(!n)throw new Error("Container no encontrado");return n.appendChild(le()),e}function ue(){const e=document.createElement("footer");return e.setAttribute("aria-label","Pie de página"),e.innerHTML=`
        <small>Hecho por:</small>
        <h3 aria-label="autor">SAMUEL RIVERA</h3>
        <a
            href="https://github.com/dnbsammie/detective"
            target="_blank"
            rel="noonpener noreferrer"
            aria-label="Github Repository Link"
            >&copy;2025 DETECTIVE / Operación San Lorenzo</a
        >
  `,e}function me(){return window.location.hash.slice(1)||"home"}function M(){const e=document.getElementById("app");if(!e)return;e.innerHTML="";const n=me();let a;n==="game"?(a=A(),ie()):n==="end"?(a=de(),C()):(a=H(),C());const o=a.querySelector(".container");o&&o.appendChild(ue()),e.appendChild(a)}document.addEventListener("DOMContentLoaded",M);window.addEventListener("hashchange",M);function pe(e){if(e.includes(".html")||e.startsWith("/"))if(window.location.hostname.includes("github.io")){const a=window.location.pathname.split("/").filter(t=>t.length>0),o=a.length>0?a[0]:"";window.location.href=`/${o}/${e}`}else window.location.href=`/${e}`;else window.location.hash=e}
