import React from 'react';

function HeroBanner() {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <div className="section-text__subtitle">Vem pra Sampa</div>
          <div className="section-text__title-big">
            E aí diva? Firmeza? Se não está, vai ficar!
          </div>
          <div className="section-text__body">
            Somos uma plataforma em parceiria com a Prefeitura de São Paulo,
            para auxiliar virtualmente as mulheres com mentorias, cursos e redes
            de apoio, para divarem por aí. Topa?
          </div>
          <a href="#download" className="download-btn">
            Download App
          </a>
        </div>

        <div className="section-image">
          <img src="./images/hero_right.webp" alt="app preview" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
