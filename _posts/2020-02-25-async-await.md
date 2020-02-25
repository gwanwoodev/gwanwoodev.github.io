---
layout: post
title: "ES6+ async/await로 비동기 요청하기"
featured-img: async_await
categories: [ES6, Javascript]
date: 2020-02-25 14:17
---

# ES6+ async/await

async/await는 비동기 프로그래밍을 동기 프로그래밍 처럼 작성할 수 있도록,
<br>
'함수'에 추가된 기능입니다. async/await로 코드를 작성하면

기존에 프로미스의 then 메소드를 체이닝 해서 사용하는 형식보다 가독성이 좋아진다는 장점이 있습니다.

그렇다고 async await가 promise를 완전히 대체 할 수 있는 것은 아닙니다.

프로미스는 비동기 상태를 값으로 다룰 수 있기 때문에, async await보다는 큰 개념 이라고 볼 수 있습니다.

## async await 이해하기

프로미스는 객체로 존재하나, async await는 함수에 적용되는 개념입니다.
<br>
예제 코드와 함께 살펴 봅시다.

```javascript
async function getResult() {
    return 10010100;
}

getResult().then(data => console.log(data)); // 10010100
```

1. async 키워드를 이용해 정의된 함수는 async await 함수이며, 항상 프로미스를 반환합니다.
2. 따라서 함수를 호출한 후에 then 키워드를 사용할 수 있습니다.

### async/await 함수 내부에서 프로미스를 반환하는 경우

```javascript
async function getResult() {
    return Promise.resolve(10010100);
}

getResult().then(data => console.log(data)); // 10010100
```

* 프로미스의 then 메소드와 마찬가지로, async/await 함수 내부에서 반환하는 값이 Promise라면 그 객체를 그대로 반환합니다.

***

## await 키워드를 사용하는 방법

* await 키워드는 async await함수 내부에서 사용됩니다.
* await 키워드 오른쪽에 Promise를 입력하면, 그 프로미스가 처리됨 상태가 될때까지 wait. 기다립니다.

결과적으로, await 키워드로 비동기 처리를 기다리면서, 순차적으로 코드를 작성 할 수 있습니다.

### await Example

```javascript
function requestData(value) {
    return new Promise(resolve =>
        setTimeout(() => {
            console.log('requestData:', value);
            resolve(value);
        }, 100),
    );
}

async function getData() {
    const data1 = await requestData(100);
    const data2 = await requestData(200);
    console.log(data1, data2);
    return [data1, data2];
}

getData();
/*
requestData: 100
requestData: 200
100 200
*/
```

await 키워드를 만나면 반환된 프로미스가 처리됨 상태가 될 때 까지, 기다린다는 점을
<br>
기억하면 좋을 것 같습니다.

또한, await 키워드는 오직 async/await 함수 내부에서만 사용할 수 있고
<br>
일반 함수에서 사용하면 에러가 발생 하므로 꼭 기억해야 합니다.

***

## async/await와 promise 비교

```javascript
function asyncFunction() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            return response.json();
        });
}

/* Promise 방식 */
function getDataPromise() {
    asyncFunction().then(data => {
        console.log(data);
        return Object.keys(data).length;
    }).then(length => {
        console.log(length);
    });
}

/* async await 방식 */
async function getDataAsync() {
    const data1 = await asyncFunction();
    console.log(data1);
    console.log(Object.keys(data1).length);
}

getDataPromise();
getDataAsync();
```

JSON 데이터를 받아오고, 출력하고, key의 개수를 출력하는 동일한 기능을 
<br>
promise방식과 async/await 방식으로 작성 해본 코드 입니다.

얼핏 보기만 해도, async/await가 가독성이 훨씬 좋다는 것을 알 수 있습니다.

***

## 병렬로 실행하기

async/await함수에서도 여러 비동기 함수를 병렬로 처리 할 수 있습니다.

먼저 순차적으로 실행되는 코드를 봅시다.

```javascript
async function getData() {
    const data1 = await asyncFunction1();
    const data2 = await asyncFunction2();
    // ...
}
```

앞의 코드에서, 두 함수 사이에 '의존성이 없다면' 병렬로 실행하는게 좋겠지요?

프로미스는 생성과 동시에 비동기 코드가 실행 됩니다.
<br>
결과적으로! 프로미스를 먼저 생성하고, await 키워드를 나중에 사용하면 병렬 실행하는 코드가 됩니다.

```javascript
async function getData() {
    const p1 = asyncFunction1();
    const p2 = asyncFunction2();
    const data1 = await p1;
    const data2 = await p2;
}
```

Promise.all을 사용하여 병렬로 실행하는 예제는 아래와 같습니다.

```javascript
async function getData() {
    const [data1, data2] = await Promise.all([asyncFunction1(), asyncFunction2()]);
    //...
}
```

*** 

## Thenable with async/await

Thenable은 프로미스처럼 동작하는 객체입니다.
<br>
async/await는 프로미스가 아니더라도 then 메소드를 가진 객체를 '프로미스처럼' 취급합니다.

그러한 객체를 Thenable 이라고 부릅니다.

'지금은 이러한게 있구나.' 하고 이해만 하시고 넘어가면 될 것 같습니다.

```javascript
class ThenableExample {
    then(resolve, reject) {
        setTimeout(() => resolve(123), 1000);
    }
}

async function asyncFunc() {
    const result = await new ThenableExample();
    console.log(result);
}
```

Thenable 클래스는 then 메소드를 가지고 있으므로, 새로 생성된 객체는 Thenable입니다.

위에서 언급 했듯, async await 함수는 Thenable도 프로미스처럼 처리합니다.