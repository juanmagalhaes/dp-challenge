// Regex Functional approach
export function cammelCaseToSpaceSeparated(str) {
  return str.split(/(?=[A-Z])/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
