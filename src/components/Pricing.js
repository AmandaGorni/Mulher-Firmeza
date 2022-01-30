import React from 'react';

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-upper">
        <div className="section-text__title-centered text-white">
          Como começar essa trilha de sucesso?
        </div>
      </div>
      <div className="pricing-lower">
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Up na carreira</span>
              <div className="pricing-card__title">
                Cursos<span> / zap</span>
              </div>
            </div>
            <ul className="pricing-card__features">
              <li>Melhores didáticas</li>
              <li>Leve de baixar</li>
              <li>Ouça a qualquer momento</li>
              <li>Suporte de dúvidas</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Comece agora
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Conexão</span>
              <div className="pricing-card__title">Mentorias</div>
            </div>
            <ul className="pricing-card__features">
              <li>Melhores tutoras</li>
              <li>Networking</li>
              <li>Dicas de ouro</li>
              <li>Um ombro amigo</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Comece agora
            </a>
          </div>

          <div className="pricing-card">
            <div className="pricing-card__header">
              <span className="pricing-card__subtitle">Rede</span>
              <div className="pricing-card__title">Apoio</div>
            </div>
            <ul className="pricing-card__features">
              <li>Psicólogas</li>
              <li>Terapeutas</li>
              <li>Coach de carreira</li>
              <li>Vagas</li>
            </ul>
            <a href="#pricing" className="pricing-card__btn">
              Comece agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
