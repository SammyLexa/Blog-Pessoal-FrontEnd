import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens";
import CadastroTema from "./components/temas/cadastrarTema/CadastroTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import DeletarPostagem from "./components/postagens/deletarPost/DeletarPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
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
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
