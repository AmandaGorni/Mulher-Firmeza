import React from 'react';

function Services() {
  return (
    <section id="services">
      <div className="section-text">
        <div className="section-text__title-centered">
          Como nós vamos te ajudar
        </div>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="reader-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Cursos pelo ZAP</div>
              <div className="section-text__body">
                Capacitação da mulher em diversos minicursos usando o próprio
                whatsapp. Trabalho, saúde mental, tecnologia e comunicação.
              </div>
            </div>
          </div>

          <div className="service-card active">
            <div className="service-card__icon">
              <ion-icon name="wallet-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">Rede de apoio</div>
              <div className="section-text__body">
                Apoio de mentores individualmente on-line, com as mulheres mais
                inspiradores da galáxia, pra te ajudar com aquela dica master.
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card__icon">
              <ion-icon name="chatbubble-ellipses-outline" />
            </div>
            <div className="service-card__text-container">
              <div className="section-text__title-small">
                Mentorias em grupo
              </div>
              <div className="section-text__body">
                Mentorias virtuais em grupo com especialista mentores das área
                de psicologia, comunicação, recursos humanos, PNL e tecnologia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
