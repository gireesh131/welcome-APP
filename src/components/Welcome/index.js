// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribe: true}

  subscribeBtn = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  changeBtn = () => {
    const {isSubscribe} = this.state
    return isSubscribe? "Subscribed": "Subscribe"
    }
  }

  render() {
      const changeBtn = this.changeBtn()
    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="btn" onClick={this.subscribeBtn}>
        {this.changeBtn}
      </button>
      </div>
    )
  }
}
export default Welcome
