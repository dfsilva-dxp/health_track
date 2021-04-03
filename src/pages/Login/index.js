import { LoginForm } from "../../components/LoginForm";
import { SingupForm } from "../../components/SingupForm";
import background from "../../assets/background-flowers.png";

import "./styles.scss";
import { useState } from "react";

export function LoginPage() {
  const [isShow, setIsShow] = useState(true);

  function onShow() {
    setIsShow(!isShow);
  }

  return (
    <section
      className="login-page-content"
      style={{
        background: `url(${background}) no-repeat left top`,
      }}
    >
      {isShow ? <LoginForm /> : <SingupForm />}
      {isShow ? (
        <p>
          Do you have an account? <span onClick={onShow}>Log in</span>
        </p>
      ) : (
        <p>
          Don't have an account? <span onClick={onShow}>Sing out</span>
        </p>
      )}
      <footer className="copyright">© Health Track • 2021</footer>
    </section>
  );
}
