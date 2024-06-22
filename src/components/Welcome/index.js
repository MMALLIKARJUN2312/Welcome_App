// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  onClicking = () => {
    this.setState(previousState => ({isClicked: !previousState.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happly Learning</p>
        <button className="button" type="button" onClick={this.onClicking}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
