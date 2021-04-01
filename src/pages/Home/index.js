import "./styles.scss";

export function Home() {
  return (
    <section className="container">
      <div className="content">
        <h1>Home</h1>
        <div className="display-info">
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
            <strong>20</strong>
          </div>
        </div>
        <div className="display-user">
          <div className="profile-info box">
            <header>
              <h4>Profile</h4>
            </header>
            <div className="wrap-info">
              <img
                src="https://avatars.githubusercontent.com/u/16245261?v=4"
                alt="Avatar"
              />
              <div className="info">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Daniel Silva
                </a>
                <p>daniel-silva-dxp</p>
                <ul>
                  <li>
                    <small>Company: </small>
                    Grapeway
                  </li>
                  <li>
                    <small>Site: </small>
                    https://www.danielsilva-dev.com.br/
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bio box">
            <header>
              <h4>Biography</h4>
            </header>
            <strong>
              “Developing has become a favorite hobby and eventually like to
              philosophize about life with a beer (🍺).”
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
