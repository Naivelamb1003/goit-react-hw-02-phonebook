import { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

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

  constructor(){
    super();
    this.deletedContacts.bind(this);
  }

  isContactExist = (value) => {
    const element = this.state.contacts.find(
      (contact) => contact.name === value
    );
    return element !== undefined;
  };

  deletedContacts = (e) => {
    console.log(e.target.id);
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts.filter(({ id }) => id !== e.target.id),
        ],
      };
    });
  };

  addHandler = (contactFormState) => {
    if (this.isContactExist(contactFormState.name)) {
      alert(`${contactFormState.name} is already in contacts.`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: prevState.contacts.concat({
            name: contactFormState.name,
            number: contactFormState.number,
            id: uuidv4(),
          }),
        };
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContact = (name) => {
    return name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1;
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
          <Filter filter={this.state.filter} handleChange={this.handleChange} />
          <ContactList
            contacts={this.state.contacts}
            filterCallback={this.filterContact}
            deletedContacts={this.deletedContacts}
          />
        </div>
      </div>
    );
  }
}
export default App;
