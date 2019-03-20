/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { Button } from 'reactstrap';
import '../../styles/_timer.scss';
import btnReset from '../../assets/images/btn-reset.png';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minute: 20,
      second: '00',
      isStoped: false,
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
    const { isStoped } = this.state;
    // 만약 stop을 누른 이후 시작을 누르게 되면 minute * 시간이 되어버리므로  분이 00으로 리셋된다. 따라서 state에 추가로 isstoped를 true로 바꾸어줌
    if (isStoped) {
      this.intervalHandle = setInterval(this.tick, 1000);
      this.setState({ isStoped: false });
      return;
    }
    this.intervalHandle = setInterval(this.tick, 1000);
    const minute = this.state.minute;
    this.secondsRemaining = minute * 60;
  }

  stopCountDown() {
    clearInterval(this.intervalHandle);
    console.log(this.state.minute, this.state.second);
    this.setState({
      isStoped: true,
    });
  }
  resetCountDown = () => {
    this.setState({
      minute: 20,
      second: '00',
    });
  };
  render() {
    const { minute, second } = this.state;

    return (
      <Aux>
        <div className="timer">
          {minute}:{second}
        </div>
        <img className="Reset" src={btnReset} onClick={this.resetCountDown} />
        <div className="timer__btnContainer">
          <Button className="btn-timer" onClick={this.stopCountDown}>
            <div>
              <p>멈춤</p>
            </div>
          </Button>
          <Button className="btn-timer" onClick={this.startCountDown}>
            <div>
              <p>시작</p>
            </div>
          </Button>
        </div>
      </Aux>
    );
  }
}

export default Timer;
