import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Grid } from "@material-ui/core"
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={< Login/>} />
          <Route path="/login" element={< Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path='/cadastrarUsuario' element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTemas/>} />
          <Route path="/postagens" element={<ListaPostagens />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
