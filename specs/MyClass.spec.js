const MyClass = require('../src/MyClass');
const myObj = new MyClass();
const chai = require('chai');
const expect = chai.expect;

describe('MyClass', () => {
    it('should test arg', () => {
        expect(myObj.add(1,3)).to.be.equal(4);
    });
})