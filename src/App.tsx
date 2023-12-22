import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import OldHome from "./components/OldHome";

function App() {
  return (
    // root
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OldHome />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
