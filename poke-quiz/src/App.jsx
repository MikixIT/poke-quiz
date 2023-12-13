import "./App.css";
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import { Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/poke-quiz" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/Quiz" element={<QuizPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
