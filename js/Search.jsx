// @flow

import React, { Component } from 'react'; // eslint-disable-line
import preload from '../data.json'; // eslint-disable-line
import ShowCard from './ShowCard'; // eslint-disable-line
import Header from './Header'; // eslint-disable-line

class Search extends Component {
  state = {
    searchTerm: '',
  };
  props: {
    shows: Array<Show>,
  };
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement },
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
