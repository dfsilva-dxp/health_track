import { Route, Routes, Link } from "react-router-dom";
import "./styles.scss";

export function Home() {
  return (
    <section className="container">
      <div className="content">
        <header>
          <h1>Home</h1>
        </header>
        <div className="display">
          <div className="user-info">
            <div className="avatar box">
              <img
                src="https://avatars.githubusercontent.com/u/16245261?v=4"
                alt="Avatar"
              />
            </div>
            <div className="info box">
              <header>
                <h4>Biography</h4>
              </header>
              <div className="wrap">
                <h1>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Daniel Silva
                  </a>
                </h1>
                <h4>daniel-silva-dxp</h4>
                <ul>
                  <li>
                    <strong>Company: </strong>
                    Grapeway
                  </li>
                  <li>
                    <strong>Site: </strong>
                    https://www.danielsilva-dev.com.br/
                  </li>
                </ul>
                <p>
                  <strong>
                    “Developing has become a favorite hobby and eventually like
                    to philosophize about life with a beer (🍺).”
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="other-info">
            <div className="followers box">
              <header>
                <h4>Followers</h4>
              </header>
              <strong>17</strong>
            </div>
            <div className="following box">
              <header>
                <h4>Following</h4>
              </header>
              <strong>31</strong>
            </div>
            <div className="starreds box">
              <header>
                <h4>Starreds</h4>
              </header>
              <strong>
                <Link to="starred">20</Link>
              </strong>
            </div>
            <div className="repos box">
              <header>
                <h4>Repositories</h4>
              </header>
              <strong>
                <Link to="repos">20</Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="repos" />
        <Route path="starreds" />
      </Routes>
    </section>
  );
}
