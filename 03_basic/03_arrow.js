const user={
    username:"SUJAL",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);   //this is used in object not in function
        console.log(this);
    }
    
}
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage();
//    console.log(this);



// function chai(){
//     username:"sujal"
// //     console.log(this.username);
// // }
// chai();



// const chai=function(){
//     username:"sujal"
//     console.log(this.username);
// }
// chai()


//-----------------arrowfunction

// const chai=() => {
//     username:"sujal"
//     console.log(this.username);
// }
// chai()

const addtwo=(num1,num2)=> num1+num2;                                 //this is implicit function in which you don,t have to write full function directly give command
console.log(addtwo(5,3))




