  import { useEffect } from "react"
  export default function PromoLanzamiento() {
    useEffect(() => {
  const items = document.querySelectorAll(".faq-item")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    },
    {
      threshold: 0.2,
    }
  )

  items.forEach((item) => observer.observe(item))

  return () => observer.disconnect()
}, [])
  return (
    <>
      <style>{`
  .brand-fixed {
  position: absolute;
  top: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
        }

  .brand-logo-bg {
  width: 140px;
  height: auto;
        }

  .brand-subtitle {
  margin: 0;
  margin-left: 8px; /* ← AJUSTA este valor hasta que calce perfecto con la C */
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 300;
  text-align: left;
}

        .promo-page {
          min-height: 100vh;
          background-image: url('/fondoCoronelCo..png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 160px;
          position: relative;
          padding-bottom: 120px; /* ← margen inferior */
        }

        .promo-hero {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .promo-title {
          margin: 0;
          max-width: 90%;
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          background: linear-gradient(135deg, #4919af, #0f64f3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .promo-bar {
          padding: 6px 28px;
          font-size: clamp(0.55rem, 1.5vw, 0.7rem);
          font-weight: 300;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #4919af, #0f64f3);
          border-radius: 999px;
        }

        /* CAJA DE LISTA */
        .promo-box {
         margin-top: 30px;
         padding: 20px 25px;
         width: 60%;
         max-width: 320px;
         border-radius: 13px;
         display: flex;
         flex-direction: column;
         gap: 16px;
         position: relative;
         overflow: visible;
         isolation: isolate;

}

/* SOLO CAJA INCLUYE */
.promo-box:not(.faq-box)::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 13px;
  background: rgba(255,255,255,0.35);
  backdrop-filter: blur(12px);
  z-index: 0;
  animation: softPulseBg 2s ease-in-out infinite;
}

/* CONTENIDO ENCIMA */
.promo-box:not(.faq-box) > * {
  position: relative;
  z-index: 1;
}

@keyframes softPulseBg {

  0% {
    opacity: 0.75;
    filter: brightness(1);

    transform: scale(1);
  }

  50% {
    opacity: 1;
    filter: brightness(1.12);

    transform: scale(1.025);
  }

  100% {
    opacity: 0.75;
    filter: brightness(1);

    transform: scale(1);
  }
}

        .promo-box-title {
         margin: 0;
         font-size: 0.8rem;
         font-weight: 600;
}

         /* LISTA */
        .promo-list {
         list-style: none;
         padding: 0;
         margin: 0;
         display: flex;
         flex-direction: column;
         gap: 10px;
         text-align: center;
         justify-content: center;
}

.promo-list li {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.6rem;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-align: center;
}

        .promo-box {
         align-items: center
}

        .promo-box-title {
         text-align: center;
}

        .promo-list {
         width: 100%;
}

        .promo-list li {
         text-align: center;
}

/* CIRCULITOS DEGRADADOS */
.promo-list li::before {
  content: "";
  position: relative;
  width: 69px;
  height: 1px;
  border-radius: 999px;
  opacity: 0.3;
  background: linear-gradient(135deg, #ffffff, #5f2fc6, #ffffff);
}

.text-emergency {
  margin-top: -9px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  opacity: 60;
  background: linear-gradient(135deg, #4919af, #0f64f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 6;
}
.text-emergency2 {
  margin-top: -9px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  opacity: 60;
  background: linear-gradient(135deg, #4919af, #0f64f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
}

  /* CÍRCULO */
.promo-circle {
  margin-top: 40px;
  align-self: center; /* ← CLAVE */
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5f2fc6, #0f64f3);
  box-shadow: 0 10px 30px rgba(95, 47, 198, 0.3);
}

/* CAJA DEL FAQ (segunda caja real) */
.faq-box {
  margin-top: 10px;
}

.faq-box {
  background: rgba(255,255,255,0.35);
  backdrop-filter: blur(12px);
}

/* quitar estilo individual para que se vea como UNA caja */
.accordion details {
  background: transparent;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  border-radius: 0;
}

.accordion details:last-child {
  border-bottom: none;
}

/* CONTENEDOR */
.accordion {
  margin-top: 30px;
  width: 90%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
   margin: 0 auto
}

.accordion summary {
  font-size: 0.9rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

/* TARJETAS */
.accordion details {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  padding: 14px 16px;
  cursor: pointer;
}

/* TÍTULO */
.accordion summary {
  list-style: none;
  font-size: 0.55rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: flex;
  justify-content: space-between;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

/* QUITAR FLECHA DEFAULT */
.accordion summary::-webkit-details-marker {
  display: none;
}

/* TEXTO INTERNO */
.accordion p {
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

/* PRECIOS */
.promo-price {
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4px;
}

.old-price {
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffd54a;
  opacity: 0.69;
  text-decoration: line-through;
  letter-spacing: 0.05em;
}

.new-price {
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  font-weight: 950;
  line-height: 1;
  color: #ffffff;
  letter-spacing: -0.03em;
}

.new-price-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  line-height: 1;
}

.text-currency {
  margin-top: -9px;
  font-size: 0.75rem;
  font-weight: 200;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  opacity: 100;
  color: #ffffff;
  line-height: 5;
}


        /* RESPONSIVE */
  @media (max-width: 480px) {
  .brand-fixed {
  position: static !important; /* deja de flotar arriba */ 
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center; /* ← CENTRA todo */
  text-align: center;
  }

  .brand-subtitle {
  margin-left: 0 !important; /* ← quita el ajuste que hicimos para desktop */
  text-align: center;
  }

  .promo-page {
  justify-content: flex-start !important; /* rompe el centrado */
  padding-top: 100px; /* acerca contenido al logo */
  display: block !important; /* rompe el flex */
  }

  .promo-hero {
  margin-top: 0;
  transform: translateY(-60px); /* ← ESTO es lo que realmente lo sube */
  }        

  .promo-title {
  max-width: 85%;
  }

  .promo-bar {
  padding: 4px 18px;
  }
  }

 /* FAQ SCROLL REVEAL */
.faq-item {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

/* CUANDO APARECE */
.faq-item.show {
  opacity: 1;
  transform: translateY(0);
}

/* ORBES LATERALES */
.side-orb {
  position: fixed;
  top: 65%;
  transform: translateY(-50%);
  z-index: 0;

  width: 420px;
  height: 420px;

  pointer-events: none;
}

/* IZQUIERDA */
.side-left {
  left: -100px;
}

/* DERECHA */
.side-right {
  right: -100px;
}

/* IMÁGENES */
.orb-img {
  position: absolute;
  inset: 0;
  mix-blend-mode: lighten;
  width: 100%;
  height: 100%;

  object-fit: contain;

  opacity: 0;
  filter: blur(12px);

  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

/* IZQUIERDA */
.orb-1 {
  animation-name: orbFade1;
}

.orb-2 {
  animation-name: orbFade2;
}

/* DERECHA */
.orb-3 {
  animation-name: orbFade1;
}

.orb-4 {
  animation-name: orbFade2;
}

/* ANIMACIONES */
/* ANIMACIÓN 1 */
@keyframes orbFade1 {
  0%, 45% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }

  50%, 100% {
    opacity: 0;
    filter: blur(14px);
    transform: scale(1.03);
  }
}

/* ANIMACIÓN 2 */
@keyframes orbFade2 {
  0%, 45% {
    opacity: 0;
    filter: blur(14px);
    transform: scale(1.03);
  }

  50%, 100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
}

/* SOLO DESKTOP */
@media (max-width: 1024px) {
  .side-orb {
    display: none;
  }
}

    /* OCULTAR HALO */
  body:has(.promo-page) .halo {
  display: none !important;
  }
  `}</style>

   <main className="promo-page">

     {/* CÍRCULOS LATERALES DESKTOP */}
<div className="side-orb side-left">
  <img src="/1.png" className="orb-img orb-1" />
  <img src="/2.png" className="orb-img orb-2" />
</div>

<div className="side-orb side-right">
  <img src="/3.png" className="orb-img orb-3" />
  <img src="/4.png" className="orb-img orb-4" />
</div>

  {/* LOGO */}
  <div className="brand-fixed">
  <img src="/logoCoronelCo..png" className="brand-logo-bg" />
  <h5 className="brand-subtitle">
  FIRMA ESTRATÉGICA & CREATIVA DE MARCAS
  </h5>
  </div>

  {/* CONTENIDO */}
  <section className="promo-hero">
  <h1 className="promo-title">
  ERA DE LANZAMIENTO
  </h1>

  <div className="promo-bar">
  INICIAMOS NUESTRAS OPERACIONES
  </div>

{/* CAJA 1 */}
<div className="promo-box">
  <p className="promo-box-title">INCLUYE</p>

  <ul className="promo-list">
    <li>Análisis de marca</li>
    <li>Estrategia de crecimiento</li>
    <li>Parrilla de contenido</li>
    <li>2 plantillas de contenido</li>
    <li>
      Acceso a Campus CC por 1 año:
      <br />
      Sistema de clases para tu equipo
      <br />
      Ebooks
      <br />
      Capacitaciones en vivo
    </li>
  </ul>
</div>

    {/* CÍRCULO */}
<div className="promo-circle"></div>

{/* CAJA 2 (FAQ) */}
<div className="promo-box faq-box">
  <div className="accordion">

<details open className="faq-item">
  <summary>Análisis de marca</summary>
      <p>Evaluamos el estado actual de tu marca para identificar qué está funcionando, qué está limitando su crecimiento y qué oportunidades estratégicas pueden ayudarte a posicionarte mejor en el mercado y frente a la competencia.</p>
    </details>

<details open className="faq-item">
  <summary>Estrategia de crecimiento</summary>
      <p>Definimos una dirección estratégica clara para ayudarte a crecer con intención, conectar con el público correcto y tomar decisiones alineadas a los objetivos reales de tu marca.</p>
    </details>

<details open className="faq-item">
  <summary>Parrilla de contenido</summary>
      <p>Organizamos estratégicamente tu contenido para que tu comunicación tenga coherencia, intención y continuidad, permitiéndote conectar mejor con tu audiencia y fortalecer tu presencia digital.</p>
    </details>

<details open className="faq-item">
  <summary>2 plantillas de contenido</summary>
      <p>Recibe dos plantillas listas para personalizar y publicar, diseñadas para ayudarte a comunicar tu marca de forma más profesional, atractiva y alineada a tu identidad.</p>
    </details>

<details open className="faq-item">
  <summary>Acceso a Campus CC</summary>
      <p>Accede a nuestro espacio de formación con clases, ebooks y capacitaciones pensadas para ayudarte a fortalecer conocimientos clave en áreas como marketing, contenido, estrategia y crecimiento de marca.</p>
    </details>

</div>    
</div>

<div className="promo-price">
  <span className="old-price">S/369.90</span>

  <div className="new-price-wrap">
    <span className="new-price">S/35.00</span>
    <span className="text-currency">VÁLIDO POR ERA DE LANZAMIENTO</span>
  </div>
</div>

    <div className="text-emergency">
    <span className="text-emergency">Diseñado para marcas que quieren dejar de improvisar</span>
</div>
    
 <div className="text-emergency2"> 
    <span className="text-emergency2">y comenzar a crecer con dirección.</span>
  </div>
    
        </section>

      </main>
    </>
  )
}
