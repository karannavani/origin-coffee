import React from 'react';
import axios from 'axios';

import CompanyForm from './Form';

class CompaniesNew extends React.Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', this.state);
    axios.post('/api/companies', this.state)
      .then(() => this.props.history.push('/companies'));
  }

  handleChange = ({ target: { name, value } }) => {
    console.log('event target is', value);
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div>
        <h1>Add a new company</h1>
        <CompanyForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          company={this.state}
        />
      </div>
    );
  }
}

export default CompaniesNew;
