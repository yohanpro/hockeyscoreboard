import React, { Component } from 'react';

class Penalty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Penalty-container">
        <p className="Penalty-player-label">Player</p>
        <p className="Penalty-penaltyTime-label">Penalty</p>
        <div className="Penalty-player">33</div>
        <div className="Penalty-penaltyTime">2:00</div>
        <button className="Penalty-minus" type="button">
          -
        </button>
        <div className="Penalty-player">33</div>
        <div className="Penalty-penaltyTime">2:00</div>
        <button className="Penalty-minus" type="button">
          -
        </button>
        <div className="Penalty-inputLabel">Player Number :</div>
        <input className="Penalty-input" value="33" />
        <button className="Penalty-plus" type="button">
          +
        </button>
      </div>
    );
  }
}

export default Penalty;
