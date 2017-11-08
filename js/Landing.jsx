// @flow

import React from 'react'; // eslint-disable-line
import { connect } from 'react-redux'; // eslint-disable-line
import { render } from 'react-dom'; // eslint-disable-line
import { Link } from 'react-router-dom'; // eslint-disable-line
import { setSearchTerm } from './actionCreaters';

const Landing = (props: {
  searchTerm: string,
  handleSearchTermChange: Function,
}) => (
  <div className="landing">
    <h1>Clone Radio</h1>
    <input
      onChange={props.handleSearchTermChange}
      value={props.searchTerm}
      type="text"
      placeholder="Search"
    />
    <Link to="/search">or browse all</Link>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps)(Landing);
