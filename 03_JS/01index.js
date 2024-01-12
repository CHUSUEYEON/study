// FOR문 이용해서 구구단 만들기
// 2단 2 * 1 = 2, 2 * 2 = 4


for(I = 2; I < 10; I++){
    console.log(I,'단');
    for(i = 1; i < 10; i++){
        console.log(I, " X ", i, " = ", I*i);
    }
}