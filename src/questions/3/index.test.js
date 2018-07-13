import { slugify } from "./";

describe("Question 3 => Slugify email address", () => {
  const simple = "juan@rockstar.com";
  test(`Simple case => ${simple}`, () => {
    const expectedOutput = "juan-at-rockstar-dot-com";
    expect(slugify(simple)).toEqual(expectedOutput);
  });

  const withSomeSpecialCharacters = "batman&robin!#$%'*+-/=?^_`{|}~@dc.comics";
  test(`With some special characters=> ${withSomeSpecialCharacters}`, () => {
    const expectedOutput = "batman-and-robin-at-dc-dot-comics";
    expect(slugify(withSomeSpecialCharacters)).toEqual(expectedOutput);
  });

  const trickyCornerCase = `"John ... Doe &&&  Me@"@nowhere.com`;
  test(`Tricky corner case => ${trickyCornerCase}`, () => {
    const expectedOutput = "john-dot-doe-and-me-at-nowhere-dot-com";
    expect(slugify(trickyCornerCase)).toEqual(expectedOutput);
  });
});
