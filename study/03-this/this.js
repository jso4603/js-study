/*
    this : 자바스크립트에서 '나 자신' 이라는 뜻

    어떤 상황인지에 따라서 의미(값)이 바뀐다.
*/

// globalThis.myName = 'window name';

// function log() {
//     console.log(this.myName);
// }

// var obj = {
//     myName: 'jasn',
//     logName: log,
// };

// log(); // window name
// obj.logName(); // jasn

/*
    1. 일반 함수 실행 방식에서 this === window
*/

// // Example #1 stric mode가 아닐 때는 this를 쓰면 윈도우를 가르킨다.

// function foo() {
//     console.log(this); // 'this' === global object (브라우저상에서는 window 객체)
// }

// foo();

// ==========================================================================================

// // Example #2 strict mode에서는 undefined

// 'use strict';

// function foo() {
//     console.log(this); // stric mode에서 this는 undefined
// }

// foo(); // undefined

// ==========================================================================================

// Example #3 함수 방식으로 this를 부르면 this는 window

// globalThis.age = 100;

// function foo() {
//     let age = 99;
//     bar();
// }

// function bar() {
//     console.log(this.age); // 100
//     // 'use strict' 을 쓰면 age가 정의되지 않았다고 error가 뜬다.
// }

// foo();

// =================================================================================

/*
    2. Dot Notation(점 방식)에서 this === 점 앞에 있는 객체
*/

// // Example #1

// globalThis.age = 100;

// let jasn = {
//     age: 31,
//     foo: function foo() {
//         console.log(this.age);
//     },
// };

// jasn.foo(); // this === 점 앞에 있는 객체

// ==========================================================================================

// // Example #2

// function foo() {
//     console.log(this.age);
// }

// globalThis.age = 100;

// let jasn = {
//     age: 31,
//     foo: foo,
// };

// let ken = {
//     age: 35,
//     foo: foo,
// };

// jasn.foo(); // 31 (점으로 불렀을 때 this는 점 앞의 객체)
// ken.foo(); // 35 (점으로 불렀을 때 this는 점 앞의 객체)

// ==========================================================================================

// // Example #3 dot notation vs 일반 함수 방식

// globalThis.age = 100;

// let jasn = {
//     age: 31,
//     foo: function bar() {
//         console.log(this.age);
//     },
// };

// let ken = {
//     age: 35,
//     foo: jasn.foo,
// };

// let foo = jasn.foo;

// jasn.foo(); // 31 (점으로 불렀을 때 this는 점 앞의 객체)
// ken.foo(); // 35
// foo(); // 100(일반함수 방식일 때 this는 윈도우)

// =================================================================================

/*
    3. Function.prototype.call, Function.prototype.bind, Function.prototype.apply

    this값을 직접적으로 지정해주는 방식
    
    this === function의 인자 값(지정한 객체)
*/

// // Example #1

// globalThis.age = 100;

// function foo() {
//     console.log(this.age);
// }

// let ken = {
//     age: 35,
// };

// let jasn = {
//     age: 31,
// };

// foo(); // 100
// foo.call(ken); // 35
// foo.apply(jasn); // 31

// =================================================================================

// // Example #2 this === function의 첫 번째 인자

// globalThis.age = 100;

// function foo(a, b, c, d, e) {
//     console.log(this.age);
//     console.log(arguments);
// }

// let jasn = {
//     age: 31,
// };

// // call은 인자의 수가 정해져 있지 않다.
// // 첫 번째 인자 : this , 나머지 : arguments
// foo.call(jasn, 1, 2, 3, 4, 5); // 31 , [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// // apply는 인자를 두 개만 받는다.
// // 첫 번째 인자 : this , 두 번째 인자 : 무조건 배열(배열의 요소들이 arguments)
// foo.apply(jasn, [1, 2, 3, 4, 5]); // 31, [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// =================================================================================

// // Example #3

// globalThis.age = 100;

// function foo() {
//     console.log(this.age);
// }

// let jasn = {
//     age: 31,
// };

// // bind는 바로 함수를 실행하지 않는다. 인자로 받은 객체를 this로 설정하고 함수를 반환
// // 첫 번째 인자 : this
// let bar = foo.bind(jasn);
// // 함수를 실행
// bar(); // 31

// =================================================================================

// // Example #4

// globalThis.age = 100;

// function foo() {
//     console.log(this.age);
//     console.log(arguments);
// }

// let jasn = {
//     age: 31,
// };

// // bind는 바로 함수를 실행하지 않는다. 인자로 받은 객체를 this로 설정하고 함수를 반환
// // 첫 번째 인자 : this
// let bar = foo.bind(jasn);
// // 함수를 실행
// bar(1, 2, 3, 4, 5); // 31, arguments

// =================================================================================

/*
    4. 'new' keyword

    this === 빈 객체(새로 생성되서 할당)
*/

// // Example #1

// function foo() {
//     console.log(this);
// }

// // new : 새로운 객체가 생성되서 실행된다.
// new foo(); // foo{}

// =================================================================================

// // Example #2

// function foo() {
//     // new로 생성하면 주석 부분이 자동으로 된다고 생각하면 된다.

//     // this = {};

//     this.name = 'jasn';

//     // {
//     //     name: 'jasn'
//     // }

//     // return this;
// }

// // new : 새로운 객체가 생성되서 실행된다.
// let jasn = new foo(); // foo{}
// console.log(jasn); // foo { name: 'jasn' }

// =================================================================================

// // Example #3 new 객체에 인자로 넘겨주는 방식

// function foo(name) {
//     // new로 생성하면 주석 부분이 자동으로 된다고 생각하면 된다.

//     // this = {};

//     this.name = name;

//     // {
//     //     name: 'jasn'
//     // }

//     // return this;
// }

// // new : 새로운 객체가 생성되서 실행된다.
// let jasn = new foo('jasn'); // foo{}
// console.log(jasn); // foo { name: 'jasn' }

// =================================================================================

/* 
    Example #4  생성자 함수

    new를 써서 만드는 함수를 보통 생성자 함수라고 하고
    생성자 함수의 첫 글자는 보통 대문자로 써준다.
*/

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // new는 별개의 새로운 객체를 생성
// // 새로 만들어진 객체를 인스턴스(instance) 라고 부른다
// let jasn = new Person('jasn', 31);
// let ken = new Person('ken', 34);
// console.log(jasn); // Person { name: 'jasn', age: 31 }
// console.log(ken); // Person { name: 'ken', age: 34 }

// =================================================================================

/* 
    5. 예외 상황 - Event Handler

    보통 Event Handler에 this를 쓰지 않는다. (헷갈리게 하기 때문에)
*/

// let element = document.querySelector('#jasn');

// element.addEventListener('click', function onClick(e) {
//     console.log(this);
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

// =================================================================================
