import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Homepage from './Web-Pages/Homepage';
import './App.css';

class App extends Component {

  state = {
    currentPage: "Homepage"
  }

  webpageHandler = () => {
    switch(this.state.currentPage) {
      case "Homepage":
        return <Homepage />
      default:
        return <Homepage />
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="Home" component={Homepage} />
        </Switch>
        {this.webpageHandler()}
      </div>
    );
  }
}

export default withRouter(App);
