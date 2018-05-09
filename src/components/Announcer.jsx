import React from 'react';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Notification from 'grommet/components/Notification';
import Button from 'grommet/components/Button';
import DeployIcon from 'grommet/components/icons/base/Deploy';
import { announce, announcePageLoaded } from 'grommet/utils/Announcer';

import NavControl from './NavControl';

class Announcer extends React.Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);

    this.state = {
      launched: false,
      message: 'Launch Rocket',
    };
  }
  componentDidMount() {
    announcePageLoaded('Rocket Launch Pad');
  }

  _onClick(e) {
    e.preventDefault();
    if (this.state.launched) {
      announce('Rocket launch aborted!');
      this.setState({ message: 'Launch Rocket', launched: false });
    } else {
      announce('Rocket launch commensing!');
      this.setState({ message: 'Abort Launch', launched: true });
    }
  }

  render() {
    let alert;
    if (this.state.launched) {
      alert = <Notification message="Launching Rocket!" status="warning" timestamp={Date()} percentComplete={30} />;
    }

    return (
      <Article pad="none">
        <Header direction="row" justify="start" size="large" pad={{ horizontal: 'medium', between: 'small' }}>
          <NavControl />
          <Heading tag="h1">Announcer</Heading>
        </Header>
        <Section pad="medium" full="horizontal">
          <Header align="start" direction="column">
            <Heading tag="h3" margin="none">
              Utility functions for announcing things in a page using for better accessibility.
            </Heading>
          </Header>
          <Box justify="center" align="center" pad="medium" margin="large">
            {alert}
            <Button icon={<DeployIcon />} label={this.state.message} onClick={this._onClick} primary a11yTitle="Button to launch or abort rocket" />
          </Box>
        </Section>
      </Article>
    );
  }
}

export default Announcer;
