
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import { Form } from './components/Form';
import LinkState from './context/LinkState';

function App() {
  return (
    <>
      <LinkState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/form' element={<Form />} />
            </Routes>
          </div>
        </Router>
      </LinkState>
    </>
  );
}

export default App;
