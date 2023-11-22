import './App.css'
import WelcomePage from './components/WelcomePage';
import QuizPage from './components/QuizPage';
import PokemonCard from './components/PokemonCard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div>
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
        <Route path='/quiz' element={<QuizPage/>} />
      </Routes>
      </div>
    </Router>      
  );

}

export default App
