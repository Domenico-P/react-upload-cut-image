import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pixelCrop: null,
      crop: null,
      selectedFile: null
    };
  }

  handleFileChange = event => {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
    //console.log('URL: ', URL.createObjectURL(event.target.files[0]));
    //console.log('FILE: ', event);
  };

  handleDrop = files => {
    let url = files[0].preview;
    this.setState({ selectedFile: url });
    //console.log('URL: ', files[0].preview);
    //console.log('FILE: ', files);
  };

  handleCropChange = (crop, pixelCrop) => {
    this.setState({ crop, pixelCrop }, this.updateCroppedTile);
    //console.log('CROP: ', crop);
  };

  updateCroppedTile = () => {
    const { pixelCrop, selectedFile } = this.state;
    const { canvas } = this;

    if (selectedFile == null || canvas == null || pixelCrop == null) {
      return;
    }

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    const context = canvas.getContext("2d");
    const image = new Image();

    image.src = selectedFile;
    var dataURL = canvas.toDataURL("image/png");

    

    console.log('DatUrl: ',dataURL);

    image.onload = () => {
      //console.log(pixelCrop);
      //console.log(image.width, image.height);

      context.clearRect(0, 0, pixelCrop.width, pixelCrop.height);
      context.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );
    };
  };

  render() {
    return (
      <div>
        <input className="Input" type="file" onChange={this.handleFileChange} />
        <Dropzone className="DropArea" onDrop={this.handleDrop}>
          <img
            id="source"
            className="Img"
            draggable="false"
            src={this.state.selectedFile}
          />
        </Dropzone>
        <ReactCrop
          className="Crop"
          src={this.state.selectedFile}
          onChange={this.handleCropChange}
          crop={this.state.crop}
        />
        <div>
          <canvas
            style={{ outline: `2px solid red` }}
            ref={element => {
              this.canvas = element;
            }}
          />
        </div>
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
        <InputComponent />
      </div>
    );
  }
}

export default App;
