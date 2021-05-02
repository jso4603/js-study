// 1. Use strict

/* 
    added in ES 5
    use this for Vanila Javascript.
    설명 : 상식적인 범위 안에서 javascript를 사용할 수 있게 해줌.
    ECMASript5이상에 추가됨. 타입스크립트에는 필요없음.
*/

'use strict';

// ==========================================================================================

// 2. Varaibale(변수) => (read/write) 변할 수 있는 값

/* 
    1) let (added in ES6) => let은 es6부터 추가되었다.

    어플리케이션을 실행하게 되면 어플리케이션 마다 쓸 수 있는 메모리가 할당되어진다.
    let을 이용해서 myName이라는 변수를 정의하게 되면
    하나의 메모리를 가르킬 수 있는 포인터가 생성된다.
    myName이라는 변수가 가르키는 메모리 어딘가에 변수의 값이 저장된다.
    추후 메모리에 다른 값을 변경하여 저장할 수 있다.
*/

// // let이라는 키워드를 이용해 myName이라는 변수를 선언하고 jasn을 할당

// let myName = 'jasn';
// console.log(myName);

// // myName에 hello라는 새로운 값을 할당하면 myName이 가르키는 메모리에 새로운 값이 저장된다.

// myName = 'hello!';
// console.log(myName);

// ==========================================================================================

/* 
    2) block scope & global scope

    파일 안에다가 바로 정의해서 쓰는 변수들을 globalScope 라고 한다.
    블록 바깥,안 전부 다 사용할 수 있다.
    어플리케이션 실행부터 끝날 때까지 메모리에 저장되기 떄문에 최소한으로 사용하는 것이 좋다.
*/

// let globalScope = 'jasn-ok';
// {
//     let myName = 'jasn';
//     console.log(myName);

//     myName = 'hello!';
//     console.log(myName);
//     console.log(globalScope);
// }

// // myName은 정의되지 않았다고 출력한다.

// // console.log(myName);
// console.log(globalScope);

// ==========================================================================================

/*
    3) var

    변수가 선언되기 전에도 값을 할당할 수 있고 출력도 할수 있다.(undefined)
    그렇기에 사용하지 않아야 한다.
    이것을 var hoisting이라고 한다.
    hoisting(올려주다) : 어디에서 선언했는지 에 상관없이 선언을 항상 제일 위로 끌어올려 주는 것.
*/

// console.log(age);
// age = 4;
// var age;

// // 블록 scope를 무시하기도 한다.

// {
//     age = 4;
//     var age;
// }
// console.log(age);

// // let으로 같은 방식을 시도해보면 age는 초기화전에 접근할 수 없다는 오류가 뜬다.

// age = 4;
// let age;

// ==========================================================================================

/*
    4) Constant => r(read only) / 값을 할당한 뒤로는 값을 변경할 수 없다.

    왠만하면 const를 사용하여야 한다.
    누군가가 인위적으로 변수의 값을 바꿀 수 없으니 보안상으로 좋다.
    다양한 thread가 동시에 접근해서 값을 변경하는 걸 막아줄 수 있다.
    human mistake을 방지할 수 있다.
*/

// const daysInWekek = 7;
// const maxNumber = 5;

// ==========================================================================================

/*
    5) Variable types => 변수 타입의 종류

    primitive type : 더 이상 작은 단위로 나눠질 수 없는 single item
                     값 자체가 메모리에 저장 됨.   
                     데이터 자체를 변경할 수 없는 Immutable data type 이다.
                     ex) 한 번 string을 정의하게 되면 통째로 메모리에 올렸다가 다른 string으로 변경은 가능하지만
                         string data 자체를 변경하는 건 불가능하다.

    number, string, boolean, null, undefined, symbol

    object : single item을 여러 개 묶어서 보관하는 box container
             값을 가르키는 reference가 메모리에 저장되고 reference는 실제 값들을 가르킨다.
             object는 너무 커서 메모리에 한 번에 다 올라갈 수 없다.
             데이터를 변경할 수 있는 Mutable data type 이다.(frozen objects(object.freeze()) 는 Immutable)
             ex) object, array는 data를 변경할 수 있다.

    function : function도 변수에 할당이 가능하다.(first-class function)


*/

// ==========================================================================================
/*
    6) number 

    javascript는 값에 상관없이 숫자면 type을 number로 할당한다.
*/
// const count = 17;
// const size = 17.1;

// console.log(`value: ${count}, type : ${typeof count}`); // value: 17, type : number
// console.log(`value: ${size}, type : ${typeof size}`); // value: 17.1, type : number

// ==========================================================================================

// // 7) special numeric values : infinity, -infinity, NaN

// // 양의 무한대 숫자
// const infinity = 1 / 0;
// // 음의 무한대 숫자
// const negativeInfinity = -1 / 0;
// // 숫자가 아님
// const nAn = 'not a number' / 2;

// console.log(infinity); // Infinity
// console.log(negativeInfinity); // -Infinity
// console.log(nAn); // NaN

// ==========================================================================================

/*
    8) bigInt

    javascript의 최대 숫자 이상을 사용할 수 있다.(크롬, 사파리만 이용 가능)
    숫자 뒤에 n을 붙여서 사용한다.
*/
// const bigInt = 123456768901234567890n;
// console.log(`value: ${bigInt}, type : ${typeof bigInt}`);

// ==========================================================================================

/*
    9) boolean
    
    false : 0, null, undefined, NaN, ''
    true : false를 제외한 모든 값은 ture
*/

// const test = 3 < 1;

// ==========================================================================================

/*
    10) null & undefined

    null : empty 값이라고 지정해주는 것
    undefined : 선언은 되었지만 값이 아무것도 지정되어있지 않은 것
*/

// let nothing = null; // object 타입이지만 value는 null로 비어있다.
// let a;
// console.log(`value: ${nothing}, type : ${typeof nothing}`);
// console.log(`value: ${a}, type : ${typeof a}`);

// ==========================================================================================

/*
    11) symbol : 고유한 식별자가 필요하거나 우선순위를 주고 싶을 때 사용한다.
    
    symbol의 value를 출력하면 error가 발생 description을 이용하여 출력해야 한다.
*/

// const symbol1 = Symbol('id'); // 두 가지는 서로 다른 고유한 식별자 이다.
// const symbol2 = Symbol('id');

// // Symbol.for() : 주어진 string에 맞는 심볼을 생성해 준다.
// const symbol3 = Symbol.for('id'); // 'id'에 맞는 symbol
// const symbol4 = Symbol.for('id');

// console.log(symbol1 === symbol2); // false
// console.log(symbol3 === symbol4); // true

// console.log(`value: ${symbol4.description}, type : ${typeof symbol4}`);

// ==========================================================================================

// // 12) Dynamic typing : 해당된 값에 따라서 타입이 변경될 수 있다.

// let text = 'hello'; // string
// console.log(text.charAt(0)); // h
// console.log(`value: ${text}, type : ${typeof text}`);
// text = 1; // string에서 number로 변환
// console.log(`value: ${text}, type : ${typeof text}`);
// text = '7' + 5; // string + number = string
// console.log(`value: ${text}, type : ${typeof text}`);
// text = '8' / '2'; // stirng / string = number
// console.log(`value: ${text}, type : ${typeof text}`);
// console.log(text.charAt(0)); // number의 char값을 구하는 거니까 error
