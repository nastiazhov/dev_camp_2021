const PropTypes = require('prop-types');

module.exports = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            postPicture: PropTypes.string,
            text: PropTypes.string.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
            dateCreated: PropTypes.string.isRequired,
        }),
      ),
};