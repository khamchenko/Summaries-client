import React from 'react';
import { ComplexSearch } from 'rambler-ui/ComplexSearch';

const Search = ({ onSearch, title, onSubmit }) => (
  <div className="developers__search">
    <ComplexSearch
      className="developers__search__input"
      placeholder="React developer"
      searchButton="Search"
      value={title}
      onSearch={onSearch}
      onSubmit={onSubmit}
    />
  </div>
);

export default Search;