import "./App.css";
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/poke-quiz" element={<WelcomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/Quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
