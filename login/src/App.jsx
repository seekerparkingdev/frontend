import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import ViewLogin from "./pages/pageLogin";
import ViewRegister from "./pages/pageRegister"
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<ViewLogin />} />
          <Route path="/register" element={<ViewRegister />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
