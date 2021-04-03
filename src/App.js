import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { LoginPage } from "./pages/Login";
import { MyRoutes } from "./Routes";
import "./styles/global.scss";

function App() {
  return (
    <>
      {true ? (
        <BrowserRouter>
          <Header />
          <Sidebar />
          <MyRoutes />
        </BrowserRouter>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default App;
