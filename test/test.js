var Calendar = require('../index');
var assert = require('assert');

describe('GenericTest', function() {

  var calendar = new Calendar(2017, 2); // Feb 2017
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

  it('should return a proper first day', function() {
    assert.equal(cal[0][0].year, 2017)
    assert.equal(cal[0][0].month, 1)
    assert.equal(cal[0][0].date, 29)
    assert.equal(cal[0][0].dayOfYear, 29)
  });

  it('should return a proper last day', function() {
    assert.equal(cal[4][6].year, 2017)
    assert.equal(cal[4][6].month, 3)
    assert.equal(cal[4][6].date, 4)
    assert.equal(cal[4][6].dayOfYear, 63)
  });

  it('should have 6 weeks of data', function () {
    var cal2 = calendar.generate({ withStaticLength: true });
    assert.equal(cal2.length, 6)
  });

});
