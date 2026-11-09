const ROOT = document.body.dataset.root || "";
const discord = "https://discord.gg/pSgQZWjNen";
const discordBetatest = "https://discord.gg/PkDVKWqe5S";
const twitter = "https://x.com/Multiverso_St";
const mail =
  "mailto:multiversalcontac@gmail.com?subject=Contacto%20desde%20Multiverso%20Studios";

const header = `
<header class="site-header">
  <a class="brand" href="${ROOT}index.html" aria-label="Ir al inicio"><img src="${ROOT}imagenes/logo.png" alt=""><b>Multiverso<br>Studios</b></a>
  <button class="menu" aria-label="Abrir menú" aria-expanded="false"><i></i><i></i></button>
  <nav>
    <a href="${ROOT}minecraft.html">Minecraft</a>
    <a href="${ROOT}colaboradores.html">Colaboradores</a>
    <a href="${ROOT}contacto.html">Contacto</a>
    <a href="${ROOT}ecosistema.html">Ecosistema</a>
  </nav>
  <div class="header-actions">
    <a class="download" href="${ROOT}launcher.html">↓ Descargar cliente</a>
    <a class="social" href="${discord}" target="_blank" rel="noopener" aria-label="Discord">◉</a>
    <a class="social" href="${twitter}" target="_blank" rel="noopener" aria-label="X">𝕏</a>
  </div>
</header>`;

const footer = `
<footer>
  <a class="brand" href="${ROOT}index.html"><img src="${ROOT}imagenes/logo.png" alt=""><b>Multiverso<br>Studios</b></a>
  <div class="footer-columns">
    <div>
      <b>ESTUDIO</b>
      <a href="${ROOT}acerca.html">Acerca de</a>
      <a href="${ROOT}ecosistema.html">Ecosistema</a>
      <a href="${ROOT}contacto.html">Contacto</a>
    </div>
    <div>
      <b>COMUNIDAD</b>
      <a href="${discord}" target="_blank" rel="noopener">Discord Club's</a>
      <a href="${discordBetatest}" target="_blank" rel="noopener">Discord Betatest</a>
      <a href="${twitter}" target="_blank" rel="noopener">X / Twitter</a>
    </div>
    <div>
      <b>LEGAL</b>
      <a href="${ROOT}privacidad.html">Privacidad</a>
      <a href="${ROOT}terminos.html">Términos y condiciones</a>
    </div>
  </div>
  <small>© 2026 Multiverso Studios S.A</small>
</footer>`;

document.querySelector("#header").innerHTML = header;
document.querySelector("#footer").innerHTML = footer;

/* ---------- Menú móvil ---------- */
const menu = document.querySelector(".menu"),
  nav = document.querySelector("nav");
if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
}

/* ---------- Reveal al scroll ---------- */
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------- Datos de proyectos ---------- */
const projects = {
  "nexus-cup-iii": {
    title: "Nexus Cup III",
    meta: "10 nov 2025",
    image: "imagenes/nexus-cup-iii.png",
    text: "Nexus Cup III, anteriormente conocido como Multiversal Games, fue la tercera edición del evento de Minecraft organizado por Multiverso Studios. Manteniendo la inspiración en Squid Craft Games, también conocido como Survival Cup, esta entrega reunió a 37 participantes que se enfrentaron durante seis días en un total de doce minijuegos, llevando la competencia a una nueva escala respecto a las ediciones anteriores. A lo largo del evento, los jugadores tuvieron que superar diferentes desafíos y mantenerse en la contienda hasta llegar al desenlace. Finalmente, Smacker se convirtió en el ganador de esta edición y obtuvo un premio de 25 dólares. Nexus Cup III representó un nuevo avance para el proyecto, consolidando su evolución y ampliando la experiencia competitiva que Multiverso Studios buscaba ofrecer a su comunidad.",
  },
  "nexus-cup-ii": {
    title: "Nexus Cup II",
    meta: "12 Agosto 2024",
    image: "imagenes/nexus-cup-ii.png",
    text: "Nexus Cup II, anteriormente conocido como Squid MC Games, fue la segunda edición del evento de Minecraft organizado por Multiverso Studios y marcó un paso importante en su crecimiento al convertirse en el primer evento realizado en colaboración con otro estudio: Darknes Animation, que con el tiempo se convertiría en uno de nuestros partners. Inspirado en Squid Craft Games, también conocido como Survival Cup, el evento reunió a 27 participantes que compitieron durante cinco días en diez minijuegos, enfrentándose a distintos desafíos para avanzar y mantenerse en la competencia. Al final, ExtraYP se coronó como ganador de esta edición y obtuvo un pase VIP para la siguiente entrega. Nexus Cup II representó una nueva etapa para el proyecto, ampliando la participación y abriendo las puertas a futuras colaboraciones.",
  },
  "nexus-cup-i": {
    title: "Nexus Cup I",
    meta: "25 Abril 2022",
    image: "imagenes/nexus-cup-i.png",
    text: "Nexus Cup I, anteriormente conocido como Squid Games, fue el primer gran evento de Minecraft organizado por Multiverso Studios. Inspirado en Squid Craft Games, también conocido como Survival Cup, el proyecto llevó a 17 participantes a competir durante tres días en una serie de seis minijuegos, poniendo a prueba sus habilidades, estrategia y capacidad para sobrevivir hasta el final. Tras varias rondas de competencia, NotLeox se convirtió en el ganador de esta primera edición, marcando el inicio de una etapa importante para Multiverso Studios y sentando las bases para futuros proyectos y eventos de la comunidad.",
  },
  deadland: {
    title: "Deadland",
    meta: "23 Julio 2026",
    image: "imagenes/deadland.png",
    text: "Deadland es una serie de supervivencia en Minecraft desarrollada por Multiverso Studios, centrada en la aventura, la exploración y los desafíos que surgen al intentar sobrevivir en un entorno hostil. A lo largo de la serie, los participantes deben adaptarse a las condiciones del mundo, tomar decisiones estratégicas y afrontar distintas situaciones que ponen a prueba sus habilidades y su capacidad para seguir adelante. La experiencia combina la libertad característica de Minecraft con la emoción de la supervivencia y la interacción entre jugadores, dando lugar a una aventura en la que cada decisión puede influir en el desarrollo de la partida.",
  },
  "viernes-terrorifico": {
    title: "Viernes Terrorífico",
    meta: "21 Agosto 2026",
    image: "imagenes/viernes-terrorifico.png",
    text: "Viernes Terrorífico es un evento original de Multiverso Studios inspirado en experiencias de terror y misterio. Diseñado para ofrecer una atmósfera intensa y momentos de tensión, el evento invita a los participantes a explorar escenarios inquietantes y enfrentarse a situaciones inesperadas. Nació de una colaboración creativa y se consolidó como una de las propuestas temáticas del estudio.",
  },
  "simon-dice": {
    title: "Simon Dice",
    meta: "07 Marzo 2024",
    image: "imagenes/simon-dice.png",
    text: "Simon Dice fue un evento comunitario organizado en colaboración con Deluxe Studios, inspirado en la dinámica del clásico juego del mismo nombre. Durante la actividad, los participantes tuvieron que prestar atención a las instrucciones, reaccionar rápidamente y superar diferentes pruebas para continuar en la competencia. Con una mecánica sencilla, pero centrada en la concentración y la capacidad de respuesta, el evento ofreció una experiencia dinámica pensada para fomentar la participación y la interacción entre los miembros de la comunidad.",
  },
  backrooms: {
    title: "The Backrooms Recreation",
    meta: "14 Septiembre 2026",
    image: "imagenes/backrooms.png",
    text: "The Backrooms Recreation fue un evento organizado por Multiverso Studios en conjunto con JefferMC, inspirado en el universo de terror y misterio de The Backrooms. La experiencia reunió a diez participantes en una propuesta basada en la exploración de entornos inquietantes y la atmósfera característica de este concepto. Para llevar a cabo el evento, se utilizó un mod público y gratuito desarrollado por Eufonia Studio, cuyo equipo recibe el reconocimiento correspondiente por su trabajo y contribución a la comunidad de Minecraft.",
  },
  "discord-talent": {
    title: "Discord Talent",
    meta: "25 Junio 2023",
    image: "imagenes/discord-talent.jpg",
    text: "Discord Talent fue el primer evento realizado bajo el nombre de Multiverso Studios, marcando un momento importante en los inicios del proyecto. En esta edición, diez participantes tuvieron la oportunidad de demostrar sus habilidades y talentos frente a un panel de tres jueces. El evento destacó por llevar la competencia más allá de una actividad privada entre amigos, ya que también fue transmitido en vivo a través del canal de Twitch de ExtraYP. Celebrado en junio de 2023, Discord Talent representó uno de los primeros pasos de Multiverso Studios en la organización de eventos con identidad propia.",
  },
};


const collaborators = {
  extrayp: {
    name: "ExtraYP",
    image: "imagenes/extrayp.png",
    bio: "Ian Jesús, mejor conocido como ExtraYP, es un creador de contenido mexicano que desarrolló parte de su trayectoria en Twitch y, posteriormente, también en Kick. A lo largo de su actividad, participó en diferentes proyectos relacionados con videojuegos, entretenimiento y comunidades digitales.\n\nSu relación con Multiverso Studios comenzó desde sus primeras etapas, convirtiéndose en una de las personas involucradas en el desarrollo y organización de sus proyectos. El 25 de junio de 2023, participó como juez y organizador de Discord Talent, evento que marcó el inicio oficial del estudio.\n\nPosteriormente, colaboró en Nexus Cup III, celebrada el 10 de noviembre de 2025, donde contribuyó con ideas, reglas y diseño de los diferentes juegos. Su participación fue importante para el desarrollo de las dinámicas y la planificación de la competencia.\n\nActualmente, ExtraYP forma parte de Multiverso Studios, desempeñando un papel dentro de su equipo y colaborando en el desarrollo de nuevos proyectos.",
    projects: ["nexus-cup-iii", "discord-talent"],
  },
  deluxe: {
    name: "Deluxe Studios",
    image: "imagenes/deluxe-studios.png",
    bio: "Deluxe Studios es un estudio fundado por PixelBlit, quien anteriormente se desempeñaba como creador de contenido en Twitch. El estudio fue concebido originalmente para participar en proyectos específicos, colaborando en iniciativas relacionadas con videojuegos y entretenimiento digital.\n\nSu colaboración con Multiverso Studios tuvo lugar durante el desarrollo de Simon Dice, un evento comunitario inspirado en la dinámica del clásico juego del mismo nombre.\n\nSimon Dice fue una actividad organizada en colaboración con Deluxe Studios, donde los participantes debían prestar atención a las instrucciones, reaccionar rápidamente y superar diferentes pruebas para continuar en la competencia. A través de una mecánica sencilla, el evento buscó fomentar la concentración, la participación y la interacción entre los integrantes de la comunidad.\n\nEsta colaboración representó una oportunidad para que ambos proyectos trabajaran conjuntamente en una experiencia accesible y entretenida.",
    projects: ["simon-dice"],
  },
  morrocoy: {
    name: "Morrocoy Studios",
    image: "imagenes/morrocoy-studios.png",
    bio: "Morrocoy Studios es un estudio de desarrollo y diseño que ha colaborado con Multiverso Studios en distintas iniciativas. Aportó en diseño gráfico e invitaciones para eventos, sumando su estilo visual a las experiencias del universo Multiverso.\n\nSu participación ha reforzado la identidad visual de varios proyectos y ha permitido ampliar el alcance creativo del estudio.",
    projects: [],
  },
  darknes: {
    name: "Darknes Animation",
    image: "imagenes/darknes-animation.png",
    bio: "Darknes Animation es un estudio creativo que se convirtió en uno de los partners más cercanos de Multiverso Studios. Su primera gran colaboración llegó con Nexus Cup II, donde aportaron en la producción y organización del evento.\n\nDesde entonces han mantenido una relación estrecha, participando en la evolución de las experiencias competitivas y de entretenimiento que el estudio ofrece a su comunidad.",
    projects: ["nexus-cup-ii"],
  },
  reorline: {
    name: "Reorline",
    image: "imagenes/reorline.png",
    bio: "Reorline colaboró con Multiverso Studios como diseñador y creador. Después de un tiempo de trabajo conjunto, impulsó la creación de Viernes Terrorífico, un evento original del estudio orientado a experiencias de terror y misterio.\n\nSu visión creativa ayudó a dar forma a una de las propuestas temáticas más distintivas del catálogo de Multiverso Studios.",
    projects: ["viernes-terrorifico"],
  },
};

/* ---------- Cambio de vista (misma página) + historial ---------- */
function showView(viewId, push) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (push) {
    const url = viewId.includes("detail")
      ? location.pathname + location.search + "#" + viewId
      : location.pathname;
    history.pushState({ view: viewId }, "", url);
  }
}

function openProject(id) {
  const p = projects[id];
  if (!p) return;
  const container = document.getElementById("project-detail-content");
  if (!container) return;
  container.innerHTML = `
    <div class="detail-wrap">
      <a class="back" href="minecraft.html">← Todos los proyectos</a>
      <div class="detail-layout">
        <div class="detail-image"><img src="${p.image}" alt="${p.title}"></div>
        <div class="detail-copy">
          <h1>${p.title}</h1>
          <p class="meta">${p.meta}</p>
          <p>${p.text}</p>
          <a class="btn primary" href="contacto.html">Contactar al estudio →</a>
        </div>
      </div>
    </div>`;
  showView("project-detail", true);
}

function openCollaborator(id) {
  const c = collaborators[id];
  if (!c) return;
  const container = document.getElementById("collab-detail-content");
  if (!container) return;

  let projectsHTML = "";
  if (c.projects && c.projects.length) {
    projectsHTML =
      '<h2 class="detail-sub">Proyectos</h2><div class="card-grid detail-projects">' +
      c.projects
        .map((pid) => {
          const p = projects[pid];
          if (!p) return "";
          return `<a class="media-card" href="minecraft.html#${pid}">
            <img src="${p.image}" alt="${p.title}">
            <div class="card-body"><h3>${p.title}</h3><p>${p.meta}</p></div>
          </a>`;
        })
        .join("") +
      "</div>";
  }

  container.innerHTML = `
    <div class="collab-banner">
      <img class="avatar" src="${c.image}" alt="${c.name}">
      <div class="name-big">${c.name}</div>
    </div>
    <div class="detail-wrap">
      <a class="back" href="colaboradores.html">← Todos los colaboradores</a>
      <h1 class="collab-title">${c.name}</h1>
      <div class="collab-bio">${c.bio.replace(/\n/g, "<br>")}</div>
      ${projectsHTML}
    </div>`;
  showView("collab-detail", true);
}

/* ---------- Al cargar: abrir detalle si hay hash o session ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Proyectos
  if (document.getElementById("project-detail")) {
    const hash = location.hash.replace("#", "");
    if (hash && projects[hash]) {
      openProject(hash);
    } else if (hash === "project-detail") {
      // ya abierto por historial
    }
  }
  // Colaboradores
  if (document.getElementById("collab-detail")) {
    const hash = location.hash.replace("#", "");
    if (hash && collaborators[hash]) {
      openCollaborator(hash);
    }
  }
});

/* Botón atrás del navegador */
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.view) {
    showView(e.state.view, false);
  } else {
    // Volver a la grilla de la página actual
    if (document.getElementById("projects-grid")) showView("projects-grid", false);
    if (document.getElementById("collab-grid")) showView("collab-grid", false);
  }
});
