const expect = require('chai').expect;

const fizzbuzz = require('../fizzBuzzer');

describe('fizzbuzz', function() {

    it('should return "fizz-buzz" for multiples of 15', function() {
        [15, 30, 45].forEach(function(input) {
          expect(fizzbuzz(input)).to.equal('fizz-buzz');
        });
      });

    it('should change numbers divisable by 3 to fizz', function () {
        [3, 9, 12].forEach(i => 
            expect(fizzbuzz(i)).to.equal('fizz'))
    });

  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      expect(fizzbuzz(input)).to.equal('buzz');
    });
  });

    it('should return number not divisable by 3 or 5', function () {
        [1, 2, 4].forEach(i => 
            expect(fizzbuzz(i)).to.equal(i));
    });

    it('should produce error if input is not a number', function () {
        const badInputs = [true, false, 'cat', function () {}, [1,2,3]];
        badInputs.forEach(i => 
            expect(function () {
                fizzbuzz(i);
            }).to.throw(Error));
    });

});