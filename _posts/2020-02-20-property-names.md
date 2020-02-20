---
layout: post
title: "ES6 단축 속성명 / 계산된 속성명"
featured-img: property_names
categories: [ES6, Javascript]
date: 2020-02-20 13:30
---

# ES6 단축 속성명 / 계산된 속성명

## Shorthand Property Names

단축 속성명은 객체 리터럴 코드를 간편하게 작성할 목적으로 만들어 졌습니다.
<br>
정말 쉬운 부분이라 바로 예제 코드와 함께 봅시다.

```javascript
const nick = "gwanwoodev";
const obj = {
    age: 24,
    nick, // 단축 속성명
    getNickName() {return this.nick;}
}
```

객체의 속성값 일부가 이미 변수로 존재 한다면, 이름만 적어주면 됩니다.
<br>
추가적으로 속성값이 함수이면 function 키워드 없이 함수명만 적어도 됩니다!.

* 단축 속성명을 사용한 경우와 사용하지 않은 경우의 비교

```javascript
// 단축 속성명을 사용하지 않은 경우
function shortHandProperty1(nickname, age) {
    return {nickname: nickname, age: age};
}

// 단축 속성명을 사용한 경우
function shortHandProperty2(nickname, age) {
    return {nickname, age};
}
```

위의 코드를 비교해보면 후자가 압도적으로 가독성이 좋고 편합니다.
<br>
또 console.log로 값을 찍어볼때도 유용하게 사용할 수 있습니다.

```javascript
const nickname = "gwanwoodev";
const age = 24;
// 단축 속성명을 사용하지 않은 경우
console.log('nickname =', nickname, ', age =', age);
// name = gwanwoodev , age = 24

// 단축 속성명을 사용한 경우
console.log({nickname, age});
// {name: 'gwanwoodev', age: 24}
```

## Computed Property Names 

계산된 속성명은 객체의 속성명을 동적으로 결정하기 위해 나오게 된 문법 입니다.

바로 예제 코드를 살펴 봅시다.

```javascript
function testFunc(str) {
    let objArr = [];
    for(let i=0; i<5; i++) {
        let key = `${str}${i}`;
        objArr.push({[key]: i});
    }
    return objArr;
}

console.log(testFunc('testkey'));
/*
[
    {testkey0: 0},
    {testkey1: 1},
    {testkey2: 2},
    {testkey3: 3},
    {testkey4: 4}
]
*/
```

위와 같이 속성명을 동적으로 정해줄 수 있는 문법이 
<br>
계산된 속성명(Computed Property Names) 입니다.

이 또한 사용 빈도가 높으니 손에 익혀두면 좋을 것 같습니다.