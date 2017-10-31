// @flow

import React from 'react'; // eslint-disable-line
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // eslint-disable-line
import type { Match } from 'react-router-dom'; // eslint-disable-line
import Landing from './Landing'; // eslint-disable-line
import Search from './Search'; // eslint-disable-line
import Details from './Details'; // eslint-disable-line
import preload from '../data.json'; // eslint-disable-line

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find(
              show => props.match.params.id === show.imdbID,
            );
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
