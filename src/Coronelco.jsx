export default function Coronelco() {
  return (
    <>
      <style>{`
        :root {
          color: #0e0e0e;
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          background: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #ffffff;
          color: #101010;
        }

        .page {
          width: min(100%, 1180px);
          margin: 0 auto;
          padding: 2.8rem clamp(1.2rem, 3vw, 2.4rem) 5rem;
          position: relative;
          overflow: hidden;
        }

        .serif {
          font-family: 'Times New Roman', Georgia, serif;
          letter-spacing: 0.04em;
          font-weight: 400;
        }

        .tiny {
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .top {
          margin-bottom: 2.2rem;
        }

        .brand-line {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          font-size: 0.7rem;
          color: #2d2d2d;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1rem;
          align-items: center;
          margin: 2rem 0 2.5rem;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(2rem, 5.2vw, 3.45rem);
          line-height: 0.95;
          background: linear-gradient(135deg, #5f2fc6 0%, #0f64f3 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .hero-art {
          position: relative;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-art::before {
          content: '';
          position: absolute;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 3px solid #111;
          border-right-color: transparent;
          border-top-color: transparent;
          left: 18%;
          top: 12%;
        }

        .hero-art::after {
          content: '';
          position: absolute;
          width: 112px;
          height: 112px;
          border-radius: 50%;
          right: 15%;
          top: 25%;
          background: radial-gradient(circle at 30% 30%, #5d6bff 0%, #304ee3 70%);
          box-shadow: 0 0 60px rgba(72, 85, 239, 0.42);
        }

        .mid-claim {
          text-align: center;
          margin: 0.8rem 0 1.8rem;
          font-size: 0.64rem;
          line-height: 1.15;
        }

        .cards-title {
          margin: 0 0 0.55rem;
          font-size: 1.25rem;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .card {
          text-align: center;
          font-size: 0.58rem;
          line-height: 1.25;
        }

        .pill {
          background: #0c0c0c;
          color: #fff;
          border-radius: 999px;
          padding: 0.55rem 0.9rem;
          display: inline-block;
          font-size: 0.52rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.45rem;
        }

        .divider-line {
          font-size: 0.95rem;
          white-space: nowrap;
          overflow: hidden;
          color: #2f2f2f;
          margin: 1.5rem 0 3rem;
        }

        section {
          margin: 4.2rem 0;
          position: relative;
        }

        .center-intro {
          text-align: center;
          font-weight: 600;
          max-width: 920px;
          margin: 0 auto 2.7rem;
          line-height: 1.35;
        }

        .blue {
          color: #3e4de7;
        }

        .heading-row {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.7rem;
        }

        .dot {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #070707;
          flex-shrink: 0;
        }

        .headline {
          margin: 0;
          font-size: clamp(1.7rem, 3.6vw, 2.5rem);
          line-height: 1;
        }

        .subtitle {
          margin-top: 0.4rem;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .mini-text {
          max-width: 740px;
          font-size: 0.78rem;
          line-height: 1.5;
          color: #222;
          margin-top: 1.1rem;
        }

        .steps {
          margin-top: 1.9rem;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .step {
          text-align: center;
          font-size: 0.55rem;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          position: relative;
          padding-top: 2rem;
        }

        .step::before {
          content: '';
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(80, 89, 247, 0.56) 0%, rgba(80, 89, 247, 0) 72%);
          top: 0;
          left: calc(50% - 22px);
        }

        .split {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 1.5rem;
        }

        .left-title {
          margin-top: 2rem;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          line-height: 1;
          text-transform: uppercase;
        }

        .right-text {
          max-width: 680px;
          font-size: 1.08rem;
          line-height: 1.5;
          color: #2b2b2b;
        }

        .stage-list {
          margin-top: 1.4rem;
          display: grid;
          gap: 0.9rem;
          max-width: 640px;
        }

        .stage-item {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 0.6rem;
          font-size: 0.86rem;
          line-height: 1.3;
        }

        .stage-num {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #f5f7ff;
          color: #8c93d9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.62rem;
        }

        .diagnosis-note {
          margin-top: 1.7rem;
          font-size: 0.8rem;
          max-width: 640px;
          border-left: 2px solid #0f0f0f;
          padding-left: 0.7rem;
        }

        .process-wrap {
          position: relative;
          margin-top: 2rem;
          padding: 1rem 0;
        }

        .method-core {
          text-align: center;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .flow {
          display: grid;
          gap: 0.85rem;
          max-width: 720px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .flow::before {
          content: 'CORE';
          position: absolute;
          left: -30px;
          top: 50px;
          font-size: 9.5rem;
          font-weight: 800;
          color: rgba(75, 91, 235, 0.08);
          pointer-events: none;
          letter-spacing: -0.04em;
        }

        .flow-item {
          display: grid;
          grid-template-columns: 220px 1fr;
          align-items: center;
          border-radius: 999px;
          background: rgba(239, 242, 255, 0.9);
          border: 1px solid rgba(94, 107, 237, 0.1);
          backdrop-filter: blur(1px);
          min-height: 64px;
        }

        .flow-item strong {
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 0.8rem;
        }

        .flow-item span {
          font-size: 0.8rem;
          color: #2a2a2a;
          padding-right: 1rem;
        }

        .cta-band {
          text-align: center;
          margin-top: 3rem;
        }

        .ticker {
          width: 100%;
          border-radius: 999px;
          overflow: hidden;
          background: linear-gradient(135deg, #5f2fc6 0%, #0f64f3 100%);
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(41, 78, 231, 0.28);
          margin: 0 auto 1.1rem;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          animation: tickerMove 14s linear infinite;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .ticker-item {
          padding: 0.9rem 1.3rem;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
        }

        .ticker-sep {
          opacity: 0.55;
        }

        @keyframes tickerMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .cta-buttons {
          margin-top: 1.3rem;
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .cta-buttons .pill {
          margin: 0;
          padding: 0.72rem 1.1rem;
          font-size: 0.58rem;
        }

        .manifest {
          margin-top: 5rem;
          text-align: center;
        }

        .manifest h3 {
          font-size: 2.1rem;
          margin: 0 0 1.4rem;
        }

        .manifest .word {
          font-size: 0.74rem;
          letter-spacing: 0.32em;
          margin: 0.5rem 0;
          text-transform: uppercase;
        }

        .manifest .big {
          font-size: 2.05rem;
          margin: 0.35rem 0 1rem;
        }

        .decor {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(85, 101, 255, 0.52) 0%, rgba(85, 101, 255, 0) 68%);
          filter: blur(1px);
        }

        .d1 { width: 180px; height: 180px; right: 15%; top: 31%; }
        .d2 { width: 120px; height: 120px; right: 38%; top: 46%; }
        .d3 { width: 95px; height: 95px; left: -28px; top: 61%; }
        .d4 { width: 66px; height: 66px; right: 12%; top: 68%; }

        @media (max-width: 980px) {
          .page {
            width: 100%;
            padding: 1.4rem 1rem 3rem;
          }

          .hero,
          .split {
            grid-template-columns: 1fr;
          }

          .cards,
          .steps {
            grid-template-columns: 1fr;
          }

          .flow-item {
            grid-template-columns: 1fr;
            border-radius: 16px;
            padding: 0.7rem;
            text-align: center;
          }

          .flow-item span {
            padding: 0;
          }

          .flow::before {
            left: 8%;
            font-size: 6rem;
          }
        }
      `}</style>

      <main className="page">
        <span className="decor d1" />
        <span className="decor d2" />
        <span className="decor d3" />
        <span className="decor d4" />

        <header className="top">
          <div className="brand-line">
            <span className="serif">CORONEL&CO.</span>
            <span>Firma de Estrategia & Creativa de marcas</span>
          </div>
        </header>

        <section className="hero">
          <h1>
            CREAMOS
            <br />
            POSICIONAMOS
            <br />
            POTENCIAMOS
          </h1>
          <div className="hero-art" />
        </section>

        <p className="mid-claim tiny">
          ESTRATEGIA CON PROPÓSITO
          <br />
          CREATIVIDAD CON INTENCIÓN
        </p>

        <h3 className="cards-title">Trabajamos con...</h3>
        <div className="cards">
          <article className="card">
            <span className="pill">Consultorías y profesionales</span>
            <div>
              Médicos, abogados,
              <br />
              psicólogas, arquitectos,
              <br />
              productores y más.
            </div>
          </article>
          <article className="card">
            <span className="pill">Emprendedores de marca personal</span>
            <div>
              Creadores de contenido,
              <br />
              influencers, negocios digitales,
              <br />
              líderes de comunidad y más.
            </div>
          </article>
          <article className="card">
            <span className="pill">Pymes & negocios organizados</span>
            <div>
              Clínicas, empresas,
              <br />
              startups, instituciones
              <br />
              y más.
            </div>
          </article>
        </div>

        <p className="divider-line serif">CORONEL&CO. Firma de Estrategia & Creativa de marcas · CORONEL&CO. Firma de Estrategia & Creativa de marcas</p>

        <section>
          <p className="center-intro">
            Nos encargamos las redes de tu marca, la web, el contenido,
            <br />
            atracción de clientes y mucho más pero de manera <span className="blue">estratégica</span>
            <br />
            y <span className="blue">creativa</span> y así:
          </p>

          <div className="heading-row">
            <h2 className="headline serif">BRAND EVOLUTION</h2>
            <span className="dot" />
            <span className="pill">Evolución de marca</span>
          </div>
          <p className="subtitle">¿Cómo crecen las marcas?</p>
          <p className="mini-text">
            En Coronel&Co entendemos que el crecimiento de una marca ocurre por etapas.
            <br />
            Esta se construye en la base de la siguiente.
          </p>

          <div className="steps">
            <div className="step">Fase 1<br />Construir la marca</div>
            <div className="step">Fase 2<br />Posicionar la marca</div>
            <div className="step">Fase 3<br />Potenciar la marca</div>
            <div className="step">Fase 4<br />Impacto & propósito</div>
          </div>
        </section>

        <section className="split">
          <div>
            <h2 className="left-title serif">¿EN QUÉ ETAPA SE ENCUENTRA TU MARCA?</h2>
          </div>
          <div>
            <div className="heading-row">
              <h2 className="headline serif">BRAND STAGE</h2>
              <span className="dot" />
              <span className="pill">Etapa de marca</span>
            </div>
            <p className="subtitle">¿En qué etapa está tu marca?</p>

            <p className="right-text">
              No todas las marcas necesitan lo mismo. Cada negocio se encuentra en una etapa distinta de desarrollo.
              Comprender ese momento nos permite aplicar la estrategia correcta.
            </p>

            <div className="stage-list">
              <div className="stage-item"><span className="stage-num">01</span><span>Nivel 1 · Búsqueda de identidad básica para marcas que están comenzando.</span></div>
              <div className="stage-item"><span className="stage-num">02</span><span>Nivel 2 · Búsqueda de identidad estratégica para marcas que desean posicionarse.</span></div>
              <div className="stage-item"><span className="stage-num">03</span><span>Nivel 3 · Marca con propósito para marcas que desean potenciar su crecimiento.</span></div>
            </div>

            <p className="diagnosis-note">
              Si no logras determinar en qué nivel se encuentra tu marca, no te preocupes:
              podemos brindarte un diagnóstico.
            </p>
          </div>
        </section>

        <section>
          <div className="heading-row">
            <h2 className="headline serif">OUR PROCESS</h2>
            <span className="dot" />
            <span className="pill">Nuestro proceso</span>
          </div>
          <p className="subtitle">¿Cómo trabajamos?</p>
          <p className="mini-text">
            Aplicamos nuestro Método Core para crear, posicionar y potenciar marcas con estrategia y claridad.
          </p>

          <div className="process-wrap">
            <p className="method-core tiny">MÉTODO CORE</p>
            <div className="flow">
              <div className="flow-item"><strong>Comprensión</strong><span>Analizamos la marca, el mercado, la competencia y los objetivos del negocio.</span></div>
              <div className="flow-item"><strong>Orientación Estratégica</strong><span>Definimos el camino que inicia el crecimiento de la marca.</span></div>
              <div className="flow-item"><strong>Realización</strong><span>Convertimos la estrategia en activos reales de ejecución y acción con propósito.</span></div>
              <div className="flow-item"><strong>Expansión</strong><span>Medimos, optimizamos y potenciamos resultados para lograr mejora continua.</span></div>
            </div>
          </div>

          <div className="cta-band">
            <div className="ticker" aria-label="Estrategia con propósito y creatividad con intención">
              <div className="ticker-track">
                <span className="ticker-item">ESTRATEGIA CON PROPÓSITO <span className="ticker-sep">•</span> CREATIVIDAD CON INTENCIÓN</span>
                <span className="ticker-item">ESTRATEGIA CON PROPÓSITO <span className="ticker-sep">•</span> CREATIVIDAD CON INTENCIÓN</span>
                <span className="ticker-item">ESTRATEGIA CON PROPÓSITO <span className="ticker-sep">•</span> CREATIVIDAD CON INTENCIÓN</span>
                <span className="ticker-item">ESTRATEGIA CON PROPÓSITO <span className="ticker-sep">•</span> CREATIVIDAD CON INTENCIÓN</span>
              </div>
            </div>
            <div className="cta-buttons">
              <span className="pill">Aprende & crece</span>
              <span className="pill">Educa para una mejor toma de decisiones</span>
            </div>
          </div>
        </section>

        <footer className="manifest">
          <h3 className="serif">MANIFIESTO</h3>
          <p className="word">Diagnóstico</p>
          <p className="word">Contacto</p>
          <p className="big serif">DIAGNÓSTICO</p>
        </footer>
      </main>
    </>
  )
}
