import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { LoginPage } from "./pages/Login";
import { MyRoutes } from "./Routes";
import "./styles/global.scss";

function App() {
  return (
    <>
      {false ? (
        <BrowserRouter>
          <Header />
          <MyRoutes />
        </BrowserRouter>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;
