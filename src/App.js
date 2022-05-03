import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import AllBanks from './containers/AllBanks';
import BankDetails from './containers/BankDetails';
import NotFound from './containers/NotFound';
import "./css/styles.css";
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/all-banks" element={<AllBanks/>}></Route>
        <Route path="/bank-details/:id" element={<BankDetails/>}></Route>
        <Route path="/" element={<Navigate to="/all-banks" replace />}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
