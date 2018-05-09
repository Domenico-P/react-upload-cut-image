import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';

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

  cropChangeHandler = (crop) => {
  this.setState({ crop });
  console.log('CROP: ', crop);
  }

  crop: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }

  render() {
    return (
      <div>
        <input className="Input" type="file" onChange={this.fileChangedHandler}></input>
        <Dropzone className="DropArea" onDrop={this.dropChangeHandler}><img className="Img" draggable="false" src ={this.state.selectedFile}></img></Dropzone>
        <ReactCrop className="Crop" src={this.state.selectedFile} onChange={this.cropChangeHandler} crop={this.state.crop}/>
        <button>Ritaglia</button>
        <button>Annulla</button>
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
