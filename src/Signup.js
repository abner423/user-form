import "./Signup.css";
import Check from './assets/check.png';
import Head from './assets/head.png';
import Dotted from './assets/dotted.jpg';

function Signup() {
  return (
    <div className="signup">
      <div className="blue"></div>
      <div className="dotted">
        <img src={Dotted} alt="pontilhado" />
      </div>
      <div className="box">
        <div className="box_left">
          <div className="header">
            <h1>Cadastre-se</h1>
            <p>
              Ao se cadastrar você concorda com nossos termos de serviço e
              política de privacidade.
            </p>
          </div>

          <div className="input">
            <input placeholder="nome"></input>
          </div>
          <div className="input">
            <input placeholder="nome@empresa.com"></input>
          </div>
          <div className="input">
            <textarea cols={33} rows={10} placeholder="resumo sobre usuário"></textarea>
          </div>
          <button>cadastrar</button>
        </div>
        <div className="box_right">
          <img className="head" src={Head} alt='head' />
          <h1>Benefícios</h1>

          <div className="benefits">
            <div>
              <img src={Check} alt='check' />
              <p>Construir novas conexões</p>
            </div>
            <div>
              <img src={Check} alt='check' />
              <p>Compartilhe seus momentos</p>
            </div>
            <div>
              <img src={Check} alt='check' />
              <p>Explore novas fronteiras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
