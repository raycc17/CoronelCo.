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

          background: linear-gradient(135deg, #0f64f3, #4919af);
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

        /* RESPONSIVE */
        @media (max-width: 480px) {
          .brand-subtitle {
           margin-left: 4px; /* menor desplazamiento en celular */
        
          .promo-title {
            max-width: 85%;
          }

          .promo-page {
          justify-content: flex-start; /* en vez de centrar */
          padding-top: 140px; /* ajusta separación con el logo */
  }

          .promo-hero {
          margin-top: 40px; /* controla qué tan cerca queda del logo */
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
        </section>

      </main>
    </>
  )
}
