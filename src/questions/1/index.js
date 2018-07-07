// Functional approach
export function stripQuoteFunctional(str) {
  return str.split('').filter(c => c !== '"').join('');
}

// Regex approach
export function stripQuoteWithRegex(str) {
  return str.split('').filter(c => c !== '"').join('');
}
