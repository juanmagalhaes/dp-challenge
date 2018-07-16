import { slugify } from "./";

describe("Question 3 => Slugify email address", () => {
  const simple = "juan@rockstar.com";
  test(`Simple case => ${simple}`, () => {
    const expectedOutput = "juan-at-rockstar-dot-com";
    expect(slugify(simple)).toEqual(expectedOutput);
  });

  const withSomeSpecialCharacters = "email!#$%'*-/=?^_`{|}~@domain.io";
  test(`With some special characters=> ${withSomeSpecialCharacters}`, () => {
    const expectedOutput = "email-at-domain-dot-io";
    expect(slugify(withSomeSpecialCharacters)).toEqual(expectedOutput);
  });

  const withAnd = "batman&robin@dc.comics";
  test(`With & character=> ${withAnd}`, () => {
    const expectedOutput = "batman-and-robin-at-dc-dot-comics";
    expect(slugify(withAnd)).toEqual(expectedOutput);
  });

  const withPlus = "one+two@three.numbers";
  test(`With + character => ${withPlus}`, () => {
    const expectedOutput = "one-plus-two-at-three-dot-numbers";
    expect(slugify(withPlus)).toEqual(expectedOutput);
  });

  const trickyCornerCase = `"John ... Doe &&&  Me@"@nowhere.com`;
  test(`Tricky corner case => ${trickyCornerCase}`, () => {
    const expectedOutput = "john-dot-doe-and-me-at-nowhere-dot-com";
    expect(slugify(trickyCornerCase)).toEqual(expectedOutput);
  });
});
