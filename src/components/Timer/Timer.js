/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import '../../styles/_timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minute: 20,
      second: '00',
      isStoped: false,
      isStarted: false,
      isReseted: false,
    };
    this.intervalHandle = null;
    this.secondsRemaining = null;
    this.tick = this.tick.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
  }

  tick() {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - min * 60;
    this.setState({
      minute: min,
      second: sec,
    });
    if (sec < 10) {
      this.setState({
        second: '0' + this.state.second,
      });
    }

    if (min < 10) {
      this.setState({
        minute: '0' + min,
      });
    }

    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }
  startCountDown() {
    const { isStoped, isReseted, minute } = this.state;
    // 만약 stop을 누른 이후 시작을 누르게 되면 minute * 시간이 되어버리므로  분이 00으로 리셋된다. 따라서 state에 추가로 isstoped를 true로 바꾸어줌

    if (isStoped) {
      this.setState({
        isStoped: false,
        isStarted: true,
      });

      if (isReseted) {
        const minute = this.state.minute;
        this.secondsRemaining = minute * 60;
      }
      this.intervalHandle = setInterval(this.tick, 1000);
      return;
    }
    this.intervalHandle = setInterval(this.tick, 1000);

    this.secondsRemaining = minute * 60;
    this.setState({
      isStarted: true,
    });
  }

  stopCountDown() {
    clearInterval(this.intervalHandle);
    console.log(this.state.minute, this.state.second);
    this.setState({
      isStoped: true,
      isStarted: false,
      isReseted: false,
    });
  }
  resetCountDown = e => {
    this.setState({
      minute: 20,
      second: '00',
      isReseted: true,
    });
  };
  render() {
    const { minute, second } = this.state;
    const buttonStyle = {
      background: '#f9dc5c',
      pointerEvents: 'all',
    };
    const buttonStyleActive = {
      background: '#7f9183',
      pointerEvents: 'none',
    };
    return (
      <Aux>
        <div className="timer">
          {minute} : {second}
        </div>
        <div className="timer__btnContainer">
          <button
            className="btn-timer btn-stop"
            style={this.state.isStarted ? buttonStyle : buttonStyleActive}
            onClick={this.stopCountDown}
          >
            <div>
              <p>Stop</p>
            </div>
          </button>

          <button
            className="btn-timer btn-start"
            style={this.state.isStarted ? buttonStyleActive : buttonStyle}
            onClick={this.startCountDown}
          >
            <div>
              <p>Start</p>
            </div>
          </button>
          <button
            className="btn-timer btn-reset"
            style={this.state.isStoped ? buttonStyle : buttonStyleActive}
            onClick={this.resetCountDown}
          >
            <div>
              <p>Reset</p>
            </div>
          </button>
        </div>
      </Aux>
    );
  }
}

export default Timer;
