import React, { useState } from 'react';
import { Tabs, Spin } from 'antd'; // Added Spin import
import { Link } from 'react-router-dom'; // Added import for Link
import StripeForm from './components/StripeForm';
import AlipayForm from './components/AlipayForm';
import WeChatForm from './components/WeChatForm';
import { name, storeName } from './SellerInfoPage'; // Import seller info
import './PaymentPage.css';

const PaymentPage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('alipay');
  const [loading, setLoading] = useState<boolean>(false); // Added loading state

  const totalAmount = 100; // Example total amount

  const handleTabChange = (key: string) => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setSelectedMethod(key);
      setLoading(false); // Stop loading after a delay
    }, 500); // Simulate loading delay
  };

  const renderForm = () => {
    switch (selectedMethod) {
      case 'alipay':
        return <AlipayForm />;
      case 'wechat':
        return <WeChatForm />;
      case 'stripe':
        return <StripeForm />;
      default:
        return null;
    }
  };

  return (
    <div className="payment-page">
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Seller Name: {name}</p> {/* Display seller name */}
        <p>Store Name: {storeName}</p> {/* Display store name */}
          <Link to="/seller-info" className="seller-info-link">
              View Seller Information
          </Link>
        <div className="total-amount">Total: {totalAmount} USD</div>

      </div>
      <Tabs
        defaultActiveKey="alipay"
        onChange={handleTabChange} // Updated to use handleTabChange
        items={[
          { 
            key: 'alipay', 
            label: (
              <div className="tab-label">
                <img 
                  src="https://tse2-mm.cn.bing.net/th/id/OIP-C.hn8E0rGsJ0SmQ9jOdWWcEgHaFj?rs=1&pid=ImgDetMain" 
                  alt="Alipay" 
                  className="tab-logo" 
                />
                Alipay
              </div>
            ) 
          },
          { 
            key: 'wechat', 
            label: (
              <div className="tab-label">
                <img 
                  src="https://clipartcraft.com/images/wechat-logo-payment-9.png" 
                  alt="WeChat" 
                  className="tab-logo" 
                />
                WeChat
              </div>
            ) 
          },
          { 
            key: 'stripe', 
            label: (
              <div className="tab-label">
                <img 
                  src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png" 
                  alt="Stripe" 
                  className="tab-logo" 
                />
                Stripe
              </div>
            ) 
          },
        ]}
      />
      <Spin spinning={loading}> {/* Added Spin wrapper */}
        <div className="form-container">{renderForm()}</div>
      </Spin>
    </div>
  );
};

export default PaymentPage;

