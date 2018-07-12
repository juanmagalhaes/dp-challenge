import { stripQuoteFunctional, stripQuoteWithRegex } from "./";

const quotedString = `"s'''dj"""asd'asndmas‘‘md’nmr””kewrm“““ewrmwemrld"dskdja"sdjlaskjdalskj'dSDJKSD"JKSDLKSJD"'`;
const unquotedString =
  "sdjasdasndmasmdnmrkewrmewrmwemrlddskdjasdjlaskjdalskjdSDJKSDJKSDLKSJD";

describe("Question 1 => Function to strip quotes", () => {
  test("Functional approach => stripQuoteFunctional", () => {
    expect(stripQuoteFunctional(quotedString)).toEqual(unquotedString);
  });

  test("Regex approach => stripQuoteFunctional", () => {
    expect(stripQuoteWithRegex(quotedString)).toEqual(unquotedString);
  });
});
