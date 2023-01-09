//set = it is collection of unique values
//The Set object lets you store unique values of any type, whether primitive values or object references.

const set1 = new Set()
set1.add(5)
set1.add(10)

console.log(set1.size);

for(const item of set1){
    console.log(item);
}
set1.clear()
console.log(set1.size);

set1.add("vidhi")
set1.add(20)

for(const ele of set1){
    console.log(ele);
}
set1.delete(20)
console.log(set1);

set1.add("Potatoes")
set1.add(56)

//The entries() method returns a new Iterator object that contains an 
//array of [value, value]
let res = set1.entries()
// for(const items of res){
//     console.log(items);
// }
console.log(res);

//forEach -- executes provided function once for each ele of in a set object.
function intro (val1,val2,ele){
    console.log(`s${val1} = ${val2}`);
}
new Set(['vidhi','rana',554]).forEach(intro)

//has -- returns boolean value if value is exist or not
const set2 = new Set([2,3,6,7,8,10])
console.log(set2.has(5))
console.log(set2.has(6));
console.log(set2.values());
// console.log(set2.keys);