import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import EndlessLoading from "./components/EndlessLoading/EndlessLoading.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/endless-loading" element={<EndlessLoading />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


