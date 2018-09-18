import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import 'antd/dist/antd.css';
import '../style.scss';
import { Layout } from 'antd';
const { Content } = Layout;

//Components
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import OrderIndex from './components/order/OrderIndex';

class App extends React.Component {
  state = {};

getCartAmount = (amount) => {
  this.setState({ cartAmount: amount});
}

render() {
  return(
    <Layout>
      <AppHeader cartAmount={this.state.cartAmount}/>
      <Content style={{ padding: '0 24px' }}>
        <OrderIndex getCartAmount={this.getCartAmount}/>
      </Content>
      <AppFooter />
    </Layout>
  );
}
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
