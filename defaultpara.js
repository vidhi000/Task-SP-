//The concept of default parameters is a new feature introduced in the ES6 version
// of JavaScript. This allows us to give default values to function parameters. Let's take an example,


const sum = (a = 3, b = 4)=>{
  return a + b
}

console.log(sum()) //7
console.log(sum(3,5)) //8
console.log(sum(6)); //10


