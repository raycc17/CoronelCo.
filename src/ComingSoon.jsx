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

        font-size:clamp(3rem,8vw,6rem);

        line-height:.9;

        font-weight:800;

        letter-spacing:-0.03em;

        background:linear-gradient(
          135deg,
          #4919af,
          #0f64f3
        );

        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }

      .coming-subtitle{

        position:relative;
        z-index:3;

        margin-top:20px;

        text-transform:uppercase;

        letter-spacing:.25em;

        font-size:.8rem;

        font-weight:300;
      }

      /* ELEMENTOS */

      .helmet,
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
          transform:translateY(-20px);
        }

        100%{
          transform:translateY(0px);
        }
      }

      .helmet{
        width:90px;
      }

      .cone{
        width:80px;
      }

      /* CASCOS */

      .helmet-1{
        top:-35%;
        left:2%;
        width:700px;
        z-index:1;
        transform:rotate(-18deg);
      }

      .helmet-2{
        bottom:-8%;
        width:205px;
        right:22%;
        transform:rotate(35deg);
      }

      .helmet-3{
        top:20%;
        right:22%;
        width:65px;
        opacity:.5;
        z-index:2;
      }

      /* CONOS */

      .cone-1{
        bottom:12%;
        left:18%;
        transform:rotate(-12deg);
      }

      .cone-2{
        top:35%;
        right:4%;
        width:355px;
        z-index:0;
        transform:rotate(15deg);
      }

      .cone-3{
        bottom:28%;
        left:2%;
        width:205px;
        opacity:.45;
        z-index:2;
      }

      /* MOBILE */

      @media(max-width:768px){

        .brand-fixed{
          top:25px;
          left:25px;
        }

        .brand-logo{
          width:110px;
        }

        .coming-title{
          font-size:3rem;
          max-width:90%;
        }

        .blur-orb{
          width:300px;
          height:300px;
        }

        .helmet{
          width:55px;
        }

        .cone{
          width:50px;
        }

        .helmet-3,
        .cone-3{
          display:none;
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

        {/* CASCOS */}

        <img
          src="/casco1.png"
          className="helmet helmet-1"
          alt=""
        />

        <img
          src="/casco1.png"
          className="helmet helmet-2"
          alt=""
        />

        <img
          src="/casco1.png"
          className="helmet helmet-3"
          alt=""
        />

        {/* CONOS */}

        <img
          src="/cono1.png"
          className="cone cone-1"
          alt=""
        />

        <img
          src="/cono1.png"
          className="cone cone-2"
          alt=""
        />

        <img
          src="/cono1.png"
          className="cone cone-3"
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
