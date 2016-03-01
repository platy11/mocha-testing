var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
  describe('#length', function () {
    it('should return the length', function () {
      assert.equal(3, [1,2,3].length);
      assert.equal(5, [1,2,3,4,5].length);
    });
  });
  describe('#length', function () {
    it('should return true', function () {
      assert.equal(true, [1,2,3].length === 3);
      assert.equal(false, [1,2,3,4,5].length === 4);
    });
  });
});
