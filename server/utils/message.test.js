let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', ()=> {
        let res = generateMessage('Admin','new user joined')
        expect(res.from).toBe('Admin')
        expect(res.text).toBe('new user joined')
        expect(typeof res.createdAt).toBe('number')
        expect(typeof res).toBe('object')
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Admin'
        let latitude = 1234554321
        let longitude = 6789009876
        let url = `https://www.google.com/maps?q=${latitude},${longitude}`
        let res = generateLocationMessage(from, latitude, longitude)
        // expect(res.from).toBe('Admin')
        // expect(res.url).toBe(url)
        expect(res).toMatchObject({from, url})
        expect(typeof res.createdAt).toBe('number')
    });
})