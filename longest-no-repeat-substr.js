/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestNoRepeatSubstring = (str) => {
  // setup counter to return sub str length
  let count = 0;
  // set up indexs for the str
  let i = 0;
  let j = 0;
  // constructing a set
  // works like an array with add and delete functions
  let set = new Set();
  // the set will help us store and remove chars in str
  // while our indices are less than str length
  while (i < str.length && j < str.length) {
    // track the value of each char in the str
    let chars = str.charAt(j);
    // check if set doesnt have the char
    if (!set.has(chars)) {
      // add the char
      set.add(chars);
      // increment j for the next iteration
      j++;
      // reassign count to reflect our current longest sub str
      // pass Math.max our current count and indices
      count = Math.max(count, j - i);
    } else {
      // set must have the chars
      // so we delete from the set
      set.delete(str.charAt(i));
      // increment our i index
      i++;
    }
  }
  return count;
};

lengthOfLongestNoRepeatSubstring('abcaddmmm');
// output is 'abc'
