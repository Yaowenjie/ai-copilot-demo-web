import React from 'react';
import './SellerInfoPage.css'; // Import the CSS file

export const name = 'John Doe'; // Example seller name
export const storeName = 'John’s Store'; // Example store name

const SellerInfoPage: React.FC = () => {
  return (
    <div className="seller-info-page">
      <h1 className="title">Seller Information</h1>
      <p className="info">Name: {name}</p>
      <p className="info">Store Name: {storeName}</p>
      <p className="info">Contact: seller@example.com</p>
      <p className="info">Location: 123 Main Street, Cityville</p>
    </div>
  );
};

export default SellerInfoPage;
