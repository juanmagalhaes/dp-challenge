import {
  getAvailableIntervals
} from './'

const interval = { start: '2018-06-22T08:00:00', end: '2018-06-22T17:00:00' };
const unavailableIntervals = [
  { start: '2018-06-22T09:00:00', end: '2018-06-22T10:00:00' },
  { start: '2018-06-22T14:00:00', end: '2018-06-22T16:00:00' }
];

const availableIntervals = [
  { start: '2018-06-22T08:00:00', end: '2018-06-22T09:00:00' },
  { start: '2018-06-22T10:00:00', end: '2018-06-22T14:00:00' },
  { start: '2018-06-22T16:00:00', end: '2018-06-22T17:00:00' }
];

describe('Question 4 => Available intervals', () => {
  test('getAvailableIntervals', () => {
    expect(getAvailableIntervals(interval, unavailableIntervals)).toEqual(availableIntervals)
  });
});
