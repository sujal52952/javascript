// function SayMyName(){
//     console.log("SUJAL");
// }
// SayMyName() //--for the execution of the function use much use (). 

//add 2 numbers
// function addtwonumbers(number1,number2){

// console.log(number1 + number2);

// }
// addtwonumbers(3,12)

// function addtwonumbers(number1,number2){  //number 1 and 2 are called parameters
//     let result=number1+number2
//     // console.log("SUJAL")
//     return result;
// }
// const result=addtwonumbers(25,25);   //25,25 called arguments
// // console.log(result)


// function loginusermessage(username="sam"){
//     if(username === undefined){
// console.log("please");
// return 
//     }
//     return `${username} just log in`
// }
// console.log(loginusermessage("SUJAL"))


// function calculatecartPrice(...num1){
//     return num1
// }
// console.log(calculatecartPrice(2,400,500));

const user ={
    username:"sujal",
    price:200,
}
function handleobject(anyObject){
    console.log(`User name is ${anyObject.username} and the price is ${anyObject.price}`)
}
handleobject(user);
