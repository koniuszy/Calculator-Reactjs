import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonsContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 28px;
  margin-left: 28px;
  color: white;
  align-items: center;
  align-content: center;
`;

// You do not have any state here. Please use functional component instead (it can use props)
//  https://medium.com/@PhilipAndrews/react-how-to-access-props-in-a-functional-component-6bd4200b9e0b
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
class Buttons extends Component {
  render() {
    return <ButtonsContainers> {this.props.children} </ButtonsContainers>;
  }
}
export default Buttons;
