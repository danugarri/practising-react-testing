import React from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/Context';
// import './Welcome.css';

export const Welcome = () => {
    
  return (
    <Context.Consumer>
   {
        ({nightMode,handleNightMode}) => (
            <>
            <p>Here you can change your UI from white to dark theme</p>
            { !nightMode && <h3>It is the white mode</h3>}
            { nightMode && <h3>It is the dark mode</h3>}
                <p>Click on the button bellow to choose your theme</p>
                <button onClick = {handleNightMode} aria-label= 'switch'>Switch theme</button><hr/>
                <NavLink to ='/'>Home</NavLink>
            </>
        )}
    </Context.Consumer>
  )
}
