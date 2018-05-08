import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Dropzone from 'react-dropzone'

class InputComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedFile: null};
  }

  fileChangedHandler = (event) => {
    this.setState({selectedFile: URL.createObjectURL(event.target.files[0])})
    console.log('URL: ', URL.createObjectURL(event.target.files[0]));
    console.log('FILE: ', event);
  }

  dropChangeHandler = (files) => {
    let url = files[0].preview;
    this.setState({selectedFile: url});
    console.log('URL: ', files[0].preview);
    console.log('FILE: ', files);
  }

  render() {
    return (
      <div>
        <input className="Input" type="file" onChange={this.fileChangedHandler}></input>
        <Dropzone onDrop={this.dropChangeHandler} className="DropArea"><img className="Img" src ={this.state.selectedFile}></img></Dropzone>
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
