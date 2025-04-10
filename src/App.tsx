import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import SellerInfoPage from './pages/SellerInfoPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PaymentPage />} />
      <Route path="/seller-info" element={<SellerInfoPage />} />
    </Routes>
  );
};

export default App;

