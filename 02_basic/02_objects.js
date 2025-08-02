//singleton


//object literals

const mySym=Symbol("key1")

const jsUser={
    name:"sujal",
    "full name":"SUJAL KUMAR",
    age:21,
    [mySym]:"mykey1",
    location:"Kangra",
    email:"sujal529@gmail.com",
}
// console.log(jsUser.name)
// console.log(jsUser[mySym])
// console.log(jsUser["full name"])


// jsUser.email="sujal64@gmail.com"
// Object.freeze(jsUser)           //freeze stop the changes in the object
// jsUser.email="kartik45@gmail.com"
// console.log(jsUser);


jsUser.greeting=function(){
    console.log("hello js user");
}

jsUser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}


console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())