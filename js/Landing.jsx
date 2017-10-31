// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom'; // eslint-disable-line
import { Link } from 'react-router-dom'; // eslint-disable-line

const Landing = () => (
  <div className="landing">
    <h1>Clone Radio</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or browse all</Link>
  </div>
);

export default Landing;
