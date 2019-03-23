import React, { Component } from 'react';
import '../../styles/_ScoarBoard_main.scss';
class TeamScore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { teamName } = this.props;
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
      </div>
    );
  }
}

export default TeamScore;
