import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { About, Resume, Blog, Projects, Skills } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <div className="container">
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="*" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
