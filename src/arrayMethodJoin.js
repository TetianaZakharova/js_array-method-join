'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let customSeparator = separator;

    if (separator === undefined) {
      customSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (!emptyNullElements(this[i])) {
        str = str + this[i];
      } else {
        str = str + '';
      }

      if (this.length > (i + 1)) {
        str += customSeparator;
      }
    }

    return str;
  };

  function emptyNullElements(value) {
    return (
      value === undefined
      || value === null
      || value === ''
      || value.length === 0
    );
  }
}

module.exports = applyCustomJoin;
