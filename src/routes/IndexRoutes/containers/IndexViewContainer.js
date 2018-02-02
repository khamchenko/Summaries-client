import React, { Component } from 'react';
import { connect } from 'react-redux';

import IndexView from '../components/IndexView';
import { actionCreators } from '../modules/summaries';

class IndexViewContainer extends Component {
  componentDidMount() {
    this.props.fetchSummaries();
  }

  render() {
    const { summaries: { isLoading, data } } = this.props;

    return (
      <IndexView summaries={data} loading={isLoading} />
    );
  }
}

export default connect(({ index: { summaries } }) => ({ summaries }), actionCreators)(
  IndexViewContainer,
);