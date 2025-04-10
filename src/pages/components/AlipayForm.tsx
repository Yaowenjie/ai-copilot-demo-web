import React from 'react';

const AlipayForm: React.FC = () => {
  return (
    <div>
      <h3>Alipay Payment</h3>
      <p>Enter your Alipay details below:</p>
      <form>
        <label>
          Alipay ID:
          <input type="text" name="alipayId" />
        </label>
        <button type="submit">Pay with Alipay</button>
      </form>
    </div>
  );
};

export default AlipayForm;
