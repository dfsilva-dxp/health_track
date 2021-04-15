import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SingInButton() {
  const session = false;

  return session ? (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#04d361" />
      Daniel Silva
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
}
