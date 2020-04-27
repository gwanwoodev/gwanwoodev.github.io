---
layout: post
title: "React.js 05. 리액트 State로 상태 관리하기"
featured-img: reactjs_with_state
categories: [React.js]
date: 2020-04-27 13:36
image: /assets/img/posts/reactjs_with_state_thumb.jpg
---

# State

저번 포스팅에서 컴포넌트를 다루는 방법중 Props를 알아보았습니다. 이번 포스팅 에서는 동적인 데이터를 다룰 수 있는 State에 대해 알아 봅시다.

예제로 + 버튼을 누르면 값이 증가하고, - 버튼을 누르면 값이 감소하는 Counter를 만들어 봅시다.

Counter.js의 코드 입니다.

<script src="https://gist.github.com/gwanwoodev/5cc951a0ab292e5af46923248211f899.js"></script>

## Class Fields Syntax

먼저 state를 정의 할때 2가지의 방법이 있습니다. 첫번째로는 Class Fields, 두번째로는 생성자 안에 정의 하는 방법이 있는데요,

위 예제 코드는 Constructor(생성자) 안에 정의 하지 않았으니 Class Fields 문법으로 정의 한것이죠.

Constructor로 state를 정의한 코드도 살펴 봅시다.

```javascript
import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    //...
}
```

아무것도 모르는 사람이 보아도 Class Fields 문법이 훨씬 간편하고 깔끔 해보이죠?

## Custom Methods & setState

두가지의 메소드를 정의 했습니다. 값이 증가하는 메소드, 값이 감소하는 메소드 인데요.

setState가 무슨일을 하는 녀석인지 아직 모르실겁니다. 근데 얼핏 보면 this.state.value에 +1, -1을 하는 녀석인줄은 대충 알겠죠?

state에 있는 값을 변경하려면 <b>무조건</b> this.setState를 사용해야 합니다.

<i>React는 this.setState가 호출되면 컴포넌트가 Re-Rendering 되도록 만들어져 있습니다.</i>

또 알아 두어야 할점은 전달 되는 값만 Update됩니다. 예를 들어서, 2가지의 state값이 있는데, setState에서 1가지의 값만 전달하게 되면, 그 전달된 값만 Update 된다는 말입니다.

그렇다면, 위의 handleIncrease를 예시로 들겠습니다.

handleIncrease에서 this.setState가 호출되었고, 전달하는 값은 value입니다. 그러면 state의 value값이 업데이트 되는 것이죠.

***

## Events

이제 JSX쪽을 살펴 봅시다. button태그에 onClick 이벤트를 설정했는데, HTML과는 약간의 다른점을 가지고 있습니다.

HTML을 먼저 살펴봅시다.

```html
<button onclick="console.log('console');">Click Me</button>
```

다른점을 발견 하셨나요? 정리를 하자면, 

* event를 정의할때 camelCase로 설정해야합니다. (onClick, onChange)
* event에 전달하는 값은 함수입니다.

2번째 예시가 이해가 잘 안 될 수있습니다.

```javascript
onClick={this.handleIncrease()} // Bad
```

위의 예제코드와 같이 전달 하게 된다면, 렌더링이 될때마다 함수가 호출이 되버리기 때문에, 무한반복의 문제 점이 있습니다.

```javascript
onClick={this.handleIncrease} // Good
```

state에 대한 전반적인 설명이 끝났는데, 잘 실행이 되는지 확인 해봐야겠죠?

App.js에서 Counter를 불러와 줍시다.

<script src="https://gist.github.com/gwanwoodev/50e400a2b29935093aa759e9964281c0.js"></script>

```terminal
npm start
```

### Result

![reactjs_state_01](https://gwanwoodev.github.io/assets/upload/reactjs_state_01.jpg)

'+' 버튼과 '-' 버튼을 눌러보세요. 값이 증가/감소 하는 것을 볼 수 있습니다.

state에 대해 마지막으로 정리를 해봅시다.

* state는 class fields로 정의할 수도 있고 constructor(생성자)에서도 정의 할 수 있다.
* state는 전달받은 값만 Update한다.
* setState가 호출되면, 컴포넌트가 Re-Rendering 된다.
* Event를 정의할때, 함수를 호출하는 것이 아닌, 함수자체를 넘겨준다.