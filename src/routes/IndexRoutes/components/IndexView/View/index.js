import React, { Component } from 'react';
import queryString from 'query-string';
import pick from 'lodash/pick';
import pickBy from 'lodash/pickBy';
import { H2 } from 'rambler-ui/Typography';
import { PAGINATION_PARAMS } from 'constants/index';

import View from './View.js';
import { SUMMARIES_SEARCH_PARAMS } from '../../constants';

class ViewContainer extends Component {
  componentDidMount() {
    this.fetchSummaries(this.searchParams);
  }

  get searchParams() {
    const {
      summaries: {
        meta: {
          filter: { page, size, title, tags },
        },
      },
      location: { search },
    } = this.props;
    const searchParams = pick(
      queryString.parse(search),
      [...PAGINATION_PARAMS, ...SUMMARIES_SEARCH_PARAMS ],
    );
    const params = { page, size, title, tags };

   return pickBy({
      ...params,
      ...searchParams,
    }, value => value);
  }

  fetchSummaries = (params) => {
    return this.props.fetchSummaries(params);
  }

  handlePageChange = (e, page) => {
    const searchParams = {
      ...this.searchParams,
      page,
    };
    const search = queryString.stringify(searchParams);

    this.props.history.push({
      search,
      pathname: '/',
    });
    this.fetchSummaries(searchParams)
      .then(() => {
        this._view.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      });
  }

  render() {
    const {
      summaries: {
        isLoading,
        data,
        receivedAt,
        error,
        meta,
      },
    } = this.props;

    if (error && error.name === 'RequestError') {
      return (
        <H2 style={{ textAlign: 'center' }}>
         Something went wrong. Please try later.
        </H2>
      );
    }

    if (receivedAt && !isLoading && !data.length) {
      return <H2 style={{ textAlign: 'center' }}>No Summaries</H2>;
    } 

    return (
      <div ref={(ref => this._view = ref)}>
        <View
          isLoading={isLoading}
          data={data}
          meta={meta}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default ViewContainer;