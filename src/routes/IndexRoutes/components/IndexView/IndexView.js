import React from 'react';
import { H2 } from 'rambler-ui/Typography';
import { ComplexSearch } from 'rambler-ui/ComplexSearch';
import SummariesList from 'components/SummariesList';

import './IndexView.css';

const IndexView = () => (
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
          <SummariesList />
        </div>
      </div>
    </div>
  </section>
);

export default IndexView;