import React, { Component } from 'react';
import { Button } from 'reactstrap';
import classes from './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
