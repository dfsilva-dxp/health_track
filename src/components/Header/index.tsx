import { SingInButton } from "../SigninButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="Logo Healt Track" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Dashboard</a>
        </nav>
        <SingInButton />
      </div>
    </header>
  );
}
