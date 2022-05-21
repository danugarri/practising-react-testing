import React,{ useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css';

export const Welcome = () => {
    const [nightMode, setNightMode]= useState(false);
    const handleNightMode= () => setNightMode(!nightMode);
    const customTheme= nightMode ? 'white' : 'dark'

  return (
    <div className= {customTheme}>
        <p>Here you can change your UI from white to dark theme</p>
       { !nightMode && <h3>It is the white mode</h3>}
       { nightMode && <h3>It is the dark mode</h3>}
        <p>Click on the button bellow to choose your theme</p>
        <button onClick = {handleNightMode}>Switch theme</button><hr/>
        <NavLink to ='/'>Home</NavLink>
    </div>
  )
}
