
import PropTypes from "prop-types";

const Filter = ({ filter, handleChange}) => {
  return (
    <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          />
  );
};

Filter.propTypes = {
    filter:PropTypes.func,
    handleChange: PropTypes.func,
};

export default Filter;