import React, { useState } from 'react';
import { Input, Button } from 'antd'; // Import Ant Design components

const AlipayForm: React.FC = () => {
  const [qrCode, setQrCode] = useState<string>(`https://api.qrserver.com/v1/create-qr-code/?data=${Math.random()}&size=150x150`);
  const [alipayId, setAlipayId] = useState<string>(''); // Added state for Alipay ID

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://www.alipay.com/x/personal';
  };

  return (
    <div>
      <h3>Alipay Payment</h3>
      <div style={{ marginTop: '16px' }}>
        <h4>Scan QR Code:</h4>
        <img src={qrCode} alt="Alipay QR Code" />
      </div><br/>
      <p>Or you can enter your Alipay details below:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Alipay ID:
          <Input 
            value={alipayId} 
            onChange={(e) => setAlipayId(e.target.value)} 
            placeholder="Enter your Alipay ID" 
            required 
          />
        </label>
        <Button type="primary" htmlType="submit" style={{ marginTop: '16px' }}>
          Pay with Alipay
        </Button>
      </form>
    </div>
  );
};

export default AlipayForm;
