export default function ComingSoon() {
  return (
    <>
      <style>{`

      .coming-page{
        min-height:100vh;
        background-image:url('/fondoCoronelCo..png');
        background-size:cover;
        background-position:center;
        overflow:hidden;
        position:relative;

        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        font-family:'Inter','Helvetica Neue',Arial,sans-serif;
      }

      /* LOGO */

      .brand-fixed{
        position:absolute;
        top:40px;
        left:40px;
        z-index:10;
      }

      .brand-logo{
        width:140px;
        height:auto;
      }

      /* ORBE */

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

        filter:blur(140px);

        opacity:.75;

        animation:orbPulse 5s ease-in-out infinite;

        z-index:1;
      }

      @keyframes orbPulse{

        0%{
          transform:scale(1);
        }

        50%{
          transform:scale(1.12);
        }

        100%{
          transform:scale(1);
        }
      }

      /* TEXTO */

      .coming-title{

        position:relative;
        z-index:3;

        text-align:center;

        font-size:clamp(2rem,8vw,6rem);

        line-height:.9;

        font-weight:1300;

        letter-spacing:-0.01em;

   color: #ffffff;

text-shadow:
  0 0 20px rgba(255,255,255,0.08),
  0 0 40px rgba(255,255,255,0.04);
      }

      .coming-subtitle{

        position:relative;
        z-index:3;

        margin-top:20px;

        text-transform:uppercase;

        letter-spacing:.31em;

        font-size:.9rem;

        font-weight:300;

   color: #ffffff;

text-shadow:
  0 0 20px rgba(255,255,255,0.08),
  0 0 40px rgba(255,255,255,0.04);
      }

      /* ELEMENTOS */


      .cone{

        position:absolute;

        animation:float 5s ease-in-out infinite;

        z-index:4;
      }

      @keyframes float{

        0%{
          transform:translateY(0px);
        }

        50%{
          transform:translateX(-20px);
        }
        
        100%{
          transform:translateY(0px);
        }
      }



      .cone{
        width:80px;
      }



      /* CONOS */

      .cone-2{
        top:9%;
        right:13%;
        width:777px;
        z-index:0;
        transform:rotate(15deg);
      }

      /* MOBILE */

@media (max-width:768px){

  .brand-fixed{
    top:25px;
    left:25px;
  }

  .brand-logo{
    width:110px;
  }

  .coming-title{
    font-size:2.6rem;
    line-height:1;
    max-width:90%;
  }

  .blur-orb{
    width:300px;
    height:300px;
  }

  .cone-2{
    width:320px;
    right:25px;
    top:58%;
  }
}

      `}</style>

      <main className="coming-page">

        {/* LOGO */}

        <div className="brand-fixed">
          <img
            src="/logoCoronelCo..png"
            className="brand-logo"
            alt=""
          />
        </div>

        {/* ORBE */}

        <div className="blur-orb"></div>



        {/* CONOS */}

        <img
          src="/cono1.png"
          className="cone cone-2"
          alt=""
        />

        {/* TEXTO */}

        <h1 className="coming-title">
          ESTAMOS
          <br />
          CONSTRUYENDO
        </h1>

        <p className="coming-subtitle">
          Iniciamos web pronto
        </p>

      </main>
    </>
  )
}
