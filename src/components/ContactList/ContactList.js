import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import style from './ContactList.module.css';

const ContactList = ({ contacts, filterCallback, deletedContacts }) => {
  return (
    <ul className={style.list}>
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
