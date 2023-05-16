//Is n divisible by x and y?
let isDivisible = (n, x, y) => ( n % x == 0 && n % y == 0 )

//Return Negative
function makeNegative(num) {
  return num > 0 ? -num : num;
}

//You're a square!
let isSquare = (n) => Number.isInteger(Math.sqrt(n))

//Grasshopper - Summation

var summation = function (num) {
  // Code here
return (num*(num +1))/2
}

//Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  // Code
  return eval (value1 + operation + value2)
}

//Sum of Numbers
function getSum(a, b){
  let i

  (a < b) ? i = a : i = b 
  if (a==b) {
    return a
  }
  else {
    let sum = 0
    if (a < b ){
      for (let i=a; i<=b; i++){
      sum = sum + i
      }
    }else{
          for (let i=b; i<=a; i++){
      sum = sum + i
        }    
      }
     return sum 
   }
}