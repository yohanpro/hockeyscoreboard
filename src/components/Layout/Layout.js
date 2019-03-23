import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Timer from '../Timer/Timer';
import TeamScore from '../TeamScore/TeamScore';
import Period from '../Period/Period';
import '../../styles/_ScoarBoard_main.scss';

class Layout extends Component {
  state = {
    isPeriodChanged: false,
    teamName1: 'Home',
    teamName2: 'Away',
  };
  render() {
    return (
      <Aux>
        <div className="Scoreboard">
          <Timer />
        </div>
        <div className="padding" />
        <div className="Scoreboard_main">
          <TeamScore teamName={this.state.teamName1} />
          <Period />
          <TeamScore teamName={this.state.teamName2} />
        </div>
      </Aux>
    );
  }
}

export default Layout;
