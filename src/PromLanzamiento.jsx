export default function PromoLanzamiento() {
  return (
    <>
      <style>{`
      .brand-header {
      display: flex;
      flex-direction: column;
      align-items: center; /* ← centra todo */
      gap: 6px;
      margin-bottom: 40px;
      position: absolute;
      top: 40px;   /* ← AJUSTA este valor */
      left: 40px;  /* ← mismo valor que en tu home */

}

      .brand-logo-bg {
      width: 160px; /* ajusta a gusto */
      height: 40px;
      background-image: url('/logoCoronelCo..png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
}

      .brand-subtitle {
      margin: 0;
      width: 100%;
      padding-left: var(--logo-visible-offset);
      text-align: left;
      font-size: clamp(0.62rem, 1.2vw, 0.78rem);
      line-height: 1.1;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      opacity: 0.95;
      font-weight: 300;
}

         .promo-page {
         min-height: 100vh;
         background-image: url('/fondoCoronelCo..png');
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
         font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
         display: flex;
         flex-direction: column;
         align-items: center;
         padding-top: 120px; /* ajusta este valor a tu gusto */
         justify-content: center;
         position: relative; /* ← CLAVE para que el absolute funcione */
        }

         .promo-hero {
         text-align: center;
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 2px
        }

         .promo-title {
         margin-bottom: 0;
         max-width: 90%;
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
         display: inline-block;
         padding: 5px 34px;
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

.promo-title {
max-width: 85%;
  }

.promo-bar {
padding: 4px 18px;
  }
}

        /* OCULTAR HALO SOLO EN ESTA PÁGINA */
        body:has(.promo-page) .halo {
          display: none !important;
        }
      `}</style>

<main className="promo-page">

  {/* LOGO FIJO */}
  <div className="brand-fixed">
    <div className="brand-line">
      <img src="/logoCoronelCo..png" className="brand-logo-bg" />
    </div>
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
