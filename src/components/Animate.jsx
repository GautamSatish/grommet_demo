import React from 'react';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import GrommetAnimate from 'grommet/components/Animate';

import NavControl from './NavControl';

class Animate extends React.Component {
  render() {
    return (
      <Article pad="none">
        <Header direction="row" justify="start" size="large" pad={{ horizontal: 'medium', between: 'small' }}>
          <NavControl />
          <Heading tag="h1">Animate</Heading>
        </Header>
        <Section pad="medium" full="horizontal">
          <Header align="start" direction="column">
            <Heading tag="h3" margin="none">
              An animation wrapper to transition components in & out.
            </Heading>
          </Header>
          <Box justify="center" align="center" pad="medium">
            <GrommetAnimate enter={{ animation: 'slide-down', duration: 1500, delay: 500 }} keep>
              <Box justify="center" align="center" pad="medium" colorIndex="neutral-3" margin="medium">
                <Heading tag="h3">Up</Heading>
              </Box>
            </GrommetAnimate>
            <Box direction="row" justify="center" align="center" pad="medium">
              <GrommetAnimate enter={{ animation: 'slide-right', duration: 1500, delay: 500 }} keep>
                <Box justify="center" align="center" pad="medium" colorIndex="neutral-2" margin="medium">
                  <Heading tag="h3">Left</Heading>
                </Box>
              </GrommetAnimate>
              <GrommetAnimate enter={{ animation: 'slide-left', duration: 1500, delay: 500 }} keep>
                <Box justify="center" align="center" pad="medium" colorIndex="neutral-2" margin="medium">
                  <Heading tag="h3">Right</Heading>
                </Box>
              </GrommetAnimate>
            </Box>
            <GrommetAnimate enter={{ animation: 'slide-up', duration: 1500, delay: 500 }} keep>
              <Box justify="center" align="center" pad="medium" colorIndex="neutral-3" margin="medium">
                <Heading tag="h3">Down</Heading>
              </Box>
            </GrommetAnimate>
          </Box>
        </Section>
      </Article>
    );
  }
}

export default Animate;
