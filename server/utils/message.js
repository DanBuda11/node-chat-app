// Use Moment library to timestamp messages
var moment = require('moment');

// For normal chat message
var generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: moment().valueOf()
	};
};

// For location message
var generateLocationMessage = (from, lat, long) => {
	return {
		from,
		url: `https://www.google.com/maps?q=${lat},${long}`,
		createdAt: moment().valueOf()
	};
};

module.exports = {generateMessage, generateLocationMessage};