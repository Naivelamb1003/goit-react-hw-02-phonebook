import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, filterCallback }) => {
  return (
    <ul>
      {contacts
        .filter(
          (contact) =>
          filterCallback(contact.name)
        )
        .map((contact) => (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  cotacts: PropTypes.array,
};

export default ContactList;
