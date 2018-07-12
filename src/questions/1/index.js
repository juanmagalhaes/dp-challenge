// Functional approach
export function stripQuoteFunctional(str) {
  const quotes = ["'", '"', "‘", "’", "“", "”"];
  return str
    .split("")
    .filter(c => !quotes.includes(c))
    .join("");
}

// Regex approach
export function stripQuoteWithRegex(str) {
  return str.replace(/\'|\"|‘|’|“|”/g, "");
}
