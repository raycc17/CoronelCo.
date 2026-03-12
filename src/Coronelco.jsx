export default function Coronelco() {
  return (
    <>
      <style>{`
        :root {
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
          color: #0f172a;
        }

        .container {
          max-width: 900px;
          margin: 4rem auto;
          padding: 0 1rem;
          line-height: 1.5;
        }

        .title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3rem);
        }

        .lead {
          margin: 1rem 0 2rem;
          color: #334155;
        }

        .actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .btn {
          border: 0;
          border-radius: 999px;
          padding: 0.8rem 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: #4f46e5;
          color: white;
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
        }

        .btn-secondary {
          background: white;
          color: #1e293b;
          border: 1px solid #cbd5e1;
        }

        .pulse {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #334155;
          font-size: 0.95rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #22c55e;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(1.8); opacity: 0.3; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <main className="container">
        <h1 className="title">CoronelCo</h1>
        <p className="lead">
          Todo lo visible de esta página está en <code>src/Coronelco.jsx</code> para que puedas editar rápido
          textos, botones, estilos y animaciones desde un solo archivo.
        </p>

        <div className="actions">
          <button className="btn btn-primary">Quiero una cotización</button>
          <button className="btn btn-secondary">Ver servicios</button>
        </div>

        <div className="pulse">
          <span className="dot" />
          <span>Animación activa</span>
        </div>
      </main>
    </>
  )
}
