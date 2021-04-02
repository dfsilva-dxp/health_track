import { LoginForm } from "../../components/LoginForm";
import background from "../../assets/background-flowers.png";

import "./styles.scss";

export function LoginPage() {
  return (
    <section
      className="login-page-content"
      style={{
        background: `url(${background}) no-repeat left top`,
      }}
    >
      <LoginForm />
      <footer className="copyright">© Health Track • 2021</footer>
    </section>
  );
}
