import isEmpty from './isEmpty.js';
import toPath from './_toPath.js';

/**
 * Recursively deletes a property from an object based on a specified path.
 *
 * @param {Object} object - The object from which to delete the property.
 * @param {string} path - The path to the property. It is forced as Array.
 * @param {boolean} deleteEmpty - Whether to delete the entire object if it becomes empty after deletion.
 */
export default function deepDelete(object, path, deleteEmpty) {
	var keys = toPath(path);
	var key = keys.shift();
	if(!key) return true;

	if(deepDelete(object[key], keys, deleteEmpty)) {
		delete object[key];
		return isEmpty(object) && deleteEmpty;
	}
}
