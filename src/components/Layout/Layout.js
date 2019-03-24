import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Timer from '../Timer/Timer';
import TeamScore from '../TeamScore/TeamScore';
import Period from '../Period/Period';
import '../../styles/_ScoarBoard_main.scss';
import Penalty from '../Penalty/Penalty';
import '../../styles/_Penalty.scss';

class Layout extends Component {
  state = {
    isPeriodChanged: false,
    teamName1: 'Home',
    teamName2: 'Guest',
    teamScore1: null,
    teamScore2: null,
  };
  render() {
    return (
      <Aux>
        <div className="Scoreboard">
          <Timer />
        </div>
        <div className="padding" />
        <div className="Scoreboard_main">
          <TeamScore
            teamName={this.state.teamName1}
            teamScore={this.state.teamScore1}
          />
          <Period />
          <TeamScore
            teamName={this.state.teamName2}
            teamScore={this.state.teamScore2}
          />
        </div>
        <div className="PenaltyBox">
          <Penalty />
          <Penalty />
        </div>
      </Aux>
    );
  }
}

export default Layout;
