let number1 = [1, 2, 3, 4, 5];
let number2 = [0, 31, 24, 10, 1, 9];
let number3 = [9, 31, 99, 100, 236, 64, 5];

function solution(number3) {
  var answer = 0;
  let max1 = Math.max(...number3);
  console.log(number3.pop(max1));
  //   let max2 = Math.max(...(number3 - max1));
  //   console.log(max2);
  answer = number2[3] * number2[4];
  //   console.log(answer);
  return answer;
}

solution(number3);
