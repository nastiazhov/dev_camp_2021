import PropTypes from 'prop-types';

const userProfileProps = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    file: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  }),
  files: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  addrr: PropTypes.shape({
    main: PropTypes.shape({
      line1: PropTypes.string.isRequired,
      line2: PropTypes.string,
      city: PropTypes.string.isRequired,
      zip: PropTypes.number,
    }),
    alt: PropTypes.shape({
      line1: PropTypes.string,
      line2: PropTypes.string,
      city: PropTypes.string.isRequired,
      zip: PropTypes.number,
    }),
  }),
};

module.exports = {
  fullName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  user: PropTypes.shape(userProfileProps),
  friends: PropTypes.arrayOf(PropTypes.shape(userProfileProps)),
};

export default userProfileProps;