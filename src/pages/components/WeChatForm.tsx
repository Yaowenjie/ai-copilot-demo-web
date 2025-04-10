import React, { useState } from 'react';

const WeChatForm: React.FC = () => {
  const [qrCode, setQrCode] = useState<string>(`https://api.qrserver.com/v1/create-qr-code/?data=${Math.random()}&size=150x150`);

  return (
    <div>
      <h3>WeChat Payment</h3>
      <div style={{ marginTop: '16px' }}>
        <h4>Scan QR Code:</h4>
        <img src={qrCode} alt="WeChat QR Code" />
      </div>
    </div>
  );
};

export default WeChatForm;
