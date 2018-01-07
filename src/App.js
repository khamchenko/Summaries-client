import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render () {
    const { developers } = this.props;

    return (
      <div>
        <h1>Developers</h1>
        <ul onClick={() => this.props.dispatch({ type: 'ADD_DEVELOPER', payload: { name: 'Developer 3'} })}>
          {
            developers.data.map(({ name }) => <li key={name}>{name}</li>)
          }
        </ul> 
      </div>
    );
  }
}

export default connect(({ developers }) => ({ developers }))(App);