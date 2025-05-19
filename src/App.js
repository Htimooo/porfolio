import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop /> 
        <Navbar/>
        <main>
        <Routes>
          <Route path= '/' element={<Home/>}/>
          <Route path= '/project/:id' element={<ProjectDisplay/>}/>
          <Route path= '/experience' element={<Experience/>}/>
          <Route path= '/#proyectos' element={<Home/>}/>
        </Routes>
        </main>
          <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
