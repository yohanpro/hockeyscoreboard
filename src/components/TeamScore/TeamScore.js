import React, { Component } from 'react';
import resetImg from '../../assets/images/btn-reset.png';
import '../../styles/_ScoarBoard_main.scss';
class TeamScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: null,
      teamScore: null,
    };
  }
  teamNameChangeHandler = e => {
    this.setState({
      teamName: e.target.value,
    });
  };
  scoreChangeHandler = e => {
    const action = e.target.name;
    const { teamScore } = this.state;
    if (action === 'plus') {
      this.setState({
        teamScore: teamScore + 1,
      });
    } else if (action === 'minus') {
      if (teamScore <= 0) {
        return;
      }
      this.setState({
        teamScore: teamScore - 1,
      });
    } else {
      // in case reset
      console.log('reset');
      this.setState({
        teamScore: 0,
      });
    }
  };

  render() {
    const { teamName } = this.props;
    const { teamScore } = this.state;
    return (
      <div className="Score">
        <div className="Score__teamName">
          <input
            className="TeamName"
            type="text"
            name="teamName"
            maxLength="6"
            value={
              // 초기에 이름은 Layout에 있는 props에서 받아옴. this.state에 있는 teamName이 null이면 props에서 사용, 없을 경우 변경가능
              /* 
              if first rendered, TeamName is setup with props, 
              else you can change with state
              */
              this.state.teamName === null ? teamName : this.state.teamName
            }
            onChange={this.teamNameChangeHandler}
          />
        </div>
        <div className="Score__team">
          <p>{teamScore === null ? 0 : teamScore}</p>
        </div>
        <div className="Score_button-container">
          <button
            className="Score_button"
            name="plus"
            onClick={this.scoreChangeHandler}
          >
            +
          </button>
          <button
            className="Score_button"
            name="minus"
            onClick={this.scoreChangeHandler}
          >
            -
          </button>
          <button
            className="Score_button"
            name="reset"
            onClick={this.scoreChangeHandler}
          >
            <img src={resetImg} alt="reset" />
          </button>
        </div>
      </div>
    );
  }
}

export default TeamScore;
