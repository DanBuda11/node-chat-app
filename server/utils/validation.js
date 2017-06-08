// Validation for non-zero length strings
// Used for validation of username, room name, message text

var isRealString = (str) => {
	return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};