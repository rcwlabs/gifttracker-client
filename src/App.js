import React, { Component } from 'react';

import Gift from './components/Gift';

import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      theList: []
    };

  }

  componentWillMount() {

    let parent = this;

    axios.get('https://onefreelatte.com/api/gifts')
    .then(function (response) {
      parent.setState({ theList: response.data });
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  render() {

    let theList = this.state.theList.map(item => {
      return (
        <Gift item={item} />
      );
    });

    console.log(this.state.theList);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Gift Tracker</h1>
        </header>
        <ul>
          {theList}
        </ul>
      </div>
    );
  }
}

export default App;
