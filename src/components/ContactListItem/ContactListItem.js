import PropTypes from "prop-types";

const ContactListItem = ({ number, name, id }) => {
  return (
    <li key={id}>
      {name}: {number}
    </li>
  );
};

ContactListItem.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default ContactListItem;
