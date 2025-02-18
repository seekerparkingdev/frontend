import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
// vistas
import ViewHome from "./pages/pageHome";
// componentes fijos
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ViewHome />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
