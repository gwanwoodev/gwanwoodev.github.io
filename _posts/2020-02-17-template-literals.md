---
layout: post
title: "템플릿 리터럴로 동적인 문자열 생성하기"
featured-img: template_literals
categories: [ES6, Javascript]
---

# 템플릿 리터럴로 동적인 문자열 생성하기

ES6에 템플릿 리터럴이 추가 되었습니다. 변수를 이용해서, 동적으로 문자열을 생성할 수 있는 문법 입니다.
<br>
ES5 이전에는 어떻게 사용 하였는지 예제 코드와 살펴봅시다.


### ES5

```javascript
var nickname = "gwanwoodev";
var age = 24;
var result = "안녕하세요! 제 닉네임은" + nickname + " 이고, 나이는 " + age + "살 이며 저는 현재 육군본부 S/W 개발병으로 근무 하고 있습니다.";

console.log(result); // 안녕하세요! 제 닉네임은 gwanwoodev 이고, 나이는 24살 이며 저는 현재 육군본부 S/W 개발병으로 근무 하고 있습니다.
```

기본적으로 더하기 기호와, 따옴표를 계속 반복적으로 사용해야 하는 불편함이 있었습니다.
<br>
가독성도 안좋고, 코드를 작성하는데에 시간도 지체 되어서
<br>
ES6에서 템플릿 리터럴 문법이 등장하게 되었어요.

### ES6

```javascript
let nickname = "gwanwoodev";
let age = 24;
let result = `안녕하세요! 제 닉네임은 ${nickname} 이고, 나이는 ${age}살 이며 저는 현재 육군본부 S/W 개발병으로 근무 하고 있습니다.
```;
console.log(result); // 안녕하세요! 제 닉네임은 gwanwoodev 이고, 나이는 24살 이며 저는 현재 육군본부 S/W 개발병으로 근무 하고 있습니다.
```

템플릿 리터럴은 백틱(\` \`)을 사용합니다. 
<br>
표현식(expression)을 사용할 때는 ${expression} 형식으로 입력합니다.


### 추가적인 설명

ES5에서는 여러 줄의 문자열을 입력 할때 '\n' 이라는 줄바꿈 기호를 사용해야 했었지만,
<br>
ES6 템플릿 리터럴 문법을 사용 하면, 줄바꿈 기호를 입력할 필요가 없다는 점이 있겠네요.
<br>
코드를 비교해보면, 가독성 면에서 훨!씬 템플릿 리터럴이 우수하다는 점을 알 수 있습니다.
