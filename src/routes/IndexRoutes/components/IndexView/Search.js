import React from 'react';
import { ComplexSearch } from 'rambler-ui/ComplexSearch';

const Search = () => (
  <div className="developers__search">
    <ComplexSearch
      className="developers__search__input"
      placeholder="React developer"
      searchButton="Search"
    />
  </div>
);

export default Search;