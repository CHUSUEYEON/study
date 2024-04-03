let side1 = [1, 2, 3]; //2

let side2 = [3, 6, 2]; //2

let side3 = [199, 72, 222]; //1

function solution(side1) {
  var answer = 0;
  // console.log(Math.max(...sides))

  let arr = side1.sort();
  console.log(arr);
  answer = arr[0] + arr[1] > arr[2] ? 1 : 2;
  console.log(answer);
  return answer;
  //   let max = Math.max(...side1);
  //   // console.log(sides.filter((el)=>el != max))
  //   // let odd = sides.filter((el)=> el != max)
  //   // answer = odd[0] + odd[1] > max ?  1 : 2
  //   // return answer

  //   for (i = 0; i < side1.length; i++) {
  //     if (side1[i] != max) {
  //       answer += side1[i];
  //     }
  //   }
  //   console.log(answer);
  //   console.log(max);
  //   if (answer > max) {
  //     return console.log(1);
  //   } else return console.log(2);
}

solution(side3);
