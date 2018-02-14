import React, { Component } from 'react';
import { H2 } from 'rambler-ui/Typography';

import './IndexView.css';
import Search from '../Search';
import SummariesList from '../SummariesList';

export default class IndexView extends Component {
  componentDidMount() {
    this.props.fetchSummaries();
  }

  renderSummaries() {
    const { summaries: { isLoading, data, receivedAt } } = this.props;

    
    if (receivedAt && !isLoading && !data.length) {
      return <H2 style={{ textAlign: 'center' }}>No Summaries</H2>;
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
