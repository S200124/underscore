import has from './has.js';
import get from './get.js';

/**
 * Extracts a value from an object and removes the corresponding key.
 * @param {Object} object - The input object.
 * @param {string} key - The key to extract.
 * @returns {*} The extracted value or undefined if the key is not found.
 */
export default function extract(object, key) {
  if (!has(object, key))
    return;
  var value = get(object, key);
  delete object[key];
  return value;
}
