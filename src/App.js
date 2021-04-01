import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { MyRoutes } from "./Routes";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
