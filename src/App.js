import { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addHandler = (contactFormState) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.concat({
          name: contactFormState.name,
          number: contactFormState.number,
          id: uuidv4(),
        }),
      };
    });
  };

  filterContact = (name) => {
    return name.toLowerCase().indexOf(this.state.filter.toLowerCase()) != -1;
  };

  render() {
    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addHandler} />
        </div>

        <div>
          <h1>Contacts</h1>
          <p>Find contacts by name</p>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
          />
          <ContactList
            contacts={this.state.contacts}
            filterCallback={this.filterContact}
          />
        </div>
      </div>
    );
  }
}
export default App;
