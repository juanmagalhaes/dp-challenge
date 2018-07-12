import { cammelCaseToSpaceSeparated } from "./";

describe("Question 2 => Cammel case to upper case separated words", () => {
  test("Simple example", () => {
    const inputString = "easyPeasy";
    const outputString = "Easy Peasy";

    expect(cammelCaseToSpaceSeparated(inputString)).toEqual(outputString);
  });

  test("Trick example", () => {
    const inputString = "haThisIsA VeryTrickyOne";
    const outputString = "Ha This Is A Very Tricky One";

    expect(cammelCaseToSpaceSeparated(inputString)).toEqual(outputString);
  });
});
