export default function ComingSoon() {
  return (
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
  line-height:0.95;

  background:linear-gradient(
    135deg,
    #4919af,
    #0f64f3
  );

  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;

  z-index:2;
}

.coming-subtitle{
  margin-top:15px;

  font-size:1rem;

  letter-spacing:.2em;

  text-transform:uppercase;

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
}

@keyframes float{
  0%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  100%{transform:translateY(0)}
}

.helmet,
.cone{
  position:absolute;
  animation:float 4s ease-in-out infinite;
}

.helmet-1{
  top:20%;
  left:10%;
}

.helmet-2{
  top:25%;
  right:10%;
}

.cone-1{
  bottom:18%;
  left:12%;
}

.cone-2{
  bottom:15%;
  right:12%;
}

`}</style>
    
    <main className="coming-page">

      <div className="blur-orb"></div>

      <img src="/casco.png" className="helmet helmet-1" />
      <img src="/casco.png" className="helmet helmet-2" />

      <img src="/cono.png" className="cone cone-1" />
      <img src="/cono.png" className="cone cone-2" />

      <h1 className="coming-title">
        ESTAMOS
        <br />
        CONSTRUYENDO
      </h1>

      <p className="coming-subtitle">
        Volvemos pronto.
      </p>

    </main>
  )
}

