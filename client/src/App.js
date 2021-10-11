import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Keychain from './components/Keychain';
import Nav from './components/Nav';
import Home from './components/Home'
//import axios from 'axios';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/keychain" component={Keychain} />
    </Router>
  );
}

export default App;
