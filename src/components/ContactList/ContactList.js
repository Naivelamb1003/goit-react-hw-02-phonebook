import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, filterCallback, deletedContacts }) => {
  return (
    <ul>
      {contacts
        .filter(
          (contact) =>
          filterCallback(contact.name)
        )
        .map((contact) => (
          <ContactListItem
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deletedContacts={deletedContacts}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  cotacts: PropTypes.array,
  deletedContacts: PropTypes.func,
};

export default ContactList;
