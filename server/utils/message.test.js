// Testing for message generation functions

var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'dan';
		var text = 'test message text';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Dan';
		var lat = 3;
		var long = 4;
		var url = 'https://www.google.com/maps?q=3,4';
		var message = generateLocationMessage(from, lat, long);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
});