import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Timer from '../Timer/Timer';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <main>
          <Timer />
        </main>
      </Aux>
    );
  }
}

export default Layout;
