import logo from "../../assets/logo.svg";
import logoGithub from "../../assets/github.png";
import bg from "../../assets/bg.png";
import { FaCaretRight } from "react-icons/fa";

import "./styles.scss";

export function LoginPage() {
  return (
    <section
      className="login-content"
      style={{
        background: `url(${bg}) no-repeat center center`,
      }}
    >
      <div className="login">
        <img src={logo} alt="Logo git.app" className="logo-app" />
        <div className="welcome">
          <h1>Bem-vindo</h1>
          <span>
            <img src={logoGithub} alt="Logo github" />

            <p>
              Faça login com seu Github <br />
              para começar
            </p>
          </span>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Digite seu username" />
          <div className="btn">
            <FaCaretRight />
          </div>
        </div>
      </div>
    </section>
  );
}
