//FIND THE SMALLEST NAME FROM AN ARRAY
// ARRAY
const studentsName = [
  "Jakir",
  "Rajib",
  "Shamol",
  "Jhorna",
  "Sani",
  "Rubel",
  "Moni",
];
// FUNCTION THAT RECEIVES AN ARRAY
//IF THE ARRAY IS CONSIST OF TWO OR SEVERAL SMALL NAMES THEN OUR FUNCTION WILL RETURN THE FIRST SMALL NAME
function tinyName(array) {
  let smallestName = array[0]; // ASSUMING FIRST ELEMENT AS A SMALLEST NAME
  for (let i = 1; i < array.length; i++) {
    if (smallestName.length > array[i].length) {
      smallestName = array[i];
    }
  }
  return smallestName;
}
let result = tinyName(studentsName);
console.log(result); //IT WILL RETURN => Sani
