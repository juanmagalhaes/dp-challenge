export function cammelCaseToSpaceSeparated(str) {
  return str
    .replace(/\s/g, "")
    .split(/(?=[A-Z])/)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
