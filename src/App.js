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
      if (result<100000000000000) {
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
      case "equal":
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

  render() {
    return (
      <PageContainer>
        <CalculatorContainer>
          <Display data={this.state.number} />
          <Buttons>
            <Button onClick={this.handleClick} label="7" value="7" />
            <Button onClick={this.handleClick} label="8" value="8" />
            <Button onClick={this.handleClick} label="9" value="9" />

            <Button onClick={this.handleClick} label="4" value="4" />
            <Button onClick={this.handleClick} label="5" value="5" />
            <Button onClick={this.handleClick} label="6" value="6" />

            <Button onClick={this.handleClick} label="1" value="1" />
            <Button onClick={this.handleClick} label="2" value="2" />
            <Button onClick={this.handleClick} label="3" value="3" />

            <Button onClick={this.handleClick} label="+" size="2" value="+" />
            <Button onClick={this.handleClick} label="0" value="0" />
            <Button onClick={this.handleClick} label="=" size="2" value="equal" />
          </Buttons>
        </CalculatorContainer>
      </PageContainer>
    );
  }
}

export default App;
