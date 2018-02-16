import React, { Component } from 'react';
import { H2 } from 'rambler-ui/Typography';

import './View.css';
import SummariesList from '../SummariesList';
import Search from '../Search';

class View extends Component {
  componentDidMount() {
    this.props.fetchSummaries();
  }

  renderSummaries() {
    const { summaries: { isLoading, data, receivedAt, error } } = this.props;

    if (receivedAt && !isLoading && !data.length) {
      return <H2 style={{ textAlign: 'center' }}>No Summaries</H2>;
    }

    if (error && error.name === 'RequestError') {
      return <H2 style={{ textAlign: 'center' }}>Something went wrong. Please try later.</H2>;
    }

    return <SummariesList loading={isLoading} summaries={data} />;
  }
  
  render() {
    return (
      <section>
        <div className="container">
          <H2 className="content__header">Developers</H2>
          <div className="row">
            <Search />
            {this.renderSummaries()}
          </div>
        </div>
      </section>
    );
  }
}

export default View;