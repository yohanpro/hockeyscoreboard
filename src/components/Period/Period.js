import React, { Component } from 'react';
import '../../styles/_Periods.scss';
class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 'period1',
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      period: changeEvent.target.value,
    });
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
              value="period1"
              className="form-check-input"
              checked={period === 'period1'}
              onChange={this.handleOptionChange}
            />
          </div>
          <div className="PeriodCheck">
            <input
              type="radio"
              name="periods"
              value="period2"
              className=""
              checked={period === 'period2'}
              onChange={this.handleOptionChange}
            />
          </div>
          <div className="PeriodCheck">
            <input
              type="radio"
              name="periods"
              value="period3"
              className=""
              checked={period === 'period3'}
              onChange={this.handleOptionChange}
            />
          </div>
        </form>
        <div class="Period_title">
          <p>{this.state.period}</p>
        </div>
      </div>
    );
  }
}

export default Period;
