import React from 'react';
import { Steps, Layout, Row, Col, Card } from 'antd';
const Step = Steps.Step;

const Step1 = ({items, handleChange, handleCoffeeChoice, showOptions, selectedItem}) => {
  return(
    <Layout className="orderLayout">

      <Steps progressDot current={0}>
        <Step title="Make a pick" />
        <Step title="Any extras?" />
        <Step title="Complete order" />
      </Steps>

      <h1 style={{'fontSize': '40px'}}>Hi there! What would you like today?</h1>
      <Row type="flex" justify="center" align="middle">

        {/* Drink options */}

        {!showOptions && items && items.map((item) =>
          <Col key={item._id} id={`${item.beverage}|${item.price}`} >
            <Card
              id={`${item.beverage}|${item.price}`} 
              onClick={handleChange}
              style={{ width: 300, height: 300 }}
              cover={<img id={`${item.beverage}|${item.price}`} alt="coffee" src={`../../assets/${item.beverage}.jpg` } height="180" />}
            >
              <h2 id={`${item.beverage}|${item.price}`} >{item.beverage}</h2>
              {item.beverage === 'Coffee' ?
                <h3 id={`${item.beverage}|${item.price}`} >View coffee options</h3> : <h3 id={`${item.beverage}|${item.price}`} >£{item.price}</h3>}
            </Card>
          </Col>
        )}

        {/* Coffee options */}

        {showOptions && selectedItem && selectedItem[0].type.map(type =>
          <Col key={type._id} id={`${type.choice}|${type.price}`}>
            {type.choice &&  <Card id={`${type.choice}|${type.price}`} onClick={handleCoffeeChoice} style={{ width: 180, height: 180 }}>
              <h2 id={`${type.choice}|${type.price}`}>{type.choice}</h2>
              <h3 id={`${type.choice}|${type.price}`}>£{type.price}</h3>
            </Card>}
          </Col>
        )
        }
      </Row>
    </Layout>
  );
};

export default Step1;
