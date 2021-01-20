import { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };
  reset = () => {
    this.setState({ name: "" });
  };

  handleAdd = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.push({
          name: prevState.name,
          id: uuidv4(),
        }),
      };
    });
    console.log(this.state.contacts);
    this.state.contacts.forEach(c=>console.log(c.name));
    this.reset();
  };

  render() {
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleAdd}>
            <label>
              Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>

          <ul>
            {
            this.state.contacts/* {this.state.contacts.map((contact) => (
              <li key={contact.id}>{contact.name}</li>
            ))} */}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
