import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from './components/context/Context';
import { AsyncComponent } from './components/asynComponent/AsyncComponent';
import { SnapshotComponent } from './components/snapshotComponent/SnapshotComponent';
import { Welcome } from './components/welcome/Welcome';
import { Home } from './components/home/Home';


function App() {
  const [nightMode, setNightMode]= useState(false);
  const handleNightMode= () => setNightMode(!nightMode);
  const customTheme= nightMode ? 'App-header-dark' : 'App-header-white';

  return (
    <Context.Provider value={{nightMode,handleNightMode}}>
      <Router>
          <div className={customTheme}> 
        <Routes>
            <Route exact path="/" element={<Home customTheme= {customTheme} />}>
            </Route>
            <Route path="snaphot" element={<SnapshotComponent />}>
            </Route>
            <Route path="welcome" element={<Welcome />}>
            </Route>
            <Route path="async" element={<AsyncComponent />}>
            </Route>
        </Routes>
          </div>
      </Router>
   </Context.Provider>
  
  );
}

export default App;
