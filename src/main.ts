import "./style.css";
import Lenis from "lenis";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Montamos el HTML dentro del root (#app o #root)
const root =
  document.querySelector<HTMLDivElement>("#app") ??
  document.querySelector<HTMLDivElement>("#root");

if (!root) {
  throw new Error("No se encontró el contenedor #app ni #root");
}

root.innerHTML = `
  <!-- Floating WhatsApp -->
  <a class="float-whatsapp"
     href="https://wa.me/51978223024"
     target="_blank"
     aria-label="Escríbenos por WhatsApp">
    <img src="/assets/whatsapp.png" alt="WhatsApp" class="whatsapp-icon" />
  </a>

  <!-- Header -->
  <header class="site-header">
    <div class="nav-inner">
      <a href="#inicio" class="brand">
        <img src="/assets/logo1.jpg" class="brand-mark" alt="ForcesGym" />
        <div class="brand-text">
          <span class="brand-title">ForcesGym</span>
          <span class="brand-location">Pacasmayo</span>
        </div>
      </a>

      <nav>
        <button class="nav-toggle" id="navToggle" aria-label="Abrir menú">
          <span></span><span></span>
        </button>
        <div class="nav-links" id="navLinks">
        <a href="#talleres" class="nav-link"></a>
        <a href="#talleres" class="nav-link"></a>
          <a href="#talleres" class="nav-link">Talleres</a>
          <a href="#horarios" class="nav-link">Horarios</a>
          <a href="#nutricion" class="nav-link">Nutrición</a>
          <a href="#kids" class="nav-link">Sala Kids</a>
          <a href="#cta-final" class="nav-link">Ubicación</a>
          <a href="#cta-final" class="nav-cta">
            <span>●</span> Reserva tu clase
          </a>
        </div>
      </nav>
    </div>
  </header>

  <main id="inicio">
    <div class="page-shell">
      <!-- HERO -->
      <section class="section hero">
        <div class="hero-copy">
          <div class="hero-copy-eyebrow">Gimnasio · Pacasmayo</div>
          <h1 class="hero-heading">
            Comienza a <span class="highlight hero-switch-word">entrenar</span><br />
            Únete a nosotros
          </h1>
          <p class="hero-sub">
            Entrena en un ambiente lleno de energía, con entrenadores cercanos,
            horarios amplios y espacios para toda la familia: musculación,
            funcional, fullbody, box, spinning, clases personalizadas y
            sala de juegos para niños.
          </p>

          <div class="hero-tags">
            <span class="pill pill--hot">Nuevo horario ampliado</span>
            <span class="pill">Fullbody · Funcional · Musculación</span>
            <span class="pill">Niños · Jóvenes · Adultos</span>
          </div>

          <div class="hero-cta-row">
            <button class="btn btn-primary js-scroll-cta">
              <span class="btn-icon">⚡</span> Quiero entrenar
            </button>
            <button class="btn btn-outline js-scroll-horarios">
              Ver horarios
            </button>
          </div>

          <div class="hero-meta">
            <div><strong>Jirón Comandante Ladislao Espinar 123</strong> · Pacasmayo 13811.</div>
            <div><strong>WhatsApp:</strong> 978 223 024</div>
          </div>
        </div>

        <div class="hero-media">
          <div class="hero-card">
            <img src="/assets/banner-gym.jpg" alt="Vista del gimnasio ForcesGym Pacasmayo" class="hero-img parallax-img" />
            <div class="hero-card-footer">
              <div class="hero-badge">
                <span class="hero-badge-label">Horario general</span>
                <span class="hero-badge-value">5:30 am – 10:00 pm</span>
                <span style="font-size:0.7rem;color:#c2c4d0;">Lunes a viernes · Sábado hasta 9:30 pm · Domingo 8:00 am a 3:00 pm</span>
              </div>
              <div class="hero-status">
                Inscripciones abiertas · Cupos limitados
              </div>
            </div>
          </div>
        </div>
      </section>

<!-- TALLERES -->
<section class="section anim-section" id="talleres">
  <div class="section-header">
    <span class="eyebrow">Talleres & clases</span>
    <h2 class="section-title">Muévete en modo ForcesGym</h2>
  </div>

  <!-- 🔥 STACK TIPO PORTAFOLIO -->
  <div class="talleres-stack">
    <article class="card card--stack">
      <header class="card-header">
        <h3 class="card-title">Funcional</h3>
        <span class="chip chip--yellow">Quema grasa · Potencia</span>
      </header>
      <p class="card-body">
        Entrenamientos en circuito que combinan fuerza, resistencia
        y agilidad. Ideal para mejorar tu condición física completa
        y mantenerte siempre activo.
      </p>
      <div class="card-tags">
        <span>#Kettlebells</span>
        <span>#CardioIntenso</span>
        <span>#Movilidad</span>
      </div>
      <p class="card-footnote">
        Horarios: Lunes a sábado · <strong>8:00 – 9:00 am</strong> y
        <strong>7:00 – 8:00 pm</strong>.
      </p>
    </article>

    <article class="card card--stack">
      <header class="card-header">
        <h3 class="card-title">Fullbody</h3>
        <span class="chip chip--yellow">Energía total</span>
      </header>
      <p class="card-body">
        Sesiones grupales de alto movimiento que activan todo tu
        cuerpo. Ambiente motivador, música arriba y un coach guiando
        cada repetición.
      </p>
      <div class="card-tags">
        <span>#Step</span>
        <span>#Resistencia</span>
        <span>#QuemaCalorías</span>
      </div>
      <p class="card-footnote">
        Horario: Lunes a sábado · <strong>9:00 – 10:00 am</strong>.
      </p>
    </article>

    <article class="card card--stack">
      <header class="card-header">
        <h3 class="card-title">Musculación</h3>
        <span class="chip chip--yellow">Fuerza & volumen</span>
      </header>
      <p class="card-body">
        Zona de pesas equipada para que construyas fuerza, ganes
        masa muscular y trabajes cada grupo muscular con enfoque
        técnico y progresivo.
      </p>
      <div class="card-tags">
        <span>#Hipertrofia</span>
        <span>#Fuerza</span>
        <span>#ProgresoReal</span>
      </div>
      <p class="card-footnote">
        Acceso libre dentro del horario general del gimnasio.
      </p>
    </article>

    <article class="card card--stack">
      <header class="card-header">
        <h3 class="card-title">Spinning</h3>
        <span class="chip chip--outline">Cardio alto impacto</span>
      </header>
      <p class="card-body">
        Pedalea al ritmo de la música con sesiones que combinan
        intensidad, resistencia y diversión. Perfecto para mejorar tu
        capacidad cardiovascular.
      </p>
      <div class="card-tags">
        <span>#Resistencia</span>
        <span>#QuemaGrasa</span>
      </div>
    </article>

    <article class="card card--stack">
      <header class="card-header">
        <h3 class="card-title">Box</h3>
        <span class="chip chip--outline">Golpea el estrés</span>
      </header>
      <p class="card-body">
        Aprende técnica de boxeo mientras mejoras tu coordinación,
        reflejos y fuerza. Ideal para descargar tensión y ganar
        seguridad.
      </p>
      <div class="card-tags">
        <span>#Golpes</span>
        <span>#Coordinación</span>
      </div>
    </article>
  </div>
</section>


      <!-- CLASES PERSONALIZADAS -->
      <section class="section anim-section" id="personalizadas">
        <div class="section-header">
          <span class="eyebrow">Coaching 1 a 1</span>
          <h2 class="section-title">Clases personalizadas</h2>
          <p class="section-subtitle">
            Entrenadores que están contigo en cada repetición. Trabajamos
            según tu nivel, tus lesiones y tus objetivos específicos:
            bajar de peso, ganar masa, rendimiento deportivo o salud.
          </p>
        </div>

        <div class="grid grid--2 grid--vcenter">
          <article class="card">
            <header class="card-header">
              <h3 class="card-title">Niños, jóvenes y adultos</h3>
              <span class="chip chip--yellow">Entrena a tu ritmo</span>
            </header>
            <p class="card-body">
              Diseñamos rutinas a medida para cada etapa de vida:
              fortalecimiento, coordinación y hábitos saludables para niños
              y jóvenes; salud, estética y rendimiento para adultos.
            </p>
            <div class="card-tags">
              <span>#ObjetivosClaros</span>
              <span>#AcompañamientoTotal</span>
            </div>
            <p class="card-footnote">
              Coordina tu horario ideal vía WhatsApp para reservar tu plan
              personalizado.
            </p>
          </article>

          <article class="card">
            <img src="/assets/clases-personalizadas.jpg" alt="Entrenador guiando clase personalizada" style="border-radius:20px;object-fit:cover;height:100%;width:100%;" />
          </article>
        </div>
      </section>

      <!-- HORARIOS -->
      <section class="section anim-section" id="horarios">
        <div class="section-header">
          <span class="eyebrow">Horarios</span>
          <h2 class="section-title">Entrena cuando tu energía esté más alta</h2>
          <p class="section-subtitle">
            Tenemos horarios amplios para que puedas entrenar antes de
            trabajar, después de estudiar o en el momento que mejor se
            adapte a tu rutina.
          </p>
        </div>

        <div class="grid grid--2 grid--vcenter">
          <article class="card">
            <header class="card-header">
              <h3 class="card-title">Horario general del gimnasio</h3>
              <span class="chip chip--yellow">Nuevo horario</span>
            </header>
            <div class="schedule-grid">
              <div class="schedule-row">
                <div class="schedule-row-label">Lunes a viernes</div>
                <div class="schedule-row-value">5:30 am — 10:00 pm</div>
              </div>
              <div class="schedule-row">
                <div class="schedule-row-label">Sábado</div>
                <div class="schedule-row-value">5:30 am — 9:30 pm</div>
              </div>
              <div class="schedule-row">
                <div class="schedule-row-label">Domingo</div>
                <div class="schedule-row-value">8:00 am — 3:00 pm</div>
              </div>
            </div>
            <p class="card-footnote">
              Ideal para quienes trabajan, estudian o entrenan en horarios
              no convencionales. Siempre encontrarás ambiente y energía.
            </p>
          </article>

          <article class="card">
            <header class="card-header">
              <h3 class="card-title">Horarios de talleres</h3>
              <span class="chip chip--outline">Clases grupales</span>
            </header>
            <div class="schedule-grid">
              <div class="schedule-row">
                <div class="schedule-row-label">Fullbody</div>
                <div class="schedule-row-value">Lunes a sábado · 9:00 – 10:00 am</div>
              </div>
              <div class="schedule-row">
                <div class="schedule-row-label">Funcional</div>
                <div class="schedule-row-value">Lunes a sábado · 8:00 – 9:00 am y 7:00 – 8:00 pm</div>
              </div>
              <div class="schedule-row">
                <div class="schedule-row-label">Otros talleres</div>
                <div class="schedule-row-value">Musculación, spinning y box según programación interna.</div>
              </div>
            </div>
            <p class="card-footnote">
              Llegar unos minutos antes te asegura un buen espacio y te
              permite calentar con calma.
            </p>
          </article>
        </div>
      </section>

      <!-- NUTRICIÓN -->
      <section class="section anim-section" id="nutricion">
        <div class="section-header">
          <span class="eyebrow">Campaña nutricional</span>
          <h2 class="section-title">Nutrición deportiva para resultados reales</h2>
          <p class="section-subtitle">
            Complementa tu entrenamiento con una alimentación estratégica.
            En nuestra campaña nutricional recibirás un plan hecho para ti,
            con seguimiento y lectura de tus resultados.
          </p>
        </div>

        <div class="grid grid--2 grid--vcenter">
          <article class="card">
            <div class="highlight-strip">
              <span>Lic. Antonio Zuñiga</span> · Nutricionista
            </div>
            <ul class="list">
              <li>Nutrición deportiva para mejorar rendimiento y recuperación.</li>
              <li>Dieta personalizada según objetivos (subir/bajar de peso, salud, estética).</li>
              <li>Orientación alimentaria y educación nutricional.</li>
              <li>Evaluación de composición corporal.</li>
              <li>Evaluación nutricional integral.</li>
              <li>Consulta nutricional de enfermedades.</li>
              <li>Lectura e interpretación de exámenes de laboratorio.</li>
            </ul>
            <p class="card-footnote" style="margin-top:1rem;">
              <strong>Horarios:</strong> Martes, miércoles y jueves
              de <strong>10:30 am a 12:30 pm</strong> y
              de <strong>3:30 pm a 5:30 pm</strong>. <br />
              Atención <strong>con previa separación de cita</strong>.
            </p>
          </article>

          <article class="card">
            <img src="/assets/campaña-nutricional.jpg" alt="Consulta nutricional en ForcesGym" style="border-radius:20px;object-fit:cover;height:100%;width:100%;" />
          </article>
        </div>
      </section>

      <!-- SALA DE JUEGOS -->
      <section class="section anim-section" id="kids">
        <div class="section-header">
          <span class="eyebrow">Sala de juegos</span>
          <h2 class="section-title">Mientras tú entrenas, ellos juegan</h2>
          <p class="section-subtitle">
            Nuestra sala de juegos está diseñada para que niños y niñas
            se diviertan en un espacio seguro mientras tú te enfocas en
            tu entrenamiento.
          </p>
        </div>

        <div class="grid grid--2 grid--vcenter">
          <article class="card">
            <header class="card-header">
              <h3 class="card-title">Horario sala de juegos</h3>
              <span class="chip chip--yellow">Lunes a domingo</span>
            </header>
            <div class="schedule-grid">
              <div class="schedule-row">
                <div class="schedule-row-label">Lunes a viernes</div>
                <div class="schedule-row-value">7:30 am — 9:00 pm</div>
              </div>
              <div class="schedule-row">
                <div class="schedule-row-label">Sábado</div>
                <div class="schedule-row-value">7:00 am — 9:00 pm</div>
              </div>
              <div class="schedule-row">
                <div class="schedule-row-label">Domingo</div>
                <div class="schedule-row-value">8:00 am — 3:00 pm</div>
              </div>
            </div>
            <div class="badge-age">
              👶 De 6 meses a 12 años de edad
            </div>
            <p class="card-footnote">
              Un espacio colorido, con juegos y supervisión constante para
              que tus hijos también disfruten la experiencia ForcesGym.
            </p>
          </article>

          <article class="card">
            <img src="/assets/sala-juegos.jpg" alt="Sala de juegos para niños en ForcesGym" style="border-radius:20px;object-fit:cover;height:100%;width:100%;" />
          </article>
        </div>
      </section>

      <!-- TESTIMONIOS / EXPERIENCIA -->
      <section class="section anim-section" id="experiencia">
        <div class="section-header">
          <span class="eyebrow">Experiencia ForcesGym</span>
          <h2 class="section-title">No es solo un gym, es tu nueva rutina</h2>
          <p class="section-subtitle">
            Desde que entras, el ambiente, la música y el equipo te hacen
            sentir que estás en un lugar pensado para que avances, sin
            juicios y con pura energía positiva.
          </p>
        </div>

        <div class="testimonials">
          <div>
            <article class="card testimonial-card">
              <p class="testimonial-quote">
                “Antes me costaba mantener el hábito. En ForcesGym encontré
                un ambiente donde realmente me provoca venir: entreno,
                socializo y veo cambios semana a semana.”
              </p>
              <p class="testimonial-author">
                <strong>Carla · 32 años</strong> · Fullbody & musculación
              </p>
              <div class="testimonial-pills">
                <span class="pill">+ Energía diaria</span>
                <span class="pill">–5 kg en 2 meses</span>
                <span class="pill">Mejor postura</span>
              </div>
              <div class="testimonial-meter">
                <span>Satisfacción</span>
                <div class="meter-bar">
                  <div class="meter-fill"></div>
                </div>
                <span>92%</span>
              </div>
            </article>
          </div>
          <div>
            <article class="card testimonial-card">
              <p class="testimonial-quote">
                “Traigo a mis hijos a la sala de juegos mientras yo entreno
                funcional. Ellos se divierten y yo puedo enfocarme sin
                preocuparme. Es un plan familiar completo.”
              </p>
              <p class="testimonial-author">
                <strong>José · 38 años</strong> · Funcional & sala de juegos
              </p>
              <div class="testimonial-pills">
                <span class="pill">Ambiente familiar</span>
                <span class="pill">Kids friendly</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- CTA FINAL / UBICACIÓN -->
      <section class="section anim-section" id="cta-final">
        <div class="cta-final">
          <div class="cta-final-inner">
            <!-- MAPA DE UBICACIÓN (PRIMERO) -->
            <h2 class="cta-title">Tu mejor versión comienza aquí</h2>
            <div class="cta-map">
              <p class="cta-map-sub">
                Encuéntranos en Jirón Comandante Ladislao Espinar 123, Pacasmayo 13811.
              </p>
              <div class="map-wrapper">
                <iframe
                  src="https://www.google.com/maps?q=Jiron+Comandante+Ladislao+Espinar+123+Pacasmayo+13811&z=18&output=embed"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  aria-label="Ubicación ForcesGym Pacasmayo"
                ></iframe>
              </div>
            </div>

            <!-- CONTENIDO CTA -->
            <p class="cta-sub">
              Si ya llegaste hasta aquí, tu cuerpo te está pidiendo
              movimiento. Escribe ahora, separa tu clase y siente la
              energía ForcesGym desde el primer día.
            </p>

            <a class="cta-whatsapp" href="https://wa.me/51978223024" target="_blank">
                <span>✆</span> Escribir por WhatsApp
              </a>

            <div class="cta-details" id="contacto">
              <p>
                <strong>Teléfono / WhatsApp:</strong> +51 978 223 024
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer>
        <div class="footer-top">
          <div>
            <div class="brand-title">ForcesGym Pacasmayo</div>
            <div>Jr. Cte. Ladislao Espinar 123 · Pacasmayo 13811 · Perú</div>
          </div>
          <div class="footer-links">
            <a href="#talleres">Talleres</a>
            <a href="#horarios">Horarios</a>
            <a href="#nutricion">Nutrición</a>
            <a href="#kids">Sala de juegos</a>
          </div>
        </div>
        <div class="footer-bottom">
          © <span id="year"></span> ForcesGym Pacasmayo. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  </main>
`;

// ---------------------
// Lógica JS/TS
// ---------------------

// Desactivar restauración automática del scroll del navegador
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Referencia global a Lenis para poder usarla fuera de initLandingPage
let lenis: any = null;

function initLandingPage() {

  // 1) Año dinámico
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // 2) Menú móvil
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // 3) Scroll suave con Lenis
  lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.08,
    touchMultiplier: 1.2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", () => {
    ScrollTrigger.update();
  });

  // helper para usar Lenis en los scroll a secciones
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (lenis.scrollTo) {
      lenis.scrollTo(el);
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 4) Botones con scroll a secciones
  document
    .querySelector<HTMLButtonElement>(".js-scroll-cta")
    ?.addEventListener("click", () => scrollToSection("cta-final"));

  document
    .querySelector<HTMLButtonElement>(".js-scroll-horarios")
    ?.addEventListener("click", () => scrollToSection("horarios"));

  // 5) Hero intro + word-switcher
  const heroWordEl = document.querySelector<HTMLElement>(".hero-switch-word");
  if (heroWordEl) {
    const words = ["entrenar", "superarte", "mejorar", "cuidarte"];
    let current = 0;
    heroWordEl.textContent = words[current];

    const tlWords = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.4,
    });

    words.forEach(() => {
      tlWords.to(heroWordEl, {
        duration: 0.35,
        opacity: 0,
        y: 12,
        ease: "power2.in",
        onComplete: () => {
          current = (current + 1) % words.length;
          heroWordEl.textContent = words[current];
        },
      });
      tlWords.to(heroWordEl, {
        duration: 0.55,
        opacity: 1,
        y: 0,
        ease: "power2.out",
      });
    });
  }

  // 5.2 Timeline de entrada del hero
  const hero = document.querySelector<HTMLElement>(".hero");
  if (hero) {
    const heroHeading = hero.querySelector<HTMLElement>(".hero-heading");
    const heroSub = hero.querySelector(".hero-sub");
    const heroTags = hero.querySelector(".hero-tags");
    const heroCtas = hero.querySelector(".hero-cta-row");
    const heroMeta = hero.querySelector(".hero-meta");
    const heroCard = hero.querySelector(".hero-card");

    const tlHero = gsap.timeline({
      defaults: { duration: 0.55, ease: "power3.out" },
      delay: 0.2,
    });

    if (heroHeading) {
      const split = new SplitType(heroHeading, { types: "words" });
      tlHero.from(split.words, {
        opacity: 0,
        y: 18,
        stagger: 0.05,
      });
    }

    tlHero.from(
      [heroSub, heroTags, heroCtas, heroMeta].filter(Boolean),
      {
        opacity: 0,
        y: 20,
        stagger: 0.08,
      },
      "-=0.25"
    );

    if (heroCard) {
      tlHero.from(
        heroCard,
        {
          opacity: 0,
          y: 26,
          scale: 0.96,
        },
        "-=0.3"
      );
    }
  }

  // 6) ScrollTrigger: secciones + títulos
  // 6.1 Secciones con fade + slide
  gsap.utils
    .toArray<HTMLElement>(".card")
    .forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          // Animación ligada al scroll: baja → aparece, sube → desaparece
          scrollTrigger: {
            trigger: card,
            start: "top 80%",   // cuando el card entra en el viewport
            end: "top 40%",     // cuando ya está bien en foco
            scrub: 0.6,         // conecta directo con el scroll (microinteracción)
          },
        }
      );
    });

  // 6.2 Reversible scroll-driven animations for section titles (character-by-character)
  document
    .querySelectorAll<HTMLElement>(".section-title")
    .forEach((title) => {
      // Split title into words and characters (prevents word breaking)
      const split = new SplitType(title, { types: "words,chars" });

      // Add CSS to prevent words from breaking across lines
      if (split.words) {
        split.words.forEach((word: HTMLElement) => {
          word.style.whiteSpace = "nowrap";
          word.style.display = "inline-block";
        });
      }

      // Apply reversible scroll-driven animation to each character
      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.015, // each character animates with 0.015s delay
          scrollTrigger: {
            trigger: title,
            start: "top 70%",
            end: "top 40%",
            scrub: 1.2,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

  // 6.2.2 CTA Title animation - Scale Up entire phrase (dramatic entrance)
  document
    .querySelectorAll<HTMLElement>(".cta-title")
    .forEach((ctaTitle) => {
      // Set transform origin for scale effect (center of the title)
      ctaTitle.style.transformOrigin = "center center";

      // Apply reversible scale-up animation to the entire title
      gsap.fromTo(
        ctaTitle,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "back.out(1.7)", // Strong elastic bounce effect
          scrollTrigger: {
            trigger: ctaTitle,
            start: "top 70%",
            end: "top 35%",
            scrub: 1.5,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

  // 6.2.3 CTA Map Subtitle animation - Scale Up entire phrase
  document
    .querySelectorAll<HTMLElement>(".cta-map-sub")
    .forEach((ctaMapSub) => {
      // Set transform origin for scale effect (center of the subtitle)
      ctaMapSub.style.transformOrigin = "center center";

      // Apply reversible scale-up animation to the entire subtitle
      gsap.fromTo(
        ctaMapSub,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "back.out(1.7)", // Strong elastic bounce effect
          scrollTrigger: {
            trigger: ctaMapSub,
            start: "top 70%",
            end: "top 50%",
            scrub: 1.5,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

  // 6.2 Reversible scroll-driven animations for section subtitles (character‑by‑character)
  document
    .querySelectorAll<HTMLElement>(".section-subtitle")
    .forEach((subtitle) => {
      const split = new SplitType(subtitle, { types: "words,chars" });

      if (split.words) {
        split.words.forEach((word: HTMLElement) => {
          word.style.whiteSpace = "nowrap";
          word.style.display = "inline-block";
        });
      }

      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          stagger: 0.012,
          scrollTrigger: {
            trigger: subtitle,
            start: "top 65%",
            end: "top 35%",
            scrub: 1.5,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

  // 6.2.1 Eyebrow animation (slide left, character‑by‑character)
  document
    .querySelectorAll<HTMLElement>('.eyebrow')
    .forEach((eyebrow) => {
      const split = new SplitType(eyebrow, { types: 'words,chars' });

      if (split.words) {
        split.words.forEach((word: HTMLElement) => {
          word.style.whiteSpace = 'nowrap';
          word.style.display = 'inline-block';
        });
      }

      gsap.fromTo(
        split.chars,
        {
          opacity: 0,
          x: -15,
        },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          stagger: 0.012,
          scrollTrigger: {
            trigger: eyebrow,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1.2,
            toggleActions: 'play reverse play reverse',
          },
        },
      );
    });


  // 6.3 Solo CTA final (los testimonios ya se animan como .card)
  (gsap.utils.toArray(".cta-final") as HTMLElement[]).forEach(
    (el: HTMLElement) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  );

  // 6.4 Animación tipo TextAnimate para el título de la CTA
  const ctaTitle = document.querySelector<HTMLElement>(".cta-title");
  if (ctaTitle) {
    gsap.from(ctaTitle, {
      scrollTrigger: {
        trigger: ctaTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.7,
      ease: "power3.out",
    });
  }

  // 6.5 Micro-parallax en imagen del hero
  gsap.to(".parallax-img", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // 7) Micro-interacciones hover/tap
  function addTapAnimation(el: Element) {
    const press = () => {
      gsap.to(el, { scale: 1.03, duration: 0.15, ease: "power2.out" });
    };
    const release = () => {
      gsap.to(el, { scale: 1, duration: 0.18, ease: "power2.out" });
    };

    el.addEventListener("mousedown", press);
    el.addEventListener(
      "touchstart",
      press,
      { passive: true } as AddEventListenerOptions
    );
    window.addEventListener("mouseup", release);
    window.addEventListener(
      "touchend",
      release,
      { passive: true } as AddEventListenerOptions
    );
  }

  document
    .querySelectorAll(
      ".btn, .cta-whatsapp, .float-whatsapp, .card, .nav-cta, .testimonial-card"
    )
    .forEach(addTapAnimation);

  // Hover suave para cards de testimonios (solo desktop)
  if (gsap.matchMedia) {
    const mmHover = gsap.matchMedia();

    mmHover.add("(min-width: 900px)", () => {
      document
        .querySelectorAll<HTMLElement>(".testimonial-card")
        .forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -6,
              scale: 1.02,
              duration: 0.25,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.25,
              ease: "power2.out",
            });
          });
        });
    });
  }

  // 8) Tilt 3D del hero-card en desktop
  if (gsap.matchMedia) {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px)", () => {
      const heroCard = document.querySelector<HTMLElement>(".hero-card");
      const heroMedia = document.querySelector<HTMLElement>(".hero-media");
      if (!heroCard || !heroMedia) return;

      heroMedia.style.perspective = "1200px";
      heroCard.style.willChange = "transform";

      const onMove = (e: MouseEvent) => {
        const rect = heroCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(heroCard, {
          rotationX: y * 8,
          rotationY: -x * 8,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(heroCard, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      heroCard.addEventListener("mousemove", onMove);
      heroCard.addEventListener("mouseleave", onLeave);

      return () => {
        heroCard.removeEventListener("mousemove", onMove);
        heroCard.removeEventListener("mouseleave", onLeave);
      };
    });
  }

}


// Ejecutamos la inicialización una vez montado el HTML
initLandingPage();

// Refresh solo la primera vez, después de que se hayan configurado todas las animaciones
requestAnimationFrame(() => {
  ScrollTrigger.refresh();
});

// Cuando terminen de cargar todos los recursos (F5, recarga, etc.),
// solo reseteamos el scroll pero NO refrescamos las animaciones
window.addEventListener("load", () => {
  // Solo resetear scroll si realmente es necesario (evita reinicio de animaciones)
  if (window.scrollY !== 0) {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    });
  }
});