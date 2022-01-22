const PropTypes = require('prop-types');

module.exports = {
    postPicture: PropTypes.string,
    text: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    dateCreated: PropTypes.string.isRequired,
};