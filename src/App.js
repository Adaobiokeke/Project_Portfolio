import {BrowserRouter as Router,  Routes,Route,} from 'react-router-dom'
import Navbar from "./Components/Nav/navbar"
import Home from './Components/Home/homepage'
import Projects from './Components/Projects/projects'
import Contact from './Components/Contact/contact'
import Error from './Components/Error/error'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
    <Route exact path='/'element={<Home/>}/> 
    <Route  path='/projects' element={<Projects/>}/> 
    <Route  path='/contact' element={<Contact/>}/> 
    <Route  path='*' element={<Error/>}/> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
