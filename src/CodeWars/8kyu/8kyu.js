// Training JS #1: create your first JS function and print "Hello World!"
function helloWorld (){
    return "Hello World!"
  }
  console.log(helloWorld);

// Training JS #2: Basic data types--Number
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

const equal1 = () => v1 + v1
const equal2 = () => v3 - v1
const equal3 = () => v1 * v5
const equal4 = () => v4 / v5
const equal5 = () => v2 % v4

// Training JS #3: Basic data types--String
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"

const Dad = () => d1 + a2 + d2
const Bee = () => b1 + e2 + e2
const banana = () => b2 + a2 + n2 + a2 + n2 + a2

const answer1 = () => "no"
const answer2 = () => "no"
const answer3 = () => "yes"

// Training JS #4: Basic data types--Array
// function getLength(arr){
//     //return length of arr
//     return arr.length;
//   }
const getLength = arr => arr.length;

//   function getFirst(arr){
//     //return the first element of arr
//     return arr[0];
//   }
const getFirst = arr => arr[0];

//   function getLast(arr){
//     //return the last element of arr
//     return arr[arr.length -1];
//   }
const getLast = arr => [arr.length - 1];

  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    return arr;
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr;
  }

  // Training JS #5: Basic data types--Object
  // make sure to make it local scope instead of global
  function animal(obj){
    var newAnimal = {
      name: obj.name,
      legs: obj.legs,
      color: obj.color
    };
  
  
  return "This " + newAnimal.color + " " + newAnimal.name + " has " + newAnimal.legs + " legs.";
  }

  // function animal(obj){
  //   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  // }

  // Training JS #6: Basic data types--Boolean and conditional statements if..else