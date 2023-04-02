// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribe: false}

  subscribeBtn = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getChangeBtn = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const changeBtn = this.getChangeBtn()

    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="btn" onClick={this.subscribeBtn}>
          {changeBtn}
        </button>
      </div>
    )
  }
}
export default Welcome
