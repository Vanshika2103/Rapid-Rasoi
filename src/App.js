import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import AuthPage from "./Pages/AuthPage";
import GetInTouchPage from "./Pages/GetInTouchPage";
import Download from "./Pages/Download";
import AboutUsPage from "./Pages/AboutUsPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/getintouch" element={<GetInTouchPage />} />
        <Route path="/contacts" element={<GetInTouchPage />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
};

export { App };
