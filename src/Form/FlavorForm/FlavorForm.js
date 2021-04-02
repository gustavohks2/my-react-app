import { Component } from 'react';

class FlavorForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: { value: 'coconut' }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          <select value={ this.state.value } onChange={ this.handleChange }>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Cocunut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FlavorForm;