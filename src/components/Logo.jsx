import React from 'react';
import SVGIcon from 'grommet/components/SVGIcon';

class Logo extends React.Component {
  render() {
    return (
      <SVGIcon
        colorIndex={this.props.colorIndex}
        size="medium"
        viewBox="0 0 200 200"
        type="logo"
        a11yTitle="Demo Logo"
      >
        <g fill="none">
          <rect stroke="none" x="0" y="0" width="200" height="200" />

          <g className="paths" strokeWidth="8">
            <path d="M 25 25 L 25 180 C 200 175 200 30 25 25 " />
          </g>
        </g>
      </SVGIcon>
    );
  }
}

module.exports = Logo;
