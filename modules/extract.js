import get from './get.js';
import toPath from './toPath.js';
import isEmpty from './isEmpty.js';
import isUndefined from './isUndefined.js';

/**
 * Extracts a value from an object and removes the corresponding key.
 * @param {Object} object - The input object.
 * @param {string} key - The key to extract.
 * @param {boolean} deleteEmpty - If true, it deletes any empty object in the path (but not the root object).
 * @returns {*} The extracted value or undefined if the key is not found.
 */
export default function extract(object, key, deleteEmpty) {
	var deepDelete = function(object, keys, del) {
		var key = keys.shift();
		if(!key) return true;

		if(deepDelete(object[key], keys, del)) {
			delete object[key];
			return isEmpty(object) && del;
		}
	}

	var value = get(object, key);
	if(!isUndefined(value))
		deepDelete(object, toPath(key), Boolean(deleteEmpty));
	return value;
}
