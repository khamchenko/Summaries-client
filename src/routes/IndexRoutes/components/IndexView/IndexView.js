import React from 'react';
import { H2 } from 'rambler-ui/Typography';
import { ComplexSearch } from 'rambler-ui/ComplexSearch';
import Loader from 'rambler-ui/Loader';
import SummariesList from 'components/SummariesList';

import './IndexView.css';

const IndexView = ({ summaries, loading }) => (
  <section>
    <div className="container">
      <H2 className="content__header">Developers</H2>
      <div className="row">
        <div className="developers__search">
          <ComplexSearch
            className="developers__search__input"
            placeholder="React developer"
            searchButton="Search"
          />
        </div>
        <div className="summaries__results">
          <Loader loading={loading}>
            <SummariesList summaries={summaries} />
          </Loader>
        </div>
      </div>
    </div>
  </section>
);

export default IndexView;