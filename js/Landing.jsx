import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>netmovie clone app</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or browse all</Link>
  </div>
);

export default Landing;
