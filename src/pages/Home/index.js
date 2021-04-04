import "./styles.scss";

export function Home() {
  return (
    <section className="home">
      <h1>Home</h1>
      <article>
        <div className="user-info">
          <div className="box height">
            <header>
              <h4>Altura</h4>
            </header>
            <strong>
              1,80<small>m</small>
            </strong>
          </div>
          <div className="box weight">
            <header>
              <h4>Peso</h4>
            </header>
            <strong>
              92<small>Kg</small>
            </strong>
          </div>
          <div className="box imc">
            <header>
              <h4>IMC</h4>
            </header>
            <strong>28.4</strong>
          </div>
        </div>
      </article>
    </section>
  );
}
