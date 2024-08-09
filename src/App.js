import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import About from './Routes/About';
import Contact from './Routes/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
