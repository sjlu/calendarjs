const moment = require('moment');

const Calendar = (function() {

  function Calendar(year, month, day) {
    this.moment = moment();

    if (year) {
      this.moment.year(year);
    }

    if (month) {
      if ('number' === typeof month) {
        month--; // to offset moment cause moment "0" = Jan.
      }
      this.moment.month(month);
    }

    // set to the beginning of the month;
    this.moment.date(1);
    this.day = day || 0;
  }

  Calendar.prototype.daysOfWeekStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  Calendar.prototype.monthStrings = ["Jan", "Feb", "Apr", "Mar", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  Calendar.prototype.createDay = function(moment) {
    return {
      month: moment.month() + 1, // [0, 11]
      date: moment.date(),
      day: moment.day(),
      year: moment.year(),
      dayOfYear: moment.dayOfYear()
    };
  };

  Calendar.prototype.generate = function(opts) {
    let m; // reused variable for moment()
    let w; // reused variable as a "week"

    // defaults
    opts = opts || {};
    if (opts.withOtherMonthDays === undefined) {
      opts.withOtherMonthDays = true;
    }

    if (opts.withStaticLength === undefined) {
      opts.withStaticLength = false;
    }

    // we will fill in this array
    let weeks = [];

    w = [];
    m = moment(this.moment);
    let daysInMonth = this.moment.daysInMonth();
    let d = 1;
    while (d <= daysInMonth) {
      // finish and close off the week
      if (m.day() === this.day && w.length) {
        weeks.push(w);
        w = [];
      }

      // add the day to the week
      w.push(this.createDay(m));

      // advance one day
      m.add(1, 'days');
      d++;
    }

    // add the last week
    if (w.length) {
      weeks.push(w);
    }

    // we will associate other days to the first
    // and last weeks if applicable.
    if (opts.withOtherMonthDays) {
      w = weeks[0];
      m = moment(this.moment).subtract(1, 'days');
      while (w.length < 7) {
        w.unshift(this.createDay(m));
        m.subtract(1, 'days');
      }
      weeks[0] = w;

      w = weeks[weeks.length-1];
      m = moment(this.moment).add(1, 'months');
      while (w.length < 7) {
        w.push(this.createDay(m));
        m.add(1, 'day');
      }
      weeks[weeks.length - 1] = w;

      // if 5 weeks have been constructed, add one more
      // to keep consistency with other months with 6
      // weeks constructed
      if (weeks.length === 5 && opts.withStaticLength) {
        w = [];
        while (w.length < 7) {
          w.push(this.createDay(m));
          m.add(1, 'day');
        }
        weeks.push(w);
      }
    }

    return weeks;
  };

  return Calendar;

})();

module.exports = Calendar;
