import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class InputComponent extends Component {
  render() {
    return (
      <input className="Input" type="file"></input>
    );
  }
}

class ImgAreaComponent extends Component {
  render() {
    return (
      <div className="ImgArea"><img className="App" src ={this.state}></img>{this.props.headerValue}</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Upload and resize images.</h1>
          </header>
        </div>
          <InputComponent/>
          <ImgAreaComponent headerValue="ciao"/>
      </div>
    );
  }
}

export default App;
