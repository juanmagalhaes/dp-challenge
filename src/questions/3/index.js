import { stripQuoteWithRegex } from "app/questions/1";

export function slugify(str) {
  const repeatedSpecialChars = /\.+|\&+|\@+/g;
  const keepFirst = match => match[0];
  return stripQuoteWithRegex(str.toString().toLowerCase())
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(repeatedSpecialChars, keepFirst) // Ends repetition
    .replace(/@/g, "-at-") // Replace @ with '-at-'
    .replace(/\./g, "-dot-") // Replace @ with '-at-'
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .trim();
}
