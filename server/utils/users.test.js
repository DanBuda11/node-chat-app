// Testing of User model functions

const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Bob',
			room: 'Puppies'
		}, {
			id: '2',
			name: 'Bill',
			room: 'Kittens'
		}, {
			id: '3',
			name: 'Jane',
			room: 'Puppies'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Dan',
			room: 'Puppies'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var userId = '2';
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove a user', () => {
		var userId = '4';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		var userId = '4';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});

	it('should return names for room Puppies', () => {
		var userList = users.getUserList('Puppies');

		expect(userList).toEqual(['Bob', 'Jane']);
	});

	it('should return names for room Kittens', () => {
		var userList = users.getUserList('Kittens');

		expect(userList).toEqual(['Bill']);
	});
});