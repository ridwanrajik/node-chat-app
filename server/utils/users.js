// Step 1:
// Create an array of user object like the following:
// [{
//     id: '34567890098trgie34',
//     name: 'Andrew',
//     room: 'Node Developer Course'
// }]

// Step 2:
// addUser(id, name, room)

// Step 3:
// removeUser(id)

// Step 4:
// getUser(id)

// Step 5:
// getUserList(room)

// method 1: using function
// let users = [];
// let addUser = (id, name, room) => {
//     users.push({})
// }
// modules.export = {addUsers}

// method 2: using class

// class Person {
//     constructor (name, age) {
//         console.log('All Person value:',name, age); // prints: Andrew 25. In this case the value of name and age variables is for all Person, and not a specific instance of a person
//     }
// }
// let me = new Person('Andrew', 25);

// class Person {
//     constructor (name, age) {
//         this.name = name; // The this keyword here refers to the current person instance. this.name is like saying me.name in this case.
//         this.age = age; 
//     }
// }
// let me = new Person('Andrew', 25);
// console.log('Specific Person (Instance) value:', me.name, me.age);

// class Person {
//     constructor (name, age) {
//         this.name = name; // The this keyword here refers to the current person instance. this.name is like saying me.name in this case.
//         this.age = age; 
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} years old.`;
//     }
// }
// let me = new Person('Andrew', 25);
// let description = me.getUserDescription();
// console.log(description);  // prints Andrew is 25 years old.

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        // return user that was removed
        let users = this.users;
        for ( let i = 0; i < users.length; i++) {
            if (users[i].id == id){
                let removedUser = users.splice(i, 1);
                return removedUser[0];
            }
        }
    }
    getUser (id) {
        let user = this.users.filter((user) => user.id === id);
        return user[0];
    }
    getUserList (room) {
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {Users};