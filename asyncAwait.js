//"async and await make promises easier to write"

//async makes a function return a Promise

//await makes a function wait for a Promise

function myFunction() {
    return Promise.resolve("Hello");
  }

  console.log(myFunction());  

  async function myFunction() {
    return "Vidhi Rana";
  }

  console.log(myFunction());  

  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);}
  );
  
  async function myFunction() {
    return setTimeout(()=>{
            console.log("Vidhi Rana");
    },2000)
  }
  myFunction()


