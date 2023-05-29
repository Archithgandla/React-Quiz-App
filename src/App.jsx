import './App.css'
import {Routes,Route} from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import ScorePage from './components/ScorePage.jsx';
import QuizPage from './components/QuizPage.jsx';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <div className = "app">
      <Routes>
        <Route path = "/" element = {<Welcome/>}/>
        <Route path = "/quiz" element = {<QuizPage/>}/>
        <Route path = "/score" element = {<ScorePage/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </div>
  )
}
