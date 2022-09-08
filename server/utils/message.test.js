let expect = require('expect');
// let expect = require('chai').expect

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', ()=> {
        let res = generateMessage('Admin','new user joined')
        expect(res.from).toBe('Admin')
        expect(res.text).toBe('new user joined')
        expect(typeof res.createdAt).toBe('number')
        expect(typeof res).toBe('object')
    });
});