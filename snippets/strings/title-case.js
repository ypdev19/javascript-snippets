/**
 * #1: Using replace method and regex
 * We normalize the string by converting everything first to lowercase and then use regex to match only the first 
 * letter of each word to then replace it as uppercase.
 * 
 * @param {*} str The string to convert
 * @returns The title case string
 */
function convertToTitleCaseUsingRegex(str) {
  if (!str) {
      return ""
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

console.log(convertToTitleCaseUsingRegex('welcome to my article'));
console.log(convertToTitleCaseUsingRegex('THE avengers'));

/**
 * #2: Using map() function
 * 
 * With str.toLowerCase().split(' ') we turn the sentence into an array and with the map() function we transform the 
 * element and build a new array from the results.
 * 
 * @param {*} str The string to convert
 * @returns The title case string
 */
function convertToTitleCaseUsingMap(str) {
  if (!str) {
      return ""
  }
  
  return str.toLowerCase().split(' ').map(function (word) {
     return word.charAt(0).toUpperCase().concat(word.substr(1));
  }).join(' ');
}

console.log(convertToTitleCaseUsingMap('welcome AGAIN to MY aRticle'));
console.log(convertToTitleCaseUsingMap('THE avengers MOVIe'));


/**
 * #3: Using map againg but having in consideration certains exceptions when converting the string
 * 
 * Here, not all words in the sentence need to be converted, so we check if the current word is or not eligible 
 * for title case.
 * 
 * @param {*} str The string to convert
 * @returns The title case string
 */
function convertToTitleCaseWithConditions(str) {
  if (!str) {
      return ""
  }

  const exceptions = ['of', 'the', 'and'];
  
  return str.toLowerCase().split(' ').map((word, i) => {
            return exceptions.includes(word) && i != 0 ? word : word.charAt(0).toUpperCase().concat(word.substr(1));
		}).join(' ');
} 

console.log(convertToTitleCaseWithConditions('lord OF the rings'));	
console.log(convertToTitleCaseWithConditions('people AND people'));	
console.log(convertToTitleCaseWithConditions('someTHING ABOUT THE article'));