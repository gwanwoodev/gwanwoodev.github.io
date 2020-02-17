---
layout: post
title: "ES6 기본값(Default Values) 지정하기"
featured-img: default_values
categories: [ES6, Javascript]
---


# ES6 기본값(Default Values) 지정하기

함수를 호출 할때, 값을 지정하지 않으면 기본 값을 사용할 수 있습니다.
<br>
아래 코드처럼 함수 매개변수 란에 ="values"를 적어주면, 함수를 호출 했을때
<br>
값이 들어 있지 않다면 지정해준 기본값이 할당 됩니다.

```javascript
function defaults(nickname="anon") { // nickname의 기본값은 anon 입니다.
    return nickname;
}

console.log(defaults()); // anon
console.log(defaults("gwanwoodev")); // gwanwoodev
```

기본값은 꽤 자주 사용하는 문법 이라서, 손에 익히면 좋습니다.
<br>
다음 포스팅 에서는 화살표 함수(Arrow Function)을 다뤄 보려고 합니다.