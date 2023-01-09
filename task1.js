var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

//answers
//1
for(let num = 0;num<nestedData.innerData.numberData.primeNumbers.length;num++){
    console.log(nestedData.innerData.numberData.primeNumbers[num]);
}  

//2
console.log("Fibonnci numbers");
let fibonnaci = nestedData.innerData.numberData.fibonnaci
for(let fibo = 0;fibo<fibonnaci.length;fibo++){
    if(fibonnaci[fibo] % 2 === 0){
        console.log(fibonnaci[fibo]);
    }
}

//3
// console.log("value");
console.log(nestedData.innerData.order[1]);

//4
console.log(nestedData.innerData.addSnack('chocolate')
);

//5

var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
        console.log("What is this?",this);
          this.snacks.push(snack);
          return this;
      }
    }
  }


