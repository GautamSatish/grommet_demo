import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Responsive from './Responsive';
import Animate from './Animate';
import Announcer from './Announcer';
import Rest from './Rest';

class DisplayPanel extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/animate" component={Animate} />
        <Route exact path="/announcer" component={Announcer} />
        <Route exact path="/responsive" component={Responsive} />
        <Route exact path="/rest" component={Rest} />
      </Switch>
    );
  }
}

export default DisplayPanel;
