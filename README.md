## calendarjs

[![Build Status](https://travis-ci.org/sjlu/calendarjs.svg?branch=master)](https://travis-ci.org/sjlu/calendarjs)

A simple javascript component to help you create weeks in a month
that is properly displayable.

You will get something like this:
```
[ [ { month: 4, date: 30, day: 0, year: 2017, dayOfYear: 120 },
    { month: 5, date: 1, day: 1, year: 2017, dayOfYear: 121 },
    { month: 5, date: 2, day: 2, year: 2017, dayOfYear: 122 },
    { month: 5, date: 3, day: 3, year: 2017, dayOfYear: 123 },
    { month: 5, date: 4, day: 4, year: 2017, dayOfYear: 124 },
    { month: 5, date: 5, day: 5, year: 2017, dayOfYear: 125 },
    { month: 5, date: 6, day: 6, year: 2017, dayOfYear: 126 } ],
  [ { month: 5, date: 7, day: 0, year: 2017, dayOfYear: 127 },
    { month: 5, date: 8, day: 1, year: 2017, dayOfYear: 128 },
    { month: 5, date: 9, day: 2, year: 2017, dayOfYear: 129 },
    { month: 5, date: 10, day: 3, year: 2017, dayOfYear: 130 },
    { month: 5, date: 11, day: 4, year: 2017, dayOfYear: 131 },
    { month: 5, date: 12, day: 5, year: 2017, dayOfYear: 132 },
    { month: 5, date: 13, day: 6, year: 2017, dayOfYear: 133 } ],
  [ { month: 5, date: 14, day: 0, year: 2017, dayOfYear: 134 },
    { month: 5, date: 15, day: 1, year: 2017, dayOfYear: 135 },
    { month: 5, date: 16, day: 2, year: 2017, dayOfYear: 136 },
    { month: 5, date: 17, day: 3, year: 2017, dayOfYear: 137 },
    { month: 5, date: 18, day: 4, year: 2017, dayOfYear: 138 },
    { month: 5, date: 19, day: 5, year: 2017, dayOfYear: 139 },
    { month: 5, date: 20, day: 6, year: 2017, dayOfYear: 140 } ],
  [ { month: 5, date: 21, day: 0, year: 2017, dayOfYear: 141 },
    { month: 5, date: 22, day: 1, year: 2017, dayOfYear: 142 },
    { month: 5, date: 23, day: 2, year: 2017, dayOfYear: 143 },
    { month: 5, date: 24, day: 3, year: 2017, dayOfYear: 144 },
    { month: 5, date: 25, day: 4, year: 2017, dayOfYear: 145 },
    { month: 5, date: 26, day: 5, year: 2017, dayOfYear: 146 },
    { month: 5, date: 27, day: 6, year: 2017, dayOfYear: 147 } ],
  [ { month: 5, date: 28, day: 0, year: 2017, dayOfYear: 148 },
    { month: 5, date: 29, day: 1, year: 2017, dayOfYear: 149 },
    { month: 5, date: 30, day: 2, year: 2017, dayOfYear: 150 },
    { month: 5, date: 31, day: 3, year: 2017, dayOfYear: 151 },
    { month: 6, date: 1, day: 4, year: 2017, dayOfYear: 152 },
    { month: 6, date: 2, day: 5, year: 2017, dayOfYear: 153 },
    { month: 6, date: 3, day: 6, year: 2017, dayOfYear: 154 } ] ]
```
### Install

* First install the package

        npm install calendarjs --save

### Example

    var Calendar = require('calendarjs');

    // year and month are optional in this
    // next part, by default they will choose
    // the current year month.
    var calendar = new Calendar(2014, 6);

    var cal = calendar.generate();

### License

MIT.
