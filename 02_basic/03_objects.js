//object singleton

// const tinderuser=new Object() 
const tinderuser={}
tinderuser.id="13215"
tinderuser.name="Sujal"
tinderuser.isLogginIn=false
// console.log(tinderuser.id);


// console.log(tinderuser);
const regularuser={
    email:"some@gmail.com",
    fullname:{
userfullname:{
    firstname:"Sujal",
    lastname:"Kumar"
}
    }
}
//console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)     //--combine objects
// console.log(obj3);

//also we can use 
const obj3={...obj1,...obj2}
console.log(obj3);