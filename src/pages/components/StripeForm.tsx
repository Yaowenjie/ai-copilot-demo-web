import React from 'react';
import { Form, Input, Button } from 'antd';

const StripeForm: React.FC = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Card Number" name="cardNumber">
        <Input placeholder="Enter your card number" />
      </Form.Item>
      <Form.Item label="Expiry Date" name="expiryDate">
        <Input placeholder="MM/YY" />
      </Form.Item>
      <Form.Item label="CVC" name="cvc">
        <Input placeholder="CVC" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Pay
      </Button>
    </Form>
  );
};

export default StripeForm;
