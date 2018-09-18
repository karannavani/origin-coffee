import React from 'react';
import axios from 'axios';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

class OrderIndex extends React.Component {
  state = {
    step: 1,
    cartAmount: 0,
    extrasArr: []
  };

  handleChange = ({ target: {id} }) => {
    const [ choice, price ] = id.split('|');
    this.setState({ beverage: choice }, () => {
      console.log(this.state.beverage);
      this.coffeeCheck(price);
    });
  }

  coffeeCheck = (price) => {
    if (this.state.beverage === 'Coffee') {
      this.setState({showOptions: true});
      this.selectItem();
    } else if (this.state.beverage === 'Tea'){
      this.setState({ price: price });
      this.updateCart(price);
      this.selectItem();
      this.nextStep();
    }
  };

  selectItem = () => {
    this.setState({ selectedItem: this.state.items.filter(item => item.beverage === this.state.beverage) });
  }

  handleCoffeeChoice = ({ target: {id} }) => {
    const [ choice, price ] = id.split('|');
    this.setState({ coffeeType: choice, price: price }, () => {
      console.log('price is', price);
      this.updateCart(price);
      this.nextStep();
    });
  }

  handleExtras = ({ target: {id} }) => {
    if (this.state.extrasArr.length < 2) {
      const [ choice, price ] = id.split('|');
      this.setState({ extraChoice: choice }, () => {
        this.updateCart(price);
        this.setState(prevState => ({
          extrasArr: [...prevState.extrasArr,
            {
              choice: choice,
              price: price
            }
          ]
        }), () => console.log('array is', this.state.extrasArr));
      });
    }
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  updateCart = (price) => {
    this.setState({cartAmount: (parseFloat(this.state.cartAmount) + parseFloat(price))}, () => {
      this.props.getCartAmount(this.state.cartAmount);
    });
  }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => this.setState({ items: res.data }));
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <Step1
          handleChange={this.handleChange}
          handleCoffeeChoice = {this.handleCoffeeChoice}
          items={this.state.items}
          showOptions={this.state.showOptions}
          selectedItem = {this.state.selectedItem}
        />;
      case 2:
        return <Step2
          handleExtras={this.handleExtras}
          items={this.state.items}
          selectedItem = {this.state.selectedItem}
          extrasArr = {this.state.extrasArr}
          nextStep = {this.nextStep}
        />;
      case 3:
        return <Step3
          handleExtras={this.handleExtras}
          beverage = {this.state.beverage}
          price = {this.state.price}
          coffeeType = {this.state.coffeeType}
          extrasArr = {this.state.extrasArr}
          nextStep = {this.nextStep}
          cartAmount = {this.state.cartAmount}
        />;
      case 4:
        return <Step4 />;
    }
  }

}

export default OrderIndex;
