import { stripQuoteWithRegex } from "app/questions/1";

export function slugify(str) {
  const handledSpecialCharacters = /\.+|\&+|\@+/g;
  const keepFirst = match => match[0];
  return stripQuoteWithRegex(str.toString().toLowerCase())
    .replace(/\_/g, "-") // Replace spaces with -
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(handledSpecialCharacters, keepFirst) // Ends repetition
    .replace(/@/g, "-at-") // Replace @ with '-at-'
    .replace(/\./g, "-dot-") // Replace @ with '-at-'
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .trim();
}
