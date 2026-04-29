export default function PromoLanzamiento() {
  return (
    <>
      <style>{`
        .promo-page {
          min-height: 100vh;
          background-image: url('/fondoCoronelCo..png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;

          display: flex;
          align-items: flex-start;
          padding-top: 120px; /* ajusta este valor a tu gusto */
          justify-content: center;
        }

        .promo-hero {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px
        }

        .promo-title {
        font-size: clamp(2.2rem, 6vw, 4rem);
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.02em;

        font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;

        background: linear-gradient(135deg, #4919af, #0f64f3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}

.promo-bar {
  margin-top: 0px;
  transform: translateY(-10px); /* ajuste ultra fino */

  display: inline-block;
  padding: 5px 14px;
  text-align: center;

  font-size: clamp(0.55rem, 1.5vw, 0.7rem);
  font-weight: 300;
  letter-spacing: 0.20em;
  text-transform: uppercase;

  color: #ffffff;

  background: linear-gradient(135deg, #4919af, #0f64f3);

  border-radius: 999px; /* ← esto la hace completamente redondeada */
}
        }

/* RESPONSIVE */
/* TABLET */
@media (max-width: 768px) {
.promo-hero {
gap: 4px;
  }
}

/* CELULAR */
@media (max-width: 480px) {
.promo-hero {
gap: 3px;
  }
}

        /* OCULTAR HALO SOLO EN ESTA PÁGINA */
        body:has(.promo-page) .halo {
          display: none !important;
        }
      `}</style>

      <main className="promo-page">
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
