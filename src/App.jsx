import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'; 
import Projects from './pages/Projects'; 
import Contacts from './pages/Contacts'; 
import Bio from './pages/Bio';

function App() {
  return (
    <Router>
      <div id="root">
        <header className="header">
          <div className="logo" style={{marginLeft:'7em'}}>
            <Link to="/"> 
              <img src="logo_AA_beige.png" alt="logo" />
            </Link>
          </div>
          <div className="navbar">
            <Link to="/projects" className="navbar-link">
              PROJECTS
            </Link>
            <Link to="/bio" className="navbar-link">
              BIO
            </Link>
            <Link to="/contacts" className="navbar-link">
              CONTACTS
            </Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="logo">
              <img src="logo_AA_beige.png" alt="logo" />
          </div>
          <p>© 2024 by Alex Argese</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
