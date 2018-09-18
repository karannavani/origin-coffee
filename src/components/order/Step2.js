import React from 'react';
import { Steps, Layout, Row, Col, Card, Button, Icon } from 'antd';
const Step = Steps.Step;

const Step2 = ({handleExtras, selectedItem, extrasArr, nextStep}) => {
  return(
    <Layout className="orderLayout">

      <Steps progressDot current={1}>
        <Step title="Make a pick" />
        <Step title="Any extras?" />
        <Step title="Complete order" />
      </Steps>

      <h1 style={{'fontSize': '40px'}}>Any Extras?</h1>
      <Row type="flex" justify="center" align="middle">
        { selectedItem && selectedItem[0].extras.map(extra =>
          <Col key={extra._id} id={`${extra.choice}|${extra.price}`}>
            <Card
              id={`${extra.choice}|${extra.price}`}
              onClick={handleExtras}
              style={{ width: 150, height: 150 }}>

              <h2 id={`${extra.choice}|${extra.price}`}>{extra.choice}</h2>
              <h3 id={`${extra.choice}|${extra.price}`}>£{extra.price}</h3>

            </Card>
          </Col>
        )}
      </Row>

      <Row type="flex" justify="center" align="middle" style={{marginTop: '15px'}}>
        <Col>
          {extrasArr.length > 0 && extrasArr.map(extra =>
            <h4 key={extra.choice}>{extra.choice} - £{extra.price}</h4>
          )}
          <p>You can choose a maximum of 2 extras</p>
          <Button key={1} onClick={nextStep}><Icon type="check-circle" /></Button>
        </Col>
      </Row>
    </Layout>
  );
};

export default Step2;
