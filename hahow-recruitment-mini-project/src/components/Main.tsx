import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import HeroList from './HeroList/HeroList';

const Main = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/heros" />} />
          <Route path="/heros" component={HeroList} />
          <Route path="/heros/:heroId" />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
