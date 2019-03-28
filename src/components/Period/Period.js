import React, { Component } from 'react';
import Popup from './../Popup/Popup';
import '../../styles/_Periods.scss';
class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 'Period1',
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      period: changeEvent.target.value,
    });
  };

  allReset = () => {
    window.location.reload();
  };
  render() {
    const { period } = this.state;
    return (
      <div className="Period__container">
        <form className="Period__radio__container">
          <div className="PeriodCheck">
            <input
              type="radio"
              name="periods"
              value="Period1"
              className="form-check-input"
              checked={period === 'Period1'}
              onChange={this.handleOptionChange}
            />
          </div>
          <div className="PeriodCheck">
            <input
              type="radio"
              name="periods"
              value="Period2"
              className=""
              checked={period === 'Period2'}
              onChange={this.handleOptionChange}
            />
          </div>
          <div className="PeriodCheck">
            <input
              type="radio"
              name="periods"
              value="Period3"
              className=""
              checked={period === 'Period3'}
              onChange={this.handleOptionChange}
            />
          </div>
        </form>
        <div className="Period_title">
          <p>{this.state.period}</p>
        </div>
        <button className="AllReset" onClick={this.allReset}>
          All Reset
        </button>
        {/* <Popup /> */}
      </div>
    );
  }
}

export default Period;
