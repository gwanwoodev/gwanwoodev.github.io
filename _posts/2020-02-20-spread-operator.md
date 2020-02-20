---
layout: post
title: "ES6 전개 연산자(Spread Operator)"
featured-img: spread_operator
categories: [ES6, Javascript]
date: 2020-02-20 11:00
---

# ES6 전개 연산자(Spread Operator)

ES6에서 Spread Operator가 추가 되었습니다.
<br>
스프레드 연산자, 혹은 전개 연산자 라고도 부릅니다.
<br>
이번 포스팅에서는 부르기 쉽게 전개 연산자로 설명 하겠습니다.

전개 연산자(Spread Operator)는, '...' 세개의 점으로 이루어진 연산자 입니다.

예제를 통해 알아봅시다.

* 값들을 열거 하기

```javascript
const languages = ['Python', 'Javascript', 'Kotlin', 'Go', 'Scala'];
console.log(...languages); // Python Javascript Kotlin Go Scala
```

* 여러 배열 조합 하기

```javascript
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

const numArray = [...numbers, ...numbers2];
console.log(numArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

* 함수에서 응용 해보기

```javascript
function plus(num, ...arr) {
    return arr.map((val) => num + val);
}

let arr = plus(100, 10, 20, 30);
console.log(arr); // [110, 120, 130]
```

이런식으로 응용 해 볼수도 있습니다. Python의 ** 와 비슷하게 사용할 수 있어요.

전개 연산자(Spread Operator)의 활용도는 무궁무진 하고, 사용 빈도도 높습니다.
<br>
이 또한 손에 익혀서 더 편하게 코드를 짤 수 있도록 해봅시다 ^.^.