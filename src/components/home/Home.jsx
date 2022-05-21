import React from 'react'
import logo from '../../logo.svg'
import '../../App.css';
import { Greeting } from '../greeting/Greeting';
import { NavLink } from 'react-router-dom';

export const Home = (props) => {
    const {customTheme} = props;
  return (
    <div className="App">
      <header className={customTheme}>
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
  )
}
