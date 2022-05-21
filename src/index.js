import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SnapshotComponent } from './components/snapshotComponent/SnapshotComponent';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="snaphot" element={<SnapshotComponent />}>
        </Route>
      </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
