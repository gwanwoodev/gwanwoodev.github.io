---
layout: post
title: "ES6 비구조화(Destructuring)"
featured-img: destructuring
categories: [ES6, Javascript]
---

# ES6 비구조화(Destructuring) 할당

## 배열 비구조화 할당

배열 비구조화는 배열의 여러 속성값을 변수로 쉽게 할당 할 수 있는 문법 입니다.
<br>
가벼운 예시 코드를 살펴 봅시다.

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### 이미 존재하는 변수에 값을 할당하기

이런식으로 이미 존재하는 변수에도 값을 할당 할 수 있습니다.

```javascript
let a, b;
[a, b] = [1, 2];
```

### 배열 비구조화 에서의 기본값

또한, 기본값(Default Values)을 정의 할 수도 있습니다.

```javascript
const arr = [1];
const [a = 10, b = 20] = arr;
console.log(a); // 1
console.log(b); // 20
```

### 두 변수의 값을 교환 하기

보통 두 변수의 값을 교환할때, 제3의 변수를 이용하는게 일반적 이었습니다.
<br>
하지만 배열 비구조화가 나옴으로써, 그럴 필요가 없어졌습니다.

```javascript
let a = 100;
let b = 200;
[a, b] = [b, a];
console.log(a); // 200
console.log(b); // 100
```

### 쉼표를 이용해서 일부 값을 건너 뛰기

배열에서 특정 값을 건너 뛰고 싶다면, 건너뛰는 개수만큼 쉼표를 써주면 됩니다.

```javascript
const arr = [1, 2, 3];
const [a, , c] = arr;
console.log(a); // 1
console.log(c); // 3
```

### 나머지 값을 별도의 배열로 만들기

전개 연산자(Spread Operator)를 이용함으로써, 
<br>
남은 값들을 따로 새로운 배열로 만들 수도 있습니다.

나머지 속성값이 존재 하지 않으면 빈 배열이 만들어 집니다.

```javascript
const arr = [1, 2, 3];
const [step1, ...rest1] = arr;
console.log(rest1); // [2, 3]
const [a, b, c, ...rest2] = arr;
console.log(rest2); // []
```

***

## 객체 비구조화 할당

객체 비구조화는 객체의 여러 속성값을 변수로 쉽게 할당 할 수 있는 문법 입니다.
<br>
간단한 예시코드를 읽어 봅시다.

```javascript
const obj = {nick: 'gwanwoodev', name: 'gwanwoopark'};
const {nickname, fullname} = obj;
console.log(nickname); // gwanwoodev
console.log(fullname); // gwanwoopark
```

배열 비구조화에서는 배열의 순서가 중요시 됬으나,
<br> 
객체 비구조화에서는 순서가 필요 없습니다. 하지만 객체 비구조화에서의 기존 속성명을

그대로 사용해야 한다는 점이 있습니다.

```javascript
const obj = {age: 24, nick: 'gwanwoodev'};
const {age, nick} = obj; // age:24, nick:gwanwoodev
const {nick, age} = obj; // age:24, nick:gwanwoodev
const {a, b} = obj; // undefined
```

### 객체 비구조화에서 별칭(Alias) 사용하기

별칭은 중복된 변수명을 피하거나, 좀 더 구체적인 변수명을 만들때 사용합니다.

```javascript
const obj = {age: 24, name: 'gwanwoodev'};
const {age: theAge, name} = obj;
console.log(theAge); // 24
console.log(age); // Reffrence Error
```

### 객체 비구조화 에서의 기본값

배열 비구조화와 마찬가지로, 기본값을 사용 할 수 있습니다.

```javascript
const obj = {age: undefined, name: null, grade: 'A'};
const {age = 0, name = 'noName', grade='F'} = obj;
console.log(age); // 0; 
console.log(name); // null 
console.log(grade) // A
```

age는 undefined 이므로 기본값이 들어가지만, null값은 기본값이 들어가지 않습니다.

이런식으로 기본값과 별칭과 동시에 사용 할 수도 있습니다.

```javascript
const obj = {age: undefined, name: 'gwanwoo'};
const {age: theAge = 0, name} = obj;
console.log(theAge); // 0
```

### 객체 비구조화에서 나머지 속성들을 별도의 객체로 생성하기

배열 비구조화와 비슷한 방식으로 Spread Operator(전개 연산자)를 사용하여
<br>
별도의 객체로 분리 할 수 있습니다.

```javascript
const obj = {age: 24, name: 'gwanwoo', grade: 'A'};
const{age, ...rest} = obj;
console.log(rest); // {name: 'gwanwoo', grade: 'A'}
```

### for문에서 객체 비구조화를 응용해 사용 해보기

for문에서, 응용해서 아래와 같은 방식으로도 사용 할 수 있습니다.

```javascript
const people = [{age: 24, name: 'gwanwoo'}, {age:24, name: 'hanbin'}];
for (const {age, name} of people) {
    // ...
}

```

*** 
ES6의 비구조화(Destructuring)도 손에 잘 익혀서 써먹읍시다!