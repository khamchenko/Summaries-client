import React, { Component } from 'react';
import { ComplexSearch } from 'rambler-ui/ComplexSearch';

class Search extends Component {
  state = {
    search: {
      title: this.props.defaultTitle,
    },
  }

  onSubmit = () => {
    const { searchParams } = this.props;
    const { search: { title } } = this.state;

    this.props.fetchSummaries({ ...searchParams, title });
  }

  onSearch = (title) => {
    this.setState({ search: { title } });
  }

  render() {
    const { search: { title } } = this.state;

    return (
      <div className="developers__search">
        <ComplexSearch
          className="developers__search__input"
          placeholder="React developer"
          searchButton="Search"
          value={title}
          onSearch={this.onSearch}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default Search;