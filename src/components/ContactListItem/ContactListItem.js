import PropTypes from "prop-types";

const ContactListItem = ({id, number, name, deletedContacts}) => {
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" id={id} onClick={deletedContacts}>
            Delete
          </button>
    </li>
  );
};

ContactListItem.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  deletedContacts: PropTypes.func,
};

export default ContactListItem;
