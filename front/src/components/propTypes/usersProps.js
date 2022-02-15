const PropTypes = require('prop-types');

module.exports = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fullName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }),
  ),
};