import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-bottom: 26px;
  background-color: ${state => state.color};
  transition: background-color 1s;
  padding: 2px;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center; /* fixed */

  &:hover {
    box-shadow: 0px 0px 2px 5px rgba(255, 255, 255, 0.75); /* fixed */
  }
`;

const OnClick = styled.div``; // Why do you need this?

class Button extends Component {
  constructor() {
    super();
    this.state = {
      color: this.Color, // fixed
    };
  }

  Color = '#a91548';
  DarkColor = '#660c2b'

  getDarker = () => {
    this.setState({
      color: this.DarkColor // fixed
    });
    setTimeout(this.getLighter, 450);
  };

  getLighter = () => {
    this.setState({
      color: this.Color, //fixed
    });
  };

  render() {
    return (
      // You do not need OnClick wrapper. Just call this.props.onClick inside this.getDarker and rename it to eg. HandleClick
      <OnClick onClick={this.getDarker}>
        <ButtonContainer onClick={this.props.onClick} data-value={this.props.value} color={this.state.color}>
          <>{this.props.value}</>
        </ButtonContainer>
      </OnClick>
    );
  }
}

export default Button;
