import { LoginForm } from "../../components/LoginForm";
import { SingupForm } from "../../components/SingupForm";
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
      {false ? <LoginForm /> : <SingupForm />}
      {false ? (
        <p>
          Do you have an account? <span>Log in</span>
        </p>
      ) : (
        <p>
          Don't have an account? <span>Sing out</span>
        </p>
      )}
      <footer className="copyright">© Health Track • 2021</footer>
    </section>
  );
}
