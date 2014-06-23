var Calendar = require('../index');
var assert = require('assert');

describe('GenericTest', function() {

  var calendar = new Calendar(2014, 6); // June 2014
  var cal = calendar.generate();


  it('should give me a calendar', function() {
    assert.notEqual(cal.length, 0);
  });

  it('should give me 7 days per week', function() {
    for (var i in cal) {
      assert.equal(cal[i].length, 7);
    }
  });

  it('should always have proper weeks', function() {
    for (var w in cal) {
      for (var d in cal[w]) {
        assert.equal(cal[w][d].day, d);
      }
    }
  });

});