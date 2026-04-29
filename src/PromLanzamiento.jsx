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
        }

        .promo-title {
        font-size: 4rem;
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.02em;

        font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;

        background: linear-gradient(135deg, #4919af, #0f64f3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}

.promo-bar {
  margin-top: 6px;

  display: inline-block;
  padding: 6px 16px;

  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: #ffffff;

  background: linear-gradient(135deg, #4919af, #0f64f3);

  border-radius: 999px; /* ← esto la hace completamente redondeada */
}
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .promo-title {
            font-size: 2.5rem;
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
