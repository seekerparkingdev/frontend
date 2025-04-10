import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
// vistas
import ViewVenue from "./pages/pageVenue";
import ViewHome from "./pages/pageHome";
import ViewParkings from "./pages/pageParkings";
import ViewParkingNoLog from "./pages/pageParkingNoLog";
// componentes fijos
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-urbanist">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ViewHome />} />
          <Route path="/venue" element={<ViewVenue />} />
          <Route path="/parkings" element={<ViewParkings />} />
          <Route path="/parking-nolog" element={<ViewParkingNoLog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
