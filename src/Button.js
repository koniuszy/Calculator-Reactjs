import React, { Component } from "react";
import styled from "styled-components";

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
  align-content: center;
  &:hover {
    box-shadow: 0px 0px 2px 5px rgb(255, 255, 255, 0.75);
  }
`;

const OnClick = styled.div`
`

class Button extends Component {
  constructor() {
    super();
    this.state = { 
      color: "#a91548"
    };
  }

  getDarker = () => {
    this.setState({
      color: "#660c2b",
    })
    setTimeout(this.getLighter, 450)
  }

  getLighter = () => {
    this.setState({
      color: "#a91548"
    })
  }

  render() {
    return (
      <OnClick onClick={this.getDarker}>
      <ButtonContainer
        onClick={this.props.onClick}
        data-size={this.props.size}
        data-value={this.props.value}
        color={this.state.color}
      >
        <>{this.props.label}</>
      </ButtonContainer>
      </OnClick>
    );
  }
}

export default Button;
