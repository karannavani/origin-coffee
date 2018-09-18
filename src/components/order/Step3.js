import React from 'react';
import { Button, Steps, Layout, Row, Col, Card } from 'antd';
const Step = Steps.Step;

const Step3 = ({ beverage, nextStep, price, coffeeType, extrasArr, cartAmount }) => {
  return(
    <Layout className="orderLayout">

      <Steps progressDot current={2}>
        <Step title="Make a pick" />
        <Step title="Any extras?" />
        <Step title="Complete order" />
      </Steps>

      <h1 style={{'fontSize': '40px'}}>Complete payment</h1>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Card className="payment">
            <h1>Your Order:</h1>
            <h2>{coffeeType || beverage} - £{price}</h2>
            {extrasArr && extrasArr.map(extra =>
              <h3 key={extra.choice}><em>{extra.choice} - £{extra.price}</em></h3>
            )}
            <h1><strong>Total: £{cartAmount}</strong></h1>
            <Row type="flex" justify="center" align="middle">
              <Button type="primary" className="payButton" onClick={nextStep}>Place Order</Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Step3;
