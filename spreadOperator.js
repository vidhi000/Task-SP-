//The spread operator ... is used to expand or spread an iterable or an array.
// For example,
const arr = ["My","name","is","vidhi"]
console.log(arr);
console.log(...arr)

arr1 = [2,3]
arr2=[...arr1,4,5,6,7,8]
console.log(arr2);

// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}


//rest oprator
//When the spread operator is used as a parameter, it is known as the rest parameter.
//You can also accept multiple arguments in a function call using the rest parameter. For example,


const num = (...arguments)=>{
    return arguments
}
console.log(num(4)
);
console.log(num(3,4,5,6)
);

//tamplate literals
let name = "vidhi"
let lname = "rana"
let age = 20

console.log(`My name is ${name} ${lname} and My age is ${age}`);

//destructuring 
//In it we can extract data from arrays and objects and assign to variables

let array = ["My","name","is","Vidhi"]
let a = array[0]
let b = array[1]
console.log(a,b)

let [fruitname,price] = ['apple',30]
console.log(fruitname);
console.log(price);

const value = {
    v1 : 30,
    v2 : 50,
    v3 : 100
}
const a1 = value.v1
console.log(a1);

const a2 = value.v2
const a3 = value.v3

console.log(a2);
console.log(a3);
