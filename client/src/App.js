import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      status: null
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick(e){
    console.log('Button Hit')
    axios.get('/hello').then(data => {
      console.log(data)
        this.setState({
          status: data.data
        })
    })
  }

  render() {
    let status = this.state.status ? this.state.status : 'Waiting';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">This is the new app</p>
        <button onClick={this.handleButtonClick}>Click me</button>
        <p>{`The status is: ${status}`}</p>
      </div>
    );
  }
}

export default App;
