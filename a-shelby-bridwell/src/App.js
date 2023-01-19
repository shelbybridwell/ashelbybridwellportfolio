
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/home';
import Portfolio from './Pages/portfolio';
import About from './Pages/about';
import Contact from './Pages/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
