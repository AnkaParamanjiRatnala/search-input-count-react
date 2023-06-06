import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onClickInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state
    const lettersCount = input.length
    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="heading"> Calculate the Letters you enter</h1>
          <div className="input-container">
            <div className="label-container">
              <label htmlFor="text" className="label-text">
                Enter the phrase
              </label>
              <input
                id="text"
                type="search"
                value={input}
                onChange={this.onClickInput}
                className="search-input"
                placeholder="Enter the phrase"
              />
            </div>
            <p className="change-count">No.of letters: {lettersCount}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
