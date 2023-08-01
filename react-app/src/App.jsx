import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
<Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
*/
