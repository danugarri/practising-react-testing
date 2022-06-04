import React, { useState, Suspense,lazy} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from './components/context/Context';
// import { AsyncComponent } from './components/asynComponent/AsyncComponent'; this is no longer needed since we are loadind this componente in lazy mode
import { SnapshotComponent } from './components/snapshotComponent/SnapshotComponent';  
import { Welcome } from './components/welcome/Welcome';
import { Home } from './components/home/Home';

const AsyncComponent = lazy(() => import('./components/asynComponent/AsyncComponent'));

function App() {
  const [nightMode, setNightMode]= useState(false);
  const handleNightMode= () => setNightMode(!nightMode);
  const customTheme= nightMode ? 'App-header-dark' : 'App-header-white';

  return (
    <Context.Provider value={{nightMode,handleNightMode}}>
        <Router>
            <div className={customTheme}> 
          <Routes>
            <Route index element={<Home customTheme={customTheme} />}>
            </Route>
            {/* Implementing lazy loading */}
            <Route path="async" element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <AsyncComponent />
              </Suspense>}>
            </Route>
            <Route path="snapshot" element={<SnapshotComponent />}>
            </Route>
            <Route path="welcome" element={<Welcome />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </Context.Provider>

  );
}

export default App;
