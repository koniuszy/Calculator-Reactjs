import React, { Component } from 'react'
import styled from 'styled-components'

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
  user-select: none;

  &:hover {
    box-shadow: 0px 0px 2px 5px rgba(255, 255, 255, 0.75);
  }
`

class Button extends Component {
  constructor() {
    super()
    this.state = {
      color: this.Color
    }
  }

  Color = '#a91548'
  DarkColor = '#660c2b'

  getDarker = () => {
    this.setState({
      color: this.DarkColor
    })
    setTimeout(this.getLighter, 450)
  }

  getLighter = () => {
    this.setState({
      color: this.Color
    })
  }
  handleClick = e => {
    this.props.onClick(e)
    this.getDarker()
  }

  render() {
    return (
      <ButtonContainer
        onClick={this.handleClick}
        data-value={this.props.value}
        color={this.state.color}
      >
        <>{this.props.value}</>
      </ButtonContainer>
    )
  }
}

export default Button
