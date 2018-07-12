import { getAvailableIntervals } from "./";

describe("Question 4 => Available intervals", () => {
  test("Works with hour intervals", () => {
    const interval = {
      start: "2018-06-22T08:00:00",
      end: "2018-06-22T17:00:00"
    };
    const unavailableIntervals = [
      { start: "2018-06-22T09:00:00", end: "2018-06-22T10:00:00" },
      { start: "2018-06-22T14:00:00", end: "2018-06-22T16:00:00" }
    ];

    const availableIntervals = [
      { start: "2018-06-22T08:00:00", end: "2018-06-22T09:00:00" },
      { start: "2018-06-22T10:00:00", end: "2018-06-22T14:00:00" },
      { start: "2018-06-22T16:00:00", end: "2018-06-22T17:00:00" }
    ];

    expect(getAvailableIntervals(interval, unavailableIntervals)).toEqual(
      availableIntervals
    );
  });

  test("Works with minutes intervals", () => {
    const interval = {
      start: "2018-06-22T08:00:00",
      end: "2018-06-22T08:50:00"
    };
    const unavailableIntervals = [
      { start: "2018-06-22T08:01:00", end: "2018-06-22T08:04:00" },
      { start: "2018-06-22T08:22:00", end: "2018-06-22T08:50:00" }
    ];

    const availableIntervals = [
      { start: "2018-06-22T08:00:00", end: "2018-06-22T08:01:00" },
      { start: "2018-06-22T08:04:00", end: "2018-06-22T08:22:00" }
    ];
    expect(getAvailableIntervals(interval, unavailableIntervals)).toEqual(
      availableIntervals
    );
  });

  test("Works with mix different time units", () => {
    const interval = {
      start: "2018-01-22T08:00:00",
      end: "2018-05-22T17:00:00"
    };
    const unavailableIntervals = [
      { start: "2018-01-22T08:00:00", end: "2018-02-22T10:00:00" },
      { start: "2018-02-22T10:00:00", end: "2018-03-22T15:30:00" },
      { start: "2018-03-22T16:30:00", end: "2018-04-22T17:30:00" }
    ];

    const availableIntervals = [
      { start: "2018-03-22T15:30:00", end: "2018-03-22T16:30:00" },
      { start: "2018-04-22T17:30:00", end: "2018-05-22T17:00:00" }
    ];
    expect(getAvailableIntervals(interval, unavailableIntervals)).toEqual(
      availableIntervals
    );
  });
});
