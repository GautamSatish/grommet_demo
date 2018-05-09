import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import GrommetResponsive from 'grommet/utils/Responsive';

import NavControl from './NavControl';

class Responsive extends React.Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this._responsive = GrommetResponsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }
  render() {
    const tiles = [];

    for (let j = 1; j <= 50; j += 1) {
      if (this.state.small) {
        tiles.push(
          <Tile key={j}>
            <Card
              heading={'Heading ' + j}
              label="Small Screen Label"
              description="Smaller descriptions for small screen."
            />
          </Tile>);
      } else {
        tiles.push(
          <Tile key={j}>
            <Card
              heading={'Heading ' + j}
              label="Large Screen Label"
              description="All these cards will auto arrange themselves according to available space. Until the threshold switches over."
            />
          </Tile>);
      }
    }

    let responsiveMsg = (
      <Heading tag="h3" margin="none">
        Current value of responsive is &quot;{this.props.responsive}&quot;.
        This would be how the data is presented on large screen devices.
      </Heading>);

    if (this.props.responsive === 'single') {
      responsiveMsg = (
        <Heading tag="h3" margin="none">
          Current value of responsive is &quot;{this.props.responsive}&quot;.
          This would be how the data is presented on small screen devices.
        </Heading>);
    }

    return (
      <Article pad="none">
        <Header direction="row" justify="start" size="large" pad={{ horizontal: 'medium', between: 'small' }}>
          <NavControl />
          <Heading tag="h1">Responsive</Heading>
        </Header>
        <Section pad="medium" full="horizontal">
          <Header align="start" direction="column">
            {responsiveMsg}
          </Header>
          <Tiles fill>
            {tiles}
          </Tiles>
        </Section>
      </Article>
    );
  }
}

const mapStateToProps = state => ({ responsive: state.nav.responsive });

export default withRouter(connect(mapStateToProps)(Responsive));
