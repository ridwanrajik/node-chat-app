const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    })

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Andrew',
            room: 'The node developer course'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove user by id', () => {
        let userId = '3'
        let resUser = users.removeUser(userId);
        expect(resUser.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user if id is invalid', () => {
        let userId = '7'
        let resUser = users.removeUser(userId);
        expect(resUser).toBeFalsy();
        expect(users.users.length).toBe(3);
    })

    it('should get user by id', () => {
        let userId = '1';
        let resUser = users.getUser(userId);
        expect(resUser.id).toBe(userId);
    })

    it('should not get user if id is invalid', () => {
        let userId = '7';
        let resUser = users.getUser(userId);
        expect(resUser).toBeFalsy();
    })

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');
        // console.log('')
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for React course', () => {
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });
});