import React from 'react';
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
  overflow: hidden; /* fixed */
  white-space: noWrap; /* fixed */
`;

const DisplayContainer = styled.div`
  max-width: 249px;
  max-height: 63px;
  text-align: left;
  font-size: 36px;
  margin-left: 17px;
`;

//  fixed
const Display = (props) => {
    const display = props.display 
    const displayZero = props.displayZero

    const getDisplay = () => {
      if(display.length>0){
        return display
      }else return displayZero
    }

    return (
      <TopContainer>
        <DisplayContainer>  {getDisplay()} </DisplayContainer>
      </TopContainer>
    );
  }

export default Display