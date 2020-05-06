---
layout: post
title: "React.js 07. componentDidCatch"
featured-img: reactjs_with_lifecycle
categories: [React.js]
date: 2020-05-06 10:22
image: /assets/img/posts/reactjs_with_lifecycle_thumb.jpg
---

# componentDidCatch

저번 포스팅에서 여러개의 LifeCycle API를 알아 보았습니다. 하지만 React App이 Crash 되는 경우에,

프로그래밍 언어에서 try/catch처럼, <b>'catch'</b> 할 수 있는 부분은 다루지 않았었죠.

컴포넌트에 에러가 발생 했을때 유용하게 사용할 수 있는 LifeCycle API중 하나인 componentDidCatch를 사용 해봅시다.

먼저 error가 발생되는 Problem이라는 컴포넌트를 만들겠습니다.

<script src="https://gist.github.com/gwanwoodev/9a16f2d79a5c07ee59453bc0b0b4cb2c.js"></script>

다음은 App.js 입니다.

<script src="https://gist.github.com/gwanwoodev/04575ec2afd3003fee65ce16de9a0052.js"></script>

App.js에서 Problem 컴포넌트를 불러왔습니다. 그런데 Problem 컴포넌트에는 error가 발생하게 되어있죠?

LifeCycle API중 하나인 componentDidCatch 메소드를 선언해주고, 에러의 내용을 console.log로도 찍어보았습니다. 바로 실행해 결과를 볼까요?

```terminal
npm start
```

![component_did_catch_01](https://gwanwoodev.github.io/assets/upload/reactjs_component_did_catch01.jpg)

위와 같이 componentDidCatch를 사용하면 React App이 Crash 되는것을 방지 해 줄 수 있습니다.

렌더링 부분에서 오류가 발생 할 만한 부분들은 render부분에서 충분히 처리 해주도록 하고, 놓쳐버린 버그들은 componentDidCatch로 잡아주시면 되겠습니다.
