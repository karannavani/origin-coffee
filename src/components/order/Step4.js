import React from 'react';
import { Icon, Steps, Layout, Row, Col, Card } from 'antd';
const Step = Steps.Step;

const Step3 = () => {
  return(
    <Layout className="orderLayout">

      <Steps progressDot current={2}>
        <Step title="Make a pick" />
        <Step title="Any extras?" />
        <Step title="Complete order" />
      </Steps>

      <Row type="flex" justify="center" align="middle">
        <Col>
          <Card className="payment">
            <Icon type="check-circle" style={{ fontSize: 46, color: '#4cd964' }}/>
            <div style={{marginTop: '30px'}}>
              <h1>Order Successful</h1>
              <h3>Your order will be ready in 3-5 minutes</h3>
            </div >
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Step3;
