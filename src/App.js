import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class InputComponent extends Component {

  state = {selectedFile: null}

  fileChangedHandler = (event) => {
    this.setState({selectedFile: URL.createObjectURL(event.target.files[0])})
  }

  render() {
    return (
      <div>
        <input className="Input" type="file" onChange={this.fileChangedHandler}></input>
        <img className="Img" src ={this.state.selectedFile}></img>
      </div>
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
      </div>
    );
  }
}

export default App;
