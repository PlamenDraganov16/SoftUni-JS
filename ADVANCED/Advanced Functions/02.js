function solution(initial) {
  return function(num) {
    return initial + num;
  };
}

let add5 = solution(5)
console.log(add5(2)); 
console.log(add5(3));