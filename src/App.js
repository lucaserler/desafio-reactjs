import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Cadastro from "./pages/Cadastro/cadastro";
import Footer from "./components/Fooder/footer"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
