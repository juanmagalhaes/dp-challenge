import { stripQuoteFunctional, stripQuoteWithRegex } from "./";

const quotedString = `"s'''dj"""asd'asld"dskdja"sdjlaskjdalskj'dSDJKSD"JKSDLKSJD"'`;
const unquotedString = "sdjasdaslddskdjasdjlaskjdalskjdSDJKSDJKSDLKSJD";

describe("Question 1 => Function to strip quotes", () => {
  test("Functional approach => stripQuoteFunctional", () => {
    expect(stripQuoteFunctional(quotedString)).toEqual(unquotedString);
  });

  test("Regex approach => stripQuoteFunctional", () => {
    expect(stripQuoteWithRegex(quotedString)).toEqual(unquotedString);
  });
});
