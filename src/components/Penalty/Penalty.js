import React, { Component } from 'react';

class Penalty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      penaltyPlayer는 input에서 읽어온 값 저장
      PenaltyplayerStart는 전광판에 나타나는 player를 나타냄

      -Eng
      penaltyplayer is Value that from input
      PenalyPlayerStart is the player who can see in backboard(red)
      */

      penaltyPlayer: '',
      // penaltyPlayerStart: '',
      // penaltyPlayer2Start: '',

      penaltyPlayerStart: {
        number: '',
        minute: '',
        second: '',
      },
      penaltyPlayer2Start: {
        number: '',
        minute: '',
        second: '',
      },
    };
    this.secondsRemaining = 120;
  }
  playerInputHandler = e => {
    this.setState({
      penaltyPlayer: e.target.value,
    });
  };

  playerSubmitHandler = e => {
    const {
      penaltyPlayer,
      penaltyPlayerStart,
      penaltyPlayer2Start,
    } = this.state;

    if (penaltyPlayer === '') {
      //penalty number에 아무것도 없이 +를 누른 경우 그대로 종료 해줌
      return;
    }
    //페널티 1,2이 empty일때

    if (penaltyPlayerStart === '') {
      this.setState({
        penaltyPlayerStart: penaltyPlayer,
      });
      this.startTimer();
      //페널티 1이 차있을때는 페널티 2에 넣는다.
    } else if (penaltyPlayerStart !== '' && penaltyPlayer2Start === '') {
      this.setState({
        penaltyPlayer2Start: penaltyPlayer,
      });
    } else if (penaltyPlayerStart !== '' && penaltyPlayer2Start !== '') {
      this.setState({
        penaltyPlayer: '',
      });
      return;
    }

    this.setState({
      penaltyPlayer: '',
    });
  };

  penaltyDeleteHandler = e => {
    let target = e.target.name;

    if (target === 'penaltyStartMinus') {
      this.setState({
        penaltyPlayerStart: '',
      });
    } else {
      this.setState({
        penaltyPlayer2Start: '',
      });
    }
  };
  startTimer = () => {
    const { minute } = this.state;
    this.setState({
      minute: 2,
    });
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = minute * 60;
  };
  tick = () => {
    console.log(this.secondsRemaining);
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
        minute: min,
      });
    }
    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--;
  };
  render() {
    const {
      penaltyPlayer,
      penaltyPlayerStart,
      penaltyPlayer2Start,
    } = this.state;
    return (
      <div className="Penalty-container">
        <p className="Penalty-player-label">Player</p>
        <p className="Penalty-penaltyTime-label">Penalty</p>
        <div className="Penalty-player">{penaltyPlayerStart.number}</div>
        <div className="Penalty-penaltyTime">
          {}:{}
        </div>
        <button
          className="Penalty-minus"
          type="button"
          name="penaltyStartMinus"
          onClick={this.penaltyDeleteHandler}
        >
          -
        </button>
        <div className="Penalty-player">{penaltyPlayer2Start.number}</div>
        <div className="Penalty-penaltyTime">
          {}:{}
        </div>
        <button
          className="Penalty-minus"
          name="penaltyStart2Minus"
          type="button"
          onClick={this.penaltyDeleteHandler}
        >
          -
        </button>
        <div className="Penalty-inputLabel">Player Number :</div>
        <input
          className="Penalty-input"
          value={penaltyPlayer}
          onChange={this.playerInputHandler}
          maxLength="3"
        />
        <button
          className="Penalty-plus"
          type="button"
          onClick={this.playerSubmitHandler}
        >
          +
        </button>
      </div>
    );
  }
}

export default Penalty;
