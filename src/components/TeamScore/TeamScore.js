import React, { Component } from 'react';
import '../../styles/_ScoarBoard_main.scss';
class TeamScore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { teamName, teamScore1, teamScore2 } = this.props;
    return (
      <div className="Score">
        <div className="Score__teamName">
          <input
            className="TeamName"
            type="text"
            name="teamName"
            maxLength="10"
            value={teamName}
          />
        </div>
        <div className="Score__team">
          <p>{teamScore1}</p>
        </div>
      </div>
    );
  }
}

export default TeamScore;
