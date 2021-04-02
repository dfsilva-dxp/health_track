import { Input } from "../Input";
import { DefaultButton } from "../DefaultButton";
import { SocialButton } from "../SocialButton";
import googleIcon from "../../assets/google-icon.svg";

import "./styles.scss";

export function LoginForm() {
  return (
    <form className="login-form">
      <h1> Health Track</h1>
      <Input type="email" placeholder="Enter with your email" required />
      <Input type="password" placeholder="Enter with your password" required />
      <DefaultButton type="submit">Log in</DefaultButton>
      <p>OU</p>
      <SocialButton type="button">
        <img src={googleIcon} alt="Google Icon" />
        Enter with Google
      </SocialButton>
    </form>
  );
}
