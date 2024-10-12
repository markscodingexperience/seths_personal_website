import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import Gallery from './component/Gallery';
import About from './component/About';
import Contact from './component/Contact';
import '@fontsource/poppins';

function App() {
  return (
    <div className="md:mx-10">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Gallery />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
