import { state, nextLevel as storeNext, prevLevel as storePrev, setLevel as storeSet } from "./store";
import item_1 from "../assets/img/item_1.webp";
import item_2 from "../assets/img/item_2.webp";
import item_3 from "../assets/img/item_3.webp";
import item_4 from "../assets/img/item_4.webp";
import item_5 from "../assets/img/item_5.webp";

export const levelData = [
    {
        // nivel 1
        title: "Escena del Crimen",
        context: "Después de examinar cada detalle de la habitación —la mesa volcada, las manchas de sangre, el martillo hallado y el celular roto— ahora debes interpretar lo que estos elementos revelan sobre la dinámica del ataque. Uno de los indicios más importantes es la entrada al lugar del crimen. Antes de continuar, analiza lo que su estado sugiere sobre la relación entre víctima y agresor.",
        notes: [
            "La mesa está volcada y hay manchas de sangre en patrón de salpicadura.",
            "El cuerpo presenta heridas defensivas en antebrazos.",
            "Se halló un martillo con huellas parciales.",
            "Hay un celular roto cerca del cuerpo.",
            "La puerta no fue forzada."
        ],
        suspects: ["A. Méndez (Expareja)", "M. Ríos (Vecino)", "D. Franco (Amiga Cercana)"],
        question: "¿Qué indica la ausencia de puerta forzada?",
        options: [
            "A. Que la víctima conocía al agresor.",
            "B. Que el agresor era un ladrón improvisado.",
            "C. Que entró por el techo.",
            "D. Que fue un asesinato aleatorio."
        ],
        correctIndex: 0,
        item: { img: item_1, name: "Informe Policial" }
    },
    {
        // nivel 2
        title: "Perfiles Psicológicos",
        context: "Con los comportamientos y antecedentes de los tres sospechosos sobre la mesa, es momento de comprender cuál de ellos presenta un patrón que encaja mejor con un acto violento premeditado. Estudia sus motivaciones, su historial emocional y las señales de riesgo psicológico para determinar quién tenía la capacidad y la disposición de planear un ataque.",
        notes: [
            "A Méndez: Conductas posesivas, mensajes insistentes, discusiones recientes.",
            "M Ríos: Violencia impulsiva, riñas en la zona, coartada débil.",
            "D Franco: Celos por proyecto, mensajes contradictorios, eliminó chats."
        ],
        suspects: ["A. Méndez", "M. Ríos", "D. Franco"],
        question: "¿Cuál perfil muestra violencia planificada?",
        options: [
            "A. A. Méndez",
            "B. M. Ríos",
            "C. D. Franco",
            "D. A. Méndez y D. Franco"
        ],
        correctIndex: 3,
        item: { img: item_2, name: "Perfil Psicológico" }
    },
    {
        // nivel 3
        title: "Interrogatorios",
        context: "Tras escuchar los testimonios, tu tarea ahora es evaluar la coherencia de cada versión. Las contradicciones son una ventana a la mentira y al ocultamiento, y en un caso de homicidio, la desviación más pequeña puede ser la clave para descubrir la verdad. Revisa qué declaración resulta más incompatible con la evidencia encontrada.",
        notes: [
            "A Méndez: dijo estar en su casa 'toda la noche', cámaras lo contradicen.",
            "M Ríos: escuchó gritos, vecinos lo vieron cerca.",
            "D Franco: dijo no verla, pero mensajes citándola al lugar del crimen."
        ],
        suspects: ["A. Méndez", "M. Ríos", "D. Franco"],
        question: "¿Cuál testimonio tiene la contradicción más grave?",
        options: [
            "A. A. Méndez",
            "B. M. Ríos",
            "C. D. Franco",
            "D. Ninguno"
        ],
        correctIndex: 2,
        item: { img: item_3, name: "Ficha de Interrogatorio" }
    },
    {
        // nivel 4
        title: "Evidencia Forense",
        context: "Ahora que tienes acceso a las pruebas forenses, debes determinar qué pieza de evidencia tiene mayor peso para vincular directamente a un sospechoso con la agresión. La fuerza de cada indicio depende de su proximidad al acto violento y de la probabilidad de que sea producto del enfrentamiento.",
        notes: [
            "Huella parcial en el martillo coincide 80% con A Méndez.",
            "ADN debajo de las uñas coincide con D Franco.",
            "Huellas de zapatillas coinciden con M Ríos."
        ],
        suspects: ["A. Méndez", "M. Ríos", "D. Franco"],
        question: "¿Cuál evidencia tiene el mayor peso criminológico?",
        options: [
            "A. Huella parcial en martillo",
            "B. ADN debajo de las uñas",
            "C. Huellas de zapatillas",
            "D. Ninguna"
        ],
        correctIndex: 1,
        item: { img: item_4, name: "Ficha Forense" }
    },
    {
        // nivel 5
        title: "Reconstrucción del Crimen",
        context: "Con todos los elementos reunidos —mensajes, movimientos, evidencia física y el patrón emocional del agresor— es momento de reconstruir los hechos. Determinar si el homicidio surgió de un arrebato o de una acción preparada es esencial para entender la psicología del crimen y su verdadero origen.",
        notes: [
            "S. Carvajal llega a la casa abandonada (cita de D Franco).",
            "Confrontación verbal y luego física. S intenta huir.",
            "El sospechoso toma el martillo y se producen golpes contundentes."
        ],
        suspects: ["A. Méndez", "M. Ríos", "D. Franco"],
        question: "¿El homicidio fue impulsivo o planificado?",
        options: [
            "A. Impulsivo",
            "B. Planificado",
            "C. Parcialmente planificado",
            "D. No hay pruebas"
        ],
        correctIndex: 2,
        item: { img: item_5, name: "Reconstrucción cronológica" }
    },
    {
        // nivel final
        title: "VEREDICTO",
        context: "Has seguido cada pista, reconstruido cada minuto y desarmado cada mentira… pero algo inquietante permanece en el ambiente. A medida que revisas tus notas, te das cuenta de que cada sospechoso dejó una sombra en la escena, como si todos hubieran estado allí de algún modo. Las coartadas se rompen, los motivos se mezclan y la lógica parece tambalearse por un instante. ¿Y si la verdad no fuera tan lineal como creíste? ¿Y si, entre todas estas historias cruzadas, solo una mano llevó realmente el golpe final? Es momento de decidir, pero cuidado: este es el punto donde muchos investigadores se equivocan.",
        notes: [
            "A Méndez: La huella en el martillo sigue sin cuadrar del todo.",
            "M Ríos: Lo vieron cerca… pero no hay prueba de que entrara.",
            "D Franco: Su versión no encaja, pero su miedo parece real.",
            "Suicidio: “El mensaje sin enviar decía: ‘No puedo más’.”"
        ],
        suspects: ["A. Méndez", "M. Ríos", "D. Franco", "Suicidio"],
        question: "¿Quién es el asesino?",
        options: [
            "A. A. Méndez",
            "B. M. Ríos",
            "C. D. Franco",
            "D. Fue un suicidio"
        ],
        correctIndex: 2,
        item: { img: null, name: "Reconstrucción final" }
    }
];

export const levelCount = levelData.length;

export const levelIndex = () => state.currentLevel;

function reloadGame() {
    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = "";
    import("../pages/game").then(mod => {
        app.appendChild(mod.renderGame());
    }).catch(() => {
        window.location.reload();
    });
}

export function goNextLevel() {
    if (state.currentLevel < levelData.length - 1) {
        storeNext();
        reloadGame();
    }
}

export function goPrevLevel() {
    if (state.currentLevel > 0) {
        storePrev();
        reloadGame();
    }
}

export function goToLevel(index: number) {
    if (index >= 0 && index < levelData.length) {
        storeSet(index);
        reloadGame();
    }
}

export {
    storeNext as nextLevel,
    storePrev as prevLevel,
    storeSet as setLevel,
};
