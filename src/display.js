import React, { Component } from 'react';
import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  width: 249px;
  height: 63px;
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 41px;
  margin-right: 24px;
  margin-left: 24px;
  overflow: hidden; /* missing whitespace */
`;

const DisplayContainer = styled.div`
  max-width: 249px;
  max-height: 63px;
  text-align: left;
  font-size: 36px;
  margin-left: 17px;
`;

// You do not have any state here. Please use functional component instead (it can use props)
//  https://medium.com/@PhilipAndrews/react-how-to-access-props-in-a-functional-component-6bd4200b9e0b
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
export default class Display extends Component {
  render() {
    const string = this.props.data.join(''); // Please add new line before return.
    return (
      <TopContainer>
        <DisplayContainer> {string} </DisplayContainer>
      </TopContainer>
    );
  }
}
