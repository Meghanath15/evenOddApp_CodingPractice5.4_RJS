// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementButton = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const evenText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {evenText}</p>
          <button
            type="button"
            className="button"
            onClick={this.onIncrementButton}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
