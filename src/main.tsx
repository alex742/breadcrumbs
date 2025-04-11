import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Page from "./pages/page";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Page />} />
    </Routes>
  </BrowserRouter>
);
