// // 1. 문자 연산자(+) : 문자열을 이어 붙여준다.
// console.log('my' + 'cat');
// console.log('1' + 2);
// console.log(`string literals : 1 + 2 = ${1 + 2}`);

// ==========================================================================================

// // 2. 숫자 연산자(+,-,/,*,%,**) : 숫자들의 연산을 해준다.
// console.log(1 + 1);
// console.log(1 - 1);
// console.log(1 * 1);
// console.log(1 / 1); // 몫
// console.log(5 % 2); // 나머지
// console.log(2 ** 3); // 제곱

// ==========================================================================================

// 3. 증가, 감소 연산자(++,--) : 앞 뒤에 붙여 먼저 증가,감소 하거나 후에 증가,감소한다

// let counter = 2;
// console.log(`counter : ${counter++}`);
// console.log(`counter : ${counter}`);

// console.log(`counter : ${++counter}`);
// console.log(`counter : ${counter}`);

// console.log(`counter : ${counter--}`);
// console.log(`counter : ${counter}`);

// console.log(`counter : ${--counter}`);
// console.log(`counter : ${counter}`);

// ==========================================================================================

// // 4. 할당 연산자(=) : 값을 할당할 때 사용

// let x = 3;
// let y = 6;

// x += y;
// console.log(x);
// x -= y;
// console.log(x);
// x *= y;
// console.log(x);
// x /= y;
// console.log(x);

// ==========================================================================================

// // 5. 비교 연산자(>,<) : 값을 비교할 때 사용

// console.log(10 < 6);
// console.log(10 <= 6);
// console.log(10 > 6);
// console.log(10 >= 6);

// ==========================================================================================

// // 6. 논리 연산자(||,&&,!)

// function check() {
//     console.log('check');
// }

// // || : 처음이 true면 멈춘다.
// console.log(true || check());

// // && : 처음이 false면 멈춘다.(null체크 시 사용 가능)
// console.log(null && check());

// // ! : 값을 반대로
// console.log(!true);

// ==========================================================================================

// // 7. 동등 연산자(==,!=) : 값이 동등한지 판단하는 연산자

// const stringFive = '5';
// const numberFive = 5;

// // loose equality(타입 형변환이 일어남)
// console.log(stringFive == numberFive);

// // strict equality(타입 형변환이 안 일어남)
// console.log(stringFive === numberFive);

// // object equality
// const jasn1 = { name: 'jasn' };
// const jasn2 = { name: 'jasn' };
// const jasn3 = jasn1;

// console.log(jasn1 == jasn2); // f
// console.log(jasn1 === jasn2); // f(다른 값을 참조)
// console.log(jasn1 === jasn3); // t(같은 값을 참조)

// // 0, '', null, undefined
// console.log(0 == false); // true(0을 false로 간주)
// console.log(0 === false); // false(0은 0)
// console.log('' == false); // true(''을 false로 간주)
// console.log('' === false); // false(''은 '')
// console.log(null == undefined); // true(null을 undefined로 간주)
// console.log(null === undefined); // false(null은 null)

// ==========================================================================================

// // 8. 조건 연산자(if,else if, else) : 조건이 맞으면 실행하는 연산자

// const x = 'if';

// if (x === 'if') {
//     console.log(x);
// } else if (x === 'else if') {
//     console.log(x);
// } else {
//     console.log(x);
// }

// ==========================================================================================

// // 9. 삼항 연산자 : 조건연산자의 줄임 표현

// const x = 'if';
// console.log(x === 'if' ? x : 'else');

// ==========================================================================================

// // 10. switch : 해당 조건이면 실행

// const browser = 'Chrome';

// switch (browser) {
//     case 'IE':
//         console.log(browser);
//         break;
//     case 'Chrome':
//     case 'Firefox':
//         console.log(browser);
//         break;

//     default:
//         console.log(browser);
//         break;
// }

// ==========================================================================================

// // 11. while : 조건이 맞을 때 까지 실행

// let i = 0;

// while (i < 10) {
//     i++;
//     console.log(i);
// }

// ==========================================================================================

// // 12. do while : 먼저 실행하고 조건이 맞는지 확인

// let i = 0;

// do {
//     i++;
//     console.log(i);
// } while (i < 10);

// ==========================================================================================

// // 12. for : begin, condition, step에 맞춰서 실행

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
