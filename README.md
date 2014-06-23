## calendarjs

[![Build Status](https://travis-ci.org/sjlu/calendarjs.svg?branch=master)](https://travis-ci.org/sjlu/calendarjs)

A simple javascript component to help you create weeks in a month
that is properly displayable.

You will get something like this:

    [ [ { month: 6, date: 1, day: 0, year: 2014 },
        { month: 6, date: 2, day: 1, year: 2014 },
        { month: 6, date: 3, day: 2, year: 2014 },
        { month: 6, date: 4, day: 3, year: 2014 },
        { month: 6, date: 5, day: 4, year: 2014 },
        { month: 6, date: 6, day: 5, year: 2014 },
        { month: 6, date: 7, day: 6, year: 2014 } ],
      [ { month: 6, date: 8, day: 0, year: 2014 },
        { month: 6, date: 9, day: 1, year: 2014 },
        { month: 6, date: 10, day: 2, year: 2014 },
        { month: 6, date: 11, day: 3, year: 2014 },
        { month: 6, date: 12, day: 4, year: 2014 },
        { month: 6, date: 13, day: 5, year: 2014 },
        { month: 6, date: 14, day: 6, year: 2014 } ],
      [ { month: 6, date: 15, day: 0, year: 2014 },
        { month: 6, date: 16, day: 1, year: 2014 },
        { month: 6, date: 17, day: 2, year: 2014 },
        { month: 6, date: 18, day: 3, year: 2014 },
        { month: 6, date: 19, day: 4, year: 2014 },
        { month: 6, date: 20, day: 5, year: 2014 },
        { month: 6, date: 21, day: 6, year: 2014 } ],
      [ { month: 6, date: 22, day: 0, year: 2014 },
        { month: 6, date: 23, day: 1, year: 2014 },
        { month: 6, date: 24, day: 2, year: 2014 },
        { month: 6, date: 25, day: 3, year: 2014 },
        { month: 6, date: 26, day: 4, year: 2014 },
        { month: 6, date: 27, day: 5, year: 2014 },
        { month: 6, date: 28, day: 6, year: 2014 } ],
      [ { month: 6, date: 29, day: 0, year: 2014 },
        { month: 6, date: 30, day: 1, year: 2014 },
        { month: 7, date: 1, day: 2, year: 2014 },
        { month: 7, date: 2, day: 3, year: 2014 },
        { month: 7, date: 3, day: 4, year: 2014 },
        { month: 7, date: 4, day: 5, year: 2014 },
        { month: 7, date: 5, day: 6, year: 2014 } ] ]

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