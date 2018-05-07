import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class InputComponent extends Component {

  state = {selectedFile: null}

  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]})
  }

  uploadHandler = () => {
    console.log(this.state.selectedFile)
  }

  render() {
    return (
      <div>
        <input className="Input" type="file" onChange={this.fileChangedHandler}></input>
        <button onClick={this.uploadHandler}>Upload!</button>
      </div>
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
          <ImgAreaComponent headerValue="carica immagine..."/>
      </div>
    );
  }
}

export default App;
