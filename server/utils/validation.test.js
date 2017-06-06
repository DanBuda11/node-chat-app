const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var res = isRealString(123);
		expect(res).toBe(false);
	});

	it('should reject stirngs with only spaces', () => {
		var res = isRealString('   ');
		expect(res).toBe(false);
	});

	it('should allow strings with non-space characters', () => {
		var res = isRealString('   acceptable   ');
		expect(res).toBe(true);
	});
});

	