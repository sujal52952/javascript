const marvel_heros=["thor","ironman","spiderman"]

const dc_heros=["batman","flash","brute"]

// marvel_heros.push(dc_heros)


// console.log(marvel_heros);

// const allheros=marvel_heros.concat(dc_heros)   //concat give us new array merge the array
// console.log(allheros);

const allewheros=[...marvel_heros,...dc_heros]  //same work as concat called spread
// console.log(allewheros);



const anotherarray=[1,2,3,3,[62,2,65,5],56,5,[6543,654,654]]
const real_another_array=anotherarray.flat(Infinity)          //flat is used to join multiple array into single array

// console.log(real_another_array);

// console.log(Array.isArray("SUJAL"))  //tells us that this array is present or not
// console.log(Array.from("SUJAL"))     //convert it into array


let marks1=100
let marks2=200
let marks3=400
console.log(Array.of(marks1,marks2,marks3));  //Array.of convert multiple value into single array