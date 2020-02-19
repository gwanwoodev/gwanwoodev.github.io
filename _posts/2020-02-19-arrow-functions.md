---
layout: post
title: "ES6 화살표 함수(Arrow Function)"
featured-img: arrow_functions
categories: [ES6, Javascript]
---


# 화살표 함수(Arrow Function)

ES6에서, 화살표 함수가 새롭게 추가 되었습니다. 먼저 어떠한 특징을 가졌는지 살펴 봅시다
<br>
1. function 키워드 없이 함수를 만들 수 있습니다.
2. 가독성이 좋습니다.
3. 한줄 코드로 쓸 수 있으며, 한줄 코드를 사용 한다면 return 구문을 생략할 수 있습니다.

예제 코드와 살펴 봅시다.

## ES5
```javascript
// ES5 Example
function func(nickname="anon") {
    return `hello my nickname is ${nickname}`;
}

console.log(func('es5 user')); //...is es5 user
```

## ES6
```javascript
// ES6 Example
const func = (nickname) => `hello my nick nams is ${nickname}`;
console.log(func('es6 user')); //...is es6 user
console.log(func('wow')); //...is wow
```

ES6에서 화살표 함수는 사용 빈도가 매우 높습니다. 
<br>
나중에 포스팅할 React에서도 자주 나오는 부분이기에, 손에 꼭 익혀 두세요.