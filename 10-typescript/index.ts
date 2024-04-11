let olimpic_newgame: [object, boolean];

olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

// console.log(olimpic_newgame);

let olimpic_newgame2: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  false,
];

// console.log(olimpic_newgame2[1]);
// olimpic_newgame2[1] = true; //안됨
// console.log(olimpic_newgame2);

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로~~",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "marvel 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

console.log(heroGame_A.title, heroGame_B);

const sum = (a: number, b?: number) => {
  console.log(a, b);
};
sum(2);

function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(5, 6);

const sum2 = (...n: number[]): number => {
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    result += n[i];
  }
  return result;
};
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 87, 89));

function arrLength<T>(arr: T[]): number {
  return arr.length;
}
console.log(arrLength<string>(["a", "ㅠ", "ㄱ"]));
console.log(arrLength<number>([1, 23, 4, 5, 4, 3, 4]));

function arrElement<T>(arr: T[], index: number) {
  return arr[index];
}
console.log("++++++++++", arrElement([2, 3, 4], 2));
console.log("++++++++++", arrElement(["a", "b", "c"], 2));

function arrElement2<T>(arr: T[], index: number) {
  if (arr.length < index) {
    return false;
  } else return arr[index];
}
console.log(arrElement2([1, 2, 3], 6));
