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
  align-content: center; /* missing new line before &:hover */
  &:hover {
    box-shadow: 0px 0px 2px 5px rgb(255, 255, 255, 0.75); /* This is rgba not rgb */
  }
`;

const OnClick = styled.div``; // Why do you need this?

class Button extends Component {
  constructor() {
    super();
    this.state = {
      color: '#a91548', // It would be better to define those colors as const variables.
    };
  }

  getDarker = () => {
    this.setState({
      color: '#660c2b', // ditto
    });
    setTimeout(this.getLighter, 450);
  };

  getLighter = () => {
    this.setState({
      color: '#a91548', //DRY
    });
  };

  render() {
    return (
      // You do not need OnClick wrapper. Just call this.props.onClick inside this.getDareker and rename it to eg. HandleClick
      <OnClick onClick={this.getDarker}>
        <ButtonContainer onClick={this.props.onClick} data-value={this.props.value} color={this.state.color}>
          <>{this.props.value}</>
        </ButtonContainer>
      </OnClick>
    );
  }
}

export default Button;
