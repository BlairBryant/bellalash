import React, { Component } from 'react';
import './App.css';
import dashboard from './assets/dashboard.svg'
import description from './assets/description.svg'
import person from './assets/person.svg'
import Messages from './components/Messages'

class App extends Component {
  constructor() {
    super() 

    this.state = {
      toggleSlider: false,
      toggleMessages: false
    }
  }

  toggleSlider = () => {
    this.setState({toggleSlider: !this.state.toggleSlider})
  }

  toggleMessages = () => {
    this.setState({toggleMessages: !this.state.toggleMessages})
    console.log('hhh')
  }

  render() {
    return (
      <div className="app row">
        <div className='leftNav column'>
          <hr />
          <img src={dashboard} alt="dashboardIcon" />
          <span>DASHBOARD</span>
          <img src={person} alt="personIcon" />
          <span>VENDOR</span>
          <img src={description} alt="descriptionIcon" />
          <span>PURCHASE</span>
        </div>
        <div className='body column'>
          <div className='topNav row'>
            <div className='topNavLeft row'>
              <span>SETTINGS</span>
            </div>
            <div className='topNavRight row'>
              <ul className='topNavRightUl row'>
                <li>My Company</li>
                <li onClick={this.toggleMessages}>Messages</li>
              </ul>
              <div className='hamburgerMenu'>
                <hr />
                <hr />
                <hr />
              </div>
            </div>
          </div>
          <div className='mainBody'>
            <div className='mainCard column'>
              <div className='contentDiv1 column'>
                <h3>Notifications</h3>
                <div className='slider'>
                  <div className={this.state.toggleSlider ? 'sliderKnob sliderMove' : 'sliderKnob'} onClick={this.toggleSlider}></div>
                </div>
                <p>How many days do you want to pass by before a notification is sent?</p>
                <input placeholder='2' id='notificationsInput'/>
              </div>
              <div className='contentDiv column'>
                <h3>Emails</h3>
                <p>Set the default emails.</p>
                <div className='inputDivs'>
                  <span>Shipping: </span>
                  <input />
                </div>
                <div className='inputDivs'>
                  <span>Billing: </span>
                  <input />
                </div>
                <div className='inputDivs'>
                  <span>Another Email: </span>
                  <input />
                </div>
              </div>
              <div className='contentDiv3 column'>
                <h3>Text Messages</h3>
                <p>Enter your cell phone number to receive texts from loop minded.</p>
                <div className='inputDivs' id='inputDivsLast'>
                  <span>Cell Number: </span>
                  <input />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Messages toggle={this.state.toggleMessages} toggleMessages={this.toggleMessages}/>
      </div>
    );
  }
}

export default App;
