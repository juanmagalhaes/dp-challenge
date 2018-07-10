import moment from 'moment';
import invariant from 'invariant';

const FORMAT = 'YYYY-MM-DDTHH:mm:ss.SS'

function toMoment(dt, format=FORMAT) {
  return moment(dt, format, true);
}

function toStringFormat(someMoment, format=FORMAT) {
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

  validateInterval(startingMoment, endingMoment);

  return { start, end }
}

export function getAvailableIntervals({ start, end }, unavailableIntervals) {
  const interval = toMomentInterval({ start, end })
  const startingMoment = toMoment(interval.start);
  const endingMoment = toMoment(interval.end);

  unavailableIntervals
    .map(toMomentInterval);
}
