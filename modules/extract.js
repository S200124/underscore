import get from './get.js';
import isUndefined from './isUndefined.js';
import deepDelete from './_deepDelete.js';

/**
 * Extracts a value from an object and removes the corresponding key.
 * @param {Object} object - The input object.
 * @param {string} key - The key to extract.
 * @param {boolean} deleteEmpty - If true, it deletes any empty object in the path (but not the root object).
 * @returns {*} The extracted value or undefined if the key is not found.
 */
export default function extract(object, key, deleteEmpty) {
	var value = get(object, key);
	if(!isUndefined(value))
		deepDelete(object, key, deleteEmpty);
	return value;
}
