import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import "./styles.scss";

export function SingupForm() {
  return (
    <form action="" className="singup-form">
      <h1>Sing out</h1>
      <Input type="text" placeholder="Entrer with your name" required />
      <Input type="email" placeholder="Enter with your email" required />
      <Input type="password" placeholder="Enter with your password" required />
      <DefaultButton type="submit">Sing up</DefaultButton>
    </form>
  );
}
