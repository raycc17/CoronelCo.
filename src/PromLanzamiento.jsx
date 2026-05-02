export default function PromoLanzamiento() {
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
          align-items: center;
          justify-content: center;

          position: relative;
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
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
}

.promo-list li {
  position: relative;
  padding-left: 20px;
  font-size: 0.6rem;
  line-height: 1.3;
  text-transform: uppercase; /* ← TODO en mayúsculas */
  font-weight: 300;          /* ← delgado */
  letter-spacing: 0.08em;
}

.promo-box {
  align-items: flex-start; /* ← esto alinea TODO a la izquierda */
}

.promo-box-title {
  text-align: left;
}

.promo-list {
  width: 100%;
}

.promo-list li {
  text-align: left;
}

/* CIRCULITOS DEGRADADOS */
.promo-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5f2fc6, #0f64f3);
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
    width: 90%;
    max-width: 300px;
      align-self: center; /* ← CLAVE */

}

/* TÍTULO */
.accordion summary {
  list-style: none;
  font-size: 0.85rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* QUITAR FLECHA DEFAULT */
.accordion summary::-webkit-details-marker {
  display: none;
}

/* ICONO + */
.accordion summary::after {
  content: "+";
  font-size: 1rem;
}

/* CUANDO ESTÁ ABIERTO */
.accordion details[open] summary::after {
  content: "–";
}

/* TEXTO INTERNO */
.accordion p {
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
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

    /* OCULTAR HALO */
  body:has(.promo-page) .halo {
  display: none !important;
  }
  `}</style>

   <main className="promo-page">

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

    <details>
      <summary>Análisis de marca</summary>
      <p>Evaluamos el estado actual de tu marca...</p>
    </details>

    <details>
      <summary>Estrategia de crecimiento</summary>
      <p>Definimos el camino estratégico...</p>
    </details>

    <details>
      <summary>Parrilla de contenido</summary>
      <p>Organizamos el contenido...</p>
    </details>

    <details>
      <summary>2 plantillas de contenido</summary>
      <p>Plantillas listas para publicar...</p>
    </details>

    <details>
      <summary>Acceso a Campus CC</summary>
      <p>Clases, ebooks y capacitaciones...</p>
    </details>

</div>    
</div>
          
        </section>

      </main>
    </>
  )
}
