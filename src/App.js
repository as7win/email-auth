import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './content/About';
import Home from './content/Home';
import Authpage from './content/Authpage';



function App() {
  return (
    <div className="App" style={{backgroundColor: "lightblue", padding: "250px"}}>
      <Router>
        <div className="container" >
          <NavLink className="container" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="container" activeClassName="active" to="/about">About</NavLink>
          <NavLink className="container" activeClassName="active" to="/authpage">Authpage</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/authpage" element={<Authpage />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
