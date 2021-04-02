import { Component } from 'react';

class Reservation extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    alert(
      `The number of guests is ${this.state.numberOfGuests}\nIs going? ( ${this.state.isGoing ? 'Yes': 'No'} )`);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Is going:
          <input 
            type="checkbox"
            name="isGoing"
            checked={ this.state.isGoing }
            onChange={ this.handleInputChange }/>
        </label>
        <br/>
        <label>
          Number of guests:
          <input 
            type="number"
            name="numberOfGuests"
            value={ this.state.numberOfGuests }
            onChange={ this.handleInputChange }/>
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Reservation;