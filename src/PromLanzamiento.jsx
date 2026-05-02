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

  width: 90%;
  max-width: 420px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);

  border-radius: 18px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.promo-box-title {
  margin: 0;
  font-size: 1rem;
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

  font-size: 0.9rem;
  line-height: 1.3;
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
          
        </section>

      </main>
    </>
  )
}
