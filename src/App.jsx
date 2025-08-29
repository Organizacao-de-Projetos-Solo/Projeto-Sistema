import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Error from "./routes/Error";
import Cliente from "./routes/Cliente";
import Footer from "./components/Footer";

function App() {
  return (
    // habilita a navegação por rotas na aplicação
    <BrowserRouter>
      {/* chama o componente */}
      <Nav />
      <main>
        {/* gerencia exibição om base na url */}
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/cliente" element={<Cliente />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
