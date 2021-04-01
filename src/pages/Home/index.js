import { Route, Routes } from "react-router-dom";
import "./styles.scss";

export function Home() {
  return (
    <section className="container">
      <h1>Home page</h1>
      <Routes>
        <Route path="repos" />
        <Route path="starreds" />
      </Routes>
    </section>
  );
}
