import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SnapshotComponent } from './components/snapshotComponent/SnapshotComponent';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Welcome } from './components/welcome/Welcome';
import { AsyncComponent } from './components/asynComponent/AsyncComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
     <Routes>
        <Route  exact path="/" element={<App />}>
        </Route>
        <Route path="snaphot" element={<SnapshotComponent />}>
        </Route>
        <Route path="welcome" element={<Welcome />}>
        </Route>
        <Route path="async" element={<AsyncComponent />}>
        </Route>
      </Routes>
   </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
