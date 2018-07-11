import moment from 'moment';
import invariant from 'invariant';

const DEFAULT_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

function toMoment(stringDate, format=DEFAULT_FORMAT) {
  return moment(stringDate, format, true);
}

function toStringFormat(someMoment, format=DEFAULT_FORMAT) {
  return someMoment.format(format);
}

function validateInterval(start, end) {
  const msgFor = m => {
    const { format } = m.creationData();
    return `Not a valid moment for format: ${format}`
  };

  invariant(start.isValid(), msgFor(start));
  invariant(end.isValid(), msgFor(end));
  invariant(start < end, `"end" must be after "start" => start: ${start}, end ${end}`);
}

function toMomentInterval(interval) {
  const start = toMoment(interval.start);
  const end = toMoment(interval.end);

  validateInterval(start, end);

  return { start, end };
}

export function getAvailableIntervals({ start, end }, unavailableIntervals) {
  const {
    start: startingMoment,
    end: endingMoment
  } = toMomentInterval({ start, end });

  const availableIntervals = [];

  unavailableIntervals
    .map(toMomentInterval)
    .sort((x, y) => x.start > y.start)
    .forEach((interval, idx, unavailabelIntervals) => {
      const previousInterval = unavailabelIntervals[idx - 1];
      const nextInterval = unavailabelIntervals[idx + 1];

      const validateIntersection = ({ start, end }) => {
        invariant(start <= end, `Intersection of unavailable intervals => end: ${end},  start: ${start}`);
      };

      const addAvailableInterval = ({ start, end }) => {
        validateIntersection({ start, end });
        // Avoid create a interval of equal date and time
        if (end > start) {
          availableIntervals.push({ start, end });
        }
      };

      if (!previousInterval) {
        const start = startingMoment;
        const end = interval.start;
        addAvailableInterval({ start, end });
      }

      if (nextInterval) {
        const start = interval.end;
        const end = nextInterval.start;
        addAvailableInterval({ start, end });
      }

      if (!nextInterval) {
        const start = interval.end;
        const end = endingMoment;
        addAvailableInterval({ start, end });
      }
    });

  return availableIntervals.map(interval => ({
    start: toStringFormat(interval.start),
    end: toStringFormat(interval.end),
  }));
}
