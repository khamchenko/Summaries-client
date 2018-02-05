import React, { Component } from 'react';
import { H2 } from 'rambler-ui/Typography';

import './IndexView.css';
import Search from '../Search';
import SummariesList from '../SummariesList';

export default class IndexView extends Component {
  componentDidMount() {
    this.props.fetchSummaries();
  }

  render() {
    const { summaries: { isLoading, data } } = this.props;

    return (
      <section>
        <div className="container">
          <H2 className="content__header">Developers</H2>
          <div className="row">
            <Search />
            <SummariesList loading={isLoading} summaries={data} />
          </div>
        </div>
      </section>
    );
  }
}
