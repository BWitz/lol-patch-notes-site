import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Homepage from './Web-Pages/Homepage';
import PatchedChampionsPage from './Web-Pages/PatchedChampionsPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/Champions" component={PatchedChampionsPage} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
