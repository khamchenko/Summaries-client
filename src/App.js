import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render () {
    const { developers } = this.props;

    return (
      <p>
        <ul>
          {
            developers.data.map(({ name }) => <li key={name}>{name}</li>)
          }
        </ul> 
      </p>
    );
  }
}

export default connect(({ developers }) => ({ developers }))(App);