export default function ComingSoon() {
  return (
    <>
      <style>{`
        .coming-page{
          min-height:100vh;
          background-image:url('/fondoCoronelCo..png');
          background-size:cover;
          background-position:center;

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

          position:relative;
          overflow:hidden;
        }

        .coming-title{
          font-size:clamp(3rem,8vw,7rem);
          font-weight:800;
          text-align:center;
          line-height:.95;

          background:linear-gradient(
            135deg,
            #4919af,
            #0f64f3
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;

          position:relative;
          z-index:2;
        }

        .coming-subtitle{
          margin-top:15px;

          font-size:1rem;
          letter-spacing:.2em;
          text-transform:uppercase;

          position:relative;
          z-index:2;
        }

        .blur-orb{
          position:absolute;

          width:500px;
          height:500px;

          border-radius:50%;

          background:linear-gradient(
            135deg,
            #5f2fc6,
            #0f64f3
          );

          filter:blur(120px);

          opacity:.75;

          z-index:1;

          animation:pulse 4s ease-in-out infinite;
        }

        @keyframes pulse{
          0%{
            transform:scale(1);
          }

          50%{
            transform:scale(1.08);
          }

          100%{
            transform:scale(1);
          }
        }

        @keyframes float{
          0%{
            transform:translateY(0);
          }

          50%{
            transform:translateY(-20px);
          }

          100%{
            transform:translateY(0);
          }
        }

        .helmet,
        .cone{
          position:absolute;
          animation:float 4s ease-in-out infinite;
          z-index:2;
        }

        .helmet{
          width:90px;
        }

        .cone{
          width:80px;
        }

        .helmet-1{
          top:18%;
          left:10%;
        }

        .helmet-2{
          top:18%;
          right:10%;
        }

        .cone-1{
          bottom:18%;
          left:12%;
        }

        .cone-2{
          bottom:18%;
          right:12%;
        }

        @media (max-width:768px){

          .coming-title{
            font-size:3rem;
          }

          .helmet{
            width:60px;
          }

          .cone{
            width:55px;
          }

          .helmet-1{
            left:5%;
          }

          .helmet-2{
            right:5%;
          }

          .cone-1{
            left:5%;
          }

          .cone-2{
            right:5%;
          }

          .blur-orb{
            width:320px;
            height:320px;
          }
        }
      `}</style>

      <main className="coming-page">

        <div className="blur-orb"></div>

        <img
          src="/casco.png"
          className="helmet helmet-1"
          alt=""
        />

        <img
          src="/casco.png"
          className="helmet helmet-2"
          alt=""
        />

        <img
          src="/cono.png"
          className="cone cone-1"
          alt=""
        />

        <img
          src="/cono.png"
          className="cone cone-2"
          alt=""
        />

        <h1 className="coming-title">
          ESTAMOS
          <br />
          CONSTRUYENDO
        </h1>

        <p className="coming-subtitle">
          Volvemos pronto
        </p>

      </main>
    </>
  )
}
