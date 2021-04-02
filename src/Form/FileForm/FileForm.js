import React, { Component } from "react";

class FileForm extends Component {

  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); 
    alert(`Selected file - ${ this.fileInput.current.files[0].name }`);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Upload File:
          <input type="file" ref={ this.fileInput } />
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileForm;