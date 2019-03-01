import React from 'react';
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

// fixed
const Buttons = (props) => {
  return <ButtonsContainers> {props.children} </ButtonsContainers>;
}
export default Buttons;
