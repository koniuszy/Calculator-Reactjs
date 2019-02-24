import React, { Component } from "react";
import "./index.css";
import styled from "styled-components";
import update from "immutability-helper";
import math from "mathjs";
import Display from "./display";
import Button from "./Button";
import Buttons from "./Buttons";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  margin: 0;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  width: 300px;
  height: 506px;
  background-color: #0095b8;
  border-radius: 10px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = { number: [] };
  }

  calculateOperations = () => {
    let result = this.state.number.join("");
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      if (result<100000000000000) {  // You are comparing string with number. Better check for string lenght
        this.setState({
          number: [result]
        });
      } else {
        this.setState({
          number: ["Too much !!! "]
        });
      }
    }
  };

  handleClick = e => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "=":
        this.calculateOperations();
        break;
      default:
        const newNumber = update(this.state.number, {
          $push: [value]
        });
        this.setState({
          number: newNumber
        });
        break;
    }
  };

  getButtons = () => {
    const tab = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "+", "0", "="]
    return tab.map(i => <Button onClick={this.handleClick} value={i} />)
  }

  render() {
    return (
      <PageContainer>
        <CalculatorContainer>
          <Display data={this.state.number} /> {/* data is not the best prop name here. */}
          <Buttons>
            {this.getButtons()}
          </Buttons>
        </CalculatorContainer>
      </PageContainer>
    );
  }
}

export default App;
