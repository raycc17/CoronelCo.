import { useEffect, useState } from "react";

export default function Coronelco() {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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
  color: #000000;
  background-color: #ffffff;
}

body {
  margin: 0;
  color: #000000;
  background-color: #ffffff;
}

.loader-screen {
  position: fixed;
  inset: 0;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  z-index: 99999;
}

.loader-orb {
  position: absolute;
  width: min(34vw, 360px);
  height: min(34vw, 360px);
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #5f2fc6 0%,
    #0f64f3 50%,
    #5f2fc6 100%
  );
  filter: blur(38px);
  opacity: 1;
  animation: loaderSpin 3.8s linear infinite;
}

.loader-orb::after {
  content: '';
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg,
    #0f64f3 0%,
    #5f2fc6 50%,
    #0f64f3 100%
  );
  filter: blur(26px);
  opacity: 0.95;
  animation: loaderSpinReverse 5.5s linear infinite;
}

.loader-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loader-logo {
  width: min(320px, 70vw);
  height: auto;
  object-fit: contain;
}

.loader-subtitle {
  margin: 1rem 0 0;
  text-align: center;
  font-size: 0.68rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #111111 !important;
}

.loader-fadeout {
  animation: loaderFadeOut 0.5s ease forwards;
}

@keyframes loaderSpin {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes loaderSpinReverse {
  from {
    transform: rotate(360deg) scale(1);
  }
  to {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes loaderFadeOut {
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.page {
  --page-x: clamp(1rem, 3vw, 2.4rem);
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 2.8rem var(--page-x) 5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.page,
.page * {
  color: #000000 !important;
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
  --brand-logo-width: clamp(180px, 24vw, 290px);
  --brand-logo-height: clamp(42px, 5vw, 68px);
  --logo-visible-offset: clamp(0.5rem, 1vw, 0.82rem);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: var(--brand-logo-width);
  min-width: var(--brand-logo-width);
  max-width: var(--brand-logo-width);
  gap: 0.12rem;
  min-height: calc(var(--brand-logo-height) + 1rem);
  flex-shrink: 0;
}

.brand-logo-bg {
  width: var(--brand-logo-width);
  height: var(--brand-logo-height);
  min-width: var(--brand-logo-width);
  max-width: var(--brand-logo-width);
  min-height: var(--brand-logo-height);
  max-height: var(--brand-logo-height);
  flex-shrink: 0;

  background-image: url('/logoCoronelCo..png');
  background-repeat: no-repeat;
  background-position: left center;
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

        .brand-title {
          margin: 0;
          font-size: clamp(1.6rem, 3.2vw, 2rem);
          line-height: 1;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .background-zone::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
  height: 80px;

  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    rgba(255,255,255,0) 100%
  );

  z-index: 2;
  pointer-events: none;
}

html, body, #root {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

.site-shell {
  position: relative;
  min-height: 100vh;
  background: #ffffff;
}

.scroll-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image: url('/fondoCoronelCo..png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  opacity: 0;
  transition: opacity 700ms ease;
}

.site-shell.bg-visible .scroll-bg {
  opacity: 1;
}

.page {
  position: relative;
  z-index: 1;
}

         .hero {
          position: relative;
          isolation: isolate;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 360px;
          margin: 2rem 0 2.5rem;
        }

.hero::before {
  display: none;
}
        .hero h1,
        .hero h1 * {
          color: #ffffff !important;
        }

        .hero h1 {
          --hero-content-offset: 2rem;
          position: relative;
          z-index: 30;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(4rem, 10.4vw, 6.9rem);
          line-height: 0.95;
          color: #ffffff;
          font-weight: 900;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          display: grid;
          justify-items: center;
          width: max-content;
          transform: translateY(var(--hero-content-offset));
        }

        .hero-line {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 0.8em;
        }


        .hero-line-sub {
          display: block;
          width: 10.8ch;
          text-align: right;
          text-transform: none;
          font-size: 1.16em;
          font-weight: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          margin-top: -0.12em;
          background: linear-gradient(135deg, #000000 0%, #000000 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
        }

        .hero-art {
          position: absolute;
          right: clamp(0.5rem, 5vw, 4rem);
          top: 50%;
          transform: translateY(-50%);
          z-index: 8;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.95;
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
  display: none;
}

.hero::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 58%;
  width: min(48vw, 608px);
  height: min(48vw, 608px);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;

  background: conic-gradient(
    from 0deg,
    #5f2fc6 0%,
    #0f64f3 50%,
    #5f2fc6 100%
  );

  filter: blur(55px);
  opacity: 1;

  animation: haloSpinA 3s linear infinite;
}

.mid-claim-wrap {
  width: 100%;
  margin: calc(3.8rem + 4.5rem) 0 1.9rem;
  position: relative;
  isolation: isolate;
  animation: floatBanner 2s ease-in-out infinite;
  z-index: 1;
}

.mid-claim-wrap::before {
  display: none;
}

        .glass-banner {
          position: relative;
          z-index: 2;
          overflow: hidden;
          width: 100%;
padding: 1rem 1.35rem;
          text-align: center;
          font-size: 0.68rem;
          line-height: 1.2;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #ffffff;
border-radius: 30px;
background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.18) 100%),
            rgba(232, 228, 255, 0.10);
          border: 0;
          backdrop-filter: blur(28px) saturate(180%);
          -webkit-backdrop-filter: blur(28px) saturate(180%);
box-shadow:
  inset 0 1px 0 rgba(255, 255, 255, 0.52),
  inset 0 -1px 0 rgba(255, 255, 255, 0.10),
  0 22px 50px rgba(84, 67, 185, 0.22),
  0 8px 18px rgba(117, 168, 255, 0.10);
          isolation: isolate;
        }

        .glass-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.03) 44%, rgba(255, 255, 255, 0.18) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .glass-banner::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 24px;
          border: 0;
          pointer-events: none;
          z-index: 2;
        }

        .banner-halo {
          display: none;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 78.2%;
          aspect-ratio: 1 / 1;
          height: auto;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: linear-gradient(135deg, #37099b 0%, #75a8ff 50%, #37099b 100%);
          background-size: 240% 240%;
          animation: haloShift 7s ease-in-out infinite;
          filter: blur(34px);
          opacity: 1;
          mix-blend-mode: screen;
          pointer-events: none;
          z-index: 0;
        }

        .banner-halo-core {
          display: none;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 52.7%;
          aspect-ratio: 1 / 1;
          height: auto;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(55, 9, 155, 0.88) 0%, rgba(117, 168, 255, 0.92) 50%, rgba(55, 9, 155, 0.88) 100%);
          background-size: 240% 240%;
          animation: haloShift 5.5s ease-in-out infinite;
          filter: blur(34px);
          opacity: 1;
          mix-blend-mode: screen;
          pointer-events: none;
          z-index: 1;
        }

        .glass-text {
          display: inline-block;
          position: relative;
          z-index: 30;
          color: #000000;
          text-shadow: none;
        }

        .light-sweep {
          display: none;
        }

        @keyframes movingGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }


        @keyframes haloShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 20%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 80%; }
          100% { background-position: 0% 50%; }
        }

  @keyframes floatTitle {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes floatBanner {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-7px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes haloSpinA {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes tickerMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes phaseGlow {
  0% {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 0 0 rgba(255,255,255,0);
    opacity: 0.6;
  }

  50% {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 
      0 0 18px rgba(255,255,255,0.45),
      0 0 28px rgba(255,255,255,0.35);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 
      0 0 10px rgba(255,255,255,0.25),
      0 0 18px rgba(255,255,255,0.2);
    opacity: 1;
  }
}

.ticker {
  width: 100%;
  overflow: hidden;
  margin: 2.2rem 0 3.4rem;
  position: relative;
}

.ticker-track {
  display: flex;
  width: max-content;
  animation: tickerMove 20s linear infinite;
  will-change: transform;

  font-size: 0.50rem;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #000000 !important;
}

.ticker-track span {
  flex-shrink: 0;
  padding-right: 4rem;
}

.cards-title {
  margin: 1.4rem 0.60rem;
  font-size: 1.45rem;
  display: inline-block;
  animation: floatTitle 2.6s ease-in-out infinite;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
  margin-bottom: 2.4rem;
}

.card {
  text-align: center;
  font-size: 0.62rem;
  line-height: 1.35;
  padding: 1.4rem 1.2rem;
  border-radius: 22px;
  height: 100%;
  background:
    linear-gradient(135deg,
      rgba(255,255,255,0.28) 0%,
      rgba(255,255,255,0.10) 50%,
      rgba(255,255,255,0.20) 100%
    ),
    rgba(232,228,255,0.10);
  backdrop-filter: blur(26px) saturate(180%);
  -webkit-backdrop-filter: blur(26px) saturate(180%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.55),
    inset 0 -1px 0 rgba(255,255,255,0.08);
  position: relative;
  overflow: hidden;
}

.card div {
  margin-top: 0.45rem;
  line-height: 1.4;
}
        .pill {
background: #000000;
box-shadow: 0 6px 14px rgba(0,0,0,0.15);
  color: #ffffff !important;
          border-radius: 999px;
          padding: 0.55rem 0.9rem;
          display: inline-block;
          font-size: 0.52rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.45rem;
        }

.divider-line {
  width: 100%;
  animation: tickerMove 18s linear infinite;
  overflow: hidden;
  white-space: nowrap;
  margin: 2.2rem 0 3.4rem;

  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;

  color: #000000;

  position: relative;
}

        section {
          margin: 4.2rem 0;
          position: relative;
        }

.intro-block {
  width: min(100%, 980px);
  margin: 0 auto 3.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-zone {
  position: relative;
  z-index: 0;
  background: transparent;
  padding-top: 2rem;
}

.center-intro {
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
}

.intro-light {
  display: inline-block;
  margin: 0;
  padding: 0.08em 0.08em 0.14em;
  font-size: clamp(1.7rem, 3.8vw, 2.7rem);
  font-weight: 300;
  letter-spacing: -0.035em;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: visible;
  background: linear-gradient(135deg, #000000 0%, #888585 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
}

.intro-strong {
  display: inline-block;
  margin: -0.10em 0 0;
  padding: 0.06em 0.3em 0.14em 0.08em;
  font-size: clamp(1.72rem, 3.85vw, 2.72rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  text-align: right;
  white-space: nowrap;
  overflow: visible;
  align-self: center;
  transform: translateX(0.3rem);
  background: linear-gradient(135deg, #0f64f3 0%, #5f2fc6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
}

.intro-kicker {
  margin: 2rem 0 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #000000 !important;
}

.evolution-header {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  column-gap: 2rem;
  width: 100%;
  margin: 0 auto 1.4rem;
}

.evolution-image {
  width: clamp(260px, 34vw, 520px);
  height: auto;
  aspect-ratio: 520 / 140;
  display: block;
  object-fit: contain;
}

.evolution-line-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0;
  padding-top: 0.3rem;
  width: 100%;
}

.evolution-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #000000 !important;
  flex-shrink: 0;
}

.evolution-line {
  display: block;
  height: 2px;
  width: min(100%, 340px);
  background: #000000;
  margin-left: 0;
}

.evolution-pill-wrap {
  width: calc(100% + (var(--page-x) * 2));
  margin: 0.45rem 0 1.35rem calc(var(--page-x) * -1);
  display: flex;
  justify-content: flex-start;
  padding-left: clamp(0rem, 0.2vw, 0.3rem);
}

.evolution-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.72rem 1.3rem 0.72rem 1.9rem;
  
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;

  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);

  box-shadow: none;
  border: none;

  color: #000000 !important;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.evolution-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 1.8rem;
  margin-bottom: 2.2rem;
}

.evolution-card {
  position: relative;
  min-height: 170px;
  border-radius: 22px;
  overflow: hidden;
}

.evolution-card-inner {
  position: relative;
  min-height: 170px;
  border-radius: 22px;
  padding: 4.2rem 1rem 1.25rem;

  background:
    linear-gradient(135deg,
      rgba(255,255,255,0.28) 0%,
      rgba(255,255,255,0.10) 50%,
      rgba(255,255,255,0.20) 100%
    ),
    rgba(232,228,255,0.10);

  backdrop-filter: blur(26px) saturate(180%);
  -webkit-backdrop-filter: blur(26px) saturate(180%);

  box-shadow:
  inset 0 1px 0 rgba(255,255,255,0.55),
  inset 0 -1px 0 rgba(255,255,255,0.08),
  0 10px 30px rgba(15, 23, 42, 0.08),
  0 2px 8px rgba(15, 23, 42, 0.05);

  overflow: hidden;

  -webkit-mask-image: radial-gradient(
    circle 33px at 50% 46px,
    transparent 98%,
    black 100%
  );
  mask-image: radial-gradient(
    circle 33px at 50% 46px,
    transparent 98%,
    black 100%
  );
}

.evolution-card-inner::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 50%;
  width: 72px;
  height: 72px;
  transform: translateX(-50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
}

.phase-number {
  position: absolute;
  top: 19px;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  font-weight: 300;
  color: #111 !important;

  background: rgba(255,255,255,0.94);
  z-index: 5;

  animation-duration: 2.8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.evolution-card:nth-child(1) .phase-number {
  animation-name: phaseGlow1;
}

.evolution-card:nth-child(2) .phase-number {
  animation-name: phaseGlow2;
}

.evolution-card:nth-child(3) .phase-number {
  animation-name: phaseGlow3;
}

.evolution-card:nth-child(4) .phase-number {
  animation-name: phaseGlow4;
}

@keyframes phaseGlow1 {
  0%, 18% {
    transform: translateX(-50%) scale(1.08);
    box-shadow:
      0 0 14px rgba(255,255,255,0.55),
      0 0 24px rgba(255,255,255,0.38);
    opacity: 1;
  }
  19%, 100% {
    transform: translateX(-50%) scale(1);
    box-shadow: none;
    opacity: 0.92;
  }
}

@keyframes phaseGlow2 {
  0%, 24% {
    transform: translateX(-50%) scale(1);
    box-shadow: none;
    opacity: 0.92;
  }
  25%, 43% {
    transform: translateX(-50%) scale(1.08);
    box-shadow:
      0 0 14px rgba(255,255,255,0.55),
      0 0 24px rgba(255,255,255,0.38);
    opacity: 1;
  }
  44%, 100% {
    transform: translateX(-50%) scale(1);
    box-shadow: none;
    opacity: 0.92;
  }
}

@keyframes phaseGlow3 {
  0%, 49% {
    transform: translateX(-50%) scale(1);
    box-shadow: none;
    opacity: 0.92;
  }
  50%, 68% {
    transform: translateX(-50%) scale(1.08);
    box-shadow:
      0 0 14px rgba(255,255,255,0.55),
      0 0 24px rgba(255,255,255,0.38);
    opacity: 1;
  }
  69%, 100% {
    transform: translateX(-50%) scale(1);
    box-shadow: none;
    opacity: 0.92;
  }
}

@keyframes phaseGlow4 {
  0%, 74% {
    transform: translateX(-50%) scale(1);
    box-shadow: none;
    opacity: 0.92;
  }
  75%, 93% {
    transform: translateX(-50%) scale(1.08);
    box-shadow:
      0 0 14px rgba(255,255,255,0.55),
      0 0 24px rgba(255,255,255,0.38);
    opacity: 1;
  }
  94%, 100% {
    transform: translateX(-50%) scale(1);
    box-shadow: none;
    opacity: 0.92;
  }
}

.stage-dot {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #000;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 500;

  position: relative;
  z-index: 2;

  box-shadow:
    0 6px 18px rgba(0,0,0,0.15),
    0 2px 6px rgba(0,0,0,0.08);

  margin-bottom: 1rem;

  animation-duration: 2.4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.stage-item:nth-child(1) .stage-dot {
  animation-name: stageGlow1;
}

.stage-item:nth-child(2) .stage-dot {
  animation-name: stageGlow2;
}

.stage-item:nth-child(3) .stage-dot {
  animation-name: stageGlow3;
}

@keyframes stageGlow1 {
  0%, 24% {
    transform: scale(1.08);
    box-shadow:
      0 0 14px rgba(255,255,255,0.55),
      0 0 24px rgba(255,255,255,0.38),
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 1;
  }
  25%, 100% {
    transform: scale(1);
    box-shadow:
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 0.92;
  }
}

@keyframes stageGlow2 {
  0%, 32% {
    transform: scale(1);
    box-shadow:
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 0.92;
  }
  33%, 57% {
    transform: scale(1.08);
    box-shadow:
      0 0 14px rgba(255,255,255,0.55),
      0 0 24px rgba(255,255,255,0.38),
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 1;
  }
  58%, 100% {
    transform: scale(1);
    box-shadow:
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 0.92;
  }
}

@keyframes stageGlow3 {
  0%, 65% {
    transform: scale(1);
    box-shadow:
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 0.92;
  }
  66%, 90% {
    transform: scale(1.08);
    box-shadow:
      0 0 14px rgba(255,255,255,0.55),
      0 0 24px rgba(255,255,255,0.38),
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 1;
  }
  91%, 100% {
    transform: scale(1);
    box-shadow:
      0 6px 18px rgba(0,0,0,0.15),
      0 2px 6px rgba(0,0,0,0.08);
    opacity: 0.92;
  }
}

/* aro transparente / vidrio */
.phase-number::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 5px solid rgba(255,255,255,0.18);
  box-sizing: border-box;
  z-index: 1;
}

/* centro blanco del círculo */
.phase-number::after {
  content: '';
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: rgba(255,255,255,0.94);
  z-index: 0;
}

.phase-number span {
  position: relative;
  z-index: 2;
}

.phase-content {
  text-align: center;
  margin-top: 1.1rem;
}

.phase-sub {
  font-size: 0.55rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 500;
  opacity: 0.7;
  margin-bottom: 0.4rem;
}

.phase-title {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0.1rem 0;
}

.phase-desc {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0.15rem 0;
}

.brand-stages {
  margin-top: 3rem;
  position: relative;
}

/* GRID PRINCIPAL */
.stage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
  position: relative;
}

/* LÍNEA QUE CRUZA */
.stage-grid::before {
  content: '';
  position: absolute;
  top: 48px; /* altura del círculo */
  left: 5%;
  right: 5%;
  height: 2px;
  background: #000;
  z-index: 0;
}

/* ITEM */
.stage-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

/* NIVEL */
.stage-level {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 0.6rem;
}

/* CÍRCULO */
.stage-dot {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #000;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 500;

  position: relative;
  z-index: 2;

  box-shadow:
    0 6px 18px rgba(0,0,0,0.15),
    0 2px 6px rgba(0,0,0,0.08);

  margin-bottom: 1rem;
}

/* ASEGURA BLANCO */
.stage-dot span {
  color: #ffffff !important;
}

/* TITULO */
.stage-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

/* DESCRIPCIÓN */
.stage-desc {
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.5;
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

        .headline {
          margin: 0;
          font-size: clamp(1.7rem, 3.6vw, 2.5rem);
          line-height: 1;
        }

.mini-text {
  max-width: 740px;
  font-size: 1.10rem;
  line-height: 1.5;
  color: #000;
  margin-top: 1.1rem;
  font-weight: 200;
}

.mini-text-frase {
  max-width: 740px;
  font-size: 1.10rem;
  line-height: 1.2;
  color: #000;
  margin-top: 1.1rem;
  font-weight: 1000;
}

.mini-text-recalcados {
  max-width: 740px;
  font-size: 0.90rem;
  line-height: 1.2;
  color: #000;
  margin-top: 1.1rem;
  font-weight: 1000;
}

.triple-method-wrap {
  width: 100%;
  max-width: 980px;
  margin: 1.8rem auto 0;
  position: relative;
}

.triple-method-bar {
  width: 100%;
  background: #000000;
  color: #ffffff !important;
  border-radius: 5px;
  text-align: center;
  padding: 1.15rem 1rem;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  box-shadow: 0 12px 30px rgba(0,0,0,0.12);
}

.triple-method-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;
}

.method-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 49x;
  border-radius: 5px;

  background: rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.55),
    inset 0 -1px 0 rgba(255,255,255,0.08);

  color: rgba(0, 0, 0, 0.90) !important;
  font-size: 0.95rem;
  font-weight: 300;
  letter-spacing: 0.55em;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .triple-method-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .triple-method-bar {
    font-size: 0.8rem;
    letter-spacing: 0.28em;
    padding: 1rem 0.8rem;
  }

  .method-pill {
    min-height: 50px;
    font-size: 0.82rem;
    letter-spacing: 0.38em;
  }
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

        .cta-static-bar {
          width: 100%;
          border-radius: 0;
          background: linear-gradient(135deg, #5f2fc6 0%, #0f64f3 100%);
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(41, 78, 231, 0.24);
          margin: 0 auto 1.1rem;
          padding: 0.9rem 1rem;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
          text-align: center;
          line-height: 1.2;
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

        @media (max-width: 980px) {
          .page {
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 1.4rem 1rem 3rem;
          }

          .evolution-header {
  grid-template-columns: 1fr;
  row-gap: 1rem;
}

.evolution-image {
  width: min(100%, 360px);
}

.evolution-line-wrap {
  justify-content: flex-start;
  padding-top: 0;
}

.evolution-line {
  width: 100%;
  max-width: 220px;
}

.evolution-pill-wrap {
  justify-content: center;
}

.evolution-cards {
  grid-template-columns: 1fr;
}


          .hero,
          .split {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: 300px;
          }

          .hero-art {
            right: 0.2rem;
            opacity: 0.75;
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

  <div className={`site-shell ${showBg ? "bg-visible" : ""}`}>
      <div className="scroll-bg" aria-hidden="true"></div>

      <main className="page">
        
        <header className="top">
          
<div className="brand-line">
  <div
    className="brand-logo-bg"
    role="img"
    aria-label="Coronel & Co."
  ></div>

  <h5 className="brand-subtitle">FIRMA ESTRATÉGICA & CREATIVA DE MARCAS</h5>
</div>
          
        </header>

        <section className="hero">
          <div className="hero-glow" aria-hidden="true"></div>
          
          <h1>
            <span className="hero-line">CREAMOS</span>
            <span className="hero-line">POSICIONAMOS</span>
            <span className="hero-line">& POTENCIAMOS</span>
            <span className="hero-line-sub">tu marca.</span>
          </h1>
        </section>

   <div className="background-zone">
     
     <div className="mid-claim-wrap">
          <div className="glass-banner">
            <span className="glass-text">ESTRATEGIA CON PROPÓSITO · CREATIVIDAD CON INTENCIÓN</span>
            <div className="light-sweep" aria-hidden="true" />
          </div>
        </div>

        <h3 className="cards-title">Apoyamos y servimos a...</h3>
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

        <div className="ticker">
  <div className="ticker-track">
    <span>
TU MARCA EN REDES SOCIALES ● TU MARCA SUPERANDO A LA COMPETENCIA ● TU MARCA ATRAYENDO CLIENTES POTENCIALES ● TU MARCA SIENDO ELEGIDA ● TU MARCA EN BOCA DE TODOS
    </span>
        <span>
TU MARCA EN REDES SOCIALES ● TU MARCA SUPERANDO A LA COMPETENCIA ● TU MARCA ATRAYENDO CLIENTES POTENCIALES ● TU MARCA SIENDO ELEGIDA ● TU MARCA EN BOCA DE TODOS
    </span>
  </div>
</div>

<section>
  <div className="intro-block">
    <p className="center-intro">
      <span className="intro-light">
        Nos encargamos del crecimiento de tu marca
      </span>
      <span className="intro-strong">
        de manera estratégica y creativa.
      </span>
    </p>

    <p className="intro-kicker">Y LO HACEMOS ASÍ</p>
  </div>

  <div className="evolution-header">
    <img
      className="evolution-image"
      src="/brandevolution.png"
      alt="Brand Evolution"
      width="520"
      height="140"
    />

    <div className="evolution-line-wrap" aria-hidden="true">
      <span className="evolution-dot"></span>
      <span className="evolution-line"></span>
    </div>
  </div>

  <div className="evolution-pill-wrap">
    <span className="evolution-pill">EVOLUCIÓN DE MARCA</span>
  </div>

  <p className="mini-text">
    En Coronel & Co entendemos que el crecimiento de una marca ocurre por etapas.
    <br />
    Esta se construye en la base de la siguiente.
  </p>

  <div className="evolution-cards">
    <article className="evolution-card">
      <div className="evolution-card-inner">
        <div className="phase-content">
          <p className="phase-sub">PRIMERA FASE</p>
          <p className="phase-title">CONSTRUIR</p>
          <p className="phase-desc">LA MARCA</p>
        </div>
      </div>
      <div className="phase-number"><span>1</span></div>
    </article>

    <article className="evolution-card">
      <div className="evolution-card-inner">
        <div className="phase-content">
          <p className="phase-sub">SEGUNDA FASE</p>
          <p className="phase-title">POSICIONAR</p>
          <p className="phase-desc">LA MARCA</p>
        </div>
      </div>
      <div className="phase-number"><span>2</span></div>
    </article>

    <article className="evolution-card">
      <div className="evolution-card-inner">
        <div className="phase-content">
          <p className="phase-sub">TERCERA FASE</p>
          <p className="phase-title">POTENCIAR</p>
          <p className="phase-desc">LA MARCA</p>
        </div>
      </div>
      <div className="phase-number"><span>3</span></div>
    </article>

    <article className="evolution-card">
      <div className="evolution-card-inner">
        <div className="phase-content">
          <p className="phase-sub">CUARTA FASE</p>
          <p className="phase-title">COMPARTIR</p>
          <p className="phase-desc">IMPACTO & PROPÓSITO</p>
          <p className="phase-desc">DE MARCA</p>
        </div>
      </div>
      <div className="phase-number"><span>4</span></div>
    </article>
  </div>

  <div style={{ marginTop: '3rem' }}>
    <div className="evolution-header">
      <img
        className="evolution-image"
        src="/brandstage.png"
        alt="Brand Stage"
        width="520"
        height="140"
      />

      <div className="evolution-line-wrap" aria-hidden="true">
        <span className="evolution-dot"></span>
        <span className="evolution-line"></span>
      </div>
    </div>

    <div className="evolution-pill-wrap">
      <span className="evolution-pill">ETAPA DE MARCA</span>
    </div>
  </div>

  <p className="mini-text">
    No todas las marcas necesitan lo mismo. Cada negocio se encuentra en una etapa
    distinta de desarrollo y comprender ese momento nos permite aplicar la estrategia correcta. <br />
    Entonces, ¿qué necesita realmente tu marca?
    Cada marca se encuentra en una etapa distinta y nuestras soluciones se adaptan
    al momento y a los objetivos de cada negocio.
  </p>

  <p className="mini-text-frase">
    ¿EN QUÉ ETAPA SE <br />
    ENCUENTRA TU MARCA?
  </p>

  <div className="brand-stages">
    <div className="stage-grid">
      <div className="stage-item">
        <p className="stage-level">Nivel 1</p>
        <div className="stage-dot">
          <span>1</span>
        </div>
        <p className="stage-title">Búsqueda de Identidad básica</p>
        <p className="stage-desc">
          Para marcas que están comenzando <br /> y quieren hacerse notar.
        </p>
      </div>

      <div className="stage-item">
        <p className="stage-level">Nivel 2</p>
        <div className="stage-dot">
          <span>2</span>
        </div>
        <p className="stage-title">Búsqueda de identidad estratégica</p>
        <p className="stage-desc">
          Para marcas que desean posicionarse <br /> con claridad y solidez en la mente <br /> de su público objetivo.
        </p>
      </div>

      <div className="stage-item">
        <p className="stage-level">Nivel 3</p>
        <div className="stage-dot">
          <span>3</span>
        </div>
        <p className="stage-title">Marca con real propósito</p>
        <p className="stage-desc">
          Para marcas que desean potenciar <br /> su crecimiento y generar impacto.
        </p>
      </div>
    </div>
  </div>

        <p className="mini-text-recalcados">
  | Calma, nosotros podemos hacerte un diagnostico gratuito e indicarte en qué nivel se encuentra tu marca o negocio.
  </p>

  <div style={{ marginTop: '3rem' }}>
  <div className="evolution-header">
    <img
      className="evolution-image"
      src="/ourprocess.png"
      alt="Our Process"
      width="520"
      height="140"
    />

    <div className="evolution-line-wrap" aria-hidden="true">
      <span className="evolution-dot"></span>
      <span className="evolution-line"></span>
    </div>
  </div>

  <div className="evolution-pill-wrap">
    <span className="evolution-pill">NUESTRO PROCESO</span>
  </div>
</div>

  <div className="triple-method-wrap">
  <div className="triple-method-bar">TRIPLE METODOLOGÍA</div>

  <div className="triple-method-grid">
    <div className="method-pill">CORE</div>
    <div className="method-pill">RARE</div>
    <div className="method-pill">CRIT</div>
  </div>
</div>

  <div className="cta-band">
    <div className="cta-static-bar" aria-label="Nuestro enfoque">
      MÉTODO CORE · ESTRATEGIA Y CREATIVIDAD CON PROPÓSITO
    </div>
    <div className="cta-buttons">
      <span className="pill">Aprende & crece</span>
      <span className="pill">Educa para una mejor toma de decisiones</span>
    </div>
  </div>
</section>
     </div>


        <footer className="manifest">
          <h3 className="serif">MANIFIESTO</h3>
          <p className="word">Diagnóstico</p>
          <p className="word">Contacto</p>
          <p className="big serif">DIAGNÓSTICO</p>
        </footer>
      </main>
    </div>
  </>
)
}
