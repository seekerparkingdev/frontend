import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import ViewLogin from "./pages/pageLogin";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<ViewLogin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
