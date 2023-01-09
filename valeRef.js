//pass by value - function is callled by directly passing a value of the variable as an argument.
//pass by refrence - function is called by directly passing a ref. of the variable as an argument.

// const sum = (a,b)=>{
//     let a = 10;
//     let b = 20;
//     return a+b
// }

// console.log(sum(a,b));

// function Passbyvalue(a, b) {
// 	let tmp;
// 	tmp = b;
// 	b = a;
// 	a = tmp;
// 	console.log(`Inside Pass by value
// 		function -> a = ${a} b = ${b}`);
// }

// let a = 1;
// let b = 2;
// console.log(`Before calling Pass by value
// 		Function -> a = ${a} b = ${b}`);

// Passbyvalue(a, b);

// console.log(`After calling Pass by value
// 	Function -> a =${a} b = ${b}`);

//example

// function passbyValue(a,b){
//     let temp;
//     temp = a;
//     a = b;
//     b = temp;
//     console.log(`inside ${a} and ${b}`);

// } 

// let a =50
// let b = 60

// console.log(`after calling ${a} and ${b}`);

// passbyValue(a,b)


//passbyrefrence example
 function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
 
    console.log(`Inside Pass By Reference
        Function -> a = ${obj.a} b = ${obj.b}`);
}
 
let obj = {
    a: 10,
    b: 20
 
}
console.log(`Before calling Pass By Reference
    Function -> a = ${obj.a} b = ${obj.b}`);
 
PassbyReference(obj)
 
console.log(`After calling Pass By Reference
    Function -> a = ${obj.a} b = ${obj.b}`);