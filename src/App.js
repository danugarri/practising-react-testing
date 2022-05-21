import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './components/greeting/Greeting';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greeting />
      <NavLink to = 'snaphot'>Snapshot component</NavLink><hr />
      <NavLink to = 'welcome'>Customise your theme</NavLink><hr />
      <NavLink to = 'async'>Async component</NavLink>
    </div>
  );
}

export default App;
