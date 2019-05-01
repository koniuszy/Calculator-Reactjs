import React, { Component } from 'react'
import './index.css'
import styled from 'styled-components'
import update from 'immutability-helper'
import math from 'mathjs'
import Display from './display'
import Button from './Button'
import Buttons from './Buttons'

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
`

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
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ResetButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  height: 75px;
  margin-bottom: 100px;
  margin-right: 30px;
  min-width: 150px;
`

const ResetText = styled.h1`
  font-weight: normal;
`

const RemoveButton = styled(ResetButton)`
  margin-right: 0;
  margin-left: 30px;
`

class App extends Component {
  state = {
    number: [],
    start: ['0']
  }

  calculateOperations = () => {
    let result = this.state.number.join('')
    if (result.charAt(result.length - 1) === '+') {
      result = result + '0'
    }
    if (result) {
      result = math.eval(result)
      result = String(result)
      if (result.length <= 12) {
        this.setState({
          number: [result]
        })
      } else {
        this.setState({
          number: ['Too much !!! ']
        })
      }
    }
    return result.length
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    const newNumber = update(this.state.number, {
      $push: [value]
    })
    const TooMuch = 'Too much !!!'

    switch (value) {
      case '=':
        if (newNumber.includes(TooMuch)) {
          break
        } else {
          this.calculateOperations()
          break
        }

      default:
        if (value === '+') {
          if (this.state.number.includes('+') || this.state.number.length === 0) {
            if (newNumber[newNumber.length - 2] === '+') {
              break
            }
            newNumber[newNumber.length - 1] = '='
            this.calculateOperations()
            break
          }
        }
        if (newNumber.includes(TooMuch)) {
          this.setState({
            number: [TooMuch]
          })
          break
        } else if (newNumber.length <= 12) {
          if (newNumber.length === 1 && value === '0') {
            break
          } else
            this.setState({
              number: newNumber
            })
          break
        } else {
          this.setState({
            number: [TooMuch]
          })
          break
        }
    }
  }

  getButtons = () => {
    const tab = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+', '0', '=']
    return tab.map(i => <Button onClick={this.handleClick} value={i} key={i} />)
  }

  reset = () => {
    this.setState({
      number: []
    })
  }

  remove = () => {
    let tab = this.state.number
    let number = 0
    let newTab = []

    if (tab.length === 1) {
      number = tab[0]
      for (let i = 0; i < number.length - 1; i++) {
        newTab.push(number[i])
      }
      tab = newTab
    } else {
      if (tab.length > 1) {
        tab.pop()
      }
    }

    this.setState(
      {
        number: []
      },
      () =>
        this.setState({
          number: tab
        })
    )
  }

  render() {
    return (
      <PageContainer>
        <ButtonContainer>
          <ResetButton onClick={this.reset}>
            <ResetText>Reset</ResetText>
          </ResetButton>

          <RemoveButton onClick={this.remove}>
            <ResetText>Backspace</ResetText>
          </RemoveButton>
        </ButtonContainer>
        <CalculatorContainer>
          <Display display={this.state.number} displayZero={this.state.start} />
          <Buttons>{this.getButtons()}</Buttons>
        </CalculatorContainer>
      </PageContainer>
    )
  }
}

export default App
