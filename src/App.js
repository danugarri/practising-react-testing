import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Context } from './components/context/Context';
import { AsyncComponent } from './components/asynComponent/AsyncComponent';
import { SnapshotComponent } from './components/snapshotComponent/SnapshotComponent';
import { Welcome } from './components/welcome/Welcome';
import { Home } from './components/home/Home';


function App() {
  return (
    // <Context.Provider value={''}>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />}>
         </Route>
         <Route path="snaphot" element={<SnapshotComponent />}>
         </Route>
         <Route path="welcome" element={<Welcome />}>
         </Route>
         <Route path="async" element={<AsyncComponent />}>
         </Route>
       </Routes>
    </Router>
    // </Context.Provider>
  
  );
}

export default App;
