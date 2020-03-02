---
layout: post
title: "ES6 제너레이터(Generator)"
featured-img: es6_generator
categories: [ES6, Javascript]
date: 2020-03-02 09:37
---

# ES6 제너레이터(Generator)

## What is Generator?

제너레이터(generator)는 함수의 실행을 중간에 멈추고 재개할 수 있는 기능입니다.
<br>
실행을 멈출 때 마다 값을 전달 할 수 있기 때문에, 반복문에서 제너레이터가 전달하는 값을
<br>
하나씩 꺼내 사용 할 수 있습니다.

또한, 보통의 콜렉션과 다르게, 값을 미리 만들어 놓지 않고, 필요한 순간에 값을 계산해서
<br>
전달할 수 있어 메모리 측면에서도 효율적입니다.

간단하게 코드를 살펴 봅시다.

```javascript
function* genFunc() {
    yield 100;
    yield 200;
    return 'finished';
}

const gen = genFunc1();
```

* 별표와 함께 정의된 함수는 제너레이터 함수 입니다.
* yield 키워드를 사용하면, 함수의 실행을 멈출 수 있습니다.
* 제너레이터 함수를 실행하면 제너레이터 객체가 반환 됩니다.

제너레이터 객체는, next, return, throw 메소드를 가지고 있으며,
<br>
주로 next 메소드를 많이 쓰게 됩니다.

***

## next() 메소드

```javascript
function* genFunc1() {
    console.log('genFunc 1-1');
    yield 100;
    console.log('genFunc 1-2');
    yield 200;
    console.log('genFunc 1-3');
    return 'finished';
}

const gen = genFunc1();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/* Result
genFunc 1-1
{value: 100, done: false}
genFunc 1-2
{value: 200, done: false}
genFunc 1-3
{value: 'finished', done: true}

*/
```

여기서 짚고 가야할 점은 제너레이터 함수를 실행하면, 제너레이터 객체만 반환되는 것이지
<br>
실제로 함수 내부코드가 실행되지 않는다는 점입니다.

next메소드를 호출하면, yield 키워드를 만나게 될 때 까지 실행하고, 데이터 객체를 반환합니다.

데이터 객체는 {value: 100, done: false} 인데,
<br>
yield 키워드를 만나면 done은 false가 되며, 만나지 못하면 true가 됩니다.

제너레이터가 next메소드를 갖고 있다는 것은, 제너레이터 = 반복자(Iterator) 라는 것입니다.

## return(), throw() 메소드 

### return 메소드 호출

```javascript
function* genFunc1() {
    console.log('genFunc 1-1');
    yield 100;
    console.log('genFunc 1-2');
    yield 200;
    console.log('genFunc 1-3');
    return 'finished';
}

const gen = genFunc1();
console.log(gen.next());
console.log(gen.return('abc'));
console.log(gen.next());

/* Result
genFunc 1-1
{value: 100, done: false}
{value: 'abc', done: true}
{value: 'undefined', done: true}
*/
```

* return 메소드를 호출하면, done 속성은 true가 됩니다.
* 이후에는 next메소드를 호출해도 done 속성은 true 입니다.

### throw 메소드 호출

```javascript
function* genFunc1() {
    try {
        console.log('genFunc 1-1');
        yield 100;
        console.log('genFunc 1-2');
        yield 200;
    }catch(e) {
        console.log('genFunc-catch', e);
    }
}

const gen = genFunc1();
console.log(gen.next());
console.log(gen.throw('error!!!!!'));

/* Result
genFunc 1-1
{value: 100, done: false}
genFunc-catch error!!!!!
{value: undefined, done: true}
*/
```

* try catch문으로 예외 처리를 할 수 있습니다.
* 또한 throw 메소드를 호출하면, 예외가 발생한 것으로 catch문으로 들어갑니다.
* catch문에 들어가게 되면, done 속성은 true가 됩니다.

***

## 반복 가능한 객체

다음 조건에 만족하는 객체는 반복자 입니다.

* next 메소드를 갖고 있다.
* next 메소드는 value와 done속성값을 가진 객체를 반환한다.
* done 속성값은 작업이 끝났을때 참이 된다.

제너레이터 또한 반복가능하면서 반복자 입니다.

배열을 예시로, 코드를 한번 살펴 봅시다.

```javascript
const arr = [1, 2, 3, 4, 5];
const iter = arr[Symbol.iterator]();
console.log(iter.next()); // {value: 1, done: false}
```

배열은 Symbol.iterator 속성값으로 함수를 갖고 있으므로 첫번째 조건을 만족하며
<br>
함수가 반환한 iter 변수는 반복자 이므로 두번째 조건도 만족합니다.

```javascript
function* genFunc1() {
    //...
}

const gen = genFunc1();
console.log(gen[Symbol.iterator]() === gen); //true
```

Symbol.iterator 속성값을 호출한 결과가 자기 자신(반복자) 이므로,

제너레이터는 반복 가능한 객체라고 할 수 있습니다.

그렇다면 반복 가능한 객체를 유용하게 쓰려면??

### for-of 문

```javascript
function* genFunc1() {
    yield 100;
    yield 200;
    yield 300;
}

for(const v of genFunc1()) {
    console.log(v); // 100 200 300
}

const arr = [...genFunc1()];
console.log(arr); // [100, 200, 300]
```

for-of문은, 반복가능한 객체로부터 반복자를 얻고, 반복자의 next메소드를 호출하면서
<br>
done 속성값이 참이 될때 까지 반복합니다.

전개 연산자(Spread Operator)도 동일하게, done속성값이 참이 될때까지 값을 펼칩니다.

***

## 제너레이터 함수끼리 호출하기

제너레이터 함수에서 다른 제너레이터 함수를 호출할때는 yield* 키워드를 사용합니다.

```javascript
function* genFunc1() {
    yield 2;
    yield 3;
}

function* genFunc2() {
    yield 1;
    yield* genFunc1();
    yield 4;
}

console.log(...genFunc2()); // 1 2 3 4
```

## 제너레이트 함수로 데이터 전달하기

제너레이트 함수는 외부로부터 데이터를 전달받아서 소비할 수도 있습니다.
<br>
next메소드를 호출하는 쪽에서 제너레이트 함수로 데이터를 전달할 수 있습니다.

```javascript
function* genFunc1() {
    const data1 = yield;
    console.log(data1); // 100
    const data2 = yield;
    console.log(data2); // 200
}

const gen = genFunc1();
gen.next(); // 제너레이터 함수의 실행이 시작되도록 하는 역할
gen.next(100);
gen.next(200);
```

next메소드를 통해 전달된 인수는 yield 키워드를 사용해 결과값을 받을 수 있습니다.

***

## 협업 멀티태스킹

제너레이터는 다른 함수와 협업 멀티태스킹을 할 수 있습니다.

먼저 멀티태스킹은, 여러개의 Task를 실행할때, 하나의 Task가 종료되기 전에
<br>
멈추고, 다른 Task가 실행 되는것을 말합니다.

'협업' 이라는 단어가 붙는 이유는 제너레이터가 실행을 멈추는 시점을 자발적(non-preemptive)으로 선택하기 때문이지요.

반대로 실행을 멈추는 시점을 자발적으로 선택하지 못하면 선점형(preemptive) 멀티 태스킹 이라고 합니다.

```javascript
function* gwanwoo() {
    const myMessageList = [
        '안녕하세요. 저는 Gwanwoo 입니다.',
        '만나뵙게 되어 영광입니다.',
        '내일 PX 어떠신가요?',
        'ㅡㅡ?',
    ];
    
    for(const message of myMessageList) {
        console.log('Hanbin:', yield message);
    }
}

function hanbin() {
    const myMessageList = ['', '안녕하세요 저는 Hanbin 입니다,', '반갑습니다.', '.....'];
    const gen = gwanwoo();

    for(const message of myMessageList) {
        console.log('Gwanwoo:', gen.next(message).value);
    }
}

hanbin();

/* Result 
Gwanwoo: 안녕하세요. 저는 Gwanwoo 입니다.
Hanbin: 안녕하세요 저는 Hanbin 입니다,
Gwanwoo: 만나뵙게 되어 영광입니다.
Hanbin: 반갑습니다.
Gwanwoo: 내일 PX 어떠신가요?
Hanbin: .....
Gwanwoo: ㅡㅡ?
*/
```

* 제너레이터 함수는 yield 키워드를 통해 자발적으로 실행을 멈춥니다.
* 일반함수에서는 제너레이터 객체의 next 메소드를 호출해 제너레이터 함수가 다시 실행되도록 합니다.
* 이는 일반 함수가 자신의 실행을 멈춘다고 볼 수 있습니다.