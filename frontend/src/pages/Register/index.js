import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color={'#e02041'}/>
            Já tenho cadastro
          </Link >
        </section>

        <form>
          <input type="text" placeholder="Nome da ONG"/>
          <input type="email" placeholder="E-mail"/>
          <input type="text" placeholder="WhatsApp"/>
          <div className="input-group">
            <input type="text" placeholder="Cidade"/>
            <input type="text" placeholder="UF" style={{ width: 80 }}/>
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}