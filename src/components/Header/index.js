import gitLogo from "../../assets/github.png";
import "./styles.scss";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={gitLogo} alt="Logo" />
      </div>
      <ul>
        <li>Repos</li>
        <li>Starreds</li>
      </ul>
      <div className="user">
        <img
          src="https://avatars.githubusercontent.com/u/16245261?v=4"
          alt="User"
        />
        <strong>Daniel Silva</strong>
      </div>
    </header>
  );
}
