import {
  cammelCaseToSpaceSeparated
} from './'

const inputString = 'ThisIsATrickyOne';
const outputString = 'This Is A Tricky One';

describe('Question 2 => Cammel case to upper case separated words', () => {
  test('Regex Functional approach => cammelCaseToSpaceSeparated', () => {
    expect(cammelCaseToSpaceSeparated(inputString)).toEqual(outputString)
  });
});
