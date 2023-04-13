import "./App.css";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./pages/home/Home";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  );
}

export default App;
