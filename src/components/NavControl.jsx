import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';

import { navActivate } from '../actions/nav';
import Logo from './Logo';

class NavControl extends React.Component {
  render() {
    let result;
    if (!this.props.active) {
      result = (
        <Button onClick={() => this.props.dispatch(navActivate(true))}>
          <Title a11yTitle="Open Menu">
            <Logo colorIndex="neutral-1" />
            <span>Demo</span>
          </Title>
        </Button>
      );
    } else {
      result = null;
    }
    return result;
  }
}

const mapStateToProps = state => ({ active: state.nav.active });

export default withRouter(connect(mapStateToProps)(NavControl));
