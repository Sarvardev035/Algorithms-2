/**
 * @param {any} val
 * @return {Object}
 * The returned object should have a 'toBe' and 'notToBe' method.
 */
var expect = function(val) {
    return {
        /**
         * @param {any} otherVal
         * @return {boolean}
         * @throws {Error} "Not Equal" if the values are not strictly equal (===).
         */
        toBe: (otherVal) => {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },

        /**
         * @param {any} otherVal
         * @return {boolean}
         * @throws {Error} "Equal" if the values are strictly equal (!==).
         */
        notToBe: (otherVal) => {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

/**
 * Example usage:
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
