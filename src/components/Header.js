import React from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
const { Header } = Layout;

function AppHeader({cartAmount: cartAmount}) {
  return(
    <Header>
      <Row>
        <Col md={22} lg={22} xl={22} xxl={22}>
          <h1 className="title-font">Origin Coffee</h1>
        </Col>
        <Col md={2} lg={2} xl={2} xxl={2} className="cart">
          <i className="fas fa-shopping-bag"></i>{cartAmount && <span className="cartAmount">£{cartAmount}</span>}
        </Col>
      </Row>
    </Header>
  );
}

export default AppHeader;
