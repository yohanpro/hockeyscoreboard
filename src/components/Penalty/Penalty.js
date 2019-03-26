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
      penaltyPersons: [
        { player: '', minute: '', second: '' },
        { player: '', minute: '', second: '' },
      ],
      penaltyPlayer: '',
    };
    this.intervalHandle = null;
    this.intervalHandle_2 = null;
    this.secondsRemaining = 70;
  }
  playerInputHandler = e => {
    this.setState({
      penaltyPlayer: e.target.value,
    });
  };

  playerSubmitHandler = e => {
    const { penaltyPlayer, penaltyPersons } = this.state;

    if (penaltyPlayer === '') {
      //penalty number에 아무것도 없이 +를 누른 경우 그대로 종료 해줌
      return;
    }
    if (penaltyPersons[0].player === '') {
      let persons = [...this.state.penaltyPersons];
      let person = { ...persons[0] };
      person.player = penaltyPlayer;
      person.minute = 2;
      person.second = '00';
      persons[0] = person;
      this.setState({
        penaltyPersons: persons,
      });
      this.intervalHandle = setInterval(() => this.tick('player1'), 1000);
    } else if (
      penaltyPersons[0].player !== '' &&
      penaltyPersons[1].player === ''
    ) {
      let persons = [...this.state.penaltyPersons];
      let person = { ...persons[1] };
      person.player = penaltyPlayer;
      person.minute = 2;
      person.second = '00';
      persons[1] = person;
      this.setState({
        penaltyPersons: persons,
      });
      this.intervalHandle_2 = setInterval(() => this.tick('player2'), 1000);
    }
    //페널티 1,2이 empty일때

    //페널티 1이 차있을때는 페널티 2에 넣는다.
    this.setState({
      penaltyPlayer: '',
    });
  };
  startCountDown = () => {};

  penaltyDeleteHandler = e => {
    let target = e.target.name;
    if (target === 'penaltyStartMinus') {
    } else {
    }
  };

  tick = player => {
    // console.log(this.secondsRemaining);
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - min * 60;

    if (player === 'player1') {
      let persons = [...this.state.penaltyPersons];
      let person = { ...persons[0] };
      person.minute = min;
      person.second = sec;
      persons[0] = person;
      this.setState({
        penaltyPersons: persons,
      });
      if (sec < 10) {
        persons.second = '0' + sec;
        persons[0] = person;
        this.setState({
          penaltyPersons: persons,
        });
      }
      if (min < 10) {
        person.min = '0' + min;
      }

      if (min === 0 && sec === 0) {
        clearInterval(this.intervalHandle);
      }
    } else {
      let persons = [...this.state.penaltyPersons];
      let person = { ...persons[1] };
      person.minute = min;
      person.second = sec;
      persons[1] = person;

      if (sec < 10) {
        persons.second = '0' + sec;
      }
      if (min < 10) {
        person.min = '0' + min;
      }

      if (min === 0 && sec === 0) {
        clearInterval(this.intervalHandle_2);
      }
      this.setState({
        penaltyPersons: persons,
      });
    }
    this.secondsRemaining--;
  };

  render() {
    const { penaltyPlayer, penaltyPersons } = this.state;

    return (
      <div className="Penalty-container">
        <p className="Penalty-player-label">Player</p>
        <p className="Penalty-penaltyTime-label">Penalty</p>
        <div className="Penalty-player">
          {this.state.penaltyPersons[0].player}
        </div>
        <div className="Penalty-penaltyTime">
          {penaltyPersons[0].minute}:{penaltyPersons[0].second}
        </div>
        <button
          className="Penalty-minus"
          type="button"
          name="penaltyStartMinus"
          onClick={this.penaltyDeleteHandler}
        >
          -
        </button>
        <div className="Penalty-player">
          {this.state.penaltyPersons[1].player}
        </div>
        <div className="Penalty-penaltyTime">
          {penaltyPersons[1].minute}:{penaltyPersons[1].second}
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
