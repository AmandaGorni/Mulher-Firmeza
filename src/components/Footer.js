import React from 'react';

function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-30">
            <div className="footer-text__title">Mulher Firmeza</div>
            <div className="footer-text__body">
              A Prefeitura de São Paulo criou esta plataforma especialmente para
              você Mulher, queremos te dar aquele empurrão para acelerar sua
              carreira e conquistar a sua autonomia financeira . Você terá
              acesso a profissionais de recursos humanos, saúde mental e
              tecnologia. Criará sua própria rede de mulheres, e o melhor, será
              tudo virtual, portanto não se preocupe você poderá acessar
              conteúdo usando até mesmo seu whatsapp. Vamos juntas ?
            </div>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Quick links</div>
            <ul className="footer-list">
              <li>
                <a href="#home">Quem somos?</a>
              </li>
              <li>
                <a href="#features">Serviços</a>
              </li>
              <li>
                <a href="#pricing">Apoio</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
          <div className="col-30">
            <div className="footer-text__title">Newsletter</div>
            <div className="footer-text__body">
              Recebas as melhores notícias em seu e-mail.
            </div>
            <div className="footer-input">
              <input type="text" name="email" placeholder="Email " />
              <div className="footer-input__icon">
                <ion-icon name="paper-plane-outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
